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