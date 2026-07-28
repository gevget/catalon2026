import headerLogo from '../../Group 3320.svg';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const baseUrl = (path = '') => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;

const socialLinkClass = 'inline-flex h-[36px] w-[36px] shrink-0 box-border items-center justify-center px-0 text-white transition hover:text-[#B7FF2A]';

export function UnifiedFooter() {
  return (
    <footer id="contacts" className="unified-footer bg-[#12071F] px-5 pb-6 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <img src={headerLogo} alt="Каталон" className="h-9 w-auto" />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">Цифровая платформа для грузоперевозок, безопасных сделок и сервисов транспортного бизнеса.</p>
          </div>
          <div><h3 className="footer-label">Навигация</h3><div className="footer-links"><a href={baseUrl()}>Главная</a><a href={baseUrl('road-freight-russia')}>Грузоперевозки по РФ</a><a href={baseUrl('multimodal-container')}>Мультимодальные перевозки</a><a href={baseUrl('#portal')}>Сервисы</a></div></div>
          <div><h3 className="footer-label">Для кого</h3><div className="footer-links"><a href={baseUrl('for-customers')}>Заказчикам</a><a href={baseUrl('for-carriers')}>Перевозчикам</a><a href={baseUrl('for-operators')}>Экспедиторам</a></div></div>
          <div><h3 className="footer-label">Отдельно</h3><div className="footer-links"><a href={baseUrl('for-suppliers')}>Поставщикам</a><a href={baseUrl('investors')}>Инвесторам</a><a href={baseUrl('contacts')}>Контакты</a><a href={baseUrl('login')}>Войти</a><a href={baseUrl('registration')}>Регистрация</a></div></div>
          <div>
            <h3 className="footer-label">Контакты</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <a className="flex items-center gap-2 transition hover:text-[#B7FF2A]" href="mailto:info@catalon.ru"><Mail className="h-4 w-4 shrink-0" />info@catalon.ru</a>
              <a className="flex items-center gap-2 transition hover:text-[#B7FF2A]" href="tel:+78000000000"><Phone className="h-4 w-4 shrink-0" />+7 800 000-00-00</a>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" />Москва, Россия</span>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a aria-label="Telegram" title="Telegram" href="https://t.me/catalon" target="_blank" rel="noreferrer" className={socialLinkClass}><Send className="h-4 w-4 -rotate-12" /></a>
                <a aria-label="VK" title="VK" href="https://vk.com/" target="_blank" rel="noreferrer" className={`${socialLinkClass} text-xs font-bold`}>VK</a>
                <a aria-label="MAX" title="MAX" href="https://max.ru/" target="_blank" rel="noreferrer" className={`${socialLinkClass} w-[48px] text-[10px] font-bold tracking-[-0.02em]`}>MAX</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>Каталон, все права защищены</span><a href="https://tolk-usite.com/" target="_blank" rel="noreferrer" className="transition hover:text-white">Сделано TOLK+Usite</a></div>
      </div>
    </footer>
  );
}
