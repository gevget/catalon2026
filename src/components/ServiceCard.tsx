interface ServiceCardProps {
  title: string;
  description: string;
  gradient: string;
  badge: string;
}

export function ServiceCard({ title, description, gradient, badge }: ServiceCardProps) {
  return (
    <div className={`rounded-[32px] p-8 text-white bg-gradient-to-br ${gradient} flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
      <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold w-fit mb-6">
        {badge}
      </span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm opacity-90 flex-grow leading-relaxed">{description}</p>
    </div>
  );
}
