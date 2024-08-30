import { useState } from 'react';
import './App.css';
import './Stopwatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [timeoutFunction, setTimeoutFunction] = useState<NodeJS.Timeout>();
  const running = timeoutFunction !== undefined;

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
            clearInterval(timeoutFunction);
            setTimeoutFunction(undefined);
          }}
        />
      ) : (
        <FaPlay
          onClick={() => {
            setTimeoutFunction(
              setInterval(() => setTime((prev) => prev + 1), 1000)
            );
          }}
        />
      )}
    </>
  );
}
