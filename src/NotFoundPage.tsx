import { ArrowLeft } from 'lucide-react';
import { UnifiedFooter } from './components/UnifiedFooter';
import { UnifiedHeader } from './components/UnifiedHeader';

const homeUrl = `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/`;

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3] text-[#19131F]">
      <UnifiedHeader />
      <main id="main-content" className="mx-auto flex min-h-[65vh] max-w-[900px] flex-col items-center justify-center px-5 py-24 text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#7133D0]">Ошибка 404</p>
        <h1 className="mt-5 text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.05em]">Такой страницы нет</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#675F6F]">Возможно, адрес изменился или в ссылке есть ошибка. Вернитесь на главную и выберите нужный раздел.</p>
        <a href={homeUrl} className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#440D84] px-6 py-3.5 font-bold text-white transition hover:bg-[#7133D0]"><ArrowLeft className="h-4 w-4" />На главную</a>
      </main>
      <UnifiedFooter />
    </div>
  );
}
