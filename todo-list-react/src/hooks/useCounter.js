import { useState } from 'react';
let counterId = null;

function useCounter() {
  const [count, setCount] = useState(0);

  const startCount = () => {
    if (!counterId) {
      counterId = setInterval(() => {
        setCount(prevCount => {
          return prevCount + 1;
        });
      }, 1000);
    }
  };
  const pauseCount = () => {
    if (counterId) {
      const saveCount = Number(count);
      setCount(0);
      clearInterval(counterId);
      counterId = null;
      return saveCount;
    }
  };

  return {
    count,
    startCount,
    pauseCount,
  };
}

export default useCounter;
