import { useEffect, useState } from 'react';
import {
  SITE_RENDER_FILE_PATH,
  SITE_RENDER_STORAGE_KEY,
  SITE_RENDER_VERSION,
  SavedSiteRender,
} from './editorStorage';
import LandingPage from './LandingPage';
import VisualEditor from './VisualEditor';

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

export default function App() {
  const isEditorMode = IS_LOCAL_EDITOR_ENABLED && new URLSearchParams(window.location.search).get('editor') === '1';

  if (isEditorMode) {
    return <VisualEditor />;
  }

  return (
    <div className="relative">
      <SavedSiteView />
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
