// i wanna add a function if there's no products in .bigcontainer after deleting all products, a h1 will show up "No Products" and //

// even tho i tried, i couldnt add the total price of single item seperatly from the total of the cart. well i'll try to learn it next time //

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
     price()
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
    price()
  })
 }
// counter minus

 var lessBtn = document.getElementsByClassName('lessqty')

 for (let minus of lessBtn){
  minus.addEventListener('click', ()=>{
    if (minus.nextElementSibling.innerText>1){
      minus.nextElementSibling.innerText--
      price()
    }
  })
}

var deleteBtn = document.querySelectorAll(".icon");

for (let i=0; i<deleteBtn.length ; i++){
  deleteBtn[i].addEventListener('click', function(){
    deleteBtn[i].parentElement.parentElement.remove()
    price()
  })
} 

let hearts=document.getElementsByClassName('fa-heart');

for(let colors of hearts ){
  colors.addEventListener('click',function(){
    if(colors.style.color === 'grey' ){
      colors.style.color="red"
    }else{
      colors.style.color = "grey"
    }
  })
}

// total price 

function price() {
  var quantity = document.getElementsByClassName('qty');
  var unity = document.getElementsByClassName('unity');
  let sum = 0;
  for (let i = 0; i < unity.length; i++) {
      sum += quantity[i].innerText * unity[i].innerText
  }
  document.getElementById('tot').innerText = sum
}
