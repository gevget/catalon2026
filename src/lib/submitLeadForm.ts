const FORM_ENDPOINT = 'https://formsubmit.co/ajax/catalontech@yandex.ru';

const fieldLabels: Record<string, string> = {
  name: 'Имя', company: 'Компания', inn: 'ИНН', phone: 'Телефон', email: 'E-mail',
  contact: 'Контакт', message: 'Сообщение', comment: 'Комментарий', industry: 'Сфера деятельности',
  interest: 'Тип интереса', website: 'Сайт', format: 'Формат сотрудничества',
  direction: 'Направление', proposal: 'Предложение', personal_data_consent: 'Согласие на обработку данных',
};

const pendingForms = new WeakSet<HTMLFormElement>();

function getStatusElement(form: HTMLFormElement) {
  let status = form.querySelector<HTMLElement>('[data-form-status]');
  if (!status) {
    status = document.createElement('p');
    status.dataset.formStatus = 'true';
    status.className = 'form-submit-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    form.append(status);
  }
  return status;
}

export async function submitLeadForm(form: HTMLFormElement, source: string) {
  if (pendingForms.has(form)) return;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const honeypot = form.elements.namedItem('_honey') as HTMLInputElement | null;
  if (honeypot?.value) return;

  pendingForms.add(form);
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const initialLabel = button?.textContent || 'Отправить';
  const status = getStatusElement(form);
  status.className = 'form-submit-status';
  status.textContent = '';

  if (button) {
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    button.textContent = 'Отправляем…';
  }

  const payload: Record<string, string> = {
    _subject: `Новая заявка с сайта Каталон — ${source}`,
    _template: 'table',
    _captcha: 'false',
    _honey: '',
    'Форма': source,
    'Страница': window.location.href,
  };

  new FormData(form).forEach((value, key) => {
    if (typeof value !== 'string' || key === '_honey') return;
    const normalized = value.trim().slice(0, 5000);
    if (normalized) payload[fieldLabels[key] || key] = normalized;
  });

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Form request failed: ${response.status}`);
    form.reset();
    status.classList.add('is-success');
    status.textContent = 'Спасибо! Данные отправлены. Мы свяжемся с вами после обработки заявки.';
  } catch (error) {
    status.setAttribute('role', 'alert');
    status.classList.add('is-error');
    status.textContent = error instanceof DOMException && error.name === 'AbortError'
      ? 'Сервис не ответил вовремя. Проверьте соединение и попробуйте ещё раз.'
      : 'Не удалось отправить данные. Проверьте соединение и попробуйте ещё раз.';
    throw error;
  } finally {
    window.clearTimeout(timeout);
    pendingForms.delete(form);
    if (button) {
      button.disabled = false;
      button.removeAttribute('aria-busy');
      button.textContent = initialLabel;
    }
  }
}
