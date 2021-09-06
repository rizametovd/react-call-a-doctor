import { MAX_DATE } from './constants';

// Определеяем минимальный и максимальный диапозон дат для вызова врача
function dates() {
  const today = new Date();

  const minDate = today.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  today.setDate(today.getDate() + MAX_DATE);
  const maxDate = today.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return { minDate, maxDate };
}

export const { minDate, maxDate } = dates();
