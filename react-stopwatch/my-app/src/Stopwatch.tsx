import { useState } from 'react';
import './App.css';
import './Stopwatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [intervalFunction, setIntervalFunction] = useState<NodeJS.Timeout>();
  const running = intervalFunction !== undefined;

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
            clearInterval(intervalFunction);
            setIntervalFunction(undefined);
          }}
        />
      ) : (
        <FaPlay
          onClick={() => {
            setIntervalFunction(
              setInterval(() => setTime((prev) => prev + 1), 1000)
            );
          }}
        />
      )}
    </>
  );
}
