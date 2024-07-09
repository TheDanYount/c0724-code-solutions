interface Item {
  name: string;
  author?: string;
  returnClosedDate: number[];
  price: number;
}

interface Order {
  datePlaced: number[];
  total: number;
  recipient: string;
  orderNum: string;
  dateDelivered: number[];
  itemList: Item[];
}

const orderHistory: Order[] = [];

function addToHistory(order: Order): undefined {
  orderHistory.push(order);
}

const gameCubeController: Item = {
  name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
  returnClosedDate: [8, 4, 2020],
  price: 94.95,
};

const theArtOfSql: Item = {
  name: 'The Art of Sql',
  author: 'Stephane Faroult',
  returnClosedDate: [8, 4, 2020],
  price: 33.99,
};

const gameCubeControllerAdapter: Item = {
  name: `Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC.
  Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter`,
  returnClosedDate: [8, 5, 2020],
  price: 15.98,
};

const theTimelessWayOfBuilding: Item = {
  name: 'The Timeless Way of Building',
  author: 'Christopher Alexander',
  returnClosedDate: [8, 19, 2020],
  price: 41.33,
};

const javaScriptForImpatientProgrammers: Item = {
  name: 'JavaScript for impatient programmers',
  author: 'Dr. Axel Rauschmayer',
  returnClosedDate: [9, 7, 2020],
  price: 31.55,
};

const order1: Order = {
  datePlaced: [7, 3, 2020],
  total: 138.93,
  recipient: 'JS Masher',
  orderNum: '113-2883177-2648248',
  dateDelivered: [7, 5, 2020],
  itemList: [gameCubeController, theArtOfSql],
};

const order2: Order = {
  datePlaced: [7, 4, 2020],
  total: 17.22,
  recipient: 'JS Masher',
  orderNum: '114-2875557-9059409',
  dateDelivered: [7, 7, 2020],
  itemList: [gameCubeControllerAdapter],
};

const order3: Order = {
  datePlaced: [7, 19, 2020],
  total: 44.53,
  recipient: 'JS Masher',
  orderNum: '113-9984268-1280257',
  dateDelivered: [7, 20, 2020],
  itemList: [theTimelessWayOfBuilding],
};

const order4: Order = {
  datePlaced: [8, 4, 2020],
  total: 34,
  recipient: 'JS Masher',
  orderNum: '114-3941689-8772232',
  dateDelivered: [8, 8, 2020],
  itemList: [javaScriptForImpatientProgrammers],
};

addToHistory(order1);
addToHistory(order2);
addToHistory(order3);
addToHistory(order4);

console.log(orderHistory);
