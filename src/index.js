//import "./css/styles.css"
//import template from "./template/template.hbs"
const { alert, error, notice, defaultModules} = require('@pnotify/core');
import '../node_modules/@pnotify/core/dist/PNotify.css'
import '../node_modules/@pnotify/core/dist/Angeler.css'
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import '../node_modules/@pnotify/core/dist/Material.css'

//const {alert, error, notice, defaultModules} = require('@pnotify/core')
const myAlert = alert({
    title: 'Attention',
    text: "i'm no alert",
    type: 'info'
})
console.log(myAlert);

//const { alert, error, notice,  defaultModules } = require('@pnotify/core')
const myError = error({
    title: 'Error',
    text: "i'm an error",
    type: 'info'
})
console.log(myError);

const myNotice = notice({
    title: 'Notice',
    text: "i'm notice",
    type: 'info'
})
console.log(myNotice);