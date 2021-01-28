class Component {
    constructor(width, height, image, x, y,) {       
        
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 2;
        this.gravity = 0.4;
        this.gravitySpeed = 0;
    }


    update() { 
        const imageGame = new Image();
        if(this.image === 'sword') {
            imageGame.src = './images/sword-removebg-preview (1).png'; 
        }else if(this.image === 'swordbot') {
            imageGame.src = './images/swordbot-removebg-preview.png';
        
        } else if(this.image === 'Jon') {
            imageGame.src = './images/jonSnow-removebg-preview.png' 
        } else {
            imageGame.src = './images/khaleesiDragon-removebg-preview.png' 
            
        }
        context.drawImage(imageGame, this.x, this.y, this.width, this.height)
    }
    hitBot() {
        let bottom = wallCanvas.height - this.height;
        if (this.y > bottom) {
            this.y = bottom;
            this.speedY = 0;
        }
    }
    
    hitTop() {
        let top = 0;
        if (this.y < top) {
            this.y = top + this.height - (this.height / 2);
            this.speedY = 0;
        }
    }

    newPosition() {
        this.hitBot();
        this.speedY = this.speedY + (this.gravity - this.gravitySpeed);
        this.y += this.speedY;
        this.hitTop();
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

    hitWith(obstacle) {  //for the hit to stop the game
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
    let minHeight = 30;
    let maxHeight = 300;
    let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    let minGap = 70;
    let maxGap = 400;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);


            //Top obstacle
    let topObstacle = new Component(30,
        height,
        "sword",                
        wallCanvas.width,
        0); //the value on y will be 0

        obstacles.push(topObstacle);

            //Bot obstacle
    let botObstacle = new Component(30,
        wallCanvas.width - height - gap,
        'swordbot',   
        wallCanvas.width,
        height + gap);

        obstacles.push(botObstacle);
        
        }

    }



