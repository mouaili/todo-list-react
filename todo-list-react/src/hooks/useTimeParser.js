function useTimeParser() {
  const handleChronoTimer = timer => {
    const time = Number(timer);
    const h = Math.trunc(time / 3600).toFixed(0);
    const m = (Math.trunc(time % 3600) / 60).toFixed(0);
    const s = Math.trunc((time % 3600) % 60).toFixed(0);

    const hour = h < 10 ? `0${h}` : h;
    const minutes = m < 10 ? `0${m}` : m;
    const seconds = s < 10 ? `0${s}` : s;

    return `${hour}:${minutes}:${seconds}`;
  };

  return {
    handleChronoTimer,
  };
}

export default useTimeParser;
