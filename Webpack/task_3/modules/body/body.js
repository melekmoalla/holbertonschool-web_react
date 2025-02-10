import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';


const body = $('<div></div>');
const button = $('<button>Click here to get started</button>');
const counter = $('<p id="count">0 clicks on the button</p>');

let count = 0;
const updateCounter = _.debounce(() => {
  count++;
  counter.text(`${count} clicks on the button`);
}, 500);

button.on('click', updateCounter);

body.append(button, counter);
$('body').append(body);
