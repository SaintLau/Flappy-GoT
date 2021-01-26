//const wallCanvas = document.getElementById('wall');
//const context = wallCanvas.getContext('2d');


//to have the character
const character = new Component (30, 30, 'pink', 0, 200);

//character selection

/*
const character = new Component {
    khaleesi: {name: 'Khaleesi'}
}



*/

//to control the character
        //When a key is pressed 
document.addEventListener('keydown', e => {
    if(e.code === 'Space') {
        character.gravitySpeed = 0.8;
    }
});

document.addEventListener('keyup', e => {
    if(e.code === 'Space') {
        character.gravitySpeed = 0;
    }
});

// document.addEventListener('keydown', e => {
//     switch (e.keyCode){
//    //     case 37: 
//    //     character.speedX -= 1;
//    //     break;
//         case 38:
//         character.speedY -= 1;
//         break;
//     //    case 39: 
//     //    character.speedX += 1;
//     //    break;
//         case 40:
//         character.speedY += 1;
//         break;
//     }
// });

