'use strict';
async function getUserArray() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    console.error('Error:', error);
  }
}
console.log(getUserArray());
