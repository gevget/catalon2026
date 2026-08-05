import { useEffect } from 'react';

const baseUrl = (path: string) => `${import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}/${path}`;

export function FormConsentGuard() {
  useEffect(() => {
    const enhanceForm = (form: HTMLFormElement) => {
      if (form.querySelector('[data-legal-consent]')) return;
      const submit = form.querySelector('button[type="submit"], input[type="submit"]');
      if (!submit) return;
      form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach((input) => {
        if (input.name !== 'personal_data_consent') input.closest('label')?.remove();
      });

      const wrapper = document.createElement('div');
      wrapper.className = 'form-legal-consent';
      wrapper.dataset.legalConsent = 'true';
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'personal_data_consent';
      checkbox.value = 'Да';
      checkbox.required = true;
      checkbox.setAttribute('aria-label', 'Согласие на обработку персональных данных');
      checkbox.addEventListener('invalid', () => checkbox.setCustomValidity('Поставьте галочку, чтобы подтвердить согласие на обработку персональных данных.'));
      checkbox.addEventListener('change', () => checkbox.setCustomValidity(''));

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
      label.append(checkbox, text);
      wrapper.append(label);
      submit.parentNode?.insertBefore(wrapper, submit);
    };

    const enhanceAll = () => document.querySelectorAll<HTMLFormElement>('form').forEach(enhanceForm);
    enhanceAll();
    const observer = new MutationObserver(enhanceAll);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
