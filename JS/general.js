let menuButton = document.querySelector('#menu-js')
let topStrip = document.querySelector('#top-strip')
let middleStrip = document.querySelector('#middle-strip')
let bottomStrip = document.querySelector('#bottom-strip')
let stripsContainer = document.querySelector('#strips-js')
let header = document.querySelector('.h-navigation')
let menuBar = document.querySelector('.menu-bar')
let links = document.querySelectorAll('.page-link')
let page = 'nothing';
let topBar = document.querySelector('.top-bar')
function menuHandler(){
  function addAnimations(){
      topStrip.classList.remove('closeT')
      middleStrip.classList.remove('closeB')
      bottomStrip.classList.remove('show')
      menuButton.classList.add('openMenu');
      stripsContainer.classList.add('centre')
      topStrip.classList.add('openT')
      middleStrip.classList.add('openB')
      bottomStrip.classList.add('hide')
      header.classList.add('h-clicked')
      header.classList.remove('h-clicked2')
      menuBar.style.display = 'flex';
}

function cancelAnimations(){
      menuButton.classList.remove('openMenu')
      stripsContainer.classList.remove('centre')
      topStrip.classList.add('closeT')
      middleStrip.classList.add('closeB')
      bottomStrip.classList.add('show')
      setTimeout(() => {
        topStrip.classList.remove('openT')
        middleStrip.classList.remove('openB')
        bottomStrip.classList.remove('hide')
      },300) // removing the added animations after the new animations end(0.3s)
      header.classList.remove('h-clicked')
      header.classList.add('h-clicked2')
      menuBar.style.display = 'none';
}

menuButton.addEventListener('click', () => {
  menuButton.classList.contains('openMenu')
  ? cancelAnimations()
  : addAnimations()
})

}

menuHandler()

function scrollHandler(){
  
  window.addEventListener('scroll', () => {
    
    if(window.scrollY > 30){
      topBar.classList.add('hide')
    }else {
      topBar.classList.remove('hide')
    }

  })

}

scrollHandler()

// function menuBarHandler(){

//   links.forEach((link) => {

//     link.addEventListener('click', () => {
//       link.style.setProperty('--after-width', '100%')
//     })

//   })

//   console.log('hello')

// }

// function HcolorChange() {

//   function removeBgColor(){
//     header.style.backgroundColor = " #05823B"
//   }

//   menuButton.addEventListener('click', () => {
//     header.classList.contains('h-clicked')
//     ? header.style.backgroundColor = " #05823B"
//     : header.style.backgroundColor = " #87C540"
//   })
// }

// HcolorChange()

// menuBarHandler()

// window.addEventListener('load', function () {
  
// })


// stripsContainer.style.animation="centre 0.3s linear forwards";
// topStrip.style.animation="openT 0.3s linear forwards"
// middleStrip.style.animation="hide 0.3s linear forwards"
// bottomStrip.style.animation="openB 0.3s linear forwards"