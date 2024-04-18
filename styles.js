
// const pText = document.querySelector('#message');
// pText.style.cssText= 'color:blue'

// const classes = document.querySelector('#para');
// const classAvailable = classes.classList
// classes.classList.add('text-book')
// console.log(classAvailable)
// let li = document.createElement('li')
// li.textContent ='home'
// menu.appendChild(li)

// li = document.createElement('li')
// li.textContent="about-us"

// let list = document.querySelector('#menu')
// menu.appendChild(li)
// const paragraph = document.querySelector('#main')
// // const myParagraph = document.createElement('p')
// // myParagraph.textContent= 'This  is a new element'
// // myParagraph.style.color = 'red'
// // paragraph.appendChild(myParagraph)

// for(let i=0 ;i<=1;i++){
//     list.addEventListener('click',function(){
//         list.style.color ='red'
//     })
// }

// // const btn = document.querySelector('#btn');

// // function display(){
// //     alert('I am clicked')
// // }

 
// let btn = document.querySelector('#btn');

// btn.addEventListener('click',function() {
//     alert('It was clicked!');
// });

// const link = document.querySelector('a')
// const mybtn= doucment .querySelector('#btn')
// link.addEventListener('click',function(event){
//     if (!mybtn.checked){
//         event.preventDefault();
//     }
  
// });


// const myCustomDiv = document.createElement('div');

// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     newElement.addEventListener('click', function respondToTheClick(evt) {
//         console.log('A paragraph was clicked.');
//     });

//     myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);


// const newDiv = document.createElement('div')

// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked:' + evt.target.textContent);
// }
// newDiv.addEventListener('click',respondToTheClick)


// for (let i=1;i<=200;i++){
//     const newElement = document.createElement('p')
//     newElement.textContent = 'This is a paragraph'+i;
//     newDiv.appendChild(newElement)
//     console.log('A paragraph is clicked ')
// }
// document.body.appendChild(newDiv)


// const myCustomDiv = document.createElement('div');

// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }

// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);

// myCustomDiv.addEventListener('click', respondToTheClick);


document.querySelector('#content').addEventListener('click',function(ev){
  if(ev.target.nodeName ==='SPAN'){
    const newText = ev.target.textContent
    console.log('The span was clicked with text' + newText)
  }
   
})



















