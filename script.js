//CONTACT FORM JS

document.getElementById("contact-form").addEventListener("submit", function(event) { 
  event.preventDefault(); //prevent the form from submitting
  //get form values
  let name= document.getElementById('name').value;
  let email= document.getElementById('email').value;
  let subject= document.getElementById('subject').value;
  let message= document.getElementById('message').value;

  //Perform actions with form data (e.g send an email, store data e.t.c)

  //reset the form
   
  document.getElementById('contact-form').reset();
})


// MOBILE NAVBAR

function toggleMenu(){
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  if (menu.classList.contains("active")){
    hamburger.innerHTML = `<div class= "bar" style= "transform: rotate(45deg) translate(5px,6px); background-color: #000"></div>
    <div class= "bar"  style= "opacity: 0; "></div>
    <div class= "bar"  style= "transform: rotate(-45deg) translate(5px,-6px); background-color: #000;  "></div>
    `;}
    else{
      //change the X icon back to the hamburger  when the menu is inactive
      hamburger.innerHTML = `<div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>`;
    }
}

navLinkitems.forEach((link) =>
 {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    navLinkitems.forEach((item)=> {
      item.classList.remove('active');
    });
    link.classList.add('active');
  })
 }

)

//When the screen is clicked or tapped and the mobile navbar is open it would close
document.addEventListener('click', function(event) {
  const navbar = document.querySelector(".nav");
  const hamburger = document.querySelector('.hamburger');
  // Check if the clicked element is part of the navbar or if the navbar is closed
  if (!navbar.contains(event.target) && navbar.classList.contains("active")) {
    // Close the mobile navbar
    navbar.classList.remove("active");
    // If you want to reset the hamburger icon to its initial state (hamburger shape)
 
    hamburger.innerHTML = `
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    `;
  }
});