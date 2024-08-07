import { takeAChance } from './take-a-chance.js';

takeAChance('Dan')
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.message));
