export const BASE_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
export const API_KEY = '7389611f28c152b5035d5a3ba8a6f5c4f48444ad';
export const MAX_DATE = 14;
export const NAME_LENGTH_LIMIT = 3;
export const MIN_NAME_LENGTH = 1;

// Сообщения для валидации имени
export const CYRILLIC_LETTERS_ONLY_MESSAGE = 'Пишите кириллицей';
export const EXTRA_WORD_OR_SPACE_MESSAGE = 'Добавили лишнее слово или пробел?';
export const NOT_FULL_NAME_MESSAGE = 'Чего-то нехватает. Фамилия, имя, отчество — полностью';
export const MIN_WORD_COUNT_MESSAGE = 'Имя, фамилия или отчество не могут быть менее 2 символов';

// Сообщения для валидации даты
export const SELECT_CORRECT_DATE_MESSAGE = 'Выберите корректную дату';
export const SELECTED_DATE_IS_PAST_MESSAGE = 'Этот день уже прошел, к сожалению';
export const SELECTED_DATE_IS_FUTURE_MESSAGE = 'Нельзя вызвать врача более чем за 14 дней';

// Сообщения для валидации адреса
export const SELECT_ADDRESS_FROM_LIST_MESSAGE = 'Выберите адрес из списка';
export const NO_COUNTRY_MESSAGE = 'Отсутствует поле страна';
export const NO_COUNTRY_CODE_MESSAGE = 'Отсутствует код страны';
export const NO_LONGITUDE_MESSAGE = 'Не передана долгота';
export const NO_LATITUDE_MESSAGE = 'Не передана широта';
export const NO_STREET_MESSAGE = 'Не указана улица';
export const NO_HOUSE_MESSAGE = 'Не указан дом';
export const NO_ADDRESS_FOUND_MESSAGE = 'Ничего не найдено. Проверьте адрес на ошибки';

export const TRANSLITE_ALPHABET = {
  а: 'A',
  б: 'B',
  в: 'V',
  г: 'G',
  д: 'D',
  е: 'E',
  ё: 'E',
  ж: 'ZH',
  з: 'Z',
  и: 'I',
  й: 'Y',
  к: 'K',
  л: 'L',
  м: 'M',
  н: 'N',
  о: 'O',
  п: 'P',
  р: 'R',
  с: 'S',
  т: 'T',
  у: 'U',
  ф: 'F',
  х: 'KH',
  ц: 'TS',
  ч: 'CH',
  ш: 'SH',
  щ: 'SCH',
  ъ: '`',
  ы: 'I',
  ь: '`',
  э: 'E',
  ю: 'YU',
  я: 'YA',
  '-': '-',
};
