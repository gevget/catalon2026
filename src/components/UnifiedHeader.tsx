import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import headerLogo from '../../Group 3320.svg';

const baseUrl = (path = '') => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;

const audience = [
  ['Заказчикам', 'for-customers'],
  ['Перевозчикам', 'for-carriers'],
  ['Экспедиторам', 'for-operators'],
] as const;

const links = [
  ['Главная', baseUrl()],
  ['Грузоперевозки по РФ', baseUrl('road-freight-russia')],
  ['Мультимодальные перевозки', baseUrl('multimodal-container')],
  ['Сервисы', baseUrl('#portal')],
] as const;

const spotlightLinks = [
  ['Поставщикам', baseUrl('for-suppliers')],
  ['Инвесторам', baseUrl('investors')],
] as const;

export function UnifiedHeader() {
  const [open, setOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);
  const audienceRef = useRef<HTMLDivElement>(null);
  const currentPath = typeof window === 'undefined' ? '' : window.location.pathname.replace(/\/$/, '') || '/';

  const isCurrentPage = (href: string) => {
    if (!href || typeof window === 'undefined') return false;
    const url = new URL(href, window.location.href);
    if (url.hash) return false;
    return (url.pathname.replace(/\/$/, '') || '/') === currentPath;
  };

  const homePath = typeof window === 'undefined'
    ? '/'
    : new URL(baseUrl(), window.location.href).pathname.replace(/\/$/, '') || '/';
  const isHomePage = currentPath === homePath;
  const isAudiencePage = audience.some(([, path]) => isCurrentPage(baseUrl(path)));
  const isContactsPage = isCurrentPage(baseUrl('contacts'));
  const platformUrl = currentPath.endsWith('/multimodal-container')
    ? 'https://container.catalon.ru/'
    : 'https://cargo.catalon.ru/';

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setAudienceOpen(false);
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('site-menu-open', open);
    return () => document.body.classList.remove('site-menu-open');
  }, [open]);

  const activeClass = 'text-[#B7FF2A]';

  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к основному содержимому</a>
      <div className="sticky top-0 z-50">
        <header className="unified-header bg-[#440D84] text-white shadow-[0_8px_30px_rgba(36,8,67,0.15)]">
          <div className="mx-auto flex h-[48px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
            <a href={baseUrl()} aria-label="Каталон — на главную">
              <img src={headerLogo} alt="Каталон" className="h-7 w-auto" />
            </a>

            <nav aria-label="Основная навигация" className="hidden items-center gap-5 text-sm font-semibold xl:flex">
              {links.map(([label, href]) => {
                const active = label === 'Главная' ? isHomePage : isCurrentPage(href);
                return <a key={label} href={href} aria-current={active ? 'page' : undefined} className={`whitespace-nowrap transition hover:text-[#B7FF2A] ${active ? activeClass : ''}`}>{label}</a>;
              })}
              {spotlightLinks.map(([label, href]) => {
                const active = isCurrentPage(href);
                return <a key={label} href={href} aria-current={active ? 'page' : undefined} className={`whitespace-nowrap font-bold transition hover:text-[#B7FF2A] ${active ? activeClass : 'text-white'}`}>{label}</a>;
              })}
              <div
                ref={audienceRef}
                className="relative"
                onMouseEnter={() => setAudienceOpen(true)}
                onMouseLeave={() => setAudienceOpen(false)}
                onFocus={() => setAudienceOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setAudienceOpen(false);
                }}
              >
                <button
                  type="button"
                  aria-expanded={audienceOpen}
                  aria-controls="audience-menu"
                  onClick={() => setAudienceOpen((value) => !value)}
                  className={`flex items-center gap-1 whitespace-nowrap font-semibold transition hover:text-[#B7FF2A] ${isAudiencePage ? activeClass : ''}`}
                >
                  Для кого
                  <ChevronDown className={`h-4 w-4 transition-transform ${audienceOpen ? 'rotate-180' : ''}`} />
                </button>
                <div id="audience-menu" className={`absolute left-0 top-full z-50 w-52 transition ${audienceOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                  <div className="rounded-b-2xl border border-white/10 bg-[#2A0842] p-2 shadow-2xl">
                    {audience.map(([label, path]) => {
                      const href = baseUrl(path);
                      const active = isCurrentPage(href);
                      return <a key={label} href={href} aria-current={active ? 'page' : undefined} onClick={() => setAudienceOpen(false)} className={`block rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/10 hover:text-[#B7FF2A] ${active ? activeClass : 'text-white/80'}`}>{label}</a>;
                    })}
                  </div>
                </div>
              </div>
              <a href={baseUrl('contacts')} aria-current={isContactsPage ? 'page' : undefined} className={`whitespace-nowrap transition hover:text-[#B7FF2A] ${isContactsPage ? activeClass : ''}`}>Контакты</a>
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-semibold text-white/85 transition hover:text-[#B7FF2A]">Войти</a>
              <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#440D84] transition hover:bg-[#B7FF2A]">Регистрация</a>
            </div>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 xl:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-site-menu"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <nav id="mobile-site-menu" aria-label="Мобильная навигация" className="grid max-h-[calc(100dvh-48px)] gap-1 overflow-y-auto border-t border-white/10 bg-[#440D84] px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] xl:hidden">
              {links.map(([label, href]) => {
                const active = label === 'Главная' ? isHomePage : isCurrentPage(href);
                return <a key={label} href={href} onClick={() => setOpen(false)} aria-current={active ? 'page' : undefined} className={`border-t border-white/10 py-3 text-sm font-semibold ${active ? activeClass : ''}`}>{label}</a>;
              })}
              {spotlightLinks.map(([label, href]) => {
                const active = isCurrentPage(href);
                return <a key={label} href={href} onClick={() => setOpen(false)} aria-current={active ? 'page' : undefined} className={`border-t border-white/10 py-3 text-sm font-semibold ${active ? activeClass : 'text-white'}`}>{label}</a>;
              })}
              <span className={`border-t border-white/10 py-3 text-sm font-semibold ${isAudiencePage ? activeClass : ''}`}>Для кого</span>
              {audience.map(([label, path]) => {
                const href = baseUrl(path);
                const active = isCurrentPage(href);
                return <a key={label} href={href} onClick={() => setOpen(false)} aria-current={active ? 'page' : undefined} className={`min-h-11 pl-4 text-sm ${active ? activeClass : 'text-white/75'}`}>{label}</a>;
              })}
              <a href={baseUrl('contacts')} onClick={() => setOpen(false)} aria-current={isContactsPage ? 'page' : undefined} className={`border-t border-white/10 py-3 text-sm font-semibold ${isContactsPage ? activeClass : ''}`}>Контакты</a>
              <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="py-3 text-sm font-semibold">Войти</a>
              <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#440D84]">Регистрация</a>
            </nav>
          )}
        </header>
      </div>
    </>
  );
}
