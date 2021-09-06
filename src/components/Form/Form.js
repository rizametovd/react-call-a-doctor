import { useEffect, useState } from 'react';
import useOutSideComponentClick from '../hooks/useOutSideComponentClick';
import Suggestions from '../Suggestions/Suggestions';
import addressValidation from '../../utils/addressValidation';
import { getAddressSuggestion } from '../../utils/api';
import { maxDate, minDate } from '../../utils/dates';
import { dateValidation } from '../../utils/dateValidation';
import nameValidation from '../../utils/nameValidation';
import { getNameAcronym } from '../../utils/translite';
import styles from './styles.module.css';

function Form({ record }) {
  // Стейты связанные с инпутом адреса
  const [addressInput, setAddressInput] = useState('');
  const [address, setAddress] = useState({ data: null });
  const [suggestions, setSuggestions] = useState([]);
  const [addressErrors, setAddressErorrs] = useState({ error: '', isValid: false });

  // Стейты связанные с инпутом ФИО
  const [name, setName] = useState('');
  const [nameErrors, setNameErrors] = useState({ error: '', isValid: false });
  const [acronym, setAcronym] = useState('');

  // Стейты связанные с инпутом даты
  const [date, setDate] = useState('');
  const [dateErrors, setDateErrors] = useState({ error: '', isValid: false });

  // Стейт валидности всей формы
  const [isValid, setIsValid] = useState(false);

  // Хук который скрывает блок с подсказками при клике в любой другой области
  const { ref, isComponentVisible, setIsComponentVisible } = useOutSideComponentClick();

  useEffect(() => {
    // Проверяем на валидность три инпута. Если валидны, то вся форма валидна
    if (nameErrors.isValid && addressErrors.isValid && dateErrors.isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    // Скрываем ошибку валидации если инпут адреса не в фокусе и инпут пустой
    if (!isComponentVisible && suggestions.length === 0) {
      setAddressErorrs({ error: '' });
    }
  }, [
    nameErrors.isValid,
    addressErrors.isValid,
    dateErrors.isValid,
    address,
    isComponentVisible,
    suggestions,
  ]);

  function handleAcronym() {
    const acronym = getNameAcronym(name);
    setAcronym(acronym);
  }

  function handleNameChange(e) {
    const inputValue = e.target.value;
    setName(inputValue);
    handleAcronym(); // Получаем аббревиатуру на латинице при вводе текста
    nameValidation(inputValue, setNameErrors); // Валидируем инпут на вводе текста
  }

  async function handleAdressChange(e) {
    const inputValue = e.target.value;
    setAddressInput(inputValue);

    if (inputValue.length >= 3) {
      const { suggestions } = await getAddressSuggestion(inputValue);
      setIsComponentVisible(true);
      setSuggestions(suggestions);
    } else {
      setIsComponentVisible(false);
      setSuggestions([]);
    }
  }

  function handleDateChange(e) {
    const inputDate = e.target.value;
    setDate(inputDate);
    dateValidation(inputDate, setDateErrors); // Валидируем дату
  }

  function onSuggestionClick(suggestion) {
    setAddressInput(suggestion.value);
    setAddress(suggestion);
    addressValidation(suggestion, setAddressErorrs); // Валидируем адрес по клику на подсказке
    setIsComponentVisible(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    record({ address, acronym, date }); // По клику на submit возвращаем объект с данными для рендинга на странице
    resetForm();
  }

  function resetForm() {
    setAddress({ data: null });
    setSuggestions([]);
    setAddressInput('');
    setName('');
    setAcronym('');
    setDate('');
    setIsValid(false);
    setNameErrors({ error: '', isValid: false });
    setAddressErorrs({ error: '', isValid: false });
    setDateErrors({ error: '', isValid: false });
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.inputLabel}>
          <input
            className={styles.input}
            placeholder='ФИО полностью'
            type='text'
            onChange={handleNameChange}
            value={name}
            name='name'
            autoComplete='off'
            required
          />
          {nameErrors.error && <span className={styles.error}>{nameErrors.error || ''}</span>}
        </label>
        <label className={styles.inputLabel} ref={ref}>
          <input
            className={`${styles.input}`}
            placeholder='Адрес'
            onChange={handleAdressChange}
            value={addressInput}
            required
            type='text'
            autoComplete='off'
            onBlur={() => addressValidation(address, setAddressErorrs)} // Валидируем адрес при событии onBlur
          />
          {isComponentVisible && (
            <Suggestions suggestions={suggestions} onSuggestionClick={onSuggestionClick} />
          )}
          {addressErrors.error && <span className={styles.error}>{addressErrors.error}</span>}
        </label>

        <label className={styles.inputLabel}>
          <input
            type='date'
            className={styles.input}
            min={minDate}
            max={maxDate}
            onChange={handleDateChange}
            value={date}
            required
          />
          {dateErrors.error && <span className={styles.error}>{dateErrors.error}</span>}
        </label>

        <button
          type='submit'
          className={`${styles.button} ${!isValid && styles.buttonDisabled}`}
          disabled={!isValid}
        >
          Вызвать врача
        </button>
      </form>
    </div>
  );
}

export default Form;
