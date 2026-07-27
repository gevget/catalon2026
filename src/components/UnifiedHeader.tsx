import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import headerLogo from '../../Group 3320.svg';

const baseUrl = (path = '') => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;
const audience = [['Заказчикам', 'for-customers'], ['Перевозчикам', 'for-carriers'], ['Операторам', 'for-operators']];
const links = [['Главная', baseUrl()], ['Грузоперевозки по РФ', baseUrl('road-freight-russia')], ['Мультимодальные перевозки', baseUrl('multimodal-container')], ['Сервисы', baseUrl('#services-visible')]];

const audienceLinks = audience.filter(([, path]) => path !== 'partners' && path !== 'for-suppliers' && path !== 'investors');
const primaryLinks = links.filter(([, href]) => !href.includes('#solutions'));
const spotlightLinks = [['Поставщикам', baseUrl('for-suppliers')], ['Инвесторам', baseUrl('investors')]];

export function UnifiedHeader() {
  const [open, setOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);

  useEffect(() => {
    const fixMojibake = (value: string) => {
      const exact: Record<string, string> = {
        '\u0420\u201d\u0420\u00bb\u0421\u045f \u0420\u0454\u0420\u0458\u0420\u0458\u0420\u0458': '\u0414\u043b\u044f \u043a\u043e\u0433\u043e',
        '\u0420\u0459\u0420\u0455\u0421\u201a\u0420\u00b0\u0421\u201a\u0420\u00b0\u0421\u201a\u0421\u2039': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
        '\u0420\u2019\u0420\u0456\u0420\u0458\u0421\u201a\u0420\u0456': '\u0412\u043e\u0439\u0442\u0438',
        '\u0420\u00a0\u0420\u00b5\u0420\u0456\u0421\u201a\u0420\u00b0\u0421\u201a\u0420\u0456\u0420\u0451\u0420\u00b0\u0426\u201a\u0420\u0456\u0421\u045f': '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f'
      };
      if (exact[value]) return exact[value];
      if (!/(?:Р[љџ”’ —]|С[ЃЉЊЋЌЏ])/.test(value)) return value;
      try {
        const cp1251 = (char: string) => {
          const code = char.charCodeAt(0);
          if (code >= 0x0410 && code <= 0x044f) return code - 0x350;
          if (code === 0x0401) return 0xa8;
          if (code === 0x0451) return 0xb8;
          const extra: Record<number, number> = { 0x2018: 0x91, 0x2019: 0x92, 0x201c: 0x93, 0x201d: 0x94, 0x00ab: 0xab, 0x00bb: 0xbb, 0x0454: 0xf4, 0x0455: 0xf5, 0x0456: 0xf6, 0x0457: 0xf7, 0x0458: 0xf8, 0x0459: 0xf9, 0x045a: 0xfa, 0x045b: 0xfb, 0x045c: 0xfc, 0x045e: 0xfe, 0x045f: 0xff };
          return extra[code] ?? code;
        };
        const bytes = new Uint8Array(Array.from(value, cp1251));
        return new TextDecoder().decode(bytes);
      } catch { return value; }
    };
    const header = document.querySelector('.unified-header');
    if (!header) return;
    const walker = document.createTreeWalker(header, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) nodes.push(node as Text);
    nodes.forEach((text) => { text.nodeValue = fixMojibake(text.nodeValue || ''); });
  }, [open]);

  return <header className="unified-header sticky top-0 z-50 bg-[#440D84] text-white shadow-[0_8px_30px_rgba(36,8,67,0.15)]">
    <div className="mx-auto flex h-[48px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
      <a href={baseUrl()} aria-label="РљР°С‚Р°Р»РѕРЅ вЂ” РЅР° РіР»Р°РІРЅСѓСЋ"><img src={headerLogo} alt="РљР°С‚Р°Р»РѕРЅ" className="h-7 w-auto" /></a>
      <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
        {primaryLinks.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap transition hover:text-[#B7FF2A]">{label}</a>)}
        {spotlightLinks.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap font-bold text-white transition hover:text-[#B7FF2A]">{label}</a>)}
        <div className="relative" onMouseEnter={() => setAudienceOpen(true)} onMouseLeave={() => setAudienceOpen(false)}>
          <button type="button" aria-expanded={audienceOpen} onClick={() => setAudienceOpen(!audienceOpen)} className="flex items-center gap-1 whitespace-nowrap font-semibold transition hover:text-[#B7FF2A]">Р”Р»СЏ РєРѕРіРѕ <ChevronDown className={`h-4 w-4 transition-transform ${audienceOpen ? 'rotate-180' : ''}`} /></button>
          <div className={`absolute left-0 top-full z-50 w-52 pt-3 transition ${audienceOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="rounded-2xl border border-white/10 bg-[#2A0842] p-2 shadow-2xl">
              {audienceLinks.map(([label, path]) => <a key={label} href={baseUrl(path)} onClick={() => setAudienceOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-[#B7FF2A]">{label}</a>)}
            </div>
          </div>
        </div>
        <a href={baseUrl('contacts')} className="whitespace-nowrap transition hover:text-[#B7FF2A]">РљРѕРЅС‚Р°РєС‚С‹</a>
      </nav>
      <div className="hidden items-center gap-3 lg:flex"><a href={baseUrl('login')} className="px-3 py-2 text-sm font-semibold text-white/85 transition hover:text-[#B7FF2A]">Р’РѕР№С‚Рё</a><a href={baseUrl('registration')} className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#440D84] transition hover:bg-[#B7FF2A]">Р РµРіРёСЃС‚СЂР°С†РёСЏ</a></div>
      <button type="button" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Р—Р°РєСЂС‹С‚СЊ РјРµРЅСЋ' : 'РћС‚РєСЂС‹С‚СЊ РјРµРЅСЋ'}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
    </div>
    {open && <nav className="grid gap-1 border-t border-white/10 bg-[#440D84] px-5 pb-5 lg:hidden">
      {primaryLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-t border-white/10 py-3 text-sm font-semibold">{label}</a>)}
      {spotlightLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-t border-white/10 py-3 text-sm font-bold text-white">{label}</a>)}
      <span className="border-t border-white/10 py-3 text-sm font-semibold">Р”Р»СЏ РєРѕРіРѕ</span>
      {audienceLinks.map(([label, path]) => <a key={label} href={baseUrl(path)} onClick={() => setOpen(false)} className="pl-4 text-sm text-white/75">{label}</a>)}
      <a href={baseUrl('contacts')} className="border-t border-white/10 py-3 text-sm font-semibold">РљРѕРЅС‚Р°РєС‚С‹</a><a href={baseUrl('login')} className="py-2 text-sm font-semibold">Р’РѕР№С‚Рё</a><a href={baseUrl('registration')} className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#440D84]">Р РµРіРёСЃС‚СЂР°С†РёСЏ</a>
    </nav>}
  </header>;
}


