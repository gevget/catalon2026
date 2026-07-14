import {
  ArrowRight,
  Banknote,
  BarChart3,
  Binary,
  Boxes,
  BrainCircuit,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Compass,
  FileCheck2,
  FileText,
  Files,
  Fuel,
  Gavel,
  Handshake,
  Headphones,
  Activity,
  Landmark,
  Link2,
  LockKeyhole,
  MapPin,
  MonitorCheck,
  Navigation,
  PackageCheck,
  Radar,
  ReceiptText,
  Route,
  ScanSearch,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Scale,
  TrendingUp,
  TimerReset,
  Truck,
  Users,
  UserPlus,
  WalletCards,
  Wrench,
  Zap,
  ChartNoAxesCombined,
  PackageSearch,
  FilePlus2,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import roadHeroImage from '../assets/1/p1-hero.png';
import safeDealAsset from '../assets/1/Безопасная сделка.png';
import businessToolsAsset from '../assets/1/Возможности больших компаний — для малого и среднего бизнеса.png';
import multimodalAsset from '../assets/1/Мультимодальные и контейнерные перевозки.png';
import financeAsset from '../assets/1/Финансирование под конкретный рейс.png';
import portalOverviewAsset from '../assets/1/Посмотрите, как устроена работа в Catalon.png';
import earningAsset from '../assets/1/Зарабатывать.png';
import savingAsset from '../assets/1/Экономить.png';
import customerAsset from '../assets/1/Перевозка под контролем, а не в переписках.png';
import carrierAsset from '../assets/1/Больше подходящих рейсов без ручного поиска.png';
import operatorAsset from '../assets/1/Вся операционная работа в одной системе.png';
import requestAsset from '../assets/1/Заявка.png';
import tripsAsset from '../assets/1/Рейсы.png';
import documentsAsset from '../assets/1/Документы.png';
import financesAsset from '../assets/1/Финансы.png';
import servicesAsset from '../assets/1/Сервисы.png';
import supportAsset from '../assets/1/Поддержка.png';
import { ProductAnchorNav, ProductFooter, ProductHeader, StickyProductCta } from './components/ProductChrome';

function getBasePath() {
  return import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
}

function home(anchor = '') {
  return `${getBasePath()}/${anchor}`;
}

function AssetPlaceholder({ name, dark = false }: { name: string; dark?: boolean }) {
  const imageMap: Record<string, string> = {
    'road-freight-hero.png': roadHeroImage,
    'portal-overview.png': portalOverviewAsset,
    'portal-overview-screen.png': portalOverviewAsset,
    'safe-deal-road-freight.png': safeDealAsset,
    'trip-finance-road-freight.png': financeAsset,
    'carrier-growth.png': earningAsset,
    'transport-services.png': savingAsset,
    'small-business-big-tools-road.png': businessToolsAsset,
    'multimodal-solution.png': multimodalAsset,
  };
  const image = imageMap[name] || (name.includes('/assets/') ? name : null);
  if (image) return <img src={image} alt="" loading="lazy" className="block h-auto w-full rounded-[16px] object-contain" />;
  return <div className={`grid min-h-44 place-items-center border ${dark ? 'border-white/15 bg-white/8 text-white/45' : 'border-[#DED9E3] bg-[#F7F6F3] text-[#9B91A6]'}`}><div className="text-center"><div className="mx-auto h-8 w-8 rounded-lg border-2 border-current opacity-50" /><p className="mt-3 px-4 text-xs font-bold uppercase tracking-[0.14em]">Изображение: {name}</p></div></div>;
}

type Feature = { icon: LucideIcon; title: string; text: string };

const roles = [
  {
    label: 'Для заказчика',
    title: 'Перевозка под контролем, а не в переписках',
    text: 'Создавайте заявку один раз, сравнивайте предложения и следите за исполнением в едином окне.',
    points: [
      [ScanSearch, 'Поиск по параметрам заявки'],
      [Gavel, 'Аукцион и рекомендации по цене'],
      [Radar, 'Контроль исполнения в реальном времени'],
    ],
    image: customerAsset,
    tone: 'lime',
  },
  {
    label: 'Для перевозчика',
    title: 'Больше подходящих рейсов без ручного поиска',
    text: 'Находите загрузки по своему маршруту, управляйте транспортом и быстрее получайте оплату.',
    points: [
      [Navigation, 'Грузы по маршруту и попутные заказы'],
      [Landmark, 'Предоплата и целевое финансирование'],
      [Fuel, 'Партнёрские условия на топливо и сервис'],
    ],
    image: carrierAsset,
    tone: 'purple',
  },
  {
    label: 'Для оператора',
    title: 'Вся операционная работа в одной системе',
    text: 'Сопровождайте заявки, участников и документы без разрозненных таблиц и чатов.',
    points: [
      [Boxes, 'Единая очередь заявок и рейсов'],
      [Clock3, 'Сроки, события и ответственность'],
      [BarChart3, 'Отчётность, рейтинги и аналитика'],
    ],
    image: operatorAsset,
    tone: 'soft',
  },
] as const;

const capabilities: Feature[] = [
  { icon: Sparkles, title: 'Умный подбор', text: 'Рекомендации по подходящим грузам, маршрутам и исполнителям.' },
  { icon: Gavel, title: 'Аукцион предложений', text: 'Сравнение условий и выбор подходящего варианта сделки.' },
  { icon: SlidersHorizontal, title: 'Гибкие фильтры', text: 'Отбор заявок по маршруту, датам, транспорту и параметрам груза.' },
  { icon: Clock3, title: 'Временные интервалы', text: 'Фиксация времени погрузки, выгрузки и выполнения этапов.' },
  { icon: Star, title: 'Рейтинги участников', text: 'История работы и качество выполнения помогают выбирать партнёров.' },
  { icon: Activity, title: 'Статусы перевозки', text: 'Контроль ключевых событий и действий участников.' },
  { icon: Files, title: 'ЭДО и документы', text: 'Цифровое хранение заявок, договорённостей и закрывающих документов.' },
  { icon: ChartNoAxesCombined, title: 'Аналитика', text: 'Данные по заявкам, рейсам, участникам и результатам работы.' },
  { icon: FileCheck2, title: 'Заявка к закрытию рейса', text: 'Проверка выполнения, закрывающие документы и итоговые расчёты.' },
];

const flow = [
  ['01', 'Регистрация', 'Создайте профиль и выберите свою роль в перевозке.'],
  ['02', 'Заявка или поиск груза', 'Заказчик размещает перевозку, перевозчик находит подходящий рейс.'],
  ['03', 'Согласование', 'Стороны согласуют маршрут, стоимость, сроки и условия.'],
  ['04', 'Безопасная сделка', 'Ключевые параметры, участники и документы фиксируются в системе.'],
  ['05', 'Выполнение рейса', 'Участники видят статусы и контролируют движение сделки.'],
  ['06', 'Документы и расчёты', 'После завершения сохраняются история, документы и итоговые действия.'],
  ['07', 'Контроль закрытия рейса', 'Проверьте выполнение условий и подтвердите завершение перевозки.'],
  ['08', 'История и аналитика', 'Используйте данные рейса для следующих перевозок и решений.'],
];

const onlineCards = [
  ['Заявки', 'Создание и обработка новых перевозок.', requestAsset, ClipboardCheck],
  ['Рейсы', 'Маршруты, транспорт и статусы исполнения.', tripsAsset, Route],
  ['Документы', 'Комплект файлов по каждой сделке.', documentsAsset, FileText],
  ['Финансы', 'Условия оплаты и движение расчётов.', financesAsset, WalletCards],
  ['Сервисы', 'Полезные услуги прямо из портала.', servicesAsset, Wrench],
  ['Поддержка', 'Помощь оператора на каждом этапе.', supportAsset, Headphones],
] as const;

const faq = [
  ['Catalon — перевозчик или биржа грузов?', 'Catalon — цифровая платформа для совместной работы заказчиков, перевозчиков и операторов. Она объединяет поиск рейса, проведение сделки, документы, расчёты и сервисы.'],
  ['Какие перевозки можно организовать?', 'Решение рассчитано на автомобильные FTL- и LTL-перевозки по России: разовые, регулярные и контрактные рейсы.'],
  ['Что даёт безопасная сделка?', 'Она фиксирует согласованные условия, участников и этапы перевозки. Это делает процесс прозрачнее и помогает снизить операционные риски для обеих сторон.'],
  ['Можно ли провести весь рейс онлайн?', 'Заявка, выбор исполнителя, статусы, документы и связанные сервисы доступны в портале. Физическое исполнение перевозки, разумеется, остаётся на маршруте.'],
  ['Как работает финансирование?', 'Финансирование оформляется под параметры конкретного рейса. Доступность и условия зависят от решения финансового партнёра.'],
  ['Есть ли помощь при подключении?', 'Да. Команда Catalon помогает настроить профиль, провести первую заявку и разобраться с рабочим процессом в портале.'],
] as const;

function SectionIntro({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-[#B7FF2A]' : 'text-[#7133D0]'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-[#19131F]'}`}>{title}</h2>
      <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? 'text-white/72' : 'text-[#675F6F]'}`}>{text}</p>
    </div>
  );
}

export default function RoadFreightPage() {
  const [openedFaq, setOpenedFaq] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F6F3] text-[#19131F]">
      <ProductHeader portalHref="#portal-early" startHref="#start" />
      <ProductAnchorNav items={[["Обзор", "#top"], ["Для кого", "#how-it-works"], ["Как работает", "#how-it-works"], ["Безопасная сделка", "#safe-deal"], ["Финансирование", "#safe-deal"], ["Портал", "#portal-early"], ["FAQ", "#faq"]]} />
      <StickyProductCta label="Автомобильные перевозки через Catalon" href="#start">Начать работу</StickyProductCta>

      <main>
        <section className="relative overflow-hidden bg-[#B7FF2A]" id="top">
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_24%,rgba(113,51,208,0.18),transparent_42%)]" />
          <div className="mx-auto max-w-[1440px] px-4 pb-16 pt-7 sm:px-6 lg:px-10 lg:pb-24">
            <div className="flex items-center gap-2 text-xs text-[#443B4B]"><a href={home()} className="hover:text-[#440D84]">Главная</a><span>/</span><span>Автомобильные перевозки</span></div>
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-xs font-bold text-[#440D84] shadow-sm backdrop-blur"><span className="h-2 w-2 animate-pulse rounded-full bg-[#6BCB00]" />Активное решение Catalon</div>
                <h1 className="mt-7 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">Автомобильные грузоперевозки по РФ — <span className="text-[#7133D0]">в одном цифровом портале</span></h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[#5F5668]">Размещайте заявки, находите грузы и перевозчиков, фиксируйте условия, оформляйте документы и подключайте финансирование конкретного рейса онлайн.</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#start" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#440D84] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#7133D0]">Начать работу <ArrowRight className="h-4 w-4" /></a><a href="#portal" className="inline-flex items-center justify-center rounded-full border border-[#440D84]/20 bg-white/70 px-7 py-4 text-sm font-bold text-[#440D84] transition hover:bg-white">Посмотреть портал</a></div>
                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#443B4B]">
                  <span className="flex items-center gap-2"><Route className="h-4 w-4 text-[#6CAA00]" />FTL / LTL</span>
                  <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#6CAA00]" />Безопасная сделка</span>
                  <span className="flex items-center gap-2"><Banknote className="h-4 w-4 text-[#6CAA00]" />Финансирование рейса</span>
                  <span className="flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-[#6CAA00]" />ЭДО и документы</span>
                  <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[#6CAA00]" />Проверенные участники</span>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none"><AssetPlaceholder name="road-freight-hero.png" /></div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#DED9E3] bg-white" aria-label="Преимущества Catalon">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-[#DED9E3] px-4 sm:px-6 md:grid-cols-4 lg:px-10">
            {[
              [Users, 'Бесплатная регистрация', 'Изучите портал и возможности платформы без оплаты за вход.'],
              [Sparkles, 'Быстрый старт', 'Создайте заявку или начните поиск подходящего груза.'],
              [MonitorCheck, 'Всё онлайн', 'Условия, документы и статусы доступны в одном интерфейсе.'],
              [CircleDollarSign, 'Оплата за результат', 'Комиссия платформы применяется к успешно завершённым сделкам.'],
            ].map(([Icon, title, text]) => { const BenefitIcon = Icon as LucideIcon; return <article key={title as string} className="bg-white px-4 py-6 sm:px-7 sm:py-8"><BenefitIcon className="h-5 w-5 text-[#440D84]" /><h2 className="mt-4 text-sm font-bold sm:text-base">{title as string}</h2><p className="mt-2 text-xs leading-5 text-[#675F6F] sm:text-sm">{text as string}</p></article>; })}
          </div>
        </section>

        <section className="bg-[#19131F] text-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-white/10 px-4 sm:px-6 md:grid-cols-4 lg:px-10">
            {[['0 ₽', 'регистрация на платформе'], ['Успех', 'комиссия только по сделке'], ['РФ', 'отечественный софт'], ['ЭДО', 'документы и архив']].map(([value, label]) => <div key={label} className="bg-[#19131F] px-3 py-7 sm:px-6"><p className="text-2xl font-extrabold text-[#B7FF2A] sm:text-3xl">{value}</p><p className="mt-1 text-xs text-white/55 sm:text-sm">{label}</p></div>)}
          </div>
        </section>

        <section className="bg-[#F1F1ED] py-20 lg:py-24" id="portal-early"><div className="mx-auto max-w-[1208px] px-4 sm:px-6 lg:px-0"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionIntro eyebrow="Продукт сразу" title="Посмотрите, как устроена работа в Catalon" text="Свободные грузы, карточка заявки, статусы сделки и документы собраны в одном рабочем интерфейсе." /><a href="#portal" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#440D84]">Открыть портал <ArrowRight className="h-4 w-4" /></a></div><div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.65fr_0.8fr]"><AssetPlaceholder name="portal-overview.png" /><div className="grid gap-3">{[[PackageCheck, 'Свободные грузы', 'Подбор заявок по маршруту и параметрам транспорта.'], [ClipboardCheck, 'Карточка заявки', 'Маршрут, стоимость, сроки и участники в одном окне.'], [Radar, 'Статусы сделки', 'Актуальный этап виден заказчику, перевозчику и оператору.'], [FileText, 'Документы', 'История и закрывающие файлы не теряются в чатах.']].map(([Icon, title, text]) => { const PortalIcon = Icon as LucideIcon; return <div key={title as string} className="group border-b border-[#DDD8DF] py-3"><div className="flex items-center gap-3 text-sm font-bold"><PortalIcon className="h-5 w-5 text-[#440D84] transition-transform group-hover:translate-x-1" />{title as string}</div><p className="mt-1 pl-8 text-xs leading-5 text-[#675F6F]">{text as string}</p></div>; })}</div></div></div></section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32" id="how-it-works">
          <SectionIntro eyebrow="Один рынок — разные задачи" title="Каждый участник получает свой рабочий сценарий" text="Catalon не показывает всем один и тот же список грузов. Заказчик, перевозчик и оператор работают со своими задачами, но остаются внутри общей цифровой сделки." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {roles.map((role) => <article key={role.title} className={`group flex min-h-full flex-col overflow-hidden rounded-[28px] p-6 sm:p-8 ${role.tone === 'lime' ? 'bg-[#B7FF2A]' : role.tone === 'purple' ? 'bg-[#440D84] text-white' : 'border border-[#DED9E3] bg-white'}`}><div className="flex items-center justify-between"><span className={`text-xs font-bold uppercase tracking-[0.16em] ${role.tone === 'purple' ? 'text-[#B7FF2A]' : 'text-[#7133D0]'}`}>{role.label}</span><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></div><h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.03em]">{role.title}</h3><p className={`mt-3 text-sm leading-6 ${role.tone === 'purple' ? 'text-white/70' : 'text-[#554C5D]'}`}>{role.text}</p><ul className="mt-6 divide-y divide-current/10">{role.points.map(([PointIcon, point]) => <li key={point} className="flex gap-3 py-3 text-sm font-semibold"><PointIcon className={`h-5 w-5 shrink-0 ${role.tone === 'purple' ? 'text-[#B7FF2A]' : 'text-[#440D84]'}`} />{point}</li>)}</ul><div className="mt-auto pt-7"><AssetPlaceholder name={role.image as string} dark={role.tone === 'purple'} /></div></article>)}
          </div>
        </section>

        <section className="bg-[#440D84] py-20 text-white lg:py-32" id="capabilities">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Цифровой контур перевозки" title="Инструменты работают как единая система" text="Заявка становится основой всей операции. Из неё формируются предложения, рейс, документы и управленческие данные — без повторного ввода и потери контекста." light />
            <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-white/15 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }, index) => <article key={title} className="bg-[#440D84] p-7 transition hover:bg-[#521298] sm:p-9"><div className="flex items-start justify-between"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#B7FF2A] text-[#440D84]"><Icon className="h-6 w-6" /></div><span className="text-xs font-bold text-white/30">0{index + 1}</span></div><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-[#B7FF2A] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Восемь шагов" title="От заявки до закрытого рейса" text="У процесса есть ясное начало, ответственные действия и зафиксированный результат." />
            <ol className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">{flow.map(([number, title, text], index) => <li key={number} className="relative border-t border-[#440D84] pt-6"><div className="flex items-center justify-between"><span className="text-4xl font-extrabold text-[#440D84]">{number}</span>{index < flow.length - 1 && <ArrowRight className="hidden h-5 w-5 text-[#440D84]/45 xl:block" />}</div><h3 className="mt-7 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#4C454E]">{text}</p></li>)}</ol>
          </div>
        </section>

        <section id="safe-deal" className="mx-auto max-w-[1440px] space-y-6 px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
          <article className="grid items-center gap-8 overflow-hidden rounded-[32px] bg-[#7133D0] p-7 text-white sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B7FF2A]">Защита интересов сторон</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Безопасная сделка</h2><p className="mt-5 max-w-xl leading-7 text-white/75">Условия, участники и документы связаны с конкретным рейсом. Меньше неоднозначности, больше прозрачности на каждом этапе.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{[[LockKeyhole, 'Условия зафиксированы'], [Users, 'Участники идентифицированы'], [TimerReset, 'Этапы видны онлайн'], [ReceiptText, 'История сохраняется']].map(([Icon, item]) => { const DealIcon = Icon as LucideIcon; return <span key={item as string} className="flex items-center gap-2 text-sm font-semibold"><DealIcon className="h-5 w-5 text-[#B7FF2A]" />{item as string}</span>; })}</div></div><AssetPlaceholder name="safe-deal-road-freight.png" dark /></article>
          <article className="grid items-center gap-8 overflow-hidden rounded-[32px] bg-[#D8C5F4] p-7 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14"><div className="order-2 lg:order-1"><AssetPlaceholder name="trip-finance-road-freight.png" /></div><div className="order-1 lg:order-2"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#440D84]">Оборотные средства</p><h2 className="mt-4 text-4xl font-extrabold leading-none tracking-[-0.04em] text-[#440D84] sm:text-5xl">Финансирование под конкретный рейс</h2><p className="mt-5 max-w-xl leading-7 text-[#554466]">Не абстрактный кредит, а возможность поддержать исполнение подтверждённой перевозки. Заявка на финансирование связана с её параметрами и документами.</p><a href="#start" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#440D84] px-6 py-3 text-sm font-bold text-white">Узнать условия <ArrowRight className="h-4 w-4" /></a></div></article>
        </section>

        <section className="bg-white py-20 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><SectionIntro eyebrow="Экономика рейса" title="Помогаем больше зарабатывать и меньше тратить" text="Доход формируется не только ценой перевозки. Catalon помогает сократить простой, быстрее запустить рейс и подключить полезные сервисы в нужный момент." />
            <div className="mt-12 grid gap-6 lg:grid-cols-2"><article className="flex flex-col rounded-[30px] bg-[#F2EDF8] p-7 sm:p-10"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#440D84] text-[#B7FF2A]"><CircleDollarSign className="h-6 w-6" /></div><h3 className="mt-7 text-3xl font-extrabold tracking-[-0.04em]">Зарабатывать</h3><p className="mt-4 max-w-lg text-sm leading-6 text-[#675F6F]">Подходящие загрузки, меньше холостого пробега, быстрый документооборот и доступ к финансированию.</p><div className="mt-7"><AssetPlaceholder name="carrier-growth.png" /></div></article><article className="flex flex-col rounded-[30px] bg-[#F1F1ED] p-7 sm:p-10"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#B7FF2A] text-[#440D84]"><Banknote className="h-6 w-6" /></div><h3 className="mt-7 text-3xl font-extrabold tracking-[-0.04em]">Экономить</h3><p className="mt-4 max-w-lg text-sm leading-6 text-[#675F6F]">Топливо, страхование, обслуживание, запчасти и поддержка — в одной экосистеме для транспорта.</p><div className="mt-7"><AssetPlaceholder name="transport-services.png" /></div></article></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[[Fuel, 'Топливо', 'Меньше затрат на рейс.'], [Wrench, 'Автосервис', 'Обслуживание без лишних поисков.'], [ShieldCheck, 'Страховая поддержка', 'Защита груза и ответственности.'], [Headphones, 'Поддержка', 'Помощь на каждом этапе.']].map(([Icon, label, description]) => { const ServiceIcon = Icon as LucideIcon; return <div key={label as string} className="rounded-2xl border border-[#E3DFE6] p-5"><div className="flex items-center gap-4"><ServiceIcon className="h-6 w-6 text-[#7133D0]" /><span className="text-sm font-bold">{label as string}</span></div><p className="mt-2 pl-10 text-xs leading-5 text-[#675F6F]">{description as string}</p></div>; })}</div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32" id="portal">
          <SectionIntro eyebrow="Портал Catalon" title="Управление перевозками — онлайн" text="Каждый раздел отвечает на конкретный рабочий вопрос. Интерфейс не заставляет собирать картину рейса вручную." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{onlineCards.map(([title, text, image, Icon]) => <article key={title} className="group rounded-[26px] border border-[#DED9E3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_60px_rgba(45,28,62,0.14)]"><div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F0E8FA] text-[#440D84]"><Icon className="h-5 w-5" /></div><ArrowRight className="h-5 w-5 text-[#440D84]/25 transition group-hover:text-[#440D84]" /></div><div className="mt-4"><AssetPlaceholder name={image as string} /></div><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#675F6F]">{text}</p></article>)}</div>
        </section>

        <section className="hidden relative bg-[#440D84] py-20 text-white lg:py-32" aria-hidden="true">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionIntro eyebrow="Не макет, а рабочий инструмент" title="Посмотрите внутрь портала" text="Свободные грузы, предложения, данные по маршруту и действия по сделке собраны на одном экране." light /><div className="flex gap-3 text-xs font-bold"><span className="rounded-full bg-[#B7FF2A] px-4 py-2 text-[#440D84]">Свободные грузы</span><span className="rounded-full border border-white/20 px-4 py-2 text-white/70">Сделка</span></div></div><div className="mt-12"><AssetPlaceholder name="portal-overview-screen.png" dark /></div></div>
        </section>

        <section className="bg-[#F1F1ED] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <SectionIntro eyebrow="Форматы перевозок" title="Для регулярных и разовых перевозок по России" text="Выбирайте подходящий формат перевозки и управляйте повторяющимися поставками в одном цифровом процессе." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [Route, 'По формату', 'FTL — отдельный транспорт под груз; LTL — частичная партия; догрузы по маршруту.'],
                [Clock3, 'По частоте', 'Регулярные маршруты, разовые перевозки и повторяющиеся поставки.'],
                [Boxes, 'По типу груза', 'Паллетные грузы, оборудование, строительные материалы и коммерческие партии.'],
              ].map(([Icon, title, text]) => { const FormatIcon = Icon as LucideIcon; return <article key={title as string} className="rounded-[24px] border border-[#DED9E3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(45,28,62,0.1)]"><FormatIcon className="h-6 w-6 text-[#7133D0]" /><h3 className="mt-5 text-xl font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#675F6F]">{text as string}</p></article>; })}
            </div>
            <p className="mt-6 border-l-2 border-[#7133D0] pl-4 text-sm leading-6 text-[#675F6F]">Для опасных, негабаритных и специальных грузов Catalon развивает отдельные решения.</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7133D0]">Экосистема для бизнеса</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl"><span className="text-[#6CAA00]">Возможности</span> больших компаний — для малого и среднего бизнеса</h2><p className="mt-6 max-w-xl leading-7 text-[#675F6F]">Получайте доступ к инструментам, которые сложно собирать по отдельности: финансированию, защите сделки, сервисам для транспорта и цифровому документообороту.</p><div className="mt-8 grid grid-cols-2 gap-3">{[[Landmark, 'Финансирование', 'Средства под конкретный рейс.'], [Fuel, 'Топливо', 'Партнёрские условия на топливо.'], [ShieldCheck, 'Страхование', 'Дополнительная защита сделки.'], [FileText, 'Документы', 'Единый цифровой архив.']].map(([Icon, item, description]) => { const BusinessIcon = Icon as LucideIcon; return <div key={item as string} className="rounded-2xl bg-white p-4"><div className="flex items-center gap-2 text-sm font-bold"><BusinessIcon className="h-4 w-4 text-[#7133D0]" />{item as string}</div><p className="mt-2 text-xs leading-5 text-[#675F6F]">{description as string}</p></div>; })}</div></div><AssetPlaceholder name="small-business-big-tools-road.png" /></div>
        </section>

        <section className="relative overflow-hidden bg-[#180527] py-20 text-white lg:py-32" id="intelligence">
          <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="pointer-events-none absolute right-[-12%] top-[-30%] h-[650px] w-[650px] rounded-full bg-[#7133D0]/25 blur-[120px]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-14 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-10">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#B7FF2A]/35 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7FF2A]"><BrainCircuit className="h-4 w-4" />Интеллектуальный оператор</div>
              <h2 className="mt-7 text-[clamp(2.5rem,5vw,5.4rem)] font-extrabold leading-[0.94] tracking-[-0.055em]">Catalon берёт на себя <span className="text-[#B7FF2A]">операционную рутину</span></h2>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/62">Платформа анализирует данные заявки и контекст рынка, помогает найти исполнителя, собрать маршрут и вовремя предложить сервисы, необходимые именно этому рейсу.</p>
              <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6"><div className="grid h-11 w-11 place-items-center rounded-full border border-[#B7FF2A]/40 text-[#B7FF2A]"><Binary className="h-5 w-5" /></div><p className="max-w-sm text-sm leading-6 text-white/55">Рекомендации дополняют решение человека и опираются на параметры конкретной перевозки.</p></div>
            </div>
            <div className="relative">
              <div className="absolute bottom-10 left-8 top-10 w-px bg-gradient-to-b from-transparent via-[#B7FF2A]/50 to-transparent sm:left-10" />
              <div className="space-y-px overflow-hidden rounded-[28px] border border-white/12 bg-white/10">
                {[
                  [ScanSearch, 'Интеллектуальный подбор', 'Параметры груза, транспорта, рейтинг и история взаимодействия учитываются одновременно.', '01'],
                  [Compass, 'Оптимизация маршрута', 'Система помогает сопоставить направление рейса с доступным транспортом и временными интервалами.', '02'],
                  [Boxes, 'Попутная загрузка', 'Свободное место и обратный путь превращаются в дополнительную возможность для перевозчика.', '03'],
                  [Link2, 'Рекомендации по пути', 'Топливо, стоянки, техническая помощь и другие сервисы появляются в контексте маршрута.', '04'],
                ].map(([Icon, title, text, number]) => { const PremiumIcon = Icon as LucideIcon; return <article key={title as string} className="relative grid grid-cols-[48px_1fr] gap-4 bg-[#210634]/92 p-5 transition hover:bg-[#2A0842] sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-6 sm:p-7"><div className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-[#B7FF2A]/35 bg-[#180527] text-[#B7FF2A]"><PremiumIcon className="h-5 w-5" /></div><div><h3 className="text-base font-bold sm:text-lg">{title as string}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/50">{text as string}</p></div><span className="hidden font-mono text-xs text-white/25 sm:block">{number as string}</span></article>; })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="grid items-center gap-10 rounded-[32px] bg-white p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7133D0]">Другое активное решение</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Мультимодальные и контейнерные перевозки</h2><p className="mt-5 max-w-xl leading-7 text-[#675F6F]">Когда одного вида транспорта недостаточно: комбинированные маршруты, контейнеры и контроль этапов в цифровом контуре Catalon.</p><a href={home('multimodal-container')} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#440D84]">Смотреть решение <ArrowRight className="h-4 w-4" /></a></div><AssetPlaceholder name="multimodal-solution.png" /></div></section>

        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-28" id="faq"><SectionIntro eyebrow="Коротко о важном" title="Частые вопросы" text="Ответы о подключении, работе решения и ключевых возможностях платформы." /><div className="mt-10 divide-y divide-[#DED9E3] border-y border-[#DED9E3]">{faq.map(([question, answer], index) => { const open = openedFaq === index; return <article key={question}><button type="button" onClick={() => setOpenedFaq(open ? -1 : index)} className={`group flex w-full items-center justify-between gap-5 py-6 text-left transition ${open ? 'text-[#440D84]' : 'hover:text-[#7133D0]'}`} aria-expanded={open}><span className="text-base font-bold sm:text-lg">{question}</span><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${open ? 'rotate-180 bg-[#440D84] text-white' : 'bg-white text-[#440D84] group-hover:bg-[#F0E8FA] group-hover:text-[#7133D0]'}`}><ChevronDown className="h-4 w-4" /></span></button>{open && <p className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-[#675F6F]">{answer}</p>}</article>; })}</div></section>

        <section className="px-4 pb-4 sm:px-6 lg:px-10" id="start"><div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-[linear-gradient(120deg,#440D84_0%,#7133D0_55%,#350375_100%)] px-6 py-16 text-center text-white sm:px-10 lg:py-24"><div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#B7FF2A]/20 blur-3xl" /><div className="relative"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B7FF2A]">Первый рейс начинается здесь</p><h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.055em]">Начните работать с перевозками в Catalon</h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">Зарегистрируйтесь или обсудите с командой, как встроить платформу в ваши текущие процессы.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contacts" className="rounded-full bg-[#B7FF2A] px-7 py-4 text-sm font-bold text-[#30085E]">Зарегистрироваться</a><a href="#contacts" className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold">Получить консультацию</a></div></div></div></section>
      </main>

      <ProductFooter />
    </div>
  );
}
