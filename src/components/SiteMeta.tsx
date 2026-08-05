import { useEffect } from 'react';

type RouteMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  index?: boolean;
};

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://gevget.github.io/catalon2026').replace(/\/$/, '');

const metadata: Record<string, RouteMeta> = {
  '/': {
    title: 'Каталон — маркетплейс логистических решений для B2B-грузоперевозок',
    description: 'Цифровая платформа для поиска грузов и перевозчиков, безопасных сделок, финансирования рейсов, документов и сервисов транспортного бизнеса.',
    canonicalPath: '/',
  },
  '/road-freight-russia': {
    title: 'Автомобильные грузоперевозки по России — Каталон',
    description: 'Заявки, перевозчики, статусы, документы, расчёты и сервисы для автомобильных грузоперевозок по России в одном цифровом портале.',
    canonicalPath: '/road-freight-russia',
  },
  '/multimodal-container': {
    title: 'Мультимодальные и контейнерные перевозки — Каталон',
    description: 'Управление автомобильными, железнодорожными, морскими и терминальными этапами мультимодального маршрута в одном цифровом контуре.',
    canonicalPath: '/multimodal-container',
  },
  '/for-customers': {
    title: 'Каталон для заказчиков и грузовладельцев',
    description: 'Автоматизация перевозок, сравнение предложений, контроль статусов, безопасные сделки, ЭДО и интеграция с ERP для грузоотправителей.',
    canonicalPath: '/for-customers',
  },
  '/for-carriers': {
    title: 'Каталон для перевозчиков и транспортных компаний',
    description: 'Подходящие грузы, цепочки рейсов, понятные условия, документы, финансирование и сервисы для транспорта в одном кабинете.',
    canonicalPath: '/for-carriers',
  },
  '/for-operators': {
    title: 'Каталон для экспедиторов и логистических команд',
    description: 'Управляйте заявками, перевозчиками, рейсами, документами и доходом экспедитора в едином рабочем пространстве.',
    canonicalPath: '/for-operators',
  },
  '/for-suppliers': {
    title: 'Поставщикам решений для транспортного бизнеса — Каталон',
    description: 'Подключайте финансовые, страховые, топливные, сервисные и технологические продукты к реальным сценариям грузоперевозок.',
    canonicalPath: '/for-suppliers',
  },
  '/investors': {
    title: 'Инвесторам — цифровая инфраструктура грузоперевозок Каталон',
    description: 'Инвестиционная логика, направления роста и формат стратегического партнёрства с цифровой платформой Каталон.',
    canonicalPath: '/investors',
  },
  '/contacts': {
    title: 'Контакты Каталон',
    description: 'Свяжитесь с командой Каталон по вопросам грузоперевозок, подключения сервисов и стратегического сотрудничества.',
    canonicalPath: '/contacts',
  },
  '/privacy': {
    title: 'Политика в отношении обработки персональных данных — Каталон',
    description: 'Страница документа о порядке обработки персональных данных на сайте Каталон.',
    canonicalPath: '/privacy',
  },
};

function setNamedMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.append(element);
  }
  element.content = content;
}

function setPropertyMeta(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.append(element);
  }
  element.content = content;
}

export function SiteMeta({ route, notFound = false }: { route: string; notFound?: boolean }) {
  useEffect(() => {
    const normalizedRoute = route === '/solutions/road-freight-russia'
      ? '/road-freight-russia'
      : route === '/solutions/multimodal-container'
        ? '/multimodal-container'
        : route;
    const meta = metadata[normalizedRoute] || {
      title: 'Страница не найдена — Каталон',
      description: 'Запрошенная страница не найдена. Перейдите на главную страницу Каталон.',
      canonicalPath: normalizedRoute,
      index: false,
    };
    const canonicalUrl = `${SITE_URL}${meta.canonicalPath === '/' ? '/' : meta.canonicalPath}`;

    document.title = meta.title;
    setNamedMeta('description', meta.description);
    setNamedMeta('robots', notFound || meta.index === false ? 'noindex, nofollow' : 'index, follow');
    setPropertyMeta('og:type', 'website');
    setPropertyMeta('og:locale', 'ru_RU');
    setPropertyMeta('og:site_name', 'Каталон');
    setPropertyMeta('og:title', meta.title);
    setPropertyMeta('og:description', meta.description);
    setPropertyMeta('og:url', canonicalUrl);
    setNamedMeta('twitter:card', 'summary');
    setNamedMeta('twitter:title', meta.title);
    setNamedMeta('twitter:description', meta.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector<HTMLScriptElement>('script[data-site-structured-data]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.dataset.siteStructuredData = 'true';
      document.head.append(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Каталон',
      url: `${SITE_URL}/`,
      email: 'catalontech@yandex.ru',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Нижний Новгород',
        streetAddress: 'Электровозная ул., д. 7б, пом. 10',
        addressCountry: 'RU',
      },
    });
  }, [notFound, route]);

  return null;
}
