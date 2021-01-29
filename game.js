const wallCanvas = document.getElementById('wall');
const context = wallCanvas.getContext('2d');


let obstacles = [];
let character; 

const game = {
    frames: 0, 
    score: 0, 

    start: function() {
        backgroundAudio.play();
        this.interval = setInterval(updateGame, 20);
        
    },
    selectCharacter: function(char) {
        if(char === 'Khaleesi') {
          character = new Component (60, 60, 'Khaleesi', 0, 200); 
        } else {
            character = new Component (60, 60, 'Jon', 0, 200); 
        }
        game.start();
    },
    //for game over
    stop: function() {
        backgroundAudio.pause();
        clearInterval(this.interval);
        obstacles = [];
        this.frames = 0;
    },

    clear: function() {
        context.clearRect(0, 0, wallCanvas.width, wallCanvas.height);
    },

    drawBackground: function() {
        updateCanvasBackground();
    },

   message: function() {  
        if(game.frames <= 200){
            context.font = '20px myfont';
            context.fillStyle = 'red';
            context.fillText(`When you play the Flappy GoT, you win or you die`, 10, 100);
        } else if (game.frames  === 200) {
            context.clearRect(350, 50, 100, 100);
        }
      
    },

    keepingScore: function() {
        if (game.frames > 818 && game.frames % 120 === 0) {
            this.score++;
        }
        context.font = '20px myfont';
        context.fillStyle = 'red';
        context.fillText(`Score: ${this.score}`, 350, 50); 
    }
}

//function to make the game run
function updateGame() {
        backgroundAudio.play();
        game.clear();
        game.drawBackground();
        game.message();
        character.newPosition();
        character.update();
        updateObstacles();
        gameOver();
        game.keepingScore();
}


//to control the character
        //When a key is pressed 
        document.addEventListener('keydown', e => {
            e.preventDefault();
            if(e.code === 'Space') {
                character.gravitySpeed = 0.8;
            }
        });
        
        document.addEventListener('keyup', e => {
            if(e.code === 'Space') {
                character.gravitySpeed = 0;
            }
        });