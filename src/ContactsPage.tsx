import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { UnifiedHeader } from './components/UnifiedHeader';
import { UnifiedFooter } from './components/UnifiedFooter';
import contactsImage from '../assets/1/image 422.png';
import { submitLeadForm } from './lib/submitLeadForm';

export default function ContactsPage() {
  const [sent, setSent] = useState(false);
  return <div className="min-h-screen bg-white text-[#19131F]" style={{ backgroundColor: '#FFFFFF' }}>
    <UnifiedHeader />
    <main>
      <section className="mx-auto mt-[76px] h-[300px] w-full max-w-[1440px] overflow-hidden bg-white" style={{ backgroundColor: '#FFFFFF' }}>
        <img src={contactsImage} alt="Контакты Каталон" className="block h-[300px] w-full rounded-b-[32px] object-cover" />
      </section>
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24 lg:pt-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F42E1]">Контакты Catalon</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Будем на связи</h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[#675F6F]">Расскажите о задаче — поможем подобрать решение для грузоперевозок, сервисов и цифрового контура компании.</p>
            <div className="mt-10 space-y-5">
              <a href="mailto:catalontech@yandex.ru" className="flex items-center gap-4 text-base font-semibold transition hover:text-[#7F42E1]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><Mail className="h-5 w-5" /></span>catalontech@yandex.ru</a>
              <a href="https://t.me/catalon" className="flex items-center gap-4 text-base font-semibold transition hover:text-[#7F42E1]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><MessageCircle className="h-5 w-5" /></span>Telegram</a>
              <a href="https://max.ru/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-base font-semibold transition hover:text-[#7F42E1]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><MessageCircle className="h-5 w-5" /></span>MAX</a>
              <a href="tel:+78000000000" className="flex items-center gap-4 text-base font-semibold transition hover:text-[#7F42E1]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><Phone className="h-5 w-5" /></span>+7 800 000-00-00</a>
              <div className="flex items-center gap-4 text-base font-semibold"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F0E8FA] text-[#7F42E1]"><MapPin className="h-5 w-5" /></span>г. Нижний Новгород, Электровозная ул., д. 7б, пом. 10</div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex min-h-[360px] items-center justify-center rounded-[32px] border border-[#DDD3E7] bg-[#F0E8FA] text-center text-sm font-semibold text-[#7F42E1]">Место под карту</div>
            <form className="rounded-[32px] bg-[#440D84] p-7 text-white sm:p-10" onSubmit={async (event) => { event.preventDefault(); try { await submitLeadForm(event.currentTarget, 'Контакты'); setSent(true); } catch { setSent(false); } }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0FF00]">Связаться с нами</p>
              <h2 className="mt-4 text-3xl font-extrabold">Оставьте контакты</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <input name="name" aria-label="Имя" placeholder="Ваше имя" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" />
                <input name="company" aria-label="Компания" placeholder="Компания" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" />
                <input name="email" aria-label="Почта" type="email" placeholder="E-mail" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" />
                <input name="phone" aria-label="Телефон" type="tel" placeholder="Телефон" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" />
              </div>
              <textarea name="message" aria-label="Сообщение" placeholder="Коротко опишите задачу" rows={4} className="mt-4 w-full resize-y rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A0FF00]" />
              <button type="submit" className="mt-5 rounded-full bg-[#A0FF00] px-7 py-3.5 text-sm font-bold text-[#350375] transition hover:bg-white">{sent ? 'Сообщение подготовлено' : 'Отправить сообщение'}</button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <UnifiedFooter />
  </div>;
}
