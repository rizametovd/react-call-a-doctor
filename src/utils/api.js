import { API_KEY, BASE_URL } from './constants';
const options = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Token ' + API_KEY,
};

// Отправляем запрос за подсказками
async function getAddressSuggestion(input) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      mode: 'cors',
      headers: options,
      body: JSON.stringify({ query: input }),
    });
    const addressSuggestionData = await checkResponse(response);
    return addressSuggestionData;
  } catch (error) {
    console.log(error);
  }
}

// Проверям ответ сервера. Возвращаем JSON если response.ok
function checkResponse(response) {
  return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);
}

export { getAddressSuggestion };
