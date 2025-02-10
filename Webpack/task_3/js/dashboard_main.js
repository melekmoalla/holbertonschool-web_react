import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';


const img = $('<div id="logo"></div>');
$('body').prepend(img);


$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');


let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}


$('#btn').on('click', _.debounce(updateCounter, 500));
