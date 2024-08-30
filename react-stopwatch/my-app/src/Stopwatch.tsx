import { useState } from 'react';
import './App.css';
import './Stopwatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timeoutFunction, setTimeoutFunction] = useState(() =>
    setInterval(() => {}, 0)
  );

  return (
    <>
      <div className="watch-edge">
        <h2
          className="timer"
          onClick={() => {
            if (!running) setTime(0);
          }}>
          {time}
        </h2>
      </div>
      {running ? (
        <FaPause
          onClick={() => {
            setRunning(!running);
            clearInterval(timeoutFunction);
          }}
        />
      ) : (
        <FaPlay
          onClick={() => {
            setRunning(!running);
            setTimeoutFunction(
              setInterval(() => setTime((prev) => prev + 1), 1000)
            );
          }}
        />
      )}
    </>
  );
}
