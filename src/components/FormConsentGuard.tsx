import { useEffect } from 'react';

const baseUrl = (path: string) => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;

export function FormConsentGuard() {
  useEffect(() => {
    let formIndex = 0;

    const enhanceForm = (form: HTMLFormElement) => {
      if (form.dataset.legalConsentReady === 'true') return;
      const submit = form.querySelector<HTMLElement>('button[type="submit"], input[type="submit"]');
      if (!submit) return;

      form.dataset.legalConsentReady = 'true';
      form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach((input) => {
        const label = input.closest('label');
        if (label?.textContent?.toLowerCase().includes('обработ')) label.remove();
      });

      const honeypot = document.createElement('input');
      honeypot.type = 'text';
      honeypot.name = '_honey';
      honeypot.tabIndex = -1;
      honeypot.autocomplete = 'off';
      honeypot.className = 'form-honeypot';
      honeypot.setAttribute('aria-hidden', 'true');

      const wrapper = document.createElement('div');
      wrapper.className = 'form-legal-consent';
      wrapper.dataset.legalConsent = 'true';

      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      const checkboxId = `personal-data-consent-${++formIndex}`;
      checkbox.id = checkboxId;
      checkbox.type = 'checkbox';
      checkbox.name = 'personal_data_consent';
      checkbox.value = 'Да';
      checkbox.required = true;
      checkbox.setAttribute('aria-required', 'true');

      const clearValidation = () => checkbox.setCustomValidity('');
      checkbox.addEventListener('change', clearValidation);
      checkbox.addEventListener('input', clearValidation);
      checkbox.addEventListener('invalid', () => {
        checkbox.setCustomValidity('Подтвердите согласие на обработку персональных данных.');
      });

      const text = document.createElement('span');
      text.append('Я даю согласие на ');
      const consent = document.createElement('a');
      consent.href = baseUrl('personal-data-consent');
      consent.target = '_blank';
      consent.rel = 'noopener noreferrer';
      consent.textContent = 'обработку персональных данных';
      text.append(consent, ' и подтверждаю, что ознакомился с ');
      const privacy = document.createElement('a');
      privacy.href = baseUrl('privacy');
      privacy.target = '_blank';
      privacy.rel = 'noopener noreferrer';
      privacy.textContent = 'Политикой конфиденциальности';
      text.append(privacy, ' и ');
      const terms = document.createElement('a');
      terms.href = baseUrl('terms');
      terms.target = '_blank';
      terms.rel = 'noopener noreferrer';
      terms.textContent = 'Пользовательским соглашением';
      text.append(terms, '.');

      label.htmlFor = checkboxId;
      label.append(checkbox, text);
      wrapper.append(label);
      submit.parentNode?.insertBefore(honeypot, submit);
      submit.parentNode?.insertBefore(wrapper, submit);

      form.addEventListener('submit', (event) => {
        if (checkbox.checked) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        checkbox.setCustomValidity('Подтвердите согласие на обработку персональных данных.');
        checkbox.reportValidity();
        checkbox.focus();
      }, true);
    };

    const enhanceAll = () => document.querySelectorAll<HTMLFormElement>('form').forEach(enhanceForm);
    enhanceAll();
    const observer = new MutationObserver(enhanceAll);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
