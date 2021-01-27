const wallCanvas = document.getElementById('wall');
const context = wallCanvas.getContext('2d');

//this class will represent the obstacles in the game. Here it will be defined their behaviour
let obstacles = [];
let character; //array to receive random values to generate obstacles

//Here will be the main variable to make this work - Start, Stop, Points
const game = {
    frames: 0, //start has no moving
    score: 0, //start has no moving
    

    start: function() {
        this.interval = setInterval(updateGame, 20);
        //this.character = khaleesi or jon
    },
    selectCharacter: function(char) {
        if(char === 'Khaleesi') {
          character = new Component (60, 60, 'Khaleesi', 0, 200); //THE ONE WORKING
        } else {
            character = new Component (60, 60, 'Jon', 0, 200); //THE ONE WORKING
        }
        game.start();
    },
    //for game over
    stop: function() {
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

  // drawCharacter: function() {
  //      updateCharacterOne();
   // },

    keepingScore: function() {
        if (game.frames > 818 && game.frames % 120 === 0) {
            this.score++;
        }
  //    const points = Math.floor(this.frames / 100);
        context.font = '20px game of thrones';
        context.fillStyle = 'red';
        context.fillText(`Score: ${this.score}`, 350, 50); //position of the score
    }
}

//function to make the game run
function updateGame() {
        game.clear();
        game.drawBackground();
     // game.drawCharacter();
     character.newPosition();
     character.update();
        updateObstacles();
        gameOver();
        game.keepingScore();
}


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