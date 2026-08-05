import { readFileSync } from 'node:fs';

const base = (process.argv[2] || process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3001').replace(/\/$/, '');
const routes = [
  '/', '/road-freight-russia', '/multimodal-container', '/for-customers', '/for-carriers',
  '/for-operators', '/for-suppliers', '/investors', '/contacts', '/login', '/registration',
  '/privacy', '/route-that-does-not-exist',
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
check(consent.includes("privacy.target = '_blank'"), 'Ссылка на Политику не сохраняет введённые данные');
check(consent.includes("baseUrl('privacy')"), 'В согласии отсутствует ссылка /privacy');

const footer = readFileSync('src/components/UnifiedFooter.tsx', 'utf8');
check(footer.includes("href={baseUrl('privacy')}"), 'В footer отсутствует ссылка /privacy');

const formSender = readFileSync('src/lib/submitLeadForm.ts', 'utf8');
check(formSender.includes('catalontech@yandex.ru'), 'Формы отправляются не на целевую почту');
check(formSender.includes("namedItem('_honey')"), 'В отправке форм отсутствует honeypot-проверка');

const formPages = [
  ['src/ContactsPage.tsx', 'Contacts'],
  ['src/ForCustomersPage.tsx', 'Customers'],
  ['src/ForOperatorsPage.tsx', 'Forwarders'],
  ['src/ForSuppliersPage.tsx', 'Suppliers'],
  ['src/InvestorsPage.tsx', 'Investors'],
];
for (const [file, label] of formPages) {
  const source = readFileSync(file, 'utf8');
  check(source.includes('submitLeadForm'), `${label}: form is not connected to submitLeadForm`);
}

const roadFreight = readFileSync('src/RoadFreightPage.tsx', 'utf8');
check(roadFreight.includes('href="https://cargo.catalon.ru/"'), 'Road freight: registration URL is incorrect');
check(roadFreight.includes("href={home('contacts')}"), 'Road freight: consultation URL is incorrect');
check(!roadFreight.includes('href="#contacts"'), 'Road freight: stale #contacts link remains');

const multimodal = readFileSync('src/MultimodalPage.tsx', 'utf8');
check(multimodal.includes('href="https://container.catalon.ru/"'), 'Multimodal: platform URL is incorrect');

const header = readFileSync('src/components/UnifiedHeader.tsx', 'utf8');
check(header.includes("'https://container.catalon.ru/'"), 'Header: multimodal platform URL is missing');
check(header.includes("'https://cargo.catalon.ru/'"), 'Header: cargo platform URL is missing');

if (failures.length) {
  console.error(`Smoke audit: ${failures.length} ошибок из ${checks} проверок.`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Smoke audit: ${checks} проверок, ${routes.length} маршрутов — OK.`);
