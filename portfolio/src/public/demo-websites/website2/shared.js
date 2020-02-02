'use strict';

var mobileNavOpenButton = document.querySelector('.nav-links-container__mobile-button');
var mobileNavContainer = document.querySelector('.nav-links-container__mobile');
var mobileNavCloseButton = document.querySelector('.nav-mobile__close-btn');

mobileNavOpenButton.addEventListener('click', ()=>{
  mobileNavContainer.classList.add('open');
})

mobileNavCloseButton.addEventListener('click', ()=>{
  mobileNavContainer.classList.remove('open');
});
