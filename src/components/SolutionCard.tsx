export interface SolutionCardProps {
  key?: string;
  title: string;
  description?: string;
  cta?: string;
  active?: boolean;
  color?: string;
  borderColor?: string;
  bgColor?: string;
}

export function SolutionCard({
  title,
  description,
  cta,
  active,
  color = 'bg-purple-main',
  borderColor = 'border-purple-main',
  bgColor = 'bg-white',
}: SolutionCardProps) {
  const baseClasses =
    'flex h-full flex-col rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-1';

  if (active) {
    return (
      <a href="#" className={`${baseClasses} ${bgColor} ${borderColor} border-2 shadow-sm hover:shadow-xl`}>
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700">
            Активно
          </span>
        </div>
        <h3 className="mt-6 text-xl font-bold leading-tight text-gray-900">{title}</h3>
        {description && <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600">{description}</p>}
        <span className="mt-8 inline-flex w-fit rounded-full bg-purple-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-main">
          {cta || 'Подробнее'}
        </span>
      </a>
    );
  }

  return (
    <div className={`${baseClasses} border border-gray-200 bg-gray-100 hover:border-gray-300`}>
      <div className="flex items-center gap-2">
        <div className={`h-2.5 w-2.5 rounded-full ${color}`} />
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          В разработке
        </span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-600">{title}</h3>
    </div>
  );
}
