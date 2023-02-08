import { useContext, useEffect } from 'react';
//import { TasksContext } from '../../context/TasksContext';
import useCounter from '../../hooks/useCounter';
import useTimeParser from '../../hooks/useTimeParser';
import Button from '../ui/buttons/Button';
import style from './TimerTask.module.css';
import { editTask } from '../../store/TasksSlice';
import { useDispatch } from 'react-redux';

const TimerTasK = ({ index, onCloseModal }) => {
  const { count, startCount, pauseCount } = useCounter();
  const { handleChronoTimer } = useTimeParser();
  //const { editTask } = useContext(TasksContext);

  const dispatch = useDispatch();

  useEffect(() => {
    startCount();
  }, [startCount]);

  const startTimer = () => {
    const time = pauseCount();
    dispatch(
      editTask({
        taskIndex: index,
        task: { time: handleChronoTimer(time) },
      })
    );
    onCloseModal();
  };

  return (
    <div className={`${style['timer-container']}`}>
      <p className={`${style['timer']}`}>{handleChronoTimer(count)}</p>
      <Button onClick={startTimer}>{count > 0 ? 'STOP' : 'START'}</Button>
    </div>
  );
};

export default TimerTasK;
