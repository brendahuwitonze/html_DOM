
// const pText = document.querySelector('#message');
// pText.style.cssText= 'color:blue'

// const classes = document.querySelector('#para');
// const classAvailable = classes.classList
// classes.classList.add('text-book')
// console.log(classAvailable)
let li = document.createElement('li')
li.textContent ='home'
menu.appendChild(li)

li = document.createElement('li')
li.textContent="about-us"

let list = document.querySelector('#menu')
menu.appendChild(li)
const paragraph = document.querySelector('#main')
// const myParagraph = document.createElement('p')
// myParagraph.textContent= 'This  is a new element'
// myParagraph.style.color = 'red'
// paragraph.appendChild(myParagraph)

for(let i=0 ;i<=1;i++){
    list.addEventListener('click',function(){
        list.style.color ='red'
    })
}
