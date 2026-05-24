import { useEffect, useState } from 'react';

function Timer() {
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(Number(input));
    }

    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInput('');
  };

  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="card">
      <h2>Timer</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="time">{formatTime()}</div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>

        <button onClick={() => setIsRunning(false)}>Pause</button>

        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
