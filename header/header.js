
function toggleMenu(){
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  if (menu.classList.contains("active")){
    hamburger.innerHTML = `<div class= "bar" style= "transform: rotate(45deg) translate(5px,6px); background-color: #fff"></div>
    <div class= "bar"  style= "opacity: 0; "></div>
    <div class= "bar"  style= "transform: rotate(-45deg) translate(5px,-6px); background-color: #fff"></div>
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
