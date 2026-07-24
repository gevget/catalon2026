import { useEffect, useRef, useState, type ComponentType } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BarChart3,
  Building2,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  CircleCheck,
  Code2,
  ClipboardCheck,
  CloudCog,
  Compass,
  GraduationCap,
  HardHat,
  HeartHandshake,
  MapPinned,
  Percent,
  PackageCheck,
  Scale,
  SlidersHorizontal,
  TestTube2,
  Warehouse,
  FileText,
  Database,
  Fuel,
  GitBranch,
  Gauge,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  Map,
  MonitorSmartphone,
  Network,
  PlugZap,
  Plus,
  Route,
  ShieldCheck,
  Truck,
  Wrench,
  BellRing,
  FileInput,
  Factory,
  Handshake,
  LockKeyhole,
  Mail,
  Phone,
  Repeat2,
  Send,
  Target,
  UserRound,
  UsersRound,
  MessageCircleQuestion,
} from 'lucide-react';
import { UnifiedHeader } from './components/UnifiedHeader';
import { UnifiedFooter } from './components/UnifiedFooter';

type Icon = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

const partnerLinks = [
  ['Обзор', 'capabilities'],
  ['Преимущества', 'benefits'],
  ['Форматы', 'formats'],
  ['Сервисы', 'services'],
  ['Потребности', 'needs'],
  ['Точки', 'integrations'],
  ['Интеграция', 'depth'],
  ['Спецпроекты', 'special-projects'],
  ['Модели', 'models'],
  ['Партнёру', 'partner-value'],
  ['Пользователю', 'user-value'],
  ['Запуск', 'launch'],
  ['Коммерция', 'commercial'],
  ['Аналитика', 'analytics'],
  ['Отбор', 'selection'],
  ['Команда', 'team'],
  ['FAQ', 'faq'],
];

const quickBenefits: [string, string, string][] = [
  ['01', 'В момент потребности', 'Предложение появляется внутри реального рабочего сценария пользователя.'],
  ['02', 'Три аудитории', 'Заказчики, перевозчики и операторы взаимодействуют в одной экосистеме.'],
  ['03', 'Разная глубина', 'От карточки сервиса до встроенного продукта и технологической интеграции.'],
  ['04', 'Индивидуальная модель', 'Формат, экономика и показатели определяются под конкретное партнёрство.'],
];

const processRoles: { icon: Icon; role: string; title: string; text: string; items: string[] }[] = [
  { icon: BriefcaseBusiness, role: 'Заказчику', title: 'Финансы и контроль', text: 'Партнёрский продукт помогает управлять расходами и принимать решения в конкретной перевозке.', items: ['Финансирование', 'Страхование', 'Документы', 'Юридическая поддержка'] },
  { icon: Truck, role: 'Перевозчику', title: 'Ресурсы в пути', text: 'Сервис подключается там, где он нужен автопарку: до рейса, на маршруте или после выгрузки.', items: ['Топливо', 'Обслуживание', 'Шины и лизинг', 'Помощь в пути'] },
  { icon: Network, role: 'Оператору', title: 'Рабочий контур', text: 'Оператор видит предложение в связанном сценарии и может сопровождать его без разрыва процесса.', items: ['Проверка', 'Коммуникация', 'ЭДО', 'Контроль статусов'] },
];

const collaborationFormats: { number: string; title: string; text: string; items: string[]; cta: string; icon: Icon; variant: string }[] = [
  { number: '01', title: 'Подключить сервис', text: 'Для компаний с готовым продуктом, который полезен участникам логистики.', items: ['Карточка в экосистеме', 'Целевые точки входа', 'Заявка из кабинета', 'Отслеживание результата'], cta: 'Подключить сервис', icon: Wrench, variant: '' },
  { number: '02', title: 'Создать совместный продукт', text: 'Для партнёров, готовых адаптировать предложение под сценарии Catalon.', items: ['Совместная механика', 'Специальный тариф', 'Обмен статусами', 'Единая аналитика'], cta: 'Создать продукт', icon: Boxes, variant: 'is-purple' },
  { number: '03', title: 'Запустить уникальное партнёрство', text: 'Для задач, которые не помещаются в готовую категорию.', items: ['Региональные программы', 'Новые финансовые продукты', 'Совместная инфраструктура', 'Отдельные направления'], cta: 'Обсудить особый проект', icon: HeartHandshake, variant: 'is-featured' },
];

const serviceDirections: { icon: Icon; title: string; text: string }[] = [
  { icon: CircleDollarSign, title: 'Финансирование', text: 'Финансирование рейсов, ускоренная оплата и оборотные средства.' },
  { icon: ShieldCheck, title: 'Страхование', text: 'Груз, транспорт, ответственность и отдельные риски перевозки.' },
  { icon: Fuel, title: 'Топливо и дорожные расходы', text: 'Топливные программы, дороги, парковки и контроль расходов.' },
  { icon: Wrench, title: 'Шины, запчасти и масла', text: 'Расходные материалы и комплектующие для транспорта.' },
  { icon: Truck, title: 'Обслуживание транспорта', text: 'Автосервисы, шиномонтаж и техническая помощь в пути.' },
  { icon: HardHat, title: 'Лизинг и транспорт', text: 'Обновление, расширение и оснащение автопарка.' },
  { icon: Scale, title: 'Юридические услуги', text: 'Договоры, претензии, штрафы, споры и сопровождение.' },
  { icon: FileText, title: 'Документы и ЭДО', text: 'Подпись, транспортные документы, архив и обмен данными.' },
  { icon: CloudCog, title: 'IT и телематика', text: 'Мониторинг, маршрутизация, безопасность и аналитика.' },
  { icon: Warehouse, title: 'Логистическая инфраструктура', text: 'Склады, терминалы, стоянки и региональные сети.' },
  { icon: GraduationCap, title: 'Люди и развитие', text: 'Обучение, подбор специалистов и профессиональные программы.' },
  { icon: PackageCheck, title: 'Специальные решения', text: 'Продукты под отдельную категорию пользователей или отрасль.' },
];

const needStages: { icon: Icon; title: string; items: string[] }[] = [
  { icon: ClipboardCheck, title: 'До рейса', items: ['Финансирование', 'Страхование', 'Проверка', 'Документы'] },
  { icon: Compass, title: 'Перед отправлением', items: ['Топливо', 'Подготовка', 'Маршрут', 'Разрешения'] },
  { icon: MapPinned, title: 'В пути', items: ['Заправки', 'Дороги', 'Стоянки', 'Ремонт'] },
  { icon: FileText, title: 'После выгрузки', items: ['Закрывающие документы', 'Архив', 'Расчёты', 'Претензии'] },
  { icon: Landmark, title: 'При развитии бизнеса', items: ['Лизинг', 'Автопарк', 'Аналитика', 'Обучение'] },
];

const integrationPoints: { icon: Icon; title: string; text: string; badge: string }[] = [
  { icon: Boxes, title: 'Каталог сервисов', text: 'Постоянная карточка продукта с условиями и точкой входа.', badge: 'Витрина' },
  { icon: LayoutDashboard, title: 'Личный кабинет', text: 'Рекомендация для конкретного типа пользователя или компании.', badge: 'Контекст' },
  { icon: FileInput, title: 'Карточка заявки', text: 'Сервис, необходимый перед подтверждением перевозки.', badge: 'До рейса' },
  { icon: Route, title: 'Карточка рейса', text: 'Предложение связано с маршрутом, транспортом или текущим этапом.', badge: 'В пути' },
  { icon: CircleDollarSign, title: 'Раздел финансов', text: 'Финансовые и страховые продукты в соответствующем контексте.', badge: 'Расчёты' },
  { icon: FileText, title: 'Раздел документов', text: 'ЭДО, подпись, проверка и юридические сервисы.', badge: 'ЭДО' },
  { icon: Map, title: 'Маршрут', text: 'Заправки, стоянки, обслуживание и помощь в пути.', badge: 'География' },
  { icon: LifeBuoy, title: 'Поддержка оператора', text: 'Релевантное предложение по прозрачным правилам.', badge: 'Поддержка' },
  { icon: BellRing, title: 'Уведомления', text: 'Сообщение о сервисе при наступлении конкретного события.', badge: 'Событие' },
  { icon: PlugZap, title: 'Технологическая интеграция', text: 'Заявка, оформление и статусы без выхода из Catalon.', badge: 'API' },
];

const integrationLevels: { number: string; title: string; text: string; result: string; icon: Icon; variant: string }[] = [
  { number: '01', title: 'Представление', text: 'Карточка партнёра, описание предложения и переход во внешний сервис.', result: 'Понятная точка входа', icon: MonitorSmartphone, variant: '' },
  { number: '02', title: 'Заявка', text: 'Пользователь оставляет структурированный запрос через Catalon.', result: 'Переданный запрос', icon: FileInput, variant: '' },
  { number: '03', title: 'Встроенный сценарий', text: 'Расчёт, выбор предложения, оформление или статус проходят внутри платформы.', result: 'Единый рабочий путь', icon: WorkflowIcon, variant: 'is-deep' },
  { number: '04', title: 'Совместный продукт', text: 'Общая механика, бренд, экономика и интеграция данных.', result: 'Новая клиентская ценность', icon: Network, variant: 'is-featured' },
];

const uniqueProjects = ['Специальное финансирование под рейс', 'Совместная топливная программа', 'Коллективные закупки шин и запчастей', 'Сеть поддержки транспорта по маршрутам', 'Встроенное страхование перевозки', 'Программа обновления автопарка', 'Отраслевой цифровой модуль', 'Региональная логистическая программа', 'Закрытые условия для участников', 'Совместный образовательный продукт', 'Сервис для отдельной категории грузов', 'Новое самостоятельное направление'];

const partnerModels: { icon: Icon; title: string; text: string }[] = [
  { icon: Landmark, title: 'Банк или финтех', text: 'Финансовый продукт связывается с параметрами и статусом конкретной перевозки.' },
  { icon: Fuel, title: 'Топливная сеть', text: 'Перевозчик получает релевантные условия и точки обслуживания по маршруту.' },
  { icon: Factory, title: 'Производитель или дистрибьютор', text: 'Программа закупки шин, масел или запчастей для участников экосистемы.' },
  { icon: ShieldCheck, title: 'Страховая компания', text: 'Страховой продукт подключается во время подготовки заявки или рейса.' },
  { icon: Truck, title: 'Лизинговая компания', text: 'Предложения формируются с учётом размера и задач автопарка.' },
  { icon: CloudCog, title: 'IT-компания', text: 'Технологический модуль становится частью кабинета или сценария.' },
  { icon: Wrench, title: 'Сервисная сеть', text: 'Пункты обслуживания и техническая помощь встраиваются в маршрут.' },
  { icon: Building2, title: 'Ассоциация или регион', text: 'Программа создаётся для территории, отрасли или группы участников.' },
];

const partnerValueItems: { icon: Icon; title: string; text: string }[] = [
  { icon: Target, title: 'Контекст', text: 'Понятно, какая задача пользователя формирует потребность в продукте.' },
  { icon: UsersRound, title: 'Сегментация', text: 'Предложение адаптируется под роль, маршрут, бизнес или транспорт.' },
  { icon: Repeat2, title: 'Повторное использование', text: 'Операции создают регулярные потребности в сервисах.' },
  { icon: Route, title: 'Измеримый путь', text: 'Можно связать вход, заявку, подключение и использование.' },
  { icon: Gauge, title: 'Быстрый пилот', text: 'Гипотеза запускается на ограниченном сценарии или регионе.' },
  { icon: BarChart3, title: 'Масштабирование', text: 'Успешная модель расширяется на новые процессы и категории.' },
  { icon: Handshake, title: 'Совместное развитие', text: 'Обратная связь превращается в улучшения и новые предложения.' },
];

const userValueItems = ['Релевантный сервис в нужный момент', 'Понятные и прозрачные условия', 'Меньше отдельных кабинетов и повторного ввода данных', 'Возможность сравнить варианты', 'Сохранение результата в истории перевозки', 'Единый канал поддержки', 'Специальные условия, если они действительно выгоднее', 'Свобода выбора без навязанного подключения'];
const userValuePrinciples: { icon: Icon; text: string }[] = [
  { icon: Target, text: 'Релевантный сервис в нужный момент' },
  { icon: ShieldCheck, text: 'Понятные и прозрачные условия' },
  { icon: Boxes, text: 'Меньше отдельных кабинетов и повторного ввода данных' },
  { icon: Scale, text: 'Возможность сравнить варианты' },
  { icon: FileText, text: 'Сохранение результата в истории перевозки' },
  { icon: LifeBuoy, text: 'Единый канал поддержки' },
  { icon: CircleDollarSign, text: 'Специальные условия, если они действительно выгоднее' },
  { icon: LockKeyhole, text: 'Свобода выбора без навязанного подключения' },
];

const launchSteps: { icon: Icon; title: string; text: string }[] = [
  { icon: Handshake, title: 'Знакомство', text: 'Партнёр рассказывает о продукте, ресурсе или бизнес-задаче.' },
  { icon: Target, title: 'Поиск сценария', text: 'Определяем аудиторию, момент потребности и пользу для пользователя.' },
  { icon: SlidersHorizontal, title: 'Модель', text: 'Согласовываем механику, экономику, данные и зоны ответственности.' },
  { icon: TestTube2, title: 'Пилот', text: 'Запускаем ограниченный сценарий с понятными критериями результата.' },
  { icon: PlugZap, title: 'Интеграция', text: 'Настраиваем интерфейсы, передачу заявок, статусы и поддержку.' },
  { icon: BarChart3, title: 'Масштабирование', text: 'Анализируем результат и расширяем продукт на новые процессы.' },
];

const commercialModels: { icon: Icon; title: string; text: string; fit: string }[] = [
  { icon: Percent, title: 'Комиссия за результат', text: 'Оплата привязана к подтверждённому действию пользователя.', fit: 'Для измеримого сценария' },
  { icon: Handshake, title: 'Revenue share', text: 'Стороны разделяют доход от совместного продукта.', fit: 'Для общей экономики' },
  { icon: ClipboardCheck, title: 'Квалифицированная заявка', text: 'Расчёт строится на согласованном качестве обращения.', fit: 'Для продуктового пилота' },
  { icon: PlugZap, title: 'Технологическая интеграция', text: 'Отдельная модель для API и встроенного рабочего сценария.', fit: 'Для глубокой связи' },
  { icon: Boxes, title: 'Совместный продукт', text: 'Общая механика, бренд и правила развития продукта.', fit: 'Для нового предложения' },
  { icon: Landmark, title: 'Специальная программа', text: 'Экономика формируется под территорию, аудиторию или отрасль.', fit: 'Для особой задачи' },
];

const analyticsMetrics = ['Релевантные показы', 'Переходы', 'Заявки', 'Подключения', 'Конверсия', 'Повторное использование', 'Среднее время решения', 'Распределение по сегментам', 'География спроса', 'Финансовый результат', 'Качество поддержки', 'Удовлетворённость пользователей'];

const partnerCriteria = ['Реальная польза', 'Прозрачные условия', 'Способность выполнить обязательства', 'Качество поддержки', 'Юридическая и финансовая надёжность', 'Готовность к интеграции', 'Работа с обратной связью', 'Защита данных', 'Возможность масштабирования', 'Соответствие ценностям Catalon'];

const teamRoles = [{ icon: BriefcaseBusiness, title: 'Бизнес', text: 'Цель и экономика' }, { icon: Boxes, title: 'Продукт', text: 'Пользовательский сценарий' }, { icon: Code2, title: 'Технология', text: 'Интерфейсы и данные' }, { icon: Network, title: 'Операции', text: 'Заявки и поддержка' }, { icon: BarChart3, title: 'Аналитика', text: 'Результат и развитие' }];

const partnerFormats = ['Подключить готовый сервис', 'Создать совместный продукт', 'Запустить интеграцию', 'Предложить специальный проект', 'Пока не знаю — хочу обсудить'];

const partnerFaq = [
  ['Какие компании могут стать партнёрами Catalon?', 'Компании, чьи продукты, технологии или инфраструктура могут приносить пользу заказчикам, перевозчикам и операторам.'],
  ['Обязательно ли работать только в логистике?', 'Нет. Банки, страховые, IT-компании и другие организации могут иметь продукты, применимые в логистическом процессе.'],
  ['Можно ли подключить готовый сервис без сложной интеграции?', 'Да. Пилот может начаться с карточки, перехода или передачи структурированной заявки.'],
  ['Обязательно ли иметь API?', 'Нет. Глубокая интеграция возможна позже, если пилот подтвердит ценность.'],
  ['Сколько стоит размещение?', 'Коммерческая модель зависит от продукта, сценария и глубины интеграции.'],
  ['Можно ли создать совместный продукт?', 'Да. Catalon рассматривает co-branded продукты и совместные пользовательские сценарии.'],
  ['Возможна ли эксклюзивность?', 'Она обсуждается индивидуально и зависит от категории, условий и ценности для пользователей.'],
  ['Какие данные получает партнёр?', 'Только данные, необходимые для согласованного сценария и передаваемые на законном основании.'],
  ['Можно ли запустить пилот в одном регионе?', 'Да. Ограниченная география или аудитория может использоваться для проверки гипотезы.'],
  ['Кто поддерживает пользователя?', 'Зоны ответственности Catalon и партнёра определяются до запуска.'],
  ['Как оценивается результат?', 'Для каждого проекта заранее устанавливаются продуктовые, операционные и коммерческие показатели.'],
  ['Можно ли предложить проект, которого нет в списке?', 'Да. Для этого предусмотрен формат уникального сотрудничества.'],
  ['Может ли Catalon отказать в подключении?', 'Да. Предложение должно соответствовать требованиям качества, прозрачности и пользы для пользователей.'],
  ['Можно ли подключить несколько продуктов?', 'Да, если для каждого продукта существует понятный пользовательский сценарий.'],
];

function PartnerPlaceholder({ label, variant = '' }: { label: string; variant?: string }) {
  return <div className={`partners-placeholder ${variant}`} aria-label={label}><div className="partners-placeholder-orbit" /><div className="partners-placeholder-card"><span>CATALON</span><b>PARTNER<br />SYSTEM</b><i /></div><div className="partners-placeholder-label">{label}</div></div>;
}

export default function PartnersPage() {
  const [active, setActive] = useState('capabilities');
  const [activeIntegration, setActiveIntegration] = useState(0);
  const [activePartnerValue, setActivePartnerValue] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number[]>([0]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const submenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = partnerLinks.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, .25, .6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = submenuRef.current;
    if (!element) return;
    const update = () => {
      setCanScrollLeft(element.scrollLeft > 4);
      setCanScrollRight(Math.ceil(element.scrollLeft + element.clientWidth) < element.scrollWidth - 4);
    };
    const frame = window.requestAnimationFrame(update);
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    element.addEventListener('scroll', update, { passive: true });
    observer?.observe(element);
    window.addEventListener('resize', update);
    return () => { window.cancelAnimationFrame(frame); element.removeEventListener('scroll', update); observer?.disconnect(); window.removeEventListener('resize', update); };
  }, []);

  const scrollSubmenu = (amount: number) => submenuRef.current?.scrollBy({ left: amount, behavior: 'smooth' });

  return <div className="partners-page">
    <UnifiedHeader />
    <div className="partners-subnav-wrap">
      <button type="button" className={`partners-subnav-arrow partners-subnav-arrow-left ${canScrollLeft ? '' : 'is-hidden'}`} disabled={!canScrollLeft} onClick={() => scrollSubmenu(-280)} aria-label="Прокрутить подменю влево"><ChevronLeft size={17} /></button>
      <nav ref={submenuRef} className="partners-subnav" aria-label="Навигация страницы партнёров">
        {partnerLinks.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setActive(id)}>{label}</a>)}
      </nav>
      <button type="button" className={`partners-subnav-arrow partners-subnav-arrow-right ${canScrollRight ? '' : 'is-hidden'}`} disabled={!canScrollRight} onClick={() => scrollSubmenu(280)} aria-label="Прокрутить подменю вправо"><ChevronRight size={17} /></button>
    </div>

    <main>
      <section id="capabilities" className="partners-hero">
        <div className="partners-container partners-hero-grid">
          <div className="partners-hero-copy">
            <p className="partners-kicker">ПАРТНЁРСКАЯ ЭКОСИСТЕМА CATALON</p>
            <h1>Станьте частью инфраструктуры, на которой движется бизнес</h1>
            <p className="partners-lead">Catalon объединяет заказчиков, перевозчиков и операторов в едином логистическом процессе. Мы подключаем продукты партнёров в тот момент, когда они действительно нужны: при подготовке, финансировании, выполнении и закрытии перевозки.</p>
            <p className="partners-lead partners-lead-short">А если готового формата ещё нет — создаём совместный продукт с нуля.</p>
            <div className="partners-actions"><a className="partners-btn partners-btn-primary" href="#form">Предложить партнёрство <ArrowUpRight size={17} /></a><a className="partners-btn partners-btn-secondary" href="#formats">Подключить сервис</a></div>
            <a className="partners-text-link" href="#special-projects">Обсудить особый проект <ArrowRight size={16} /></a>
            <div className="partners-directions">{['Финансы', 'Страхование', 'Топливо', 'Обслуживание транспорта', 'Цифровые решения', 'Инфраструктура', 'Специальные проекты'].map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="partners-hero-visual"><PartnerPlaceholder label="Область под 3D-композицию Союзика" variant="partners-hero-placeholder" /><div className="partners-level partners-level-one"><Landmark size={15} /><span>Сервис</span><b>01</b></div><div className="partners-level partners-level-two"><GitBranch size={15} /><span>Интеграция</span><b>02</b></div><div className="partners-level partners-level-three"><Boxes size={15} /><span>Совместный продукт</span><b>03</b></div><div className="partners-level partners-level-four"><SparklesIcon /><span>Спецпроект</span><b>04</b></div></div>
        </div>
      </section>

      <section id="benefits" className="partners-benefits">
        <div className="partners-container partners-benefits-grid">{quickBenefits.map(([number, title, text]) => <article key={number}><span className="partners-benefit-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section id="formats" className="partners-formats-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ОТ ГОТОВОГО СЕРВИСА ДО НОВОГО РЫНКА</p><h2>Выберите готовую модель или предложите свою</h2></div><p>Можно прийти не с готовым решением, а с задачей или ресурсом. Модель сотрудничества разработаем вместе.</p></div><div className="partners-format-grid">{collaborationFormats.map(({ number, title, text, items, cta, icon: IconComponent, variant }) => <article key={number} className={`partners-format-card ${variant}`}><div className="partners-format-top"><span>{number}</span><IconComponent size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><ul>{items.map((item) => <li key={item}><span />{item}</li>)}</ul><a href={number === '03' ? '#special-projects' : '#form'}>{cta}<ArrowUpRight size={16} /></a><div className="partners-format-visual"><div /></div></article>)}</div></div>
      </section>

      <section id="services" className="partners-services-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ЭКОСИСТЕМА ВОКРУГ ПЕРЕВОЗКИ</p><h2>Подключаем всё, что помогает зарабатывать, экономить и снижать риски</h2></div></div><div className="partners-services-grid">{serviceDirections.map(({ icon: IconComponent, title, text }, index) => <a href="#form" className="partners-service-card" key={title}><span className="partners-service-number">{String(index + 1).padStart(2, '0')}</span><IconComponent size={21} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="partners-service-arrow" size={17} /></a>)}</div></div>
      </section>

      <section id="needs" className="partners-needs-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ПРАВИЛЬНЫЙ ПРОДУКТ — В ПРАВИЛЬНЫЙ МОМЕНТ</p><h2>Каждый этап перевозки создаёт собственный спрос</h2></div><p>Партнёрское предложение становится полезным, когда встроено в последовательность реальных действий участника.</p></div><div className="partners-needs-panel"><div className="partners-needs-line" /> <div className="partners-needs-stages">{needStages.map(({ icon: IconComponent, title, items }, index) => <article key={title}><div className="partners-need-marker"><span>0{index + 1}</span><IconComponent size={19} strokeWidth={1.5} /></div><h3>{title}</h3><div className="partners-need-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div><p className="partners-needs-caption">Финансы, сервисы и технологии появляются внутри процесса, а не отдельным рекламным слоем.</p></div></div>
      </section>

      <section id="integrations" className="partners-integration-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ТОЧКИ ИНТЕГРАЦИИ</p><h2>От витрины сервисов до встроенного действия внутри рейса</h2></div><p>Партнёрский продукт выглядит как полезная функция, а не рекламный баннер. Его точка входа зависит от задачи участника.</p></div><div className="partners-integration-layout"><div className="partners-integration-tabs">{integrationPoints.map(({ icon: IconComponent, title, badge }, index) => <button type="button" className={activeIntegration === index ? 'active' : ''} key={title} onClick={() => setActiveIntegration(index)}><IconComponent size={18} strokeWidth={1.5} /><span>{title}</span><small>{badge}</small></button>)}</div><div className="partners-integration-browser"><div className="partners-browser-top"><span /><span /><span /><b>CATALON / {integrationPoints[activeIntegration].title.toUpperCase()}</b></div><div className="partners-browser-body"><div className="partners-browser-sidebar"><i /><i /><i /><i /><i /></div><div className="partners-browser-content"><p className="partners-browser-kicker">ПОДХОДЯЩЕЕ ПРЕДЛОЖЕНИЕ</p><h3>{integrationPoints[activeIntegration].title}</h3><p>{integrationPoints[activeIntegration].text}</p><div className="partners-offer-card"><div><ShieldCheck size={18} /><div><b>Партнёрский продукт</b><span>Показывается в релевантном сценарии</span></div></div><strong>Открыть условия <ArrowUpRight size={14} /></strong></div><div className="partners-browser-meta"><span>Условия сохранены</span><span>Можно отказаться</span></div></div></div></div></div></div>
      </section>

      <section id="depth" className="partners-levels-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ГЛУБИНА СОТРУДНИЧЕСТВА</p><h2>Начните с пилота и углубляйте интеграцию по результатам</h2></div></div><div className="partners-levels-grid">{integrationLevels.map(({ number, title, text, result, icon: IconComponent, variant }) => <article key={number} className={`partners-level-card ${variant}`}><span className="partners-level-number">{number}</span><IconComponent size={24} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><div className="partners-level-result"><small>РЕЗУЛЬТАТ</small><b>{result}</b></div><div className="partners-level-scheme"><i /><i /><i /><span /></div></article>)}</div><p className="partners-levels-note">Для каждого уровня заранее определяются сценарий пользователя, зоны ответственности, данные, коммерческая модель и показатели результата.</p></div>
      </section>

      <section id="special-projects" className="partners-special-section">
        <div className="partners-container partners-special-panel"><div className="partners-special-copy"><p className="partners-kicker">ЗА ПРЕДЕЛАМИ ГОТОВЫХ ФОРМАТОВ</p><h2>Если подходящей модели ещё нет — спроектируем её вместе</h2><p>У партнёра может быть технология, инфраструктура, финансовый ресурс, экспертиза или доступ к отдельной аудитории. Catalon объединит эти возможности с логистическим процессом и создаст новый продукт.</p><a className="partners-btn partners-btn-primary" href="#form">Обсудить особый проект <ArrowUpRight size={17} /></a></div><div className="partners-special-visual"><PartnerPlaceholder label="Область под Союзика за рабочим столом" variant="partners-special-placeholder" /><div className="partners-special-chip chip-one">Финансовый продукт</div><div className="partners-special-chip chip-two">Технологический модуль</div></div><div className="partners-project-list">{uniqueProjects.map((project, index) => <span key={project}><b>{String(index + 1).padStart(2, '0')}</b>{project}</span>)}</div><blockquote>Уникальное партнёрство начинается не с рекламного пакета, а с общей бизнес-задачи.</blockquote></div>
      </section>

      <section id="models" className="partners-models-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ПРИМЕРЫ ВОЗМОЖНЫХ ФОРМАТОВ</p><h2>Партнёрские модели начинаются с конкретной задачи</h2></div><p>Это примеры возможных сценариев, а не перечень действующих партнёров.</p></div><div className="partners-models-grid">{partnerModels.map(({ icon: IconComponent, title, text }, index) => <a className="partners-model-card" href="#form" key={title}><span className="partners-model-tag">Пример модели</span><div className="partners-model-icon"><IconComponent size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="partners-model-arrow" size={17} /></a>)}</div></div>
      </section>

      <section id="partner-value" className="partners-value-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">БОЛЬШЕ, ЧЕМ КАНАЛ ПРИВЛЕЧЕНИЯ</p><h2>Партнёр получает доступ к спросу, возникающему внутри реальных операций</h2></div></div><div className="partners-value-layout"><div className="partners-funnel"><div className="partners-funnel-head"><span>Пример отчёта</span><b>Путь партнёрского продукта</b></div><div className="partners-funnel-line">{['Контекст', 'Интерес', 'Заявка', 'Подключение', 'Повторное использование'].map((label, index) => <button type="button" className={activePartnerValue === index ? 'active' : ''} key={label} onClick={() => setActivePartnerValue(index)}><span>{String(index + 1).padStart(2, '0')}</span>{label}</button>)}</div><div className="partners-funnel-detail"><div className="partners-funnel-visual"><div className="partners-funnel-bar bar-one" /><div className="partners-funnel-bar bar-two" /><div className="partners-funnel-bar bar-three" /><div className="partners-funnel-bar bar-four" /><i /></div><div><p className="partners-kicker">{partnerValueItems[activePartnerValue].title}</p><h3>{partnerValueItems[activePartnerValue].text}</h3><div className="partners-report-tags"><span>Сегмент: перевозчики</span><span>Сценарий: в пути</span><span>Результат: пример отчёта</span></div></div></div></div><div className="partners-value-list">{partnerValueItems.map(({ icon: IconComponent, title, text }, index) => <button type="button" className={activePartnerValue === index ? 'active' : ''} key={title} onClick={() => setActivePartnerValue(index)}><IconComponent size={18} strokeWidth={1.5} /><span><b>{title}</b><small>{text}</small></span><ArrowRight size={15} /></button>)}</div></div></div>
      </section>

      <section id="user-value" className="partners-user-value-section">
        <div className="partners-container partners-user-value-panel"><div className="partners-user-copy"><p className="partners-kicker">ПОЛЕЗНОСТЬ ПРЕЖДЕ ВСЕГО</p><h2>Каждое партнёрское предложение должно улучшать работу участника</h2><p>Каталог Catalon не должен превращаться в рекламную ленту. В экосистему входят продукты, создающие измеримую пользу.</p></div><div className="partners-user-principles">{userValuePrinciples.map(({ icon: IconComponent, text }) => <div key={text}><span className="partners-user-principle-icon"><IconComponent size={16} strokeWidth={1.6} /></span><p>{text}</p></div>)}</div></div>
      </section>

      <section id="launch" className="partners-launch-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ОТ ИДЕИ ДО ПИЛОТА</p><h2>Сначала проверяем ценность, затем масштабируем</h2></div><p>Каждый этап фиксирует следующий результат и помогает партнёрам двигаться в одном рабочем контуре.</p></div><div className="partners-launch-panel"><div className="partners-launch-line" /> <div className="partners-launch-grid">{launchSteps.map(({ icon: IconComponent, title, text }, index) => <article key={title}><div className="partners-launch-marker"><span>{String(index + 1).padStart(2, '0')}</span><IconComponent size={18} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><small>РЕЗУЛЬТАТ ЗАФИКСИРОВАН</small></article>)}</div><div className="partners-launch-flow"><span>Польза</span><i>→</i><span>Пилот</span><i>→</i><span>Данные</span><i>→</i><span>Решение о масштабировании</span></div></div></div>
      </section>

      <section id="commercial" className="partners-commercial-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">ПРОЗРАЧНАЯ ЭКОНОМИКА</p><h2>Формат зависит от продукта и глубины интеграции</h2></div><p>Конкретная экономика определяется после анализа продукта, пользовательского сценария и операционной нагрузки сторон.</p></div><div className="partners-commercial-grid">{commercialModels.map(({ icon: IconComponent, title, text, fit }) => <article key={title}><div className="partners-commercial-icon"><IconComponent size={19} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><span>{fit}</span></article>)}</div><p className="partners-commercial-note">Универсальный партнёрский тариф не публикуется: премиальная модель требует точного анализа задачи.</p></div>
      </section>

      <section id="analytics" className="partners-analytics-section">
        <div className="partners-container"><div className="partners-section-intro"><div><p className="partners-kicker">РЕЗУЛЬТАТ МОЖНО ИЗМЕРИТЬ</p><h2>Каждый формат получает собственную систему показателей</h2></div><p>Партнёру передаются только согласованные данные в рамках допустимой модели доступа.</p></div><div className="partners-analytics-layout"><div className="partners-analytics-dashboard"><div className="partners-dashboard-top"><span>Пример партнёрского отчёта</span><b>Последние 30 дней</b></div><div className="partners-dashboard-chart"><div className="partners-chart-grid"><i /><i /><i /><i /></div><svg viewBox="0 0 620 180" role="img" aria-label="Пример динамики партнёрских обращений"><polyline points="0,145 90,128 170,135 250,92 330,108 410,62 500,78 620,30" fill="none" stroke="#A0FF00" strokeWidth="3" /><polyline points="0,160 90,150 170,155 250,140 330,143 410,126 500,130 620,112" fill="none" stroke="#6F2DBD" strokeWidth="3" /></svg></div><div className="partners-dashboard-bottom"><div><b>1 248</b><span>релевантных обращений</span></div><div><b>18,6%</b><span>конверсия подключения</span></div><div><b>42%</b><span>повторное использование</span></div></div></div><div className="partners-metrics-list">{analyticsMetrics.map((metric, index) => <div key={metric}><span>{String(index + 1).padStart(2, '0')}</span><b>{metric}</b><CircleCheck size={15} /></div>)}</div></div><p className="partners-analytics-note"><Database size={16} />Персональные данные не используются как самостоятельный товар.</p></div>
      </section>

      <section id="selection" className="partners-selection-section">
        <div className="partners-container"><div className="partners-selection-layout"><div className="partners-selection-copy"><p className="partners-kicker">КАЧЕСТВО ЭКОСИСТЕМЫ</p><h2>Мы выбираем партнёров так же внимательно, как пользователи выбирают исполнителей</h2><p>Мы не стремимся заполнить каталог максимальным количеством компаний. Важнее качество каждого подключённого решения.</p><blockquote>Польза для участников важнее количества предложений.</blockquote></div><div className="partners-criteria-grid">{partnerCriteria.map((criterion, index) => <div key={criterion}><span>{String(index + 1).padStart(2, '0')}</span><b>{criterion}</b><CircleCheck size={15} /></div>)}</div></div></div>
      </section>

      <section id="team" className="partners-team-section">
        <div className="partners-container partners-team-panel"><div className="partners-team-copy"><p className="partners-kicker">ОДИН КОНТУР ВЗАИМОДЕЙСТВИЯ</p><h2>От бизнес-модели до технического запуска</h2><p>Единый ответственный и понятные зоны взаимодействия снижают риск, что партнёрство потеряется в ежедневной работе.</p><div className="partners-team-list"><span>Ответственный со стороны Catalon</span><span>Ответственный со стороны партнёра</span><span>Порядок обработки заявок</span><span>Формат отчётности</span></div></div><div className="partners-team-visual"><PartnerPlaceholder label="Область под композицию Союзика, Бланка и Кэшика" variant="partners-team-placeholder" /><div className="partners-team-node node-main">Партнёрство</div><div className="partners-team-node node-ops">Операции</div><div className="partners-team-node node-finance">Экономика</div></div><div className="partners-team-roles">{teamRoles.map(({ icon: IconComponent, title, text }) => <div key={title}><IconComponent size={17} strokeWidth={1.5} /><b>{title}</b><span>{text}</span></div>)}</div></div>
      </section>

      <section id="form" className="partners-form-section">
        <div className="partners-container partners-form-panel">{formSent ? <div className="partners-form-success"><div className="partners-success-icon"><CircleCheck size={28} /></div><p className="partners-kicker">ПРЕДЛОЖЕНИЕ ПОЛУЧЕНО</p><h2>Спасибо, мы изучим вашу задачу</h2><p>Мы свяжемся с вами, если увидим подходящий формат сотрудничества.</p><button type="button" className="partners-btn partners-btn-secondary" onClick={() => setFormSent(false)}>Отправить ещё одно предложение</button></div> : <><div className="partners-form-copy"><p className="partners-kicker">НАЧНЁМ С ВАШЕЙ ЗАДАЧИ</p><h2>Расскажите, что вы можете дать рынку логистики</h2><p>Подключите готовый сервис, создайте совместный продукт или предложите идею, для которой ещё не существует стандартного формата.</p><div className="partners-form-choice-list">{partnerFormats.map((format, index) => <span key={format}><b>{String(index + 1).padStart(2, '0')}</b>{format}</span>)}</div><div className="partners-form-cat-slot"><PartnerPlaceholder label="Область под Союзика для формы" variant="partners-form-placeholder" /></div></div><form className="partners-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}><div className="partners-form-heading"><span>Короткая заявка</span><small>6 обязательных полей</small></div><label>Компания<input required name="company" placeholder="Название компании" /></label><label>Имя<input required name="name" placeholder="Имя и должность" /></label><label>Рабочий контакт<input required name="contact" placeholder="Телефон или email" /></label><label>Формат сотрудничества<select required name="format" defaultValue=""><option value="" disabled>Выберите формат</option>{partnerFormats.map((format) => <option key={format}>{format}</option>)}</select></label><label>Направление<input required name="direction" placeholder="Например, финансирование" /></label><label>Краткое предложение<textarea required name="proposal" placeholder="Что вы предлагаете и кому это полезно?" /></label><button type="submit" className="partners-btn partners-btn-primary">Отправить предложение <Send size={16} /></button><small className="partners-form-disclaimer">Не обещаем автоматическое подключение каждого партнёра. Сначала изучим задачу и сценарий.</small></form></>}</div>
      </section>

      <section id="faq" className="partners-faq-section">
        <div className="partners-container partners-faq-layout"><div className="partners-faq-list"><div className="partners-faq-heading"><p className="partners-kicker">ЧАСТЫЕ ВОПРОСЫ</p><h2>О партнёрстве без лишних обещаний</h2></div>{partnerFaq.slice(0, 7).map(([question, answer], index) => { const isOpen = openFaq.includes(index); return <div className={`partners-faq-item ${isOpen ? 'is-open' : ''}`} key={question}><button type="button" onClick={() => setOpenFaq((current) => isOpen ? current.filter((item) => item !== index) : [...current, index])}><span>{question}</span><Plus size={19} /></button>{isOpen ? <p>{answer}</p> : null}</div>; })}</div><aside className="partners-faq-aside"><PartnerPlaceholder label="Область под Союзика для FAQ" variant="partners-faq-placeholder" /><div className="partners-faq-callout"><MessageCircleQuestion size={20} /><h3>Ваш формат не помещается в список?</h3><p>Опишите задачу, ресурс или идею — рассмотрим отдельную модель.</p><a href="#form">Обсудить проект <ArrowUpRight size={15} /></a></div></aside></div>
      </section>

      <section id="final-cta" className="partners-final-section">
        <div className="partners-container partners-final-panel"><div className="partners-final-copy"><p className="partners-kicker">СИЛЬНЫЕ ПАРТНЁРСТВА МЕНЯЮТ ЦЕЛЫЕ РЫНКИ</p><h2>Давайте создадим то, чего логистике сейчас не хватает</h2><p>Подключите готовый сервис, разработайте совместный продукт или предложите идею, для которой ещё не существует стандартного формата.</p><div className="partners-actions"><a className="partners-btn partners-btn-primary" href="#form">Предложить партнёрство <ArrowUpRight size={17} /></a><a className="partners-btn partners-btn-secondary" href="#special-projects">Обсудить особый проект</a></div></div><div className="partners-final-visual"><PartnerPlaceholder label="Область под финальную композицию котиков" variant="partners-final-placeholder" /><div className="partners-final-line" /></div></div>
      </section>

      <footer id="footer" className="partners-footer"><div className="partners-container"><div className="partners-footer-top"><div><span className="partners-footer-brand">CATALON</span><p>Catalon объединяет участников, сервисы и технологии вокруг реальной перевозки.</p></div><div className="partners-footer-column"><b>Партнёрство</b><a href="#formats">Подключить сервис</a><a href="#formats">Совместный продукт</a><a href="#integrations">Интеграция</a></div><div className="partners-footer-column"><b>Проекты</b><a href="#special-projects">Специальный проект</a><a href="#selection">Требования</a><a href="#form">Контакты</a></div></div><div className="partners-footer-bottom"><span>© Catalon</span><span>Партнёрская экосистема</span></div></div></footer>
    </main>
    <UnifiedFooter />
  </div>;
}

function SparklesIcon() { return <CircleDollarSign size={15} strokeWidth={1.6} />; }
function WorkflowIcon() { return <GitBranch size={24} strokeWidth={1.4} />; }
