import { UnifiedHeader } from './components/UnifiedHeader';
import { UnifiedFooter } from './components/UnifiedFooter';

type LegalKind = 'privacy' | 'consent' | 'terms';

type LegalDocument = {
  kicker: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; paragraphs: string[]; items: string[] }>;
};

const placeholderItems = [
  'Здесь будет размещён основной пункт утверждённого документа.',
  'Дополнительные положения можно будет добавить без изменения структуры страницы.',
];

const documents: Record<LegalKind, LegalDocument> = {
  privacy: {
    kicker: 'ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ',
    title: 'Политика в отношении обработки персональных данных',
    intro: 'Структура страницы подготовлена для последующего размещения утверждённой редакции политики.',
    sections: [
      { title: '1. Общие положения', paragraphs: ['Здесь будет размещена информация о назначении документа, сфере его действия, используемых понятиях и владельце сайта.'], items: placeholderItems },
      { title: '2. Цели обработки персональных данных', paragraphs: ['В этом разделе будет приведён полный перечень целей обработки данных пользователей сайта.'], items: placeholderItems },
      { title: '3. Состав и способы обработки данных', paragraphs: ['Здесь будут перечислены категории обрабатываемых данных, правовые основания, сроки и способы обработки.'], items: placeholderItems },
      { title: '4. Хранение и защита данных', paragraphs: ['Раздел будет содержать сведения о сроках хранения, мерах защиты и порядке прекращения обработки данных.'], items: placeholderItems },
      { title: '5. Права пользователя', paragraphs: ['Здесь будет описан порядок направления запросов, отзыва согласия и реализации иных прав пользователя.'], items: placeholderItems },
      { title: '6. Заключительные положения', paragraphs: ['В этом разделе будут указаны дата вступления документа в силу, порядок его обновления и контактные данные.'], items: placeholderItems },
    ],
  },
  consent: {
    kicker: 'ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ',
    title: 'Согласие на обработку персональных данных',
    intro: 'Структура страницы подготовлена для последующего размещения утверждённого юридического текста согласия.',
    sections: [
      { title: '1. Предоставление согласия', paragraphs: ['Здесь будет размещена формулировка добровольного, конкретного и информированного согласия пользователя.'], items: placeholderItems },
      { title: '2. Перечень персональных данных', paragraphs: ['В этом разделе будет приведён перечень данных, на обработку которых пользователь предоставляет согласие.'], items: placeholderItems },
      { title: '3. Цели и действия с данными', paragraphs: ['Здесь будут указаны цели обработки и разрешённые действия с персональными данными.'], items: placeholderItems },
      { title: '4. Срок действия согласия', paragraphs: ['Раздел будет содержать срок действия согласия и условия прекращения обработки данных.'], items: placeholderItems },
      { title: '5. Отзыв согласия', paragraphs: ['Здесь будет описан порядок отзыва согласия и адрес направления соответствующего обращения.'], items: placeholderItems },
      { title: '6. Подтверждение пользователя', paragraphs: ['В этом разделе будет размещена итоговая юридическая формулировка подтверждения пользователя.'], items: placeholderItems },
    ],
  },
  terms: {
    kicker: 'ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ',
    title: 'Пользовательское соглашение',
    intro: 'Структура страницы подготовлена для последующего размещения полной редакции пользовательского соглашения.',
    sections: [
      { title: '1. Термины и общие положения', paragraphs: ['Здесь будут определены ключевые термины, стороны соглашения и предмет регулирования.'], items: placeholderItems },
      { title: '2. Условия использования сайта', paragraphs: ['В этом разделе будут описаны допустимые способы использования сайта и доступных функций.'], items: placeholderItems },
      { title: '3. Права и обязанности сторон', paragraphs: ['Здесь будут перечислены права, обязанности и ограничения пользователя и владельца сайта.'], items: placeholderItems },
      { title: '4. Интеллектуальная собственность', paragraphs: ['Раздел будет содержать информацию о правах на материалы, дизайн, товарные знаки и программные компоненты.'], items: placeholderItems },
      { title: '5. Ответственность', paragraphs: ['Здесь будут указаны условия ответственности сторон и применимые ограничения.'], items: placeholderItems },
      { title: '6. Изменение соглашения', paragraphs: ['В этом разделе будет описан порядок публикации изменений и вступления новой редакции в силу.'], items: placeholderItems },
      { title: '7. Контакты и заключительные положения', paragraphs: ['Здесь будут размещены реквизиты, сведения о применимом праве и порядок разрешения обращений.'], items: placeholderItems },
    ],
  },
};

export default function LegalPage({ kind }: { kind: LegalKind }) {
  const legalDocument = documents[kind];

  return (
    <div className="legal-page min-h-screen bg-[#F7F6F3] text-[#19131F]">
      <UnifiedHeader />
      <main id="main-content">
        <section className="legal-hero">
          <div className="legal-container">
            <p>{legalDocument.kicker}</p>
            <h1>{legalDocument.title}</h1>
            <div className="legal-meta">
              <span>Статус: структура документа</span>
              <span>Дата редакции: будет указана позднее</span>
            </div>
            <p className="legal-intro">{legalDocument.intro}</p>
          </div>
        </section>
        <section className="legal-content">
          <div className="legal-container">
            <nav aria-label="Содержание документа">
              <b>Содержание</b>
              {legalDocument.sections.map((section, index) => (
                <a key={section.title} href={`#legal-section-${index + 1}`}>{section.title}</a>
              ))}
            </nav>
            <article>
              {legalDocument.sections.map((section, index) => (
                <section id={`legal-section-${index + 1}`} key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}
