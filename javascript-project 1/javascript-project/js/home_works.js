// const emailInput = document.getElementById('email-input');

// function isValidGmail(email) {
//     const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//     return gmailRegex.test(email);
// }
// emailInput.addEventListener('input', function() {
//     const email = emailInput.value;
//     const isValid = isValidGmail(email);

//     if (isValid) {
//         console.log('Валидный Gmail адрес:', email);
//         emailInput.style.borderColor = 'blue';
//     } else {
//         console.log('Невалидный Gmail адрес:', email);
//         emailInput.style.borderColor = 'red';
//     }
// });

// const parentBlock = document.getElementById('parent-block');
// const smallBlock = document.getElementById('small-block');

// function moveRight(position) {
//     if (position <= parentBlock.clientWidth - smallBlock.clientWidth) {
//         smallBlock.style.left = `${position}px`;
//         setTimeout(() => moveRight(position + 1), 10);
//     }
// }

// moveRight(0);


//gmail.checker
const gmailInput = document.querySelector('#gmail_input');
const gmailCheck = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^(\w)+@gmail\.com$/;

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

// //moveblock
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

function moveSquare() {
  if (positionX < 446 && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    setTimeout(moveSquare, 1);
  }
}

moveSquare();


//MOVE BLOCK
// const childBlock = document.querySelector('.child_block');

// let positionX = 0;
// let positionY = 0;

// const moveBlock = () => {
//   if (positionX < 446 && positionY === 0) { // 500 (parent width) - 50 (child width)
//     positionX++;
//     childBlock.style.left = `${positionX}px`;
//     setTimeout(moveBlock, 1);
//   } else if (positionX >= 446 && positionY < 446) { // 500 - 52
//     positionY++;
//     childBlock.style.top = `${positionY}px`;
//     setTimeout(moveBlock, 1);
//   } else if (positionX >= 0) {
//     positionX--;
//     childBlock.style.left = `${positionX}px`;
//     setTimeout(moveBlock, 1);
//   } else if (positionY > 0) {
//     positionY--;
//     childBlock.style.top = `${positionY}px`;
//     setTimeout(moveBlock, 1);
//   }
// };

// moveBlock();
