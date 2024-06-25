var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




// const colImg = document.getElementById('info');

// function handleScroll() {
//   const elementTop = colImg.getBoundingClientRect().top;
//   const elementHeight = colImg.offsetHeight;

//   if (elementTop + elementHeight >= 0 && elementTop < window.innerHeight) {
//     colImg.classList.add('info.animate');
//   } else {
//     colImg.classList.remove('info.animate');
//   }
// }

// window.addEventListener('scroll', handleScroll);

// Wrap every letter in a span
document.addEventListener("DOMContentLoaded", function() {
  var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 2000
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 13],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});

document.getElementById('cardTrigger').addEventListener('click', function() {
  var modal = new bootstrap.Modal(document.getElementById('modalPeliculas'));
  modal.show();
});

document.getElementById('cardTrigger2').addEventListener('click', function() {
  var modal = new bootstrap.Modal(document.getElementById('modalRHH'));
  modal.show();
});

document.getElementById('cardTrigger3').addEventListener('click', function() {
  var modal = new bootstrap.Modal(document.getElementById('modalCursos'));
  modal.show();
});

document.getElementById('cardTrigger8').addEventListener('click', function() {
  var modal = new bootstrap.Modal(document.getElementById('modalMatricula'));
  modal.show();
});

document.getElementById('cardTrigger7').addEventListener('click', function() {
  var modal = new bootstrap.Modal(document.getElementById('modalMapas'));
  modal.show();
});


