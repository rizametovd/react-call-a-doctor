import {
  CYRILLIC_LETTERS_ONLY_MESSAGE,
  EXTRA_WORD_OR_SPACE_MESSAGE,
  MIN_NAME_LENGTH,
  MIN_WORD_COUNT_MESSAGE,
  NAME_LENGTH_LIMIT,
  NOT_FULL_NAME_MESSAGE,
} from './constants';

export default function nameValidation(name, setErrors) {
  // Удаляем пробелы из строки
  const nameArr = name.split(' ').filter((el) => el);

  // Шаблон: только кириллица с пробелами
  const namePattern = /^[А-ЯЁа-яё\s]+$/;

  // Проверяем, что длина каждого слова более 1 символа
  const isNameLengthValid = nameArr.every((el) => (el.length > MIN_NAME_LENGTH ? true : false));

  if (!isNameLengthValid) {
    setErrors({
      error: MIN_WORD_COUNT_MESSAGE,
      isValid: false,
    });
  } else if (!namePattern.test(name) && name.length !== 0) {
    setErrors({ error: CYRILLIC_LETTERS_ONLY_MESSAGE, isValid: false });
  } else if (nameArr.length > NAME_LENGTH_LIMIT) {
    setErrors({ error: EXTRA_WORD_OR_SPACE_MESSAGE, isValid: false });
  } else if (nameArr.length < NAME_LENGTH_LIMIT) {
    setErrors({ error: NOT_FULL_NAME_MESSAGE, isValid: false });
  } else if (nameArr.length === NAME_LENGTH_LIMIT) {
    setErrors({ error: '', isValid: true });
  }
}
