import { useEffect, useId } from 'react';
import style from './Field.module.css';
import useFieldError from '../../../hooks/useFieldError';

const TextField = ({
  label,
  placeholder,
  name,
  validation,
  value,
  onChange,
  onError,
}) => {
  const id = useId();

  const { error, validateField } = useFieldError();

  const handleChange = e => {
    const { value } = e.target;
    onChange(value);
  };

  useEffect(() => {
    validateField(value, validation);
  }, [value, validateField, validation]);

  useEffect(() => {
    onError({ name, error });
  }, [name, error, onError]);

  return (
    <div className={`${style['input-group']}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
        id={id}
        name={name}
        className={`${style['input']}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <p className={style['error']}>{error}</p>}
    </div>
  );
};

export default TextField;
