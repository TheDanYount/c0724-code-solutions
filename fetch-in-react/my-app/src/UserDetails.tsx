/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUserById = async (): Promise<void> => {
      try {
        const result = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!result.ok)
          throw new Error('could not fetch userData from clicked user');
        const formattedResult = (await result.json()) as User;
        setUser(formattedResult);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getUserById();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
