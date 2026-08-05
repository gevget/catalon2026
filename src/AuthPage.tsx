import { ExternalLink } from 'lucide-react';
import { UnifiedFooter } from './components/UnifiedFooter';
import { UnifiedHeader } from './components/UnifiedHeader';

export default function AuthPage({ registration = false }: { registration?: boolean }) {
  const platformUrl = 'https://cargo.catalon.ru/';

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <UnifiedHeader />
      <main id="main-content" className="mx-auto max-w-xl px-5 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7133D0]">Портал Каталон</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-[#121827]">{registration ? 'Переходим к регистрации' : 'Переходим ко входу'}</h1>
        <p className="mt-5 leading-7 text-[#675F6F]">Откройте рабочую платформу Каталон по кнопке ниже.</p>
        <a href={platformUrl} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#440D84] px-6 py-3 font-bold text-white">Открыть платформу <ExternalLink className="h-4 w-4" /></a>
      </main>
      <UnifiedFooter />
    </div>
  );
}
