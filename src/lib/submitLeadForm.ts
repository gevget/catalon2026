const FORM_ENDPOINT = 'https://formsubmit.co/ajax/catalontech@yandex.ru';

const fieldLabels: Record<string, string> = {
  name: 'Имя', company: 'Компания', inn: 'ИНН', phone: 'Телефон', email: 'E-mail',
  contact: 'Контакт', message: 'Сообщение', comment: 'Комментарий', industry: 'Сфера деятельности',
  interest: 'Тип интереса', website: 'Сайт', format: 'Формат сотрудничества',
  direction: 'Направление', proposal: 'Предложение',
};

export async function submitLeadForm(form: HTMLFormElement, source: string) {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const initialLabel = button?.textContent || 'Отправить';
  if (button) { button.disabled = true; button.textContent = 'Отправляем…'; }

  const payload: Record<string, string> = {
    _subject: `Новая заявка с сайта Каталон — ${source}`,
    _template: 'table',
    _captcha: 'false',
    'Форма': source,
    'Страница': window.location.href,
  };
  new FormData(form).forEach((value, key) => {
    if (typeof value === 'string' && value.trim()) payload[fieldLabels[key] || key] = value.trim();
  });

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`Form request failed: ${response.status}`);
    form.reset();
  } catch (error) {
    if (button) button.textContent = 'Не отправлено — повторить';
    throw error;
  } finally {
    if (button) {
      button.disabled = false;
      if (button.textContent === 'Отправляем…') button.textContent = initialLabel;
    }
  }
}
