

const pText = document.querySelector('#message');
pText.style.cssText= 'color:blue'

const classes = document.querySelector('#para');
const classAvailable = classes.classList
classes.classList.add('text-book')
console.log(classAvailable)