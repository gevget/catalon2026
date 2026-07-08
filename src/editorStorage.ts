export const EDITOR_PROJECT_STORAGE_KEY = 'catalon-grapes-editor';
export const SITE_RENDER_STORAGE_KEY = 'catalon-site-render';
export const SITE_RENDER_FILE_PATH = '/site-render.json';
export const SITE_RENDER_VERSION = 2;

export interface SavedSiteRender {
  version?: number;
  html: string;
  css: string;
  savedAt: string;
  projectData?: unknown;
}
