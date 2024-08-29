import { useState } from 'react';

export function Password() {
  const [input, setInput] = useState('');
  const errorMessage = [];
  if (input === '') {
    errorMessage.push('A password is required.');
  } else {
    if (input.length < 8) {
      errorMessage.push('Your password is too short');
    }
    if (!input.match(/\d/)) {
      errorMessage.push('Your password lacks a number.');
    }
    if (!input.match(/[A-Z]/)) {
      errorMessage.push('Your password lacks a capital letter.');
    }
    if (!input.match(/!|@|#|\$|%|\^|&|\(|\)/)) {
      errorMessage.push('Your password lacks a special character.');
    }
  }
  const symbolClassNames =
    errorMessage.length === 0
      ? 'fa-solid fa-check text-green-500'
      : 'fa-solid fa-x text-red-500';
  return (
    <label htmlFor="password-input" className="font-semibold">
      Password
      <br />
      <input
        id="password-input"
        className="mr-2 p-1 w-[160px] border-[1px] border-black"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <i className={symbolClassNames}></i>
      {errorMessage.map((str) => (
        <p id="error-message" className="text-[12px] text-red-500">
          {str}
        </p>
      ))}
    </label>
  );
}
