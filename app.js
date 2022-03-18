const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');
const box7 = document.getElementById('box-7');
const box8 = document.getElementById('box-8');
const box9 = document.getElementById('box-9');
const gameField = document.getElementById('entire-grid');

// let player1input = box1value.options[box1value.selectedIndex].text;



// box1.addEventListener('change', test);
gameField.addEventListener('change', checkForWin);


function test() {
  console.log(box1.value);
  console.log(box2.value);
  // console.log(box3.value);
  // console.log(box4.value);
  // console.log(box5.value);
  // console.log(box6.value);
  // console.log(box7.value);
  // console.log(box8.value);
  // console.log(box9.value);
}

function checkForWin() {
  if (box1.value === box2.value && box2.value === box3.value) {
    console.log('winner')
  } 
}
// function checkWin() {
//   if (box1.value === box2.value && box2.value === box3.value) {
//     console.log(box1.value)
//   } else if (box4.value === box5.value && box4.value === box6.value) {
//     console.log('player wins');
//     // console.log(box4.value);
//   } else {
//     console.log('try again, sucka');
//   }
// }



// if (box1value.value === box2value.value
// ||
// box7.value === box8.value && box8.value === box9.value;

//  ||
// (box4.value === box5.value && box4.value === box6.value)
// ||
    // box7.value === box8.value && box8.value === box9.value

    // function test() {
    //   console.log(box7.value);
    // }