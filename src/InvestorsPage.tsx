import { useState, type FormEvent } from 'react';
import {
  ArrowRight, BarChart3, Building2, Check, ChevronDown, CircleDollarSign,
  CloudCog, FileCheck2, Handshake, Landmark, LockKeyhole, Mail, Network,
  PackageCheck, Route, ShieldCheck, Sparkles, Users, WalletCards,
} from 'lucide-react';
import { UnifiedHeader } from './components/UnifiedHeader';
import { UnifiedFooter } from './components/UnifiedFooter';
import { ProductAnchorNav } from './components/ProductChrome';

const investorNav: Array<[string, string]> = [
  ['Обзор', '#investor-overview'], ['Экосистема', '#investor-ecosystem'], ['Подход', '#investor-approach'],
  ['Логика', '#investor-logic'], ['Инвестиции', '#investor-directions'], ['Партнёры', '#investor-partners'],
  ['Принципы', '#investor-principles'], ['Стадия', '#investor-stage'], ['Заявка', '#investor-form'], ['FAQ', '#investor-faq'],
];

const ecosystem = [
  ['Грузовые перевозки', 'Автомобильные, мультимодальные и контейнерные перевозки с прозрачными условиями, безопасной сделкой и цифровым сопровождением.', TruckIcon],
  ['ВЭД и международная логистика', 'Инструменты для организации сложных цепочек поставок, взаимодействия участников и контроля статусов перевозки.', Route],
  ['Финансовые и сервисные решения', 'Финансирование, страхование, лизинг, топливо, запчасти, техника и другие услуги для транспортного бизнеса.', CircleDollarSign],
] as const;

function TruckIcon({ className }: { className?: string }) { return <PackageCheck className={className} />; }

function ImagePlaceholder({ label = 'Место для изображения', className = '' }: { label?: string; className?: string }) {
  return <div className={`investor-image-placeholder flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-white/30 bg-white/[0.06] p-6 text-center ${className}`}><div><Sparkles className="mx-auto h-7 w-7 text-[#A0FF00]" /><span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-white/70">{label}</span><small className="mt-2 block text-xs leading-5 text-white/45">Иллюстрация Catalon</small></div></div>;
}

const approach = [
  ['Комплексный подход', 'Вместо набора несвязанных сервисов — единая система вокруг перевозки.', Network],
  ['Автоматизация', 'Рутинные операции становятся понятнее и быстрее для всех участников.', CloudCog],
  ['Прозрачность', 'Статусы, условия и документы остаются зафиксированными в цифровом контуре.', FileCheck2],
  ['Снижение рисков', 'Безопасная сделка и контроль процессов помогают защищать интересы сторон.', ShieldCheck],
  ['Польза для бизнеса', 'Продукты создаются из реальных задач транспортного рынка.', Sparkles],
  ['Постепенное развитие', 'От простых сценариев — к полноценной экосистеме без лишних обещаний.', BarChart3],
] as const;

const logic = [
  ['Большой и фрагментированный рынок', 'Многим компаниям нужны понятные цифровые инструменты для ежедневной работы.'],
  ['Несколько источников ценности', 'Перевозки, финансовые, страховые, сервисные и технологические направления дополняют друг друга.'],
  ['Сетевой эффект', 'Чем больше участников работает в одном контуре, тем полезнее становится экосистема.'],
  ['Постепенное масштабирование', 'Развитие возможно по направлениям, регионам и бизнес-сценариям.'],
  ['Стратегическое участие', 'Партнёр может дать не только капитал, но и доступ к клиентам, инфраструктуре или экспертизе.'],
];

const investmentDirections = [
  ['Развитие цифровой платформы', 'Продуктовая архитектура, интерфейсы и сервисы для участников перевозки.', CloudCog],
  ['Продуктовая команда', 'Создание и усиление команды, которая превращает задачи рынка в работающие решения.', Users],
  ['Подключение участников', 'Перевозчики, грузовладельцы, операторы и партнёры экосистемы.', Handshake],
  ['Операционный контур', 'Процессы сопровождения перевозок и качество взаимодействия с клиентами.', PackageCheck],
  ['Финансовые и сервисные продукты', 'Развитие направлений, необходимых транспортному бизнесу.', WalletCards],
  ['Интеграции и инфраструктура', 'Связь с внешними системами, юридическая база и тестирование направлений.', Landmark],
] as const;

const partnerTypes = [
  'Опыт в логистике и грузоперевозках', 'Доступ к грузовладельцам и транспортным компаниям',
  'Банковская, страховая или финансовая экспертиза', 'Транспортная и складская инфраструктура',
  'Технологические ресурсы', 'Выход на крупный бизнес', 'Региональная сеть',
  'Опыт масштабирования цифровых платформ', 'Помощь в формировании команды', 'Готовность к стратегическому участию',
];

const faqs = [
  ['Какие форматы сотрудничества возможны?', 'Финансовая инвестиция, стратегическое партнёрство, инвестиция в отдельное направление, технологическое сотрудничество, совместный запуск продукта или доступ к инфраструктуре и каналам продаж.'],
  ['Какие финансовые показатели доступны для обсуждения?', 'Финансовые показатели и инвестиционный пакет предоставляются после первичного контакта и знакомства с профилем потенциального партнёра.'],
  ['Можно ли участвовать не только капиталом?', 'Да. Для Catalon важны также отраслевые знания, доступ к клиентам, инфраструктура, технологии, каналы продаж и помощь в формировании команды.'],
  ['На что направляются инвестиции?', 'На развитие платформы, команды, операционного контура, подключение участников, интеграции и запуск финансовых и сервисных направлений.'],
  ['Как начать диалог?', 'Оставьте контакты в форме. Мы изучим ваш профиль и свяжемся для обсуждения возможного формата сотрудничества.'],
];

export default function InvestorsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return <div className="investor-page min-h-screen bg-[#2A0751] text-white">
    <UnifiedHeader />
    <ProductAnchorNav items={investorNav} />
    <main>
      <section id="investor-overview" className="relative overflow-hidden bg-[#2A0751] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#561A9D]/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1208px] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">СТРАТЕГИЧЕСКОЕ ПАРТНЁРСТВО</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Инвестируйте в цифровую инфраструктуру грузовых перевозок</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#D8CFE5]">Catalon развивает комплексную платформу для грузовых перевозок, ВЭД и сопутствующих сервисов.</p>
            <p className="mt-4 max-w-xl leading-7 text-white/65">Мы объединяем логистику, автоматизацию, финансовые и сервисные решения в единую экосистему для бизнеса. Сейчас Catalon развивается на средства основателей и открыт к диалогу со стратегическими партнёрами и инвесторами.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#investor-form" className="inline-flex items-center gap-2 rounded-lg bg-[#A0FF00] px-6 py-3.5 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#BA9AF0]">Обсудить партнёрство <ArrowRight className="h-4 w-4" /></a><a href="#investor-form" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-[#A0FF00] hover:text-[#A0FF00]">Оставить заявку</a></div>
            <p className="mt-5 max-w-xl text-xs leading-5 text-white/45">Финансовые показатели, условия участия и инвестиционный пакет предоставляются после первичного контакта.</p>
          </div>
          <ImagePlaceholder label="Место под изображение" className="investor-hero-art min-h-[420px] rounded-[28px] border-white/10 bg-[#440D84]/40 shadow-[0_24px_80px_rgba(15,0,40,0.3)]" />
        </div>
      </section>

      <section id="investor-ecosystem" className="bg-[#440D84] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1208px]"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">ЕДИНАЯ ЭКОСИСТЕМА</p><h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Что создаёт Catalon</h2><p className="mt-5 max-w-2xl leading-7 text-white/65">Мы создаём инфраструктуру вокруг реальных задач транспортного бизнеса — от перевозки до сопутствующих сервисов.</p><div className="mt-12 grid gap-4 lg:grid-cols-3">{ecosystem.map(([title, text]) => <article key={title} className="group rounded-2xl border border-white/15 bg-[#2A0751]/45 p-4 transition hover:-translate-y-1 hover:border-[#A0FF00]/60"><ImagePlaceholder label="Место под изображение" className="min-h-[180px] border-white/15 bg-[#561A9D]/40" /><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{text}</p></article>)}</div></div></section>

      <section id="investor-approach" className="bg-[#2A0751] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1208px]"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BA9AF0]">НАШ ПОДХОД</p><h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Catalon объединяет разрозненные процессы в понятную цифровую систему</h2><div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">{approach.map(([title, text, Icon]) => <article key={title} className="flex gap-4 border-t border-white/15 pt-5"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#561A9D] text-[#A0FF00]"><Icon className="h-5 w-5" /></div><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></div></article>)}</div></div></section>

      <section id="investor-logic" className="bg-[#A0FF00] px-5 py-20 text-[#1A1A1A] sm:px-8 lg:px-10 lg:py-24"><div className="mx-auto grid max-w-[1208px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#440D84]">ИНВЕСТИЦИОННАЯ ЛОГИКА</p><h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Catalon строится как платформа с несколькими точками роста</h2><p className="mt-5 max-w-2xl leading-7">Ниже — логика развития платформы без подмены её конкретными финансовыми прогнозами или обещаниями доходности.</p><div className="mt-10 grid gap-3">{logic.map(([title]) => <div key={title} className="rounded-xl border border-[#440D84]/20 bg-white/25 px-5 py-4 font-bold text-[#440D84]">{title}</div>)}</div></div><div className="rounded-3xl border border-[#440D84]/25 bg-white/20 p-4"><div className="flex min-h-[520px] items-center justify-center rounded-2xl border border-dashed border-[#440D84]/35 text-center"><div><Sparkles className="mx-auto h-8 w-8 text-[#440D84]" /><span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-[#440D84]">Большое изображение</span><small className="mt-2 block text-xs text-[#440D84]/65">Визуализация инвестиционной логики Catalon</small></div></div></div></div></section>

      <section id="investor-directions" className="bg-[#1A1A1A] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1208px] gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">МАСШТАБИРОВАНИЕ</p><h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Ресурсы нужны для перехода от продукта к масштабируемой системе</h2><p className="mt-6 max-w-lg leading-7 text-white/60">Инвестиции и стратегическое участие направлены на развитие платформы и тех направлений, которые создают пользу для участников рынка.</p><div className="mt-8 flex items-center gap-3 text-sm text-[#A0FF00]"><LockKeyhole className="h-5 w-5" /> Без выдуманных показателей и гарантий</div></div><div className="grid gap-3 sm:grid-cols-2">{investmentDirections.map(([title, text, Icon]) => <article key={title} className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 transition hover:border-[#A0FF00]/60"><Icon className="h-5 w-5 text-[#A0FF00]" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></article>)}</div></div></section>

      <section id="investor-partners" className="bg-[#440D84] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1208px] items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">КАПИТАЛ ПЛЮС ВОЗМОЖНОСТИ</p><h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Нам интересны партнёры, которые способны ускорить развитие Catalon</h2><div className="mt-12 grid gap-3 sm:grid-cols-3">{partnerTypes.slice(0, 9).map((item) => <div key={item} className="rounded-2xl border border-white/15 bg-[#561A9D] p-4 text-sm font-semibold leading-6 transition hover:-translate-y-1 hover:bg-[#6A28B3]"><span className="mb-4 block h-1.5 w-8 rounded-full bg-[#A0FF00]" />{item}</div>)}</div><p className="mt-10 max-w-2xl text-xl font-bold text-[#A0FF00]">Капитал важен. Но ещё важнее — возможность ускорить развитие Catalon.</p></div><ImagePlaceholder label="Большое изображение" className="min-h-[520px]" /></div></section>

      <section id="investor-principles" className="bg-[#2A0751] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1208px] gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BA9AF0]">НАШИ ПРИНЦИПЫ</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Мы строим Catalon с расчётом на долгосрочную пользу</h2></div><div className="grid gap-3 sm:grid-cols-2">{[['Польза', 'Продукты и сервисы должны приносить бизнесу практическую пользу.'], ['Честность', 'Работа строится на честности — в продуктах, отношениях и договорённостях.'], ['Прозрачность', 'Условия и взаимодействие должны быть понятны всем участникам.'], ['Снижение рисков', 'Развитие сервисов должно делать процессы безопаснее и предсказуемее.'], ['Долгосрочность', 'Мы развиваем экосистему с расчётом на устойчивую пользу рынка.']].map(([title, text]) => <article key={title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-5"><h3 className="font-bold text-[#A0FF00]">{title}</h3><p className="mt-2 text-sm leading-6 text-white/65">{text}</p></article>)}</div></div></section>

      <section id="investor-stage" className="bg-[#561A9D] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="mx-auto grid max-w-[1208px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">ОТКРЫТЫ К ДИАЛОГУ</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Catalon находится на этапе формирования и развития экосистемы</h2><p className="mt-6 max-w-2xl leading-7 text-white/70">Проект развивается на средства основателей, формирует продуктовую архитектуру и ключевые направления. Мы рассматриваем стратегическое партнёрство с инвесторами и компаниями, способными усилить Catalon.</p></div><ImagePlaceholder label="Большое изображение" className="min-h-[420px]" /></div></section>

      <section id="investor-form" className="bg-[#F7F7F5] px-5 py-20 text-[#1A1A1A] sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1208px] items-start gap-12 lg:grid-cols-[0.9fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#561A9D]">ПЕРВЫЙ КОНТАКТ</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Обсудить стратегическое партнёрство</h2><p className="mt-6 max-w-xl leading-7 text-[#687487]">Оставьте контакты — мы изучим ваш профиль и свяжемся для обсуждения возможного сотрудничества.</p><div className="mt-8 flex items-center gap-3 text-sm text-[#440D84]"><Mail className="h-5 w-5" /> Ответим после изучения информации</div><div className="mt-10 min-h-[360px] rounded-2xl border border-dashed border-[#B0BDCE] bg-white p-6"><div className="flex h-full min-h-[310px] items-center justify-center text-center"><div><Sparkles className="mx-auto h-7 w-7 text-[#561A9D]" /><span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-[#561A9D]">Прямоугольное место под изображение</span><small className="mt-2 block text-xs text-[#687487]">Иллюстрация стратегического партнёрства Catalon</small></div></div></div></div><form onSubmit={handleSubmit} className="rounded-2xl border border-[#DBDDE5] bg-white p-6 shadow-[0_18px_48px_rgba(68,13,132,0.1)] sm:p-8">{submitted ? <div className="py-12 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#A0FF00] text-[#440D84]"><Check className="h-7 w-7" /></div><h3 className="mt-5 text-2xl font-bold">Заявка получена</h3><p className="mt-3 text-sm leading-6 text-[#687487]">Спасибо! Мы изучим информацию и свяжемся с вами для обсуждения возможного сотрудничества.</p></div> : <><div className="grid gap-5 sm:grid-cols-2">{[['ФИО', 'name', 'text'], ['Компания', 'company', 'text'], ['Сфера деятельности', 'industry', 'text'], ['Телефон', 'phone', 'tel'], ['E-mail', 'email', 'email']].map(([label, name, type]) => <label key={name} className="text-sm font-semibold">{label}<input required name={name} type={type} className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none transition focus:border-[#440D84] focus:ring-2 focus:ring-[#A0FF00]/50" /></label>)}<label className="text-sm font-semibold">Тип интереса<select required name="interest" className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none focus:border-[#440D84]"><option value="">Выберите формат</option><option>Финансовая инвестиция</option><option>Стратегическое партнёрство</option><option>Технологическое сотрудничество</option><option>Другой формат</option></select></label></div><label className="mt-5 block text-sm font-semibold">Комментарий<textarea name="comment" rows={4} className="mt-2 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 py-3 outline-none focus:border-[#440D84]" /></label><label className="mt-5 flex gap-3 text-xs leading-5 text-[#687487]"><input required type="checkbox" className="mt-1 accent-[#440D84]" /> Отправляя форму, вы соглашаетесь на обработку предоставленных данных.</label><button type="submit" className="mt-6 h-12 w-full rounded-lg bg-[#A0FF00] px-5 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#8FE500]">Отправить заявку</button></>}</form></div></section>

      <section id="investor-faq" className="bg-[#F7F7F5] px-5 pb-20 text-[#1A1A1A] sm:px-8 lg:px-10 lg:pb-28"><div className="mx-auto max-w-[980px]"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#561A9D]">FAQ</p><h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Ответы на основные вопросы</h2><div className="investor-faq-list mt-10 overflow-hidden rounded-2xl border border-[#DBDDE5] bg-white">{faqs.map(([question, answer], index) => <article key={question} className="investor-faq-item border-b border-[#DBDDE5] px-5 last:border-b-0 sm:px-7"><button type="button" className="flex min-h-[76px] w-full items-center justify-between gap-6 py-5 text-left text-base font-bold leading-6 text-[#1A1A1A] transition hover:text-[#440D84]" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`investor-faq-answer-${index}`}><span className="pr-3">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[#440D84] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} /></button><div id={`investor-faq-answer-${index}`} className={`overflow-hidden transition-[max-height,opacity] duration-300 ${openFaq === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}><p className="max-w-3xl text-sm leading-6 text-[#687487]">{answer}</p></div></article>)}</div></div></section>
    </main>
    <UnifiedFooter />
  </div>;
}
