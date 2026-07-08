import { useEffect, useMemo, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import type { Editor } from 'grapesjs';
import presetWebpage from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';
import {
  EDITOR_PROJECT_STORAGE_KEY,
  SITE_RENDER_FILE_PATH,
  SITE_RENDER_STORAGE_KEY,
  SITE_RENDER_VERSION,
  SavedSiteRender,
} from './editorStorage';
import LandingPage from './LandingPage';

function normalizeEditorHtml(html: string) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);

  if (bodyMatch?.[1]) {
    return bodyMatch[1];
  }

  return html;
}

function syncDocumentStyles(targetDocument: Document) {
  const head = targetDocument.head;
  const styleNodes = Array.from(document.querySelectorAll('style'));
  const linkNodes = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));

  styleNodes.forEach((node) => {
    const clone = targetDocument.createElement('style');
    clone.textContent = node.textContent;
    head.appendChild(clone);
  });

  linkNodes.forEach((node) => {
    const href = node.getAttribute('href');

    if (!href) {
      return;
    }

    const clone = targetDocument.createElement('link');
    clone.rel = 'stylesheet';
    clone.href = href;
    head.appendChild(clone);
  });

  targetDocument.documentElement.style.fontFamily = '"Manrope", ui-sans-serif, system-ui, sans-serif';
  targetDocument.body.style.fontFamily = '"Manrope", ui-sans-serif, system-ui, sans-serif';
}

export default function VisualEditor() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const sourceRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<Editor | null>(null);
  const [saveStatus, setSaveStatus] = useState('Есть несохраненные изменения');

  const storageKey = useMemo(() => EDITOR_PROJECT_STORAGE_KEY, []);

  useEffect(() => {
    if (!editorRef.current || !sourceRef.current) {
      return;
    }

    const editor = grapesjs.init({
      container: editorRef.current,
      height: 'calc(100vh - 57px)',
      width: '100%',
      storageManager: false,
      selectorManager: {
        componentFirst: true,
      },
      styleManager: {
        sectors: [
          {
            name: 'Типографика',
            open: true,
            properties: [
              'font-family',
              'font-size',
              'font-weight',
              'letter-spacing',
              'color',
              'line-height',
              'text-align',
              'text-decoration',
              'text-shadow',
            ],
          },
          {
            name: 'Размеры',
            open: true,
            properties: ['width', 'height', 'max-width', 'min-height', 'padding', 'margin'],
          },
          {
            name: 'Фон',
            open: true,
            properties: ['background-color', 'background', 'background-image', 'border-radius'],
          },
          {
            name: 'Границы и тени',
            open: true,
            properties: ['border', 'border-color', 'border-width', 'border-style', 'box-shadow', 'opacity'],
          },
          {
            name: 'Позиционирование',
            open: false,
            properties: ['display', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'align-items', 'justify-content'],
          },
        ],
      },
      plugins: [presetWebpage],
      panels: {
        defaults: [
          {
            id: 'topbar',
            el: '.gjs-pn-panel.gjs-pn-commands',
          },
        ],
      },
      canvas: {
        styles: [],
      },
      components: sourceRef.current.innerHTML,
    });
    instanceRef.current = editor;

    const savedProject = localStorage.getItem(storageKey);

    if (savedProject) {
      try {
        editor.loadProjectData(JSON.parse(savedProject));
        setSaveStatus('Загружены сохраненные изменения');
      } catch {
        setSaveStatus('Не удалось загрузить сохраненные изменения');
      }
    } else {
      fetch(SITE_RENDER_FILE_PATH, { cache: 'no-store' })
        .then(async (response) => {
          if (!response.ok) {
            return null;
          }

          return (await response.json()) as SavedSiteRender;
        })
        .then((savedRender) => {
          if (!savedRender?.projectData) {
            return;
          }

          editor.loadProjectData(savedRender.projectData);
          localStorage.setItem(storageKey, JSON.stringify(savedRender.projectData));
          localStorage.setItem(SITE_RENDER_STORAGE_KEY, JSON.stringify(savedRender));
          setSaveStatus('Загружена версия из проекта');
        })
        .catch(() => {
          setSaveStatus('Есть несохраненные изменения');
        });
    }

    editor.on('update', () => {
      setSaveStatus('Есть несохраненные изменения');
    });

    editor.on('load', () => {
      const frame = editor.Canvas.getFrameEl();

      if (!frame?.contentDocument) {
        return;
      }

      syncDocumentStyles(frame.contentDocument);
      frame.contentDocument.documentElement.lang = 'ru';
      frame.contentDocument.documentElement.style.fontFamily = '"Manrope", ui-sans-serif, system-ui, sans-serif';
      frame.contentDocument.body.style.fontFamily = '"Manrope", ui-sans-serif, system-ui, sans-serif';
      frame.contentDocument.body.style.background = '#ffffff';
    });

    editor.Commands.add('open-preview-page', {
      run() {
        window.location.search = '';
      },
    });

    editor.Panels.addButton('options', {
      id: 'back-to-site',
      className: 'gjs-pn-btn',
      label: 'К сайту',
      command: 'open-preview-page',
      attributes: { title: 'Вернуться к просмотру сайта' },
    });

    return () => {
      instanceRef.current = null;
      editor.destroy();
    };
  }, [storageKey]);

  const handleSave = async () => {
    const editor = instanceRef.current;

    if (!editor) {
      setSaveStatus('Редактор еще не готов');
      return;
    }

    try {
      const projectData = editor.getProjectData();
      const html = normalizeEditorHtml(editor.getHtml());
      const css = editor.getCss();
      const payload: SavedSiteRender = {
        version: SITE_RENDER_VERSION,
        html,
        css,
        savedAt: new Date().toISOString(),
        projectData,
      };

      localStorage.setItem(storageKey, JSON.stringify(projectData));
      localStorage.setItem(SITE_RENDER_STORAGE_KEY, JSON.stringify(payload));

      const response = await fetch('/__save-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Save failed');
      }

      setSaveStatus('Изменения сохранены в проект');
    } catch {
      setSaveStatus('Ошибка сохранения в проект');
    }
  };

  const handleReset = async () => {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(SITE_RENDER_STORAGE_KEY);

    try {
      await fetch('/__reset-project', {
        method: 'POST',
      });
    } catch {
      setSaveStatus('Локальные изменения сброшены, но файл проекта не очищен');
      window.location.reload();
      return;
    }

    setSaveStatus('Изменения в проекте сброшены');
    window.location.reload();
  };

  return (
    <div
      className="min-h-screen bg-[#111827]"
      style={{ fontFamily: '"Manrope", ui-sans-serif, system-ui, sans-serif' }}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#111827] px-4 py-3 text-sm text-white">
        <div>
          Визуальный редактор: кликай по элементам мышкой и меняй текст, размеры, цвета,
          отступы, границы и тени в правой панели.
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{saveStatus}</div>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-full bg-lime px-4 py-2 font-semibold text-[#111827] transition hover:opacity-90"
          >
            Сохранить
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
          >
            Сбросить
          </button>
        </div>
      </div>
      <div ref={editorRef} />
      <div ref={sourceRef} className="hidden">
        <LandingPage />
      </div>
    </div>
  );
}
