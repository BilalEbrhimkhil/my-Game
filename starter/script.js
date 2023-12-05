'use strict';
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const  btnNew = document.querySelector('. btn--new');
const  btnRoll = document.querySelector('. btn--roll');
const  bntHold = document.querySelector('. btn--hold');

// staring condition 
scoreEl0.textContent=0;
scoreEl1.textContent=0;
 
 diceEl.classList.add('hidden');