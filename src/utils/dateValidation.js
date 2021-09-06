import {
  SELECTED_DATE_IS_FUTURE_MESSAGE,
  SELECTED_DATE_IS_PAST_MESSAGE,
  SELECT_CORRECT_DATE_MESSAGE,
} from './constants';
import { maxDate, minDate } from './dates';

export function dateValidation(date, setErrors) {
  // Переводим строку с датой в миллисекунды
  const selectedDate = Date.parse(date);
  const minAllowedDate = Date.parse(minDate);
  const maxAllowedDate = Date.parse(maxDate);

  if (date.length !== 10) {
    setErrors({ error: SELECT_CORRECT_DATE_MESSAGE, isValid: false });
  } else if (selectedDate < minAllowedDate) {
    setErrors({ error: SELECTED_DATE_IS_PAST_MESSAGE, isValid: false });
  } else if (selectedDate > maxAllowedDate) {
    setErrors({ error: SELECTED_DATE_IS_FUTURE_MESSAGE, isValid: false });
  } else {
    setErrors({ error: '', isValid: true });
  }
}
