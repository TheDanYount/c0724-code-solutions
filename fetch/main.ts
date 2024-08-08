interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUserArray(): Promise<void | User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const formattedResponse = (await response.json()) as Promise<User[]>;
    return formattedResponse;
  } catch (error) {
    console.error('Error:', error);
  }
}

console.log(getUserArray());
