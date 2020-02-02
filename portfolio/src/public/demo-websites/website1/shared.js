'use strict';

var selectRadioButtons = document.querySelectorAll('.radio');
var selectRadioInner = document.querySelectorAll('.radio-inner');
var currentCheckedRadio = document.querySelector('.checkmark');

selectRadioButtons[0].addEventListener('click', function(){
    currentCheckedRadio.classList.remove('checkmark');
    selectRadioInner[0].classList.add('checkmark');
    currentCheckedRadio = selectRadioInner[0];
})

selectRadioButtons[1].addEventListener('click', function(){
  currentCheckedRadio.classList.remove('checkmark');
  selectRadioInner[1].classList.add('checkmark');
  currentCheckedRadio = selectRadioInner[1];
})
