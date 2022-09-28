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
 // clic sur le button pour afficher el prompt et changer le nom  
 myButton.onclick = function() { 
   setUserName(); 
 }
 