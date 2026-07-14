import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import headerLogo from '../../Group 3320.svg';

function baseUrl(anchor = '') {
  const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
  return `${base}/${anchor}`;
}

type ProductHeaderProps = {
  portalHref: string;
  startHref: string;
};

export function ProductHeader({ portalHref, startHref }: ProductHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    ['О платформе', baseUrl('#about')],
    ['Решения', baseUrl('#solutions')],
    ['Сервисы', baseUrl('#services')],
    ['Портал', portalHref],
    ['Контакты', '#contacts'],
  ];

  return (
    <header className="sticky top-0 z-50 h-14 bg-[#440D84] text-white shadow-[0_8px_30px_rgba(36,8,67,0.15)]">
      <div className="flex h-full w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href={baseUrl()} aria-label="Catalon — на главную"><img src={headerLogo} alt="Catalon" className="h-7 w-auto" /></a>
        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex" aria-label="Основная навигация">
          {links.map(([label, href]) => <a key={label} href={href} className="transition hover:text-[#B7FF2A]">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href="#contacts" className="px-4 py-2 text-sm font-semibold text-white/85">Войти</a>
          <a href={startHref} className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#440D84] transition hover:bg-[#B7FF2A]">Регистрация</a>
        </div>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 sm:hidden" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-label="Открыть меню"><Menu className="h-5 w-5" /></button>
      </div>
      {mobileOpen && <nav className="absolute inset-x-0 top-14 grid gap-1 bg-[#440D84] px-4 pb-5 shadow-xl sm:hidden" aria-label="Мобильная навигация">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)} className="border-t border-white/10 py-3 text-sm font-semibold">{label}</a>)}<a href={startHref} onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#440D84]">Регистрация</a></nav>}
    </header>
  );
}

export function ProductFooter() {
  return (
    <footer className="bg-[#12071F] px-4 pb-6 pt-16 text-white sm:px-6 lg:px-10" id="contacts">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><img src={headerLogo} alt="Catalon" className="h-9 w-auto" /><p className="mt-5 max-w-md text-sm leading-6 text-white/55">Marketplace логистических решений для управления перевозками, безопасных сделок и сервисов транспортного бизнеса.</p></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Навигация</h3><div className="mt-5 grid gap-3 text-sm text-white/70"><a href={baseUrl()}>Главная</a><a href={baseUrl('#solutions')}>Решения</a><a href={baseUrl('#services')}>Сервисы</a><a href={baseUrl('#portal')}>Портал</a></div></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Перевозки</h3><div className="mt-5 grid gap-3 text-sm text-white/70"><a href={baseUrl('road-freight-russia')}>По России</a><a href={baseUrl('multimodal-container')}>Мультимодальные</a><a href={baseUrl('#solutions')}>Все решения</a><a href={baseUrl('#start')}>Регистрация</a></div></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Связаться</h3><div className="mt-5 grid gap-3 text-sm text-white/70"><a href="mailto:info@catalon.ru">info@catalon.ru</a><a href="tel:+78000000000">+7 800 000-00-00</a><span>Москва, Россия</span></div></div>
        </div>
        <div className="flex flex-col gap-3 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>Catalon, все права защищены</span><a href="https://tolk-usite.com/" target="_blank" rel="noreferrer" className="hover:text-white">TOLK+Usite</a></div>
      </div>
    </footer>
  );
}

export function ProductAnchorNav({ items }: { items: Array<[string, string]> }) {
  return <nav className="sticky top-14 z-40 overflow-x-auto border-b border-[#E6DFF0] bg-white/95 backdrop-blur" aria-label="Навигация по странице"><div className="mx-auto flex min-w-max max-w-[1208px] gap-6 px-4 py-3 text-xs font-semibold text-[#675F6F] sm:px-6 lg:px-0">{items.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap border-b border-transparent py-1 transition hover:border-[#B7FF2A] hover:text-[#440D84]">{label}</a>)}</div></nav>;
}

export function StickyProductCta({ label, href, children }: { label: string; href: string; children: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-4 transition duration-300 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}><div className="mx-auto flex max-w-[1208px] items-center justify-between gap-4 rounded-[18px] bg-[#440D84] px-4 py-3 text-white shadow-[0_12px_40px_rgba(68,13,132,0.22)] sm:px-5"><span className="hidden text-sm font-semibold sm:block">{label}</span><a href={href} className="inline-flex w-full items-center justify-center rounded-full bg-[#A0FF00] px-5 py-3 text-sm font-bold text-[#350375] transition hover:bg-[#BA9AF0] sm:w-auto">{children}</a></div></div>;
}
