import { useEffect, useRef, useState } from 'react';

export default function useOutSideComponentClick() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef(null);

  // Если клик вне блока с подсказками, то скрываем их
  function handleClickOutSide(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsComponentVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true);

    return () => {
      document.removeEventListener('click', handleClickOutSide, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
