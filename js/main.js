// i wanna add a function if there's no products in .bigcontainer after deleting all products, a h1 will show up "No Products" and .subtotal will be 0.000TND//

//** Created by **//
//** Med Yassine Zahmoul **//

let myButton = document.querySelector('button'); 
 let myHeading = document.querySelector('h1'); 
  
 function setUserName() { 
   let myName = prompt('Please enter your name.'); 
   if(!myName) { 
     setUserName(); 
   } else { 
     localStorage.setItem('name', myName); 
     myHeading.innerHTML = 'Welcome, ' + myName; 
   } 
 } 
  
 if(!localStorage.getItem('name')) { 
   setUserName(); 
 } else { 
   let storedName = localStorage.getItem('name'); 
   myHeading.innerHTML = 'Welcome, ' + storedName; 
 } 

 myButton.onclick = function() {
  setUserName();
}
 
 // counter plus

 var plusBtn = document.getElementsByClassName('plusqty');

 for (let plus of plusBtn){
  plus.addEventListener('click', ()=>{
    plus.previousElementSibling.innerText++;
  })
 }
// counter minus

 var lessBtn = document.getElementsByClassName('lessqty')

 for (let minus of lessBtn){
  minus.addEventListener('click', ()=>{
    if (minus.nextElementSibling.innerText>1){
      minus.nextElementSibling.innerText--
    }
  })
}

var deleteBtn = document.querySelectorAll(".icon");

for (let i=0; i<deleteBtn.length ; i++){
  deleteBtn[i].addEventListener('click', function(){
    deleteBtn[i].parentElement.parentElement.remove()
  })
}

let hearticon = document.querySelector('.hearticon');

hearticon.onclick = function() {
  let mySrc = hearticon.getAttribute('src');
  if(mySrc === './img/heart.png') {
    hearticon.setAttribute ('src','./img/heart-hover.png');
  } else {
    hearticon.setAttribute ('src','./img/heart.png');
  }
}


