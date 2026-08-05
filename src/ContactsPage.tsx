import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { UnifiedHeader } from './components/UnifiedHeader';
import { UnifiedFooter } from './components/UnifiedFooter';
import contactsImage from '../assets/1/image 422.webp';
import { submitLeadForm } from './lib/submitLeadForm';

export default function ContactsPage() {
  const [sent, setSent] = useState(false);
  return <div className="min-h-screen bg-white text-[#19131F]" style={{ backgroundColor: '#FFFFFF' }}>
    <UnifiedHeader />
    <main id="main-content">
      <section className="mx-auto h-[300px] w-full max-w-[1440px] overflow-hidden bg-white" style={{ backgroundColor: '#FFFFFF' }}>
        <img src={contactsImage} alt="Команда поддержки Каталон" className="block h-[300px] w-full object-cover object-[center_58%]" fetchPriority="high" />
      </section>
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24 lg:pt-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F42E1]">Контакты Каталон</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Будем на связи</h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[#675F6F]">Расскажите о задаче — поможем подобрать решение для грузоперевозок, сервисов и цифрового контура компании.</p>
            <div className="mt-10 space-y-5">
              <a href="mailto:catalontech@yandex.ru" className="flex items-center gap-4 text-base font-semibold transition hover:text-[#7F42E1]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><Mail className="h-5 w-5" /></span>catalontech@yandex.ru</a>
              <a href="https://t.me/catalon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-base font-semibold transition hover:text-[#7F42E1]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><MessageCircle className="h-5 w-5" /></span>Telegram</a>
              <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-base font-semibold transition hover:text-[#7F42E1]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><MessageCircle className="h-5 w-5" /></span>MAX</a>
              <div className="flex items-center gap-4 text-base font-semibold"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><MapPin className="h-5 w-5" /></span>г. Нижний Новгород, Электровозная ул., д. 7б, пом. 10</div>
            </div>
          </div>
          <div className="space-y-8">
            <a href="https://yandex.ru/maps/?text=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9%20%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%2C%20%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B7%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%207%D0%B1" target="_blank" rel="noopener noreferrer" className="group flex min-h-[360px] flex-col justify-between rounded-[32px] border border-[#DDD3E7] bg-[#F0E8FA] p-8 text-[#440D84] transition hover:border-[#7F42E1] hover:shadow-[0_24px_60px_rgba(68,13,132,.12)] sm:p-10">
              <MapPin className="h-12 w-12 text-[#7F42E1]" strokeWidth={1.5} />
              <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7F42E1]">Офис Каталон</p><h2 className="mt-4 max-w-lg text-2xl font-extrabold sm:text-3xl">Нижний Новгород, Электровозная ул., д. 7б, пом. 10</h2><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Открыть на карте <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></div>
            </a>
            <form className="rounded-[32px] bg-[#440D84] p-7 text-white sm:p-10" onSubmit={async (event) => { event.preventDefault(); try { await submitLeadForm(event.currentTarget, 'Контакты'); setSent(true); } catch { setSent(false); } }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">Связаться с нами</p>
              <h2 className="mt-4 text-3xl font-extrabold">Оставьте контакты</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label><span className="sr-only">Имя</span><input required name="name" autoComplete="name" placeholder="Ваше имя" className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" /></label>
                <label><span className="sr-only">Компания</span><input name="company" autoComplete="organization" placeholder="Компания" className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" /></label>
                <label><span className="sr-only">Электронная почта</span><input required name="email" autoComplete="email" type="email" placeholder="E-mail" className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" /></label>
                <label><span className="sr-only">Телефон для обратной связи</span><input name="phone" autoComplete="tel" type="tel" inputMode="tel" placeholder="Телефон для обратной связи" className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" /></label>
              </div>
              <label className="mt-4 block"><span className="sr-only">Сообщение</span><textarea required name="message" placeholder="Коротко опишите задачу" rows={4} className="w-full resize-y rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" /></label>
              <button type="submit" className="mt-5 rounded-full bg-[#A0FF00] px-7 py-3.5 text-sm font-bold text-[#350375] transition hover:bg-white">{sent ? 'Сообщение отправлено' : 'Отправить сообщение'}</button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <UnifiedFooter />
  </div>;
}
