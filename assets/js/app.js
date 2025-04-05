'use strict';

const { log } = console;

import * as utils from './utils.js';

const name = utils.select('.name');
const email = utils.select('.email');
const message = utils.select('.message');

// If I wanted to fail I'd find a way to use this...

// // utils.js
// export async function fetchRandomQuote() {
//     const response = await fetch("https://api.quotable.io/random");
//     const data = await response.json();
//     return data.content;
// }
