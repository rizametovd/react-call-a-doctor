import { TRANSLITE_ALPHABET } from './constants';

// Переводим кириллицу в транслит
function translite(str) {
  return str
    .toLowerCase()
    .split('')
    .map((ruLetter) => TRANSLITE_ALPHABET[ruLetter] || '-')
    .join('');
}

// Вырезаем первые буквы из слов и склеиваем их. Возвращаем аббревиатуру на латинице
function getNameAcronym(str) {
  const transliteName = translite(str);
  const acronym = transliteName
    .split('-')
    .map((el) => el.slice(0, 1))
    .join('');
  return acronym;
}

export { translite, getNameAcronym };
