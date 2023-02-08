import { useState } from 'react';

const useFieldError = () => {
  const [error, setError] = useState(null);

  const validateField = (
    value,
    { name, type, required, minLength, maxLength }
  ) => {
    if (type && typeof value !== type) {
      setError(`The ${name} must be a ${type}`);
    } else if (required && !value) {
      setError(`The ${name} is required`);
    } else if (minLength && value.length < minLength) {
      setError(`The ${name} must be at least ${minLength} characters`);
    } else if (maxLength && value.length > maxLength) {
      setError(`The ${name} must be at most ${maxLength} characters`);
    } else {
      setError(null);
    }
  };

  return { error, validateField };
};

export default useFieldError;
