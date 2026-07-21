import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  FileText,
  Fuel,
  Gauge,
  Landmark,
  Mail,
  Network,
  PackageCheck,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from 'lucide-react';
import { UnifiedHeader } from './components/UnifiedHeader';
import { UnifiedFooter } from './components/UnifiedFooter';
import { ProductAnchorNav } from './components/ProductChrome';

const directions = [
  { title: 'Банковские решения', text: 'Расчётные счета, финансирование, факторинг, эквайринг и другие финансовые продукты.', icon: Landmark },
  { title: 'Лизинг и техника', text: 'Лизинг автомобилей, спецтехники, прицепов и оборудования.', icon: Truck },
  { title: 'Страхование', text: 'Страхование транспорта, грузов, ответственности и рисков перевозки.', icon: ShieldCheck },
  { title: 'Запчасти и обслуживание', text: 'Запчасти, шины, масла, сервис, ремонт и техническая помощь.', icon: Wrench },
  { title: 'Топливо и инфраструктура', text: 'Топливные карты, заправки, стоянки и придорожные сервисы.', icon: Fuel },
  { title: 'Другие B2B-сервисы', text: 'Решения, которые помогают транспортному бизнесу работать эффективнее.', icon: Network },
];

const benefits = [
  'Доступ к целевой аудитории перевозчиков и транспортных компаний',
  'Дополнительный канал привлечения клиентов',
  'Размещение продукта внутри релевантного бизнес-сценария',
  'Работа с пользователями Catalon на разных этапах перевозки',
  'Развитие долгосрочного партнёрства',
];

const benefitIcons = [Network, Users, PackageCheck, ShieldCheck, Building2];

const steps = [
  ['01', 'Заявка', 'Расскажите о компании и продукте, который хотите представить в экосистеме.', FileText],
  ['02', 'Знакомство', 'Мы изучим специализацию, условия и целевую аудиторию.', Gauge],
  ['03', 'Формат партнёрства', 'Обсудим рекомендацию, специальное предложение, размещение или интеграцию.', Network],
  ['04', 'Запуск', 'Согласуем детали и подготовим продукт к появлению в экосистеме Catalon.', PackageCheck],
] as const;

const supplierNav = [
  ['Обзор', '#supplier-overview'],
  ['Направления', '#supplier-directions'],
  ['Ценность', '#supplier-value'],
  ['Процесс', '#supplier-process'],
  ['Важно знать', '#supplier-info'],
  ['Заявка', '#supplier-form'],
] as Array<[string, string]>;

export default function ForSuppliersPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="supplier-page min-h-screen bg-[#F7F7F5] text-[#1A1A1A]">
      <UnifiedHeader />
      <ProductAnchorNav items={supplierNav} />

      <main>
        <section id="supplier-overview" className="bg-[#F7F7F5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1208px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#561A9D]">ПАРТНЁРАМ ЭКОСИСТЕМЫ</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#1A1A1A] sm:text-6xl">Станьте поставщиком решений для транспортного бизнеса</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#8496AD]">Получите дополнительный канал продаж и доступ к перевозчикам, транспортным компаниям и другим участникам экосистемы Catalon.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#supplier-form" className="inline-flex items-center gap-2 rounded-lg bg-[#A0FF00] px-6 py-3.5 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#8FE500]">Стать партнёром <ArrowRight className="h-4 w-4" /></a>
                <a href="#supplier-directions" className="inline-flex items-center gap-2 rounded-lg border border-[#440D84] px-6 py-3.5 text-sm font-bold text-[#440D84] transition hover:bg-white">Узнать о Catalon</a>
              </div>
              <p className="mt-5 text-sm text-[#8496AD]">Для банков, страховых, лизинговых и сервисных компаний</p>
            </div>
            <div className="supplier-hero-placeholder flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-[#B0BDCE] bg-white p-6 sm:min-h-[430px]">
              <div className="text-center"><span className="block text-sm font-bold uppercase tracking-[0.16em] text-[#561A9D]">Место для изображения</span><small className="mt-3 block text-sm text-[#8496AD]">Иллюстрация поставщика и сервисов Catalon</small></div>
            </div>
          </div>
        </section>

        <section id="supplier-directions" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1208px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#561A9D]">КОМУ ПОДХОДИТ ПАРТНЁРСТВО</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Подключайте продукты к реальным бизнес-сценариям</h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#8496AD]">Мы открыты к сотрудничеству с компаниями, которые создают решения для перевозчиков, транспортных компаний и грузовладельцев.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {directions.map(({ title, text, icon: Icon }) => (
                <article key={title} className="group rounded-2xl border border-[#DBDDE5] bg-white p-6 transition hover:-translate-y-1 hover:border-[#BA9AF0] hover:shadow-[0_16px_36px_rgba(68,13,132,0.1)]">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F0E8FA] text-[#440D84]"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#8496AD]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="supplier-value" className="bg-[#A0FF00] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1208px] items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#440D84]">НОВЫЙ КАНАЛ ПРОДАЖ</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Ваш продукт появляется там, где он действительно нужен</h2>
              <p className="mt-6 max-w-lg leading-7 text-[#1A1A1A]">Catalon помогает поставщикам быть ближе к клиенту — в момент возникновения конкретной потребности.</p>
              <div className="supplier-image-slot mt-8 flex min-h-[230px] items-center justify-center rounded-2xl border border-dashed border-[#440D84]/35 bg-white/30 p-6 text-center"><div><span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#440D84]">Место под изображение</span><small className="mt-2 block text-xs text-[#440D84]/65">Визуализация нового канала продаж</small></div></div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((item, index) => { const BenefitIcon = benefitIcons[index]; return <div key={item} className="flex gap-4 border-b border-[#440D84]/20 pb-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#440D84] text-[#A0FF00]"><BenefitIcon className="h-4 w-4" /></span><p className="pt-1 font-semibold leading-6">{item}</p></div>; })}
            </div>
          </div>
        </section>

        <section id="supplier-process" className="bg-[#F7F7F5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1208px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#561A9D]">КАК РАБОТАЕТ СОТРУДНИЧЕСТВО</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Подключиться к Catalon можно поэтапно</h2>
            <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-4">
              <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-[#BA9AF0] md:block" />
              {steps.map(([number, title, text, Icon]) => <article key={number} className="supplier-process-step group relative z-10"><div className="flex items-center gap-4 md:block"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#440D84] text-white transition duration-300 group-hover:bg-[#561A9D]"><Icon className="h-5 w-5" /></span></div><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#8496AD]">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="supplier-info" className="bg-[#440D84] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1208px] items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">ВАЖНО ЗНАТЬ</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Мы развиваем партнёрскую сеть постепенно</h2><p className="mt-6 max-w-2xl leading-7 text-white/70">На первом этапе ссылки на отдельные продукты и полноценные кабинеты поставщиков находятся в разработке. Сейчас мы собираем пул потенциальных партнёров и изучаем решения, которые могут быть полезны участникам Catalon.</p><p className="mt-5 max-w-2xl leading-7 text-white/70">После отправки заявки команда Catalon свяжется с вами и предложит подходящий формат дальнейшего взаимодействия.</p></div>
            <div><div className="supplier-image-slot mb-5 flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-white/30 bg-white/[0.06] p-6 text-center"><div><span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#A0FF00]">Место под изображение</span><small className="mt-2 block text-xs text-white/50">Иллюстрация партнёрской сети Catalon</small></div></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-white/15 bg-white/10 p-5"><CircleDollarSign className="h-6 w-6 text-[#A0FF00]" /><p className="mt-4 text-sm font-bold">Финансы</p></div><div className="rounded-2xl border border-white/15 bg-white/10 p-5"><Truck className="h-6 w-6 text-[#A0FF00]" /><p className="mt-4 text-sm font-bold">Техника</p></div><div className="rounded-2xl border border-white/15 bg-white/10 p-5"><ShieldCheck className="h-6 w-6 text-[#A0FF00]" /><p className="mt-4 text-sm font-bold">Защита</p></div><div className="rounded-2xl border border-white/15 bg-white/10 p-5"><Fuel className="h-6 w-6 text-[#A0FF00]" /><p className="mt-4 text-sm font-bold">Топливо</p></div><div className="rounded-2xl border border-white/15 bg-white/10 p-5"><Wrench className="h-6 w-6 text-[#A0FF00]" /><p className="mt-4 text-sm font-bold">Сервис</p></div><div className="rounded-2xl border border-white/15 bg-white/10 p-5"><Network className="h-6 w-6 text-[#A0FF00]" /><p className="mt-4 text-sm font-bold">B2B</p></div></div></div>
          </div>
        </section>

        <section id="supplier-form" className="bg-[#F7F7F5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1208px] items-start gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#561A9D]">НАЧАТЬ СОТРУДНИЧЕСТВО</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Расскажите о своей компании</h2><p className="mt-6 max-w-xl leading-7 text-[#8496AD]">Оставьте контакты — мы изучим ваше предложение и свяжемся с вами для обсуждения партнёрства.</p><div className="mt-8 flex items-center gap-3 text-sm text-[#440D84]"><Mail className="h-5 w-5" /> Ответим после изучения предложения</div></div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-[#DBDDE5] bg-white p-6 sm:p-8">
              {submitted ? <div className="py-12 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#A0FF00] text-[#440D84]"><Check className="h-7 w-7" /></div><h3 className="mt-5 text-2xl font-bold">Заявка получена</h3><p className="mt-3 text-sm leading-6 text-[#8496AD]">Спасибо! Мы изучим информацию и свяжемся с вами для обсуждения возможного сотрудничества.</p></div> : <><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">ФИО<input required name="name" className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none focus:border-[#A0FF00]" /></label><label className="text-sm font-semibold">Компания<input required name="company" className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none focus:border-[#A0FF00]" /></label><label className="text-sm font-semibold">ИНН<input name="inn" className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none focus:border-[#A0FF00]" /></label><label className="text-sm font-semibold">Телефон<input required type="tel" name="phone" className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none focus:border-[#A0FF00]" /></label><label className="text-sm font-semibold">E-mail<input required type="email" name="email" className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none focus:border-[#A0FF00]" /></label><label className="text-sm font-semibold">Сфера деятельности<input required name="industry" className="mt-2 h-12 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 outline-none focus:border-[#A0FF00]" /></label></div><label className="mt-5 block text-sm font-semibold">Ссылка на сайт<textarea name="website" rows={2} className="mt-2 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 py-3 outline-none focus:border-[#A0FF00]" /></label><label className="mt-5 block text-sm font-semibold">Комментарий о продукте или предложении<textarea required name="comment" rows={4} className="mt-2 w-full rounded-lg border border-[#B0BDCE] bg-[#F7F7F5] px-4 py-3 outline-none focus:border-[#A0FF00]" /></label><label className="mt-5 flex gap-3 text-xs leading-5 text-[#8496AD]"><input required type="checkbox" className="mt-1 accent-[#440D84]" /> Отправляя форму, вы соглашаетесь на обработку предоставленных данных.</label><button type="submit" className="mt-6 h-12 w-full rounded-lg bg-[#A0FF00] px-5 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#8FE500]">Отправить заявку</button></>}
            </form>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}
