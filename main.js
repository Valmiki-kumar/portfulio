/*=============================================== toggle icon navbar ============================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active'); 
};
/*=============================================== Scroll selection ============================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });
  /*=============================================== Sticky navbar============================================*/
  let header=document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY>100)
  /*=============================================== remove toggle ============================================*/
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

/*=============================================== Scroll revel ============================================*/
ScrollReveal({
    distance: '80px', 
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Skills-container, .Portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


/*=============================================== SEND MAIL ============================================*/
// function email(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "valmikikumar78@gmail.com",
//         Password : "EB2AB67DF66D476D4CE0BA3DCD22E13C092B",
//         To : 'valmikikumar78@gmail.com',
//         From : "valmikikumar78@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     ); 
     
// }