import { useState, FormEvent } from 'react';

export function RegistrationFormControlled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Username: ${username}. Password: ${password}`);
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username:</p>
        <input
          onChange={(e) => setUsername(e.currentTarget.value)}
          name="username"
          value={username}></input>
      </label>
      <label>
        <p>Password:</p>
        <input
          onChange={(e) => setPassword(e.currentTarget.value)}
          name="password"
          type="password"
          value={password}></input>
      </label>
      <button className="button">Submit</button>
    </form>
  );
}
