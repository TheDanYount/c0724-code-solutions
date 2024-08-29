import './Form.css';
import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const { username, password } = Object.fromEntries(data);
    console.log(`Username: ${username}. Password: ${password}.`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username:</p>
        <input name="username"></input>
      </label>
      <label>
        <p>Password:</p>
        <input name="password" type="password"></input>
      </label>
      <button className="button">Submit</button>
    </form>
  );
}
