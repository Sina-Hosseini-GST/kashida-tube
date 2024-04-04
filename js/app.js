// Elements
const text = document.querySelector('input[type=text]');
const form = document.querySelector('form');
const lettersToAddKashidaAfter = document.querySelector('#inject-kashida-after');
const lettersToIgnoreKashidaBefore = document.querySelector('#ignore-kashida-before');
const buttonArray = document.querySelectorAll('button');
const paragraph = document.querySelector('p');

// Variables
const space = ' ';
const kashida = 'ـ';
const breakLine = '\n';
const zwnj = '‌';
let counter;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let script = text.value.trim().replace(/  +/g, space);
  const letterToAddKashidaAfterArray = lettersToAddKashidaAfter.value.trim().split(breakLine);
  const letterToIgnoreKashidaBeforeArray = lettersToIgnoreKashidaBefore.value.trim().split(breakLine);

  if (script && letterToAddKashidaAfterArray && letterToIgnoreKashidaBeforeArray) {
    letterToIgnoreKashidaBeforeArray.push(zwnj, space);

    for (let i = 0; i < script.length; i++) {
      counter = 0;
      const currentLetter = script[i];
      const nextLetter = script[i + 1];
  
      for (let j = 0; j < letterToAddKashidaAfterArray.length; j++) {
        const letterToAddKashidaAfter = letterToAddKashidaAfterArray[j];
  
        if (nextLetter) {
          if (currentLetter == letterToAddKashidaAfter) {
            for (let k = 0; k < letterToIgnoreKashidaBeforeArray.length; k++) {
              const letterToIgnoreKashidaBefore = letterToIgnoreKashidaBeforeArray[k];
  
              if (nextLetter != letterToIgnoreKashidaBefore) {
                counter++;
              }
            }
            if (counter == letterToIgnoreKashidaBeforeArray.length) {
              script = `${script.substring(0, i + 1)}${kashida}${script.substring(i + 1)}`;
            }
          }
        }
      }
    }
  
    paragraph.textContent = script;
  }
  else {
    if (!script) {
      text.classList.add('placeholder:font-bold');
    }
    if (!lettersToAddKashidaAfter.value) {
      lettersToAddKashidaAfter.classList.add('placeholder:font-bold');
    }
    if (!lettersToIgnoreKashidaBefore.value) {
      lettersToIgnoreKashidaBefore.classList.add('placeholder:font-bold');
    }
  }
});

const addButtonStyles = () => {
  for (let i = 0; i < buttonArray.length; i++) {
    const button = buttonArray[i];
    button.classList.remove('bg-gray-900');
    button.classList.add('bg-gray-800');
  }
};

const removeButtonStyles = () => {
  for (let i = 0; i < buttonArray.length; i++) {
    const button = buttonArray[i];
    button.classList.remove('bg-gray-800');
    button.classList.add('bg-gray-900');
  }
};

for (let i = 0; i < buttonArray.length; i++) {
  const button = buttonArray[i];

  button.addEventListener('mouseover', () => {
    addButtonStyles();
  });

  button.addEventListener('mouseout', () => {
    removeButtonStyles();
  });
}

paragraph.addEventListener('click', () => {
  navigator.clipboard.writeText(paragraph.textContent);
});