import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Banknote,
  BellRing,
  Boxes,
  Building2,
  ChevronDown,
  Clock3,
  ClipboardList,
  Container,
  FileText,
  FileArchive,
  FileCheck2,
  Fuel,
  Handshake,
  Landmark,
  Layers3,
  Link2,
  ListChecks,
  Network,
  PackageCheck,
  PanelTop,
  RadioTower,
  RailSymbol,
  Route,
  Scale,
  ScanLine,
  ShieldCheck,
  Ship,
  SlidersHorizontal,
  Truck,
  Users,
  WalletCards,
  Warehouse,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import roadImage from '../2.png';
import geographyMapImage from '../assets/1/multimodal-geography-map.png';
import cargoTypesImage from '../assets/1/multimodal-cargo-types.png';
import partnersNetworkImage from '../assets/1/multimodal-partners-network.png';
import { ProductAnchorNav, ProductFooter, ProductHeader } from './components/ProductChrome';
import { UnifiedFooter } from './components/UnifiedFooter';
import { UnifiedHeader } from './components/UnifiedHeader';

function baseUrl(path = '') {
  const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
  return `${base}/${path}`;
}

type IntroProps = { eyebrow: string; title: string; text: string; light?: boolean; centered?: boolean };

function SectionIntro({ eyebrow, title, text, light = false, centered = false }: IntroProps) {
  return <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}><p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-[#A0FF00]' : 'text-[#7F42E1]'}`}>{eyebrow}</p><h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-[#19131F]'}`}>{title}</h2><p className={`mt-5 text-base leading-7 ${light ? 'text-white/68' : 'text-[#675F6F]'}`}>{text}</p></div>;
}

function AssetPlaceholder({ name, dark = false }: { name: string; dark?: boolean }) {
  return <div className={`grid min-h-64 place-items-center rounded-[28px] border p-8 text-center ${dark ? 'border-white/15 bg-white/5 text-white/45' : 'border-[#DDD3EA] bg-[#F3ECFA] text-[#776887]'}`} role="img" aria-label={`Место для изображения ${name}`}><div><Container className="mx-auto h-12 w-12" strokeWidth={1.2} /><p className="mt-5 text-xs font-semibold">Будущее изображение</p><p className="mt-2 break-all font-mono text-[11px] opacity-70">{name}</p></div></div>;
}

const audience = [
  { icon: Boxes, title: 'Заказчикам и грузовладельцам', text: 'Создавать одну заявку, сравнивать варианты маршрута и видеть перевозку целиком.', points: [[ClipboardList, 'Единые условия'], [RadioTower, 'Статусы всех этапов'], [FileText, 'Документы в одной карточке']], file: 'multimodal-customer.png' },
  { icon: Handshake, title: 'Транспортным партнёрам', text: 'Получать подходящий этап и работать только в своей зоне ответственности.', points: [[PackageCheck, 'Понятный объём работ'], [Link2, 'Передача статуса дальше'], [FileCheck2, 'Документы по своему этапу']], file: 'multimodal-partners.png' },
  { icon: Network, title: 'Операторам маршрута', text: 'Собирать цепочку, назначать участников и управлять переходами между этапами.', points: [[Layers3, 'Конструктор маршрута'], [AlertTriangle, 'Контроль отклонений'], [BellRing, 'Единая коммуникация']], file: 'multimodal-operator.png' },
];

const portalFeatures: [LucideIcon, string, string][] = [
  [PanelTop, 'Карточка маршрута', 'Условия, этапы и участники в едином контексте.'],
  [Layers3, 'Конструктор этапов', 'Последовательность операций без разрозненных схем.'],
  [Users, 'Управление участниками', 'Роли и зоны ответственности по каждому этапу.'],
  [Link2, 'Контроль переходов', 'Фиксация передачи груза и следующего ответственного.'],
  [RadioTower, 'Статусы и события', 'Актуальная картина маршрута для всех сторон.'],
  [FileArchive, 'Документы', 'Файлы и подтверждения внутри конкретного этапа.'],
  [BellRing, 'Уведомления', 'Сигналы о действиях, сроках и отклонениях.'],
  [SlidersHorizontal, 'Аналитика', 'Структура исполнения без выдуманных прогнозов и гарантий.'],
  [FileCheck2, 'Заявка к закрытию рейса', 'Проверка документов, этапов и итоговых условий перед закрытием.'],
  [Route, 'Схема маршрута', 'Визуальная последовательность этапов от отправителя до получателя.'],
  [Clock3, 'Контроль сроков', 'Плановые даты и отклонения видны по каждому переходу.'],
  [Container, 'Контейнерный контур', 'Параметры контейнера и передачи собраны в одной карточке.'],
];

const faq = [
  ['Что такое мультимодальная перевозка?', 'Это маршрут, который объединяет несколько последовательных этапов и видов транспорта. Например, автомобильную доставку, терминальный этап, железнодорожную или морскую перевозку и последнюю милю.'],
  ['Catalon сам выполняет все этапы перевозки?', 'Catalon работает как marketplace и цифровой портал, который объединяет заказчиков, операторов и транспортных партнёров. Конкретные этапы выполняются подключёнными участниками маршрута.'],
  ['Можно ли видеть весь маршрут в одном месте?', 'Да. Решение объединяет этапы, участников, статусы и документы в единой карточке перевозки.'],
  ['Кто координирует передачу между этапами?', 'Маршрут может сопровождаться оператором, который контролирует участников, статусы, документы и переходы между этапами.'],
  ['Есть ли безопасная сделка?', 'Catalon помогает фиксировать условия, участников, документы и важные события внутри платформы, снижая риски для сторон.'],
  ['Можно ли подключить финансирование?', 'Финансовые инструменты могут подключаться в зависимости от параметров сделки и условий финансового партнёра.'],
  ['Входит ли таможенное оформление?', 'Таможенное оформление развивается как отдельное решение Catalon и не является автоматически включённой частью контейнерного маршрута.'],
  ['Какие виды транспорта могут входить в маршрут?', 'Маршрут может включать автомобильные, железнодорожные, морские и терминальные этапы. Доступность зависит от направления и подключённых партнёров.'],
  ['Можно ли работать полностью онлайн?', 'Заявки, статусы, документы, участники и ключевые условия доступны через портал. Физические и отдельные документальные действия зависят от маршрута и его участников.'],
  ['Кому подходит решение?', 'Заказчикам, перевозчикам, транспортным партнёрам и операторам, которые работают с контейнерными и комбинированными маршрутами.'],
] as const;

export default function MultimodalPage() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Мультимодальные и контейнерные перевозки через Catalon';
    if (description) description.content = 'Управляйте контейнерными и мультимодальными маршрутами, этапами, участниками, документами и безопасной сделкой через единый портал Catalon.';
    const blockTags: Array<[string, string]> = [
      ['mm-hero', 'Мультимодальные перевозки в одном цифровом маршруте'],
      ['mm-benefits', 'Ключевые возможности мультимодального решения'],
      ['mm-definition', 'Что такое мультимодальная перевозка'],
      ['route', 'Цепочка маршрута — несколько этапов'],
      ['mm-audience', 'Для кого создано решение'],
      ['mm-problems', 'Где возникает сложность'],
      ['mm-process', 'Как Catalon собирает маршрут'],
      ['stage-control', 'Контроль исполнения по этапам'],
      ['mm-portal-features', 'Возможности портала'],
      ['mm-operator', 'Рабочее место оператора маршрута'],
      ['documents', 'Документы связаны с этапами'],
      ['mm-services', 'Сервисы в контексте перевозки'],
      ['mm-chain-scenarios', 'Сценарии мультимодального маршрута'],
      ['portal-demo', 'Демо цифрового портала'],
      ['mm-difference', 'Структура вместо переписки'],
      ['mm-business-tools', 'Возможности для малого бизнеса'],
      ['mm-road-link', 'Автомобильные перевозки по России'],
      ['faq', 'FAQ о мультимодальных перевозках'],
      ['start', 'Начало работы с мультимодальным маршрутом'],
    ];
    document.querySelectorAll<HTMLElement>('main section').forEach((section, index) => {
      const [id, title] = blockTags[index] || [`mm-section-${index + 1}`, `Блок мультимодальных перевозок ${index + 1}`];
      section.dataset.blockId = section.dataset.blockId || id;
      section.dataset.blockTitle = section.dataset.blockTitle || title;
      if (!section.id) section.id = id;
    });
    const operatorSection = Array.from(document.querySelectorAll<HTMLElement>('main section')).find((section) => section.textContent?.includes('Рабочее место оператора маршрута'));
    if (operatorSection) operatorSection.style.display = 'none';
    const startSection = document.getElementById('start');
    if (startSection) startSection.style.display = 'none';
    const routeSection = document.getElementById('route');
    if (routeSection && !document.getElementById('mm-digital-cabinet')) {
      routeSection.insertAdjacentHTML('beforebegin', `<section id="mm-digital-cabinet" data-block-id="mm-digital-cabinet" data-block-title="Цифровой кабинет для перевозки" class="bg-white py-16 lg:py-20"><div class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><p class="text-xs font-bold uppercase tracking-[0.2em] text-[#7F42E1]">Цифровой кабинет</p><h2 class="mt-4 text-3xl font-bold text-[#19131F] sm:text-4xl">Заявка, тариф и документы — в одном месте</h2><p class="mt-5 max-w-3xl text-base leading-7 text-[#675F6F]">Оформляйте заявку, получайте информацию о перевозке, отслеживайте груз и храните транспортные и закрывающие документы в личном кабинете 24/7. Расчёт тарифа и оформление заявки доступны онлайн.</p><div class="mt-8 grid gap-4 sm:grid-cols-3"><article class="rounded-2xl border border-[#DDD3E7] bg-[#F8F4FC] p-5"><h3 class="font-bold text-[#440D84]">Отслеживание груза</h3><p class="mt-2 text-sm leading-6 text-[#675F6F]">Местонахождение и даты отгрузки доступны онлайн.</p></article><article class="rounded-2xl border border-[#DDD3E7] bg-[#F8F4FC] p-5"><h3 class="font-bold text-[#440D84]">Документы 24/7</h3><p class="mt-2 text-sm leading-6 text-[#675F6F]">Транспортные и закрывающие документы хранятся в кабинете.</p></article><article class="rounded-2xl border border-[#DDD3E7] bg-[#F8F4FC] p-5"><h3 class="font-bold text-[#440D84]">Расчёт тарифа</h3><p class="mt-2 text-sm leading-6 text-[#675F6F]">Параметры груза и маршрута собраны в заявке.</p></article></div></div></section><section id="mm-cargo-types" data-block-id="mm-cargo-types" data-block-title="Типы грузов и контейнеров" class="bg-[#F6F1FB] py-16 lg:py-20"><div class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><p class="text-xs font-bold uppercase tracking-[0.2em] text-[#7F42E1]">Грузы и контейнеры</p><h2 class="mt-4 text-3xl font-bold text-[#19131F] sm:text-4xl">Перевозки под разные типы груза</h2><p class="mt-5 max-w-3xl text-base leading-7 text-[#675F6F]">Универсальные и рефрижераторные контейнеры, генеральные и опасные грузы — формат выбирается под задачу и маршрут.</p></div></section><section id="mm-geography" data-block-id="mm-geography" data-block-title="География перевозок" class="bg-white py-16 lg:py-20"><div class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><p class="text-xs font-bold uppercase tracking-[0.2em] text-[#7F42E1]">География</p><h2 class="mt-4 text-3xl font-bold text-[#19131F] sm:text-4xl">Направления и точки отправки</h2><p class="mt-5 max-w-3xl text-base leading-7 text-[#675F6F]">Дальний Восток, Санкт-Петербург, Новороссийск, сухопутные погранпереходы и другие порты с отправкой грузов по России.</p><div class="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-[#440D84]"><span class="rounded-full bg-[#F1E8FA] px-4 py-2">Владивосток и Восточный</span><span class="rounded-full bg-[#F1E8FA] px-4 py-2">Санкт-Петербург</span><span class="rounded-full bg-[#F1E8FA] px-4 py-2">Новороссийск</span><span class="rounded-full bg-[#F1E8FA] px-4 py-2">Забайкальск</span><span class="rounded-full bg-[#F1E8FA] px-4 py-2">Достык</span><span class="rounded-full bg-[#F1E8FA] px-4 py-2">Алтынколь</span><span class="rounded-full bg-[#F1E8FA] px-4 py-2">Наушки</span></div></div></section><section id="mm-partners" data-block-id="mm-partners" data-block-title="Партнёры мультимодальных перевозок" class="bg-[#F6F1FB] py-14 lg:py-16"><div class="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10"><h2 class="text-2xl font-bold text-[#19131F]">Партнёры мультимодальных перевозок</h2><p class="max-w-2xl text-sm leading-6 text-[#675F6F]">В маршруте могут участвовать FESCO, ТрансКонтейнер и другие транспортные партнёры. Состав цепочки зависит от направления и доступности этапов.</p></div></section>`);
      const geographySection = document.getElementById('mm-geography');
      if (geographySection) {
        geographySection.style.backgroundColor = '#FBF6F0';
        const map = document.createElement('img');
        map.src = geographyMapImage;
        map.alt = 'Карта мультимодальных маршрутов Catalon';
        map.className = 'mt-10 h-auto w-[70%] max-w-none object-contain';
        geographySection.querySelector('div')?.appendChild(map);
      }
      const cargoSection = document.getElementById('mm-cargo-types');
      if (cargoSection) {
        cargoSection.style.backgroundColor = '#EDE3F6';
        const cargoContent = cargoSection.querySelector('div');
        cargoContent?.classList.add('lg:grid', 'lg:grid-cols-[0.85fr_1.15fr]', 'lg:items-center', 'lg:gap-12');
        const image = document.createElement('img');
        image.src = cargoTypesImage;
        image.alt = 'Контейнеры и типы грузов';
        image.className = 'mt-10 w-full object-cover lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:mt-0';
        if (cargoContent) {
          const textColumn = document.createElement('div');
          textColumn.className = 'lg:col-start-1';
          const introChildren = Array.from(cargoContent.children).slice(0, 3);
          introChildren.forEach((child) => textColumn.appendChild(child));
          const cards = document.createElement('div');
          cards.className = 'mt-7 grid gap-3 sm:grid-cols-2';
          [['Универсальные контейнеры', 'Для стандартных генеральных грузов и сборных партий.'], ['Рефрижераторные контейнеры', 'Для грузов, которым важно сохранять температурный режим.'], ['Генеральные грузы', 'Оборудование, паллеты, упаковки и крупные партии.'], ['Опасные грузы', 'Маршрут и этапы подбираются с учётом требований безопасности.']].forEach(([title, text]) => {
            const card = document.createElement('article');
            card.className = 'rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(68,13,132,0.06)]';
            card.innerHTML = `<h3 class="text-sm font-bold text-[#440D84]">${title}</h3><p class="mt-2 text-xs leading-5 text-[#675F6F]">${text}</p>`;
            cards.appendChild(card);
          });
          textColumn.appendChild(cards);
          cargoContent.appendChild(textColumn);
          cargoContent.appendChild(image);
        }
      }
      const partnersSection = document.getElementById('mm-partners');
      if (partnersSection) {
        const content = partnersSection.querySelector('div');
        if (content) {
          content.classList.add('lg:grid', 'lg:grid-cols-[0.8fr_1.2fr]', 'lg:gap-10');
          const logoGrid = document.createElement('div');
          logoGrid.className = 'mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-2';
          ['FESCO', 'ТрансКонтейнер', 'Партнёр 03'].forEach((label) => {
            const logo = document.createElement('div');
            logo.className = 'grid min-h-16 place-items-center rounded-2xl border border-dashed border-[#BA9AF0] bg-white px-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#7F42E1]';
            logo.textContent = label;
            logoGrid.appendChild(logo);
          });
          content.appendChild(logoGrid);
          const image = document.createElement('img');
          image.src = partnersNetworkImage;
          image.alt = 'Сеть партнёров мультимодальных перевозок';
          image.className = 'mt-6 w-full rounded-[28px] border border-[#DDD3E7] object-cover shadow-[0_20px_50px_rgba(68,13,132,0.1)] lg:mt-0';
          image.remove();
        }
      }
      const cabinetSection = document.getElementById('mm-digital-cabinet');
      if (cabinetSection) {
        const cardGrid = cabinetSection.querySelector('.grid.sm\\:grid-cols-3');
        const extraCards = [['Единая заявка', 'Все этапы маршрута собираются вокруг одного запроса.'], ['Статусы перевозки', 'События и передача ответственности видны участникам.'], ['Автоматизация ЭДО', 'Документы проходят через единый цифровой контур.']];
        extraCards.forEach(([title, text]) => {
          const card = document.createElement('article');
          card.className = 'rounded-2xl border border-[#DDD3E7] bg-[#F8F4FC] p-5';
          card.innerHTML = `<h3 class="text-sm font-bold text-[#440D84]">${title}</h3><p class="mt-2 text-xs leading-5 text-[#675F6F]">${text}</p>`;
          cardGrid?.appendChild(card);
        });
        const cardImages = [geographyMapImage, cargoTypesImage, partnersNetworkImage, geographyMapImage, cargoTypesImage, partnersNetworkImage];
        Array.from(cabinetSection.querySelectorAll<HTMLElement>('article')).forEach((card, index) => {
          if (card.querySelector('img')) return;
          const image = document.createElement('img');
          image.src = cardImages[index % cardImages.length];
          image.alt = '';
          image.className = '-mx-5 -mt-5 mb-4 h-24 w-[calc(100%+2.5rem)] rounded-t-xl rounded-b-none object-cover';
          card.prepend(image);
        });
      }
      const problemsSection = Array.from(document.querySelectorAll<HTMLElement>('main section')).find((section) => section.textContent?.includes('Мультимодальная логистика ломается на стыках'));
      if (problemsSection) {
        problemsSection.querySelectorAll<SVGElement>('svg').forEach((icon) => { icon.style.color = '#E5484D'; });
        problemsSection.querySelectorAll<HTMLElement>('article').forEach((card) => { card.style.borderTop = '2px solid #E5484D'; });
      }
      const subnav = document.querySelector<HTMLElement>('nav[aria-label="Навигация по странице"]');
      const subnavItems = [['Маршрут', '#route'], ['Кабинет', '#mm-digital-cabinet'], ['Грузы и контейнеры', '#mm-cargo-types'], ['География', '#mm-geography'], ['Партнёры', '#mm-partners'], ['Участники', '#mm-audience'], ['Проблемы', '#mm-problems'], ['Этапы', '#mm-process'], ['Контроль', '#stage-control'], ['Портал', '#mm-portal-features'], ['Документы', '#documents'], ['Сценарий', '#mm-chain-scenarios'], ['FAQ', '#faq']];
      const subnavContainer = subnav?.querySelector('div');
      if (subnavContainer) {
        subnavContainer.innerHTML = '';
        subnavItems.forEach(([label, href]) => {
          const link = document.createElement('a');
          link.textContent = label;
          link.href = href;
          link.className = 'whitespace-nowrap border-b border-transparent py-1 transition hover:border-[#B7FF2A] hover:text-[#440D84]';
          subnavContainer.appendChild(link);
        });
      }
    }
    return () => { document.title = previousTitle; if (description && previousDescription) description.content = previousDescription; };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#19131F]">
      <UnifiedHeader />
      <ProductAnchorNav items={[["Обзор", "#mm-top"], ["Маршрут", "#route"], ["Участники", "#audience"], ["Этапы", "#stage-control"], ["Документы", "#documents"], ["Безопасность", "#safe-deal-mm"], ["Портал", "#portal-demo"], ["FAQ", "#faq"]]} />
      <style>{`main button:hover { color: #7F42E1; } main button:hover span:last-child { background: #F1E8FA; color: #7F42E1; } main > section:first-child .inline-flex:first-child { background: rgba(255,255,255,.5); color: #440D84; backdrop-filter: blur(8px); } main > section:nth-of-type(6) svg { color: #E5484D; } main > section:first-child a[href="#start"] { background: #B7FF2A !important; color: #440D84 !important; } #documents > div > article { display: none !important; } #start, [data-block-id="mm-business-tools"], [data-block-id="mm-benefits"], [data-block-id="mm-difference"], [data-block-id="mm-definition"], [data-block-id="mm-services"] { display: none !important; }`}</style>
      <style>{`[data-block-id="mm-operator"] { display: none !important; }`}</style>
      <main>
        <section className="bg-[#440D84] text-white" id="mm-top">
          <div className="mx-auto max-w-[1440px] px-4 pb-20 pt-6 sm:px-6 lg:px-10 lg:pb-24">
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/55"><a href={baseUrl()} className="hover:text-white">Главная</a><span>→</span><span>Мультимодальные перевозки</span></div>
            <div className="mt-10 grid min-h-[650px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div><div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-bold"><span className="h-2 w-2 rounded-full bg-[#A0FF00]" />Активное решение Catalon</div><h1 className="mt-7 text-4xl font-bold sm:text-5xl lg:text-6xl">Мультимодальные перевозки — <span className="text-[#BA9AF0]">в одном цифровом маршруте</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">Объединяйте автомобильные, железнодорожные, морские и терминальные этапы. Управляйте заявкой, участниками, документами и статусами через единый портал Catalon.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#start" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A0FF00] px-7 py-4 text-sm font-bold text-[#2E075A]">Создать заявку <ArrowRight className="h-4 w-4" /></a><a href="#route" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold">Посмотреть, как работает</a></div><div className="mt-9 flex flex-wrap gap-2">{['Контейнеры', 'Комбинированные маршруты', 'Контроль этапов', 'Документы онлайн', 'Оператор'].map((tag) => <span key={tag} className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/70">{tag}</span>)}</div></div>
              <AssetPlaceholder name="multimodal-hero.png" dark />
            </div>
          </div>
        </section>

        <section className="border-b border-[#E5DDF0] bg-[#F6F1FB]"><div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-[#DDD1EB] px-4 sm:px-6 md:grid-cols-5 lg:px-10">{[[ClipboardList, 'Единая заявка'], [Network, 'Несколько видов транспорта'], [ListChecks, 'Контроль этапов'], [FileCheck2, 'Документы онлайн'], [Users, 'Сопровождение оператора']].map(([Icon, label]) => { const ItemIcon = Icon as LucideIcon; return <div key={label as string} className="flex items-center gap-3 bg-[#F6F1FB] px-3 py-6 text-sm font-semibold"><ItemIcon className="h-5 w-5 shrink-0 text-[#561A9D]" />{label as string}</div>; })}</div></section>

        <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-28"><div><SectionIntro eyebrow="Не просто перемещение контейнера" title="Один маршрут связывает несколько самостоятельных операций" text="Мультимодальная перевозка — это последовательность этапов, исполнителей и передач ответственности. Catalon собирает их вокруг одной заявки, чтобы маршрут оставался управляемым от первой до последней мили." /><div className="mt-8 grid gap-3 sm:grid-cols-2">{[[Truck, 'Автомобильный этап'], [RailSymbol, 'Железнодорожный этап'], [Ship, 'Морской этап'], [Warehouse, 'Терминальные операции']].map(([Icon, label]) => { const ModeIcon = Icon as LucideIcon; return <div key={label as string} className="flex items-center gap-3 border-b border-[#DDD3E7] py-4 text-sm font-bold"><ModeIcon className="h-5 w-5 text-[#7F42E1]" />{label as string}</div>; })}</div></div><AssetPlaceholder name="multimodal-definition.png" /></section>

        <section className="bg-[#561A9D] py-20 text-white lg:py-28" id="route"><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Цепочка маршрута" title="Один маршрут — несколько этапов" text="Каждый этап имеет исполнителя, статус, документы и результат. Передача между этапами становится отдельным контролируемым событием." light /><div className="mt-12 grid gap-4 lg:grid-cols-7">{[[Truck, 'Первая миля'], [Warehouse, 'Терминал'], [RailSymbol, 'Железная дорога'], [Ship, 'Морская линия'], [Container, 'Терминал'], [Truck, 'Последняя миля'], [PackageCheck, 'Получатель']].map(([Icon, label], index) => { const StageIcon = Icon as LucideIcon; return <div key={`${label}-${index}`} className="group relative rounded-[22px] border border-white/15 bg-white/8 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-[0_14px_30px_rgba(20,3,43,0.22)]"><span className="text-[10px] font-bold text-[#A0FF00]">0{index + 1}</span><StageIcon className="mt-8 h-7 w-7 transition-transform duration-300 group-hover:scale-110" /><p className="mt-4 text-sm font-bold">{label as string}</p>{index < 6 && <ArrowDown className="absolute -bottom-3 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-[#A0FF00] p-1 text-[#440D84] lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:-rotate-90" />}</div>; })}</div></div></section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"><SectionIntro eyebrow="Участники маршрута" title="Для кого создано решение" text="У каждой стороны — свой интерфейс и зона ответственности. Общими остаются маршрут, события и согласованные условия." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{audience.map(({ icon: Icon, title, text, points, file }, index) => <article key={title} className={`group rounded-[28px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(68,13,132,0.16)] ${index === 1 ? 'bg-[#440D84] text-white hover:bg-[#561A9D]' : 'border border-[#DDD3E7] bg-white hover:border-[#BA9AF0]'}`}><Icon className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${index === 1 ? 'text-[#A0FF00]' : 'text-[#7F42E1]'}`} /><h3 className="mt-7 text-2xl font-extrabold">{title}</h3><p className={`mt-3 text-sm leading-6 ${index === 1 ? 'text-white/65' : 'text-[#675F6F]'}`}>{text}</p><ul className="mt-6 divide-y divide-current/10">{points.map(([PointIcon, point]) => <li key={point} className="flex items-center gap-3 py-3 text-sm font-semibold"><PointIcon className={`h-4 w-4 ${index === 1 ? 'text-[#A0FF00]' : 'text-[#7F42E1]'}`} />{point}</li>)}</ul><div className="mt-6"><AssetPlaceholder name={file} dark={index === 1} /></div></article>)}</div></section>

        <section className="bg-[#F1E8FA] py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Где возникает сложность" title="Мультимодальная логистика ломается на стыках" text="Проблема появляется не только в движении транспорта, а в переходах между исполнителями, документами и зонами ответственности." /><div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-[#CDBAE1] sm:grid-cols-2 lg:grid-cols-3">{[[AlertTriangle, 'Разрозненные статусы'], [Link2, 'Несогласованные переходы'], [FileArchive, 'Документы в разных каналах'], [Clock3, 'Задержки без ответственного'], [Scale, 'Непрозрачная стоимость этапов'], [RadioTower, 'Коммуникация в чатах и письмах']].map(([Icon, label]) => { const ProblemIcon = Icon as LucideIcon; return <article key={label as string} className="group bg-white p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#FAF7FD] hover:shadow-[0_18px_35px_rgba(68,13,132,0.14)]"><ProblemIcon className="h-6 w-6 text-[#7F42E1] transition-transform duration-300 group-hover:scale-110" /><h3 className="mt-8 text-lg font-bold">{label as string}</h3></article>; })}</div></div></section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"><SectionIntro eyebrow="Сборка маршрута" title="Как Catalon превращает цепочку в управляемый процесс" text="Портал сохраняет связь между решением заказчика, работой оператора и действиями каждого исполнителя." /><ol className="mt-12 grid gap-0 lg:grid-cols-6">{['Заявка', 'Сборка маршрута', 'Подтверждение условий', 'Запуск этапов', 'Фиксация событий', 'Закрытие сделки'].map((title, index) => <li key={title} className="border-l border-[#BA9AF0] pb-8 pl-6 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pt-6"><span className="text-xs font-bold text-[#7F42E1]">0{index + 1}</span><h3 className="mt-3 text-base font-bold lg:pr-6">{title}</h3></li>)}</ol></section>

        <section className="bg-[#440D84] py-20 text-white lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><SectionIntro eyebrow="Контроль исполнения" title="Каждый этап виден отдельно — маршрут остаётся целым" text="Оператор видит готовность участника, документы, передачу ответственности и отклонения. Заказчик получает общую картину без погружения в операционную переписку." light /><div className="mt-9 space-y-3">{['Исполнитель назначен', 'Условия подтверждены', 'Документы готовы', 'Этап завершён', 'Ответственность передана'].map((status, index) => <div key={status} className="flex items-center justify-between border-b border-white/15 py-3"><span className="text-sm font-semibold">{status}</span><span className={`text-xs font-bold ${index < 3 ? 'text-[#A0FF00]' : 'text-white/45'}`}>{index < 3 ? 'Подтверждено' : 'Ожидается'}</span></div>)}</div></div><AssetPlaceholder name="stage-control-ui.png" dark /></div></section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"><SectionIntro eyebrow="Возможности портала" title="Одна система для сложного маршрута" text="Инструменты объединены вокруг перевозки, а не существуют отдельными вкладками без общего контекста." /><div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-[#DDD3E7] sm:grid-cols-2 lg:grid-cols-4">{portalFeatures.map(([Icon, title, text]) => <article key={title} className="group bg-white p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#FAF7FD] hover:shadow-[0_18px_35px_rgba(68,13,132,0.14)]"><Icon className="h-6 w-6 text-[#7F42E1] transition-transform duration-300 group-hover:scale-110" /><h3 className="mt-7 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#675F6F]">{text}</p></article>)}</div></section>

        <section className="bg-[#F1E8FA] py-20 lg:py-28"><div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10"><AssetPlaceholder name="operator-workplace.png" /><div><SectionIntro eyebrow="Ключевая роль" title="Рабочее место оператора маршрута" text="Оператор собирает цепочку, назначает участников, контролирует передачи и работает с отклонениями. Catalon даёт ему единый контекст вместо таблиц, писем и параллельных чатов." /><div className="mt-8 grid gap-3 sm:grid-cols-2">{[[Route, 'Маршрут и этапы'], [Users, 'Участники и роли'], [AlertTriangle, 'События и отклонения'], [FileArchive, 'Документы и коммуникация']].map(([Icon, item]) => { const OperatorIcon = Icon as LucideIcon; return <div key={item as string} className="flex items-center gap-3 border-b border-[#CDBAE1] py-3 text-sm font-bold"><OperatorIcon className="h-5 w-5 text-[#7F42E1]" />{item as string}</div>; })}</div><a href="#portal-demo" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#561A9D]">Посмотреть портал <ArrowRight className="h-4 w-4" /></a></div></div></section>

        <section className="mx-auto max-w-[1440px] space-y-6 px-4 py-20 sm:px-6 lg:px-10 lg:py-28"><article className="grid items-center gap-10 rounded-[32px] bg-[#561A9D] p-7 text-white lg:grid-cols-2 lg:p-12"><div><FileCheck2 className="h-8 w-8 text-[#A0FF00]" /><h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em]">Документы связаны с этапами</h2><p className="mt-5 leading-7 text-white/68">Заявка, условия этапов, подтверждения и закрывающие документы сохраняются в едином архиве маршрута. История изменений помогает восстановить контекст сделки.</p><div className="mt-7 flex flex-wrap gap-2">{['Заявка', 'Условия', 'Подтверждения', 'Закрывающие документы', 'История'].map((item) => <span key={item} className="rounded-full border border-white/20 px-3 py-2 text-xs">{item}</span>)}</div></div><AssetPlaceholder name="multimodal-documents.png" dark /></article><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-[30px] bg-[#7F42E1] p-7 text-white lg:p-10"><ShieldCheck className="h-8 w-8 text-[#A0FF00]" /><h2 className="mt-6 text-3xl font-extrabold">Безопасная сделка</h2><p className="mt-4 text-sm leading-7 text-white/70">Фиксация условий, участников, зон ответственности, документов и ключевых событий помогает сделать сложный маршрут прозрачнее для сторон.</p><div className="mt-7"><AssetPlaceholder name="multimodal-safe-deal.png" dark /></div></article><article className="rounded-[30px] bg-[#BA9AF0] p-7 lg:p-10"><WalletCards className="h-8 w-8 text-[#440D84]" /><h2 className="mt-6 text-3xl font-extrabold text-[#350375]">Финансовые инструменты</h2><p className="mt-4 text-sm leading-7 text-[#4E3863]">Финансирование может подключаться к конкретной сделке с учётом её параметров и решения финансового партнёра. Условия и лимиты не обещаются заранее.</p><div className="mt-7"><AssetPlaceholder name="multimodal-finance.png" /></div></article></div></section>

        <section className="bg-[#440D84] py-20 text-white lg:py-28"><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Экосистема Catalon" title="Сервисы подключаются в контексте перевозки" text="Дополнительные инструменты помогают решать операционные задачи, но не подменяют участников маршрута и не обещают неподтверждённых условий." light /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[[Landmark, 'Catalon Финанс'], [ShieldCheck, 'Страхование'], [Fuel, 'Топливо'], [Scale, 'Юридический сервис'], [Wrench, 'Автосервис'], [Building2, 'Торговый дом']].map(([Icon, title]) => { const ServiceIcon = Icon as LucideIcon; return <article key={title as string} className="flex items-center gap-4 rounded-[22px] border border-white/15 bg-white/8 p-5"><ServiceIcon className="h-6 w-6 text-[#A0FF00]" /><h3 className="font-bold">{title as string}</h3></article>; })}</div></div></section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"><SectionIntro eyebrow="Варианты цепочек" title="Сценарии мультимодального маршрута" text="Схемы показывают возможную структуру этапов, а не подтверждённые направления, сроки или доступность конкретных партнёров." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[[Truck, RailSymbol, 'Авто + железная дорога'], [Truck, Ship, 'Авто + море'], [Truck, RailSymbol, 'Авто + ЖД + море'], [Warehouse, Container, 'Терминал — терминал'], [Warehouse, RailSymbol, 'Склад — терминал'], [Container, PackageCheck, 'Терминал — получатель']].map(([FromIcon, ToIcon, title], index) => <article key={title as string} className="group rounded-[26px] border border-[#DDD3E7] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7F42E1] hover:shadow-[0_18px_40px_rgba(68,13,132,0.14)]"><span className="text-xs font-bold text-[#7F42E1]">Сценарий 0{index + 1}</span><h3 className="mt-6 text-xl font-extrabold">{title as string}</h3><div className="mt-7 flex items-center gap-3 text-[#561A9D]"><FromIcon className="h-6 w-6 transition-transform group-hover:scale-110" /><ArrowRight className="h-4 w-4 opacity-40" /><ToIcon className="h-6 w-6 transition-transform group-hover:scale-110" /></div></article>)}</div></section>

        <section className="bg-[#F1E8FA] py-20 lg:py-28" id="portal-demo"><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Демо портала" title="Маршрут читается как единая история" text="В будущей демонстрации здесь появится интерфейс основной карточки мультимодального маршрута. Сейчас место изображения обозначено без подстановки чужого экрана." centered /><div className="mx-auto mt-12 max-w-6xl"><AssetPlaceholder name="multimodal-portal-main.png" /></div></div></section>

        <section className="bg-[#350375] py-20 text-white lg:py-28"><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Структура вместо переписки" title="Catalon — не просто логистический чат" text="Сообщения помогают договориться, но не создают управляемый процесс. В Catalon коммуникация связана с этапом, ответственным, документом и событием маршрута." light /><div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-white/15 sm:grid-cols-2 lg:grid-cols-3">{[[Layers3, 'Структура маршрута'], [RadioTower, 'Общие статусы'], [Users, 'Зоны ответственности'], [FileArchive, 'Документы в контексте'], [ShieldCheck, 'Безопасная сделка'], [ScanLine, 'История событий']].map(([Icon, title]) => { const DifferenceIcon = Icon as LucideIcon; return <div key={title as string} className="bg-[#350375] p-7"><DifferenceIcon className="h-6 w-6 text-[#A0FF00]" /><h3 className="mt-7 text-lg font-bold">{title as string}</h3></div>; })}</div></div></section>

        <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-28"><div><SectionIntro eyebrow="Доступ к экосистеме" title="Возможности больших компаний — для малого бизнеса" text="Единая заявка, операторское сопровождение, понятная структура маршрута, документы, безопасная сделка и финансовые инструменты становятся доступны внутри одного цифрового контура." /><div className="mt-8 grid gap-3 sm:grid-cols-2">{[[Layers3, 'Понятная структура маршрута'], [RadioTower, 'Контроль этапов'], [WalletCards, 'Финансовые инструменты'], [Handshake, 'Партнёрская экосистема']].map(([Icon, item]) => { const BusinessIcon = Icon as LucideIcon; return <div key={item as string} className="flex items-center gap-3 border-b border-[#DDD3E7] py-3 text-sm font-bold"><BusinessIcon className="h-5 w-5 text-[#7F42E1]" />{item as string}</div>; })}</div></div><AssetPlaceholder name="multimodal-big-tools.png" /></section>

        <section className="bg-[#F6F1FB] py-20 lg:py-28"><div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F42E1]">Другое активное решение</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em]">Нужна автомобильная перевозка по России?</h2><p className="mt-5 max-w-xl leading-7 text-[#675F6F]">FTL / LTL перевозки, заявки, перевозчики, безопасная сделка, документы и финансирование рейса в одном портале.</p><div className="mt-8 flex flex-wrap gap-5"><a href={baseUrl('road-freight-russia')} className="inline-flex items-center gap-2 rounded-full bg-[#440D84] px-6 py-3 text-sm font-bold text-white">Подробнее <ArrowRight className="h-4 w-4" /></a><a href={baseUrl('#solutions')} className="py-3 text-sm font-bold text-[#561A9D]">Все решения Catalon</a></div></div><AssetPlaceholder name="road-freight-solution.png" /></div></section>

        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-28" id="faq"><SectionIntro eyebrow="Коротко о решении" title="Вопросы о мультимодальных перевозках" text="Ответы учитывают текущий статус продукта и не обещают неподтверждённые направления, сроки или условия." /><div className="mt-10 divide-y divide-[#DDD3E7] border-y border-[#DDD3E7]">{faq.map(([question, answer], index) => { const open = openFaq === index; return <article key={question}><button type="button" onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open} className="flex w-full items-center justify-between gap-5 py-6 text-left"><span className="font-bold sm:text-lg">{question}</span><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${open ? 'bg-[#440D84] text-white' : 'bg-[#F1E8FA] text-[#440D84]'}`}><ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} /></span></button>{open && <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-[#675F6F]">{answer}</p>}</article>; })}</div></section>

        <section className="px-4 pb-4 sm:px-6 lg:px-10" id="start"><div className="mx-auto max-w-[1440px] overflow-hidden rounded-[34px] bg-[#440D84] px-6 py-16 text-center text-white sm:px-10 lg:py-24"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">Единый цифровой контур</p><h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2.3rem,5vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.055em]">Соберите мультимодальный маршрут в Catalon</h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-white/68">Создайте заявку, подключите участников и управляйте этапами, документами и сделкой через единый цифровой портал.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contacts" className="rounded-full bg-[#A0FF00] px-7 py-4 text-sm font-bold text-[#350375]">Создать заявку</a><a href="#contacts" className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold">Получить консультацию</a></div><div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">{['Один маршрут', 'Контроль этапов', 'Документы онлайн', 'Безопасная сделка', 'Оператор'].map((tag) => <span key={tag} className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/62">{tag}</span>)}</div></div></section>
      </main>
      <UnifiedFooter />
    </div>
  );
}
