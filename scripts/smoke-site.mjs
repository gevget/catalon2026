import { readFileSync } from 'node:fs';

const base = (process.argv[2] || process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3001').replace(/\/$/, '');
const routes = [
  '/', '/road-freight-russia', '/multimodal-container', '/for-customers', '/for-carriers',
  '/for-operators', '/for-suppliers', '/investors', '/contacts', '/login', '/registration',
  '/privacy', '/personal-data-consent', '/terms', '/route-that-does-not-exist',
];
const expectedRoutes = routes.filter((route) => route !== '/route-that-does-not-exist');
const failures = [];
let checks = 0;

function check(condition, message) {
  checks += 1;
  if (!condition) failures.push(message);
}

for (const route of routes) {
  try {
    const response = await fetch(`${base}${route}`);
    const html = await response.text();
    check(response.ok, `${route}: HTTP ${response.status}`);
    check(/<html[^>]+lang="ru"/i.test(html), `${route}: отсутствует lang="ru"`);
    check(/<title>[^<]+<\/title>/i.test(html), `${route}: отсутствует базовый title`);
    check(/id="root"/i.test(html), `${route}: отсутствует корневой контейнер приложения`);
  } catch (error) {
    failures.push(`${route}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const router = readFileSync('src/AppRouter.tsx', 'utf8');
for (const route of expectedRoutes) check(router.includes(`'${route}'`), `${route}: маршрут не зарегистрирован`);
check(router.includes('<NotFoundPage />'), 'Не подключена страница 404');

const consent = readFileSync('src/components/FormConsentGuard.tsx', 'utf8');
check(consent.includes('checkbox.required = true'), 'Согласие в формах не обязательно');
check(consent.includes("consent.target = '_blank'"), 'Ссылки согласия не сохраняют введённые данные');
for (const path of ['privacy', 'personal-data-consent', 'terms']) {
  check(consent.includes(`baseUrl('${path}')`), `В согласии отсутствует ссылка /${path}`);
}

const footer = readFileSync('src/components/UnifiedFooter.tsx', 'utf8');
for (const path of ['privacy', 'personal-data-consent', 'terms']) {
  check(footer.includes(`href={baseUrl('${path}')}`), `В footer отсутствует ссылка /${path}`);
}

const formSender = readFileSync('src/lib/submitLeadForm.ts', 'utf8');
check(formSender.includes('catalontech@yandex.ru'), 'Формы отправляются не на целевую почту');
check(formSender.includes("namedItem('_honey')"), 'В отправке форм отсутствует honeypot-проверка');

if (failures.length) {
  console.error(`Smoke audit: ${failures.length} ошибок из ${checks} проверок.`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Smoke audit: ${checks} проверок, ${routes.length} маршрутов — OK.`);
