'use strict';

const { log } = console;

import * as utils from './utils.js';

const name = utils.select('.name');
const email = utils.select('.email');
const message = utils.select('.message');
const submit = utils.select('.submit');



utils.listen('click', submit, () => {
    message.value = 
    "So this form doesn't actually work yet. If you need to email me use the button bellow.";
    if (nameIsValid() && emailIsValid() && messageIsValid()) {
        /* validation will go here when I actually need to make this work */
    }
});