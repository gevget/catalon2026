import { Mail, MapPin, Send } from 'lucide-react';
import headerLogo from '../../Group 3320.svg';

const baseUrl = (path = '') => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;
const socialLinkClass = 'inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center text-white transition hover:text-[#B7FF2A] focus-visible:text-[#B7FF2A]';

export function UnifiedFooter() {
  const currentPath = typeof window === 'undefined' ? '' : window.location.pathname.replace(/\/$/, '');
  const platformUrl = currentPath.endsWith('/multimodal-container')
    ? 'https://container.catalon.ru/'
    : 'https://cargo.catalon.ru/';

  return (
    <footer id="contacts" className="unified-footer bg-[#12071F] px-5 pb-6 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <img src={headerLogo} alt="Каталон" className="h-9 w-auto" loading="lazy" />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">Цифровая платформа для грузоперевозок, безопасных сделок и сервисов транспортного бизнеса.</p>
          </div>

          <nav aria-label="Навигация в подвале">
            <h2 className="footer-label">Навигация</h2>
            <div className="footer-links"><a href={baseUrl()}>Главная</a><a href={baseUrl('road-freight-russia')}>Грузоперевозки по РФ</a><a href={baseUrl('multimodal-container')}>Мультимодальные перевозки</a><a href={baseUrl('#portal')}>Сервисы</a></div>
          </nav>
          <nav aria-label="Разделы для участников">
            <h2 className="footer-label">Для кого</h2>
            <div className="footer-links"><a href={baseUrl('for-customers')}>Заказчикам</a><a href={baseUrl('for-carriers')}>Перевозчикам</a><a href={baseUrl('for-operators')}>Экспедиторам</a></div>
          </nav>
          <nav aria-label="Дополнительные разделы">
            <h2 className="footer-label">Отдельно</h2>
            <div className="footer-links">
              <a href={baseUrl('for-suppliers')}>Поставщикам</a>
              <a href={baseUrl('investors')}>Инвесторам</a>
              <a href={baseUrl('contacts')}>Контакты</a>
              <a href={platformUrl} target="_blank" rel="noopener noreferrer">Войти</a>
              <a href={platformUrl} target="_blank" rel="noopener noreferrer">Регистрация</a>
            </div>
          </nav>

          <div>
            <h2 className="footer-label">Контакты</h2>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <a className="flex items-center gap-2 transition hover:text-[#B7FF2A]" href="mailto:catalontech@yandex.ru"><Mail className="h-4 w-4 shrink-0" />catalontech@yandex.ru</a>
              <address className="flex items-start gap-2 not-italic"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />г. Нижний Новгород, Электровозная ул., д. 7б, пом. 10</address>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a aria-label="Telegram" title="Telegram" href="https://t.me/catalon" target="_blank" rel="noopener noreferrer" className={socialLinkClass}><Send className="h-5 w-5 -rotate-12" /></a>
                <a aria-label="ВКонтакте" title="ВКонтакте" href="https://vk.com/" target="_blank" rel="noopener noreferrer" className={`${socialLinkClass} text-xs font-bold`}>VK</a>
                <a aria-label="MAX" title="MAX" href="https://max.ru/" target="_blank" rel="noopener noreferrer" className={`${socialLinkClass} text-[10px] font-bold tracking-[-0.02em]`}>MAX</a>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Юридические документы" className="footer-legal-links">
          <a href={baseUrl('privacy')}>Политика конфиденциальности</a>
          <a href={baseUrl('personal-data-consent')}>Согласие на обработку персональных данных</a>
          <a href={baseUrl('terms')}>Пользовательское соглашение</a>
        </nav>
        <div className="flex flex-col gap-3 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>Каталон, все права защищены</span>
          <a href="https://tolk-usite.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Сделано TOLK+Usite</a>
        </div>
      </div>
    </footer>
  );
}
