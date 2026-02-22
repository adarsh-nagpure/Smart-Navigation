const items = document.querySelectorAll('.nav li');
const indicator = document.querySelector('.child');
const circleIcon = document.querySelector('.circle');  


items.forEach((item, index) => {
  item.addEventListener('click', () => {

    document.querySelector('.nav li.active')
    .classList.remove('active');
    item.classList.add('active');

    indicator.style.left = `${index * 75 + 22}px`;

    circleIcon.innerHTML = item.querySelector('.nav-icon').innerHTML;
  });
});
 
indicator.style.top = "-40px";
indicator.style.left = "30px";
circleIcon.innerHTML =
 document.querySelector('.nav li.active .nav-icon').innerHTML;