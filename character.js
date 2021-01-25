//const wallCanvas = document.getElementById('wall');
//const context = wallCanvas.getContext('2d');


//to have the character
const character = new Component (30, 30, 'pink', 0, 200);

//to control the character
        //When a key is pressed 
document.addEventListener('keydown', e => {
    switch (e.keyCode){
   //     case 37: 
   //     character.speedX -= 1;
   //     break;
        case 38:
        character.speedY -= 1;
        break;
    //    case 39: 
    //    character.speedX += 1;
    //    break;
        case 40:
        character.speedY += 1;
        break;
    }
});

        //When a key is released = stop 
document.addEventListener('keyup', () => {
    //character.speedX = 0;
    character.speedY = 0;
});

