const outputEl = document.querySelector('.output');
const inputEl = document.querySelector('#pass-length');
const upperEl = document.querySelector('#uppercase');
const lowerEl = document.querySelector('#lowercase');
const numberEl = document.querySelector('#numbers');
const symbolEl = document.querySelector('#symbols');
const btn = document.querySelector('.generate-button');

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '@#$_&-+;:"?%';


btn.addEventListener('click', () => {
  
  let pwLength = parseInt(inputEl.value);
  let password = '';
  
  for(let i = 0; i < pwLength; i++){
    
  let x = '';
  
  if(lowerEl.checked){
    x += getLower();
  }
  
  if(upperEl.checked){
    x += getUpper();
  }
  
  if(numberEl.checked){
    x += getNumber();
  }
  
  if(symbolEl.checked){
    x += getSymbol();
  }
  
  password += x[Math.floor(Math.random()*x.length)];
  
  
  }
  
  outputEl.innerHTML = password;
  
});


function getLower(){
  return letters[Math.floor(Math.random()*letters.length)];
}

function getUpper(){
  return letters[Math.floor(Math.random()*letters.length)].toUpperCase();
}

function getNumber(){
  return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
  return symbols[Math.floor(Math.random()*symbols.length)];
}