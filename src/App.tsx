import { useEffect, useState } from 'react';
import {
  SITE_RENDER_FILE_PATH,
  SITE_RENDER_STORAGE_KEY,
  SITE_RENDER_VERSION,
  SavedSiteRender,
} from './editorStorage';
import LandingPage from './LandingPage';
import MultimodalPage from './MultimodalPage';
import RoadFreightPage from './RoadFreightPage';
import VisualEditor from './VisualEditor';
import ForCustomersPage from './ForCustomersPage';
import ForCarriersPage from './ForCarriersPage';
import ForOperatorsPage from './ForOperatorsPage';
import PartnersPage from './PartnersPage';
import ForSuppliersPage from './ForSuppliersPage';
import InvestorsPage from './InvestorsPage';
import ContactsPage from './ContactsPage';
import AuthPage from './AuthPage';

const IS_LOCAL_EDITOR_ENABLED = import.meta.env.DEV;

function normalizeSavedHtml(html?: string) {
  if (!html) {
    return '';
  }

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);

  if (bodyMatch?.[1]) {
    return bodyMatch[1];
  }

  return html;
}

function isCurrentSavedRender(savedRender: SavedSiteRender | null | undefined) {
  return Boolean(savedRender?.html && savedRender.version === SITE_RENDER_VERSION);
}

function SavedSiteView() {
  const [savedRender, setSavedRender] = useState<SavedSiteRender | null>(() => {
    const saved = localStorage.getItem(SITE_RENDER_STORAGE_KEY);

    if (!saved) {
      return null;
    }

    try {
      const parsed = JSON.parse(saved) as SavedSiteRender;
      return isCurrentSavedRender(parsed) ? parsed : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    fetch(SITE_RENDER_FILE_PATH, { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) {
          return null;
        }

        return (await response.json()) as SavedSiteRender;
      })
      .then((data) => {
        if (!isCurrentSavedRender(data)) {
          localStorage.removeItem(SITE_RENDER_STORAGE_KEY);
          return;
        }

        const normalized = {
          ...data,
          html: normalizeSavedHtml(data.html),
        };

        setSavedRender(normalized);
        localStorage.setItem(SITE_RENDER_STORAGE_KEY, JSON.stringify(normalized));
      })
      .catch(() => undefined);
  }, []);

  const normalizedHtml = isCurrentSavedRender(savedRender)
    ? normalizeSavedHtml(savedRender?.html)
    : '';

  if (!normalizedHtml) {
    return <LandingPage />;
  }

  return (
    <>
      {savedRender.css ? (
        <style>{`${savedRender.css}\nhtml,body,#root{font-family:"Manrope",ui-sans-serif,system-ui,sans-serif !important;}#about{opacity:1 !important;transform:none !important;}`}</style>
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: normalizedHtml }} />
    </>
  );
}

function openEditor() {
  const url = new URL(window.location.href);
  url.searchParams.set('editor', '1');
  window.location.href = url.toString();
}

function closeEditor() {
  const url = new URL(window.location.href);
  url.searchParams.delete('editor');
  window.location.href = url.toString();
}

function getCurrentRoute() {
  const url = new URL(window.location.href);
  const redirectedRoute = url.searchParams.get('route');

  if (redirectedRoute) {
    const normalized = redirectedRoute.startsWith('/') ? redirectedRoute : `/${redirectedRoute}`;
    window.history.replaceState({}, '', `${import.meta.env.BASE_URL.replace(/\/$/, '')}${normalized}`);
    return normalized;
  }

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathname = window.location.pathname;

  if (basePath && pathname.startsWith(basePath)) {
    const trimmed = pathname.slice(basePath.length);
    return trimmed || '/';
  }

  return pathname || '/';
}

export default function App() {
  useEffect(() => {
    const replacements: Array<[RegExp, string]> = [
      [/CATALON/g, 'КАТАЛОН'],
      [/Catalon/g, 'Каталон'],
      [/ОПЕРАТОРСКАЯ/g, 'ЭКСПЕДИТОРСКАЯ'],
      [/ОПЕРАТОРСКОЕ/g, 'ЭКСПЕДИТОРСКОЕ'],
      [/ОПЕРАТОРСКИЙ/g, 'ЭКСПЕДИТОРСКИЙ'],
      [/ОПЕРАТОРОВ/g, 'ЭКСПЕДИТОРОВ'],
      [/ОПЕРАТОРУ/g, 'ЭКСПЕДИТОРУ'],
      [/ОПЕРАТОРОМ/g, 'ЭКСПЕДИТОРОМ'],
      [/ОПЕРАТОР/g, 'ЭКСПЕДИТОР'],
      [/операторская/g, 'экспедиторская'],
      [/операторское/g, 'экспедиторское'],
      [/операторский/g, 'экспедиторский'],
      [/операторов/g, 'экспедиторов'],
      [/оператору/g, 'экспедитору'],
      [/оператором/g, 'экспедитором'],
      [/оператора/g, 'экспедитора'],
      [/оператор/g, 'экспедитор'],
    ];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    nodes.forEach((node) => {
      node.nodeValue = replacements.reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), node.nodeValue || '');
    });
    document.querySelectorAll<HTMLElement>('[alt], [title], [aria-label], [data-block-title]').forEach((element) => {
      ['alt', 'title', 'aria-label', 'data-block-title'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value) element.setAttribute(attribute, replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value));
      });
    });
    if (window.location.pathname.endsWith('/for-operators')) {
      ['#efficiency', '.operator-request-prep', '.operator-offers', '#team'].forEach((selector) => document.querySelector<HTMLElement>(selector)?.setAttribute('hidden', ''));
      const documents = document.getElementById('documents');
      if (documents && !documents.querySelector('[data-etrn-note]')) {
        const note = document.createElement('div');
        note.dataset.etrnNote = 'true';
        note.className = 'operator-etrn-note';
        note.innerHTML = '<strong>ЭДО и ЭТРН в одной перевозке</strong><span>Документы и электронная транспортная накладная модуля Контур.Диадок привязаны к заявке и доступны участникам без поиска по почте и чатам.</span>';
        documents.querySelector('.operator-container')?.append(note);
      }
    }
    const path = window.location.pathname;
    const addEdoCallout = (anchor: Element | null, title: string, text: string) => {
      if (!anchor || anchor.querySelector('[data-edo-callout]')) return;
      const callout = document.createElement('div');
      callout.dataset.edoCallout = 'true';
      callout.className = 'edo-callout';
      callout.innerHTML = `<div class="edo-callout-mark">ЭДО</div><div><strong>${title}</strong><p>${text}</p></div>`;
      anchor.append(callout);
    };
    if (false && path.endsWith('/for-customers')) {
      addEdoCallout(document.querySelector('#documents .customer-container'), 'ЭДО и ЭТРН Контур.Диадок', 'Электронные документы и транспортная накладная привязаны к конкретной перевозке и доступны участникам в одном цифровом контуре.');
    } else if (path.endsWith('/for-carriers')) {
      addEdoCallout(document.querySelector('#documents .carrier-container'), 'ЭДО и ЭТРН Контур.Диадок', 'Передавайте транспортные и закрывающие документы без бумажной путаницы — с историей статусов и привязкой к рейсу.');
    } else if (path.endsWith('/road-freight-russia')) {
      addEdoCallout(document.querySelector('#portal-early'), 'ЭДО и ЭТРН Контур.Диадок', 'Электронный документооборот встроен в цифровой контур перевозки и связывает заявку, рейс и закрывающие документы.');
    } else if (path === '/' || path.endsWith('/catalon2026/') || path.endsWith('/catalon2026')) {
      addEdoCallout(document.querySelector('#home-safe-deal'), 'ЭДО и ЭТРН Контур.Диадок', 'Документы и электронная транспортная накладная проходят внутри безопасной цифровой сделки.');
      document.querySelectorAll('#audience-after-solutions a').forEach((link) => link.remove());
    }
  }, []);

  const isEditorMode = IS_LOCAL_EDITOR_ENABLED && new URLSearchParams(window.location.search).get('editor') === '1';
  const currentRoute = getCurrentRoute();

  if (isEditorMode) {
    return <VisualEditor />;
  }

  const page = currentRoute === '/for-carriers'
    ? <ForCarriersPage />
    : currentRoute === '/for-operators'
    ? <ForOperatorsPage />
    : currentRoute === '/for-customers'
    ? <ForCustomersPage />
    : currentRoute === '/partners'
    ? <PartnersPage />
    : currentRoute === '/for-suppliers'
    ? <ForSuppliersPage />
    : currentRoute === '/investors'
    ? <InvestorsPage />
    : currentRoute === '/contacts'
    ? <ContactsPage />
    : currentRoute === '/login'
    ? <AuthPage />
    : currentRoute === '/registration'
    ? <AuthPage registration />
    : (currentRoute === '/road-freight-russia' || currentRoute === '/solutions/road-freight-russia')
    ? <RoadFreightPage />
    : (currentRoute === '/multimodal-container' || currentRoute === '/solutions/multimodal-container')
      ? <MultimodalPage />
      : <LandingPage />;

  return (
    <div className="relative">
      {page}
      {IS_LOCAL_EDITOR_ENABLED ? (
        <div className="fixed bottom-6 right-6 z-[70] flex gap-3">
          <button
            type="button"
            onClick={openEditor}
            className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-[#440D84]"
          >
            Открыть визуальный редактор
          </button>
          <button
            type="button"
            onClick={closeEditor}
            className="hidden"
            aria-hidden="true"
          />
        </div>
      ) : null}
    </div>
  );
}
