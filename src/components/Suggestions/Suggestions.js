import { NO_ADDRESS_FOUND_MESSAGE, SELECT_ADDRESS_FROM_LIST_MESSAGE } from '../../utils/constants';
import styles from './styles.module.css';

function Suggestions({ suggestions, onSuggestionClick }) {
  
  function handleKeyPress(event, item) {
    if (event.key === 'Enter') {
      onSuggestionClick(item);
    }
  }

  return (
    <>
      <ul className={styles.list}>
        {suggestions.length === 0 ? (
          <p className={styles.text}>{NO_ADDRESS_FOUND_MESSAGE}</p>
        ) : (
          <p className={styles.text}>{SELECT_ADDRESS_FROM_LIST_MESSAGE}:</p>
        )}
        {suggestions.map((item, idx) => (
          <li
            key={item.data.fias_id + idx}
            className={styles.listItem}
            onClick={() => onSuggestionClick(item)}
            onKeyPress={(event) => handleKeyPress(event, item)}
            tabIndex='0'
          >
            {item.value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Suggestions;
