import "./css/styles.css";
import debounce from 'lodash.debounce';
import template from '../src/template/template.hbs';
import templates from '../src/template/template-s.hbs';
import fetchCountries from '../src/js/fetchCountries';
const { error, defaultModules } = require('@pnotify/core');
import '../node_modules/@pnotify/core/dist/PNotify.css'
import '../node_modules/@pnotify/core/dist/BrightTheme.css'

const list = document.querySelector('.list');
const input = document.querySelector('.input');

function findCountries(event) {
  const inputValue = event.target.value;
  if (inputValue) {
    fetchCountries(inputValue).then(country => {
      if (country.length === 1) {
        list.innerHTML = template(country[0]);
        return;
      } else if (country.length > 1 && country.length < 11) {
        list.innerHTML = templates(country);
        return;
      } else if (country.length > 11) {
    error({
        text: "Too many matches found. Please enter a more specific query!",
        type: 'info',
        delay: 1500,
      })
      }
    });
  }
  list.innerHTML = '';
}

input.addEventListener('input', debounce(findCountries, 500));

// import '../node_modules/@pnotify/core/dist/Angeler.css'
// import '../node_modules/@pnotify/core/dist/Material.css'

// const myAlert = alert({
//     title: 'Attention',
//     text: "i'm no alert",
//     type: 'info'
// })
// console.log(myAlert);


// const myNotice = notice({
//   text: "The string is empty, enter the name of the country!",
//   type: 'info',
//   delay: 1500,
// })
//console.log(myNotice);


