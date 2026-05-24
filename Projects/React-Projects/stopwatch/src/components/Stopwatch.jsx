import { useEffect, useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Format Time
  const formatTime = () => {
    const hours = Math.floor(time / 3600);

    const minutes = Math.floor((time % 3600) / 60);

    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(
      2,
      '0',
    )} : ${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="card">
      <h2>Stopwatch</h2>

      <div className="time">{formatTime()}</div>

      <div className="buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>

        <button onClick={() => setIsRunning(false)}>Pause</button>

        <button
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
