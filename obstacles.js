const wallCanvas = document.getElementById('wall');
const context = wallCanvas.getContext('2d');

//this class will represent the obstacles in the game. Here it will be defined their behaviour
let obstacles = []; //array to receive random values to generate obstacles

//Here will be the main variable to make this work - Start, Stop, Points
const game = {
    frames: 0, //start has no moving
    score: 0, //start has no moving

    start: function() {
        this.interval = setInterval(updateGame, 20);
    },
    //for game over
    stop: function() {
        clearInterval(this.interval);
    },

    clear: function() {
        context.clearRect(0, 0, wallCanvas.width, wallCanvas.height);
    },

    drawBackground: function() {
        updateCanvasBackground();
    },

    keepingScore: function() {
        if (game.frames > 818 && game.frames % 120 === 0) {
            this.score++;
        }
    //    const points = Math.floor(this.frames / 100);
        context.font = '20px game of thrones';
        context.fillStyle = 'red';
        context.fillText(`Score: ${this.score}`, 350, 50);
    }
}

//function to make the game run
function updateGame() {
        game.clear();
        game.drawBackground();
        character.newPosition();
        character.update();
        updateObstacles();
        gameOver();
        game.keepingScore();
}


class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
    }
    update() { //to draw again and again
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    newPosition() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }

    hitWith(obstacle) {  //method for the hit to stop the game
        return !(this.bottom() < obstacle.top() ||
                 this.top() > obstacle.bottom() ||
                 this.right() < obstacle.left() ||
                 this.left() > obstacle.right())
    }
}


//function for obstacles to be updated and generated 
function updateObstacles() {
    for(let i = 0; i < obstacles.length; i++){
        obstacles[i].x -= 1;
        obstacles[i].update();
    
    }
    //the obstacles
    game.frames += 1;

    if (game.frames % 120 === 0) {

    
            //var obstacles standart
    let minHeight = 20;
    let maxHeight = 340;
    let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    let minGap = 50;
    let maxGap = 340;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);


            //Top obstacle
    let topObstacle = new Component(10,
        height,
        'orange',
        wallCanvas.width,
        0); //the value on y will be 0

        obstacles.push(topObstacle);

            //Bot obstacle
    let botObstacle = new Component(10,
        wallCanvas.width - height - gap,
        'orange',
        wallCanvas.width,
        height + gap);

        obstacles.push(botObstacle);
        
    
        }

    }


//to start
game.start();
