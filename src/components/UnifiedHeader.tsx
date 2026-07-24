import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import headerLogo from '../../Group 3320.svg';

const baseUrl = (path = '') => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;
const audience = [['Заказчикам', 'for-customers'], ['Перевозчикам', 'for-carriers'], ['Операторам', 'for-operators'], ['Партнёрам', 'partners'], ['Поставщикам', 'for-suppliers'], ['Инвесторам', 'investors']];
const links = [['Главная', baseUrl()], ['Грузоперевозки', baseUrl('road-freight-russia')], ['Мультимодальные', baseUrl('multimodal-container')], ['Все решения', baseUrl('#solutions')], ['Сервисы', baseUrl('#services-visible')]];

export function UnifiedHeader() {
  const [open, setOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);

  return <header className="unified-header sticky top-0 z-50 bg-[#440D84] text-white shadow-[0_8px_30px_rgba(36,8,67,0.15)]">
    <div className="mx-auto flex h-[48px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
      <a href={baseUrl()} aria-label="Каталон — на главную"><img src={headerLogo} alt="Каталон" className="h-7 w-auto" /></a>
      <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
        {links.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap transition hover:text-[#B7FF2A]">{label}</a>)}
        <div className="relative" onMouseEnter={() => setAudienceOpen(true)} onMouseLeave={() => setAudienceOpen(false)}>
          <button type="button" aria-expanded={audienceOpen} onClick={() => setAudienceOpen(!audienceOpen)} className="flex items-center gap-1 whitespace-nowrap font-semibold transition hover:text-[#B7FF2A]">Для кого <ChevronDown className={`h-4 w-4 transition-transform ${audienceOpen ? 'rotate-180' : ''}`} /></button>
          <div className={`absolute left-0 top-full z-50 w-52 pt-3 transition ${audienceOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="rounded-2xl border border-white/10 bg-[#2A0842] p-2 shadow-2xl">
              {audience.map(([label, path]) => <a key={label} href={baseUrl(path)} onClick={() => setAudienceOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-[#B7FF2A]">{label}</a>)}
            </div>
          </div>
        </div>
        <a href={baseUrl('contacts')} className="whitespace-nowrap transition hover:text-[#B7FF2A]">Контакты</a>
      </nav>
      <div className="hidden items-center gap-3 lg:flex"><a href={baseUrl('login')} className="px-3 py-2 text-sm font-semibold text-white/85 transition hover:text-[#B7FF2A]">Войти</a><a href={baseUrl('registration')} className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#440D84] transition hover:bg-[#B7FF2A]">Регистрация</a></div>
      <button type="button" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
    </div>
    {open && <nav className="grid gap-1 border-t border-white/10 bg-[#440D84] px-5 pb-5 lg:hidden">
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-t border-white/10 py-3 text-sm font-semibold">{label}</a>)}
      <span className="border-t border-white/10 py-3 text-sm font-semibold">Для кого</span>
      {audience.map(([label, path]) => <a key={label} href={baseUrl(path)} onClick={() => setOpen(false)} className="pl-4 text-sm text-white/75">{label}</a>)}
      <a href={baseUrl('contacts')} className="border-t border-white/10 py-3 text-sm font-semibold">Контакты</a><a href={baseUrl('login')} className="py-2 text-sm font-semibold">Войти</a><a href={baseUrl('registration')} className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#440D84]">Регистрация</a>
    </nav>}
  </header>;
}
