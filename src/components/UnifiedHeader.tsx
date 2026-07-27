import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import headerLogo from '../../Group 3320.svg';

const baseUrl = (path = '') => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;
const audience = [
  ['\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c', 'for-customers'],
  ['\u041f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430\u043c', 'for-carriers'],
  ['\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c', 'for-operators'],
];
const links = [
  ['\u0413\u043b\u0430\u0432\u043d\u0430\u044f', baseUrl()],
  ['\u0413\u0440\u0443\u0437\u043e\u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0438 \u043f\u043e \u0420\u0424', baseUrl('road-freight-russia')],
  ['\u041c\u0443\u043b\u044c\u0442\u0438\u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0438', baseUrl('multimodal-container')],
  ['\u0421\u0435\u0440\u0432\u0438\u0441\u044b', baseUrl('#services-visible')],
];
const spotlightLinks = [
  ['\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430\u043c', baseUrl('for-suppliers')],
  ['\u0418\u043d\u0432\u0435\u0441\u0442\u043e\u0440\u0430\u043c', baseUrl('investors')],
];

export function UnifiedHeader() {
  const [open, setOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);

  return <header className="unified-header sticky top-0 z-50 bg-[#440D84] text-white shadow-[0_8px_30px_rgba(36,8,67,0.15)]">
    <div className="mx-auto flex h-[48px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
      <a href={baseUrl()} aria-label="\u041a\u0430\u0442\u0430\u043b\u043e\u043d — \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"><img src={headerLogo} alt="\u041a\u0430\u0442\u0430\u043b\u043e\u043d" className="h-7 w-auto" /></a>
      <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
        {links.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap transition hover:text-[#B7FF2A]">{label}</a>)}
        {spotlightLinks.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap font-bold text-white transition hover:text-[#B7FF2A]">{label}</a>)}
        <div className="relative" onMouseEnter={() => setAudienceOpen(true)} onMouseLeave={() => setAudienceOpen(false)}>
          <button type="button" aria-expanded={audienceOpen} onClick={() => setAudienceOpen(!audienceOpen)} className="flex items-center gap-1 whitespace-nowrap font-semibold transition hover:text-[#B7FF2A]">\u0414\u043b\u044f \u043a\u043e\u0433\u043e <ChevronDown className={`h-4 w-4 transition-transform ${audienceOpen ? 'rotate-180' : ''}`} /></button>
          <div className={`absolute left-0 top-full z-50 w-52 pt-3 transition ${audienceOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="rounded-2xl border border-white/10 bg-[#2A0842] p-2 shadow-2xl">
              {audience.map(([label, path]) => <a key={label} href={baseUrl(path)} onClick={() => setAudienceOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-[#B7FF2A]">{label}</a>)}
            </div>
          </div>
        </div>
        <a href={baseUrl('contacts')} className="whitespace-nowrap transition hover:text-[#B7FF2A]">\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b</a>
      </nav>
      <div className="hidden items-center gap-3 lg:flex"><a href={baseUrl('login')} className="px-3 py-2 text-sm font-semibold text-white/85 transition hover:text-[#B7FF2A]">\u0412\u043e\u0439\u0442\u0438</a><a href={baseUrl('registration')} className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#440D84] transition hover:bg-[#B7FF2A]">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f</a></div>
      <button type="button" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? '\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e' : '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e'}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
    </div>
    {open && <nav className="grid max-h-[calc(100vh-48px)] gap-1 overflow-y-auto border-t border-white/10 bg-[#440D84] px-5 pb-5 lg:hidden">
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-t border-white/10 py-3 text-sm font-semibold">{label}</a>)}
      {spotlightLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-t border-white/10 py-3 text-sm font-semibold text-white">{label}</a>)}
      <span className="border-t border-white/10 py-3 text-sm font-semibold">\u0414\u043b\u044f \u043a\u043e\u0433\u043e</span>
      {audience.map(([label, path]) => <a key={label} href={baseUrl(path)} onClick={() => setOpen(false)} className="pl-4 text-sm text-white/75">{label}</a>)}
      <a href={baseUrl('contacts')} className="border-t border-white/10 py-3 text-sm font-semibold">\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b</a><a href={baseUrl('login')} className="py-2 text-sm font-semibold">\u0412\u043e\u0439\u0442\u0438</a><a href={baseUrl('registration')} className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#440D84]">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f</a>
    </nav>}
  </header>;
}
