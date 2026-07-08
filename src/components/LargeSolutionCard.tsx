import type { ComponentType } from 'react';
import {
  Briefcase,
  CheckCircle,
  DollarSign,
  FileText,
  Globe,
  Map,
  Shield,
  Truck,
  Users,
} from 'lucide-react';

interface LargeSolutionCardProps {
  key?: string;
  title: string;
  description: string;
  points: string[];
  cta: string;
  placeholder: string;
  imageSrc?: string;
  imageAlt?: string;
  link: string;
  bgColor?: string;
  borderColor?: string;
  h3BorderColor?: string;
  pBorderColor?: string;
  textColor?: string;
  descriptionColor?: string;
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  'Перевозки по России': Map,
  'Грузы и перевозчики': Users,
  'Безопасная сделка': Shield,
  'Документы онлайн': FileText,
  'Финансирование рейса': DollarSign,
  'Сервисы для экономии': CheckCircle,
  'Контейнерные перевозки': Truck,
  'Комбинированные маршруты': Map,
  'Международная логистика': Globe,
  'Контроль этапов': CheckCircle,
  'Сопровождение сделки': Briefcase,
};

const bgColorMap: Record<string, string> = {
  lime: 'bg-[#A0FF00]',
  purple: 'bg-[#561A9D]',
  white: 'bg-white',
};

export function LargeSolutionCard({
  title,
  description,
  points,
  cta,
  placeholder,
  imageSrc,
  imageAlt,
  link,
  bgColor = 'white',
  borderColor = 'border-gray-100',
  h3BorderColor = '',
  pBorderColor = '',
  textColor = 'text-gray-900',
  descriptionColor = 'text-gray-600',
}: LargeSolutionCardProps) {
  const bgClass = bgColorMap[bgColor] || bgColor;

  return (
    <a
      href={link}
      className={`block h-full rounded-[32px] border-2 ${borderColor} ${bgClass} p-8 ${textColor} shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      <h3 className={`text-[2rem] font-bold leading-tight ${textColor} ${h3BorderColor ? `border-b pb-5 ${h3BorderColor}` : ''}`}>
        {title}
      </h3>
      <p
        className={`mt-5 text-sm leading-relaxed ${descriptionColor} ${pBorderColor ? `border-b pb-5 ${pBorderColor}` : ''}`}
      >
        {description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {points.map((point) => {
          const Icon = iconMap[point] || CheckCircle;

          return (
            <li
              key={point}
              className="flex items-center gap-2.5 rounded-full bg-gray-100 px-3.5 py-1.5 text-[14px] font-semibold text-gray-900"
            >
              <Icon className="h-4 w-4 shrink-0 text-purple-main" />
              {point}
            </li>
          );
        })}
      </ul>
      <div className="mt-7 flex w-full items-center justify-center font-semibold text-gray-400">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="block h-auto w-full object-contain"
          />
        ) : (
          <>[PNG_PLACEHOLDER: {placeholder}.png]</>
        )}
      </div>
      <div className="mt-7 w-fit rounded-full bg-purple-dark px-7 py-3 text-base font-bold text-white transition hover:bg-purple-main">
        {cta}
      </div>
    </a>
  );
}
