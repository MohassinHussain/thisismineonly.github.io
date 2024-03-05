let hamMenu = document.getElementById('ham');
let close = document.getElementById('close');
let nav_list = document.getElementById('navbarUl');
const navbar = document.getElementById('navbar');
const memoriesHeading = document.querySelector('.memories-heading')
const frontMem = document.querySelector('.front-mem')
const backMem = document.querySelector('.back-mem')
const techMem = document.querySelector('.tech-mem')
const sideHeading = document.querySelectorAll('h1')
const projectsMainContainer = document.querySelector('.projects-main-container');
const contactContainer = document.getElementById('contact');
const skillsBox = document.querySelector('.box');
// nav_list.style.backgroundColor = "red";
hamMenu.addEventListener('click', menuClicked);
function menuClicked() {
  nav_list.style.display = "block"
  nav_list.style.backgroundColor = "black"
  nav_list.style.borderRadius = "20px"
  hamMenu.style.display = "none"
  close.style.display = "flex"
  //  nav_list.style.right = "10px"
  // nav_list.style.width = "30%"
}
close.addEventListener('click', closeMenu);
function closeMenu() {
  nav_list.style.display = "none"
  hamMenu.style.display = "flex"
  close.style.display = "none"
}

// window.onclick = function (event) {
//   if (event.target == navbar) {
//     nav_list.style.display = "none"
//     close.style.display = "none"
//     hamMenu.style.display = "flex"
//   }

// }

const darkMode = document.getElementById('dark-mode');
const lightMode = document.getElementById('light-mode');

darkMode.addEventListener('click', () => {
  document.body.style.backgroundColor = "grey";
  darkMode.style.display = "none";
  lightMode.style.display = "flex";
  document.body.style.color = "white";
  projectsMainContainer.style.backgroundColor = "grey"
  contactContainer.style.backgroundColor = "black"
  skillsBox.style.backgroundColor = "grey"
})
lightMode.addEventListener('click', () => {
  document.body.style.backgroundColor = "#e3d8d8";
  lightMode.style.display = "none";
  darkMode.style.display = "flex";
  document.body.style.color = "black";
  projectsMainContainer.style.backgroundColor = "#c5b2da"
  contactContainer.style.backgroundColor = "#eba7a7"
})


//resume

const viewResume = document.getElementById('view-resume-btn');
const resumeHolder = document.querySelector('.resume-holder');
const myResume = document.getElementById('my-resume');
const closeResume = document.getElementById('close-resume-btn')


viewResume.addEventListener('click', () => {
  let x = window.matchMedia("(max-width: 768px)")


  resumeHolder.style.width = "90%";
  resumeHolder.style.margin = "2rem";
  resumeHolder.style.height = "130vh"
  myResume.style.display = "flex";
  closeResume.style.display = "flex";
  viewResume.style.display = "none";

  // resumeHolder.style.width = "80%";
  // resumeHolder.style.margin = "2rem";
  // resumeHolder.style.height = "130vh"
  // myResume.style.display = "flex";
  // myResume.style.marginLeft = "10rem";
  // myResume.style.height = "130vh";
  // closeResume.style.display = "flex";
  // viewResume.style.display = "none";

})

closeResume.addEventListener('click', () => {
  resumeHolder.style.width = "0";
  resumeHolder.style.margin = "0";
  resumeHolder.style.height = "0"
  myResume.style.display = "none";
  viewResume.style.display = "flex";
  closeResume.style.display = "none";
})





