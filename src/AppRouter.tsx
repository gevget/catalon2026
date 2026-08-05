import { lazy, Suspense, useEffect } from 'react';
import { FormConsentGuard } from './components/FormConsentGuard';
import { SiteMeta } from './components/SiteMeta';

const LandingPage = lazy(() => import('./LandingPage'));
const MultimodalPage = lazy(() => import('./MultimodalPage'));
const RoadFreightPage = lazy(() => import('./RoadFreightPage'));
const VisualEditor = import.meta.env.DEV ? lazy(() => import('./VisualEditor')) : null;
const ForCustomersPage = lazy(() => import('./ForCustomersPage'));
const ForCarriersPage = lazy(() => import('./ForCarriersPage'));
const ForOperatorsPage = lazy(() => import('./ForOperatorsPage'));
const ForSuppliersPage = lazy(() => import('./ForSuppliersPage'));
const InvestorsPage = lazy(() => import('./InvestorsPage'));
const ContactsPage = lazy(() => import('./ContactsPage'));
const AuthPage = lazy(() => import('./AuthPage'));
const LegalPage = lazy(() => import('./LegalPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const IS_LOCAL_EDITOR_ENABLED = import.meta.env.DEV;

function normalizeRoute(pathname: string) {
  const normalized = `/${pathname}`.replace(/\/{2,}/g, '/');
  return normalized.length > 1 ? normalized.replace(/\/$/, '') : normalized;
}

function appPath(route: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return route === '/' ? `${base}/` : `${base}${route}`;
}

function getCurrentRoute() {
  const url = new URL(window.location.href);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const redirectedRoute = url.searchParams.get('route');

  if (redirectedRoute) {
    const target = new URL(redirectedRoute.startsWith('/') ? redirectedRoute : `/${redirectedRoute}`, window.location.origin);
    const route = normalizeRoute(target.pathname);
    window.history.replaceState({}, '', `${appPath(route)}${target.search}${target.hash}`);
    return route;
  }

  const pathname = base && url.pathname.startsWith(base)
    ? url.pathname.slice(base.length) || '/'
    : url.pathname;
  return normalizeRoute(pathname || '/');
}

function replaceLegacyRoute(route: string) {
  const canonical = route === '/solutions/road-freight-russia'
    ? '/road-freight-russia'
    : route === '/solutions/multimodal-container'
      ? '/multimodal-container'
      : route === '/partners'
        ? '/for-suppliers'
        : route;

  if (canonical !== route) window.history.replaceState({}, '', appPath(canonical));
  return canonical;
}

function openEditor() {
  const url = new URL(window.location.href);
  url.searchParams.set('editor', '1');
  window.location.href = url.toString();
}

function PageLoader() {
  return <div className="site-page-loader" role="status" aria-live="polite"><span />Загрузка страницы…</div>;
}

export default function AppRouter() {
  const currentRoute = replaceLegacyRoute(getCurrentRoute());
  const isEditorMode = IS_LOCAL_EDITOR_ENABLED && new URLSearchParams(window.location.search).get('editor') === '1';

  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentRoute]);

  if (isEditorMode && VisualEditor) return <Suspense fallback={<PageLoader />}><VisualEditor /></Suspense>;

  const knownRoutes = new Set([
    '/', '/for-carriers', '/for-operators', '/for-customers', '/for-suppliers', '/investors',
    '/contacts', '/login', '/registration', '/privacy',
    '/road-freight-russia', '/multimodal-container',
  ]);
  const notFound = !knownRoutes.has(currentRoute);

  const page = currentRoute === '/for-carriers'
    ? <ForCarriersPage />
    : currentRoute === '/for-operators'
      ? <ForOperatorsPage />
      : currentRoute === '/for-customers'
        ? <ForCustomersPage />
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
                  : currentRoute === '/privacy'
                    ? <LegalPage />
                    : currentRoute === '/road-freight-russia'
                          ? <RoadFreightPage />
                          : currentRoute === '/multimodal-container'
                            ? <MultimodalPage />
                            : currentRoute === '/'
                              ? <LandingPage />
                              : <NotFoundPage />;

  return (
    <div className="relative">
      <FormConsentGuard />
      <Suspense fallback={<PageLoader />}>{page}</Suspense>
      <SiteMeta route={currentRoute} notFound={notFound} />
      {IS_LOCAL_EDITOR_ENABLED ? (
        <button type="button" onClick={openEditor} className="site-editor-button">Открыть визуальный редактор</button>
      ) : null}
    </div>
  );
}
