/*
Critter -----------------------------------------------
A supperclass for critters in this game
*/
class Critter {
    constructor(sprite,x0,y0){
        this.sprite = `images/${sprite}.png`;
        this.x0=x0;
        this.y0=y0;
        this.xMove = 101;
        this.yMove = 83;
        this.x=this.x0;
        this.y=this.y0;
    }

    // Draw the critter on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
}


// Enemies our player must avoid

/*
ENEMY ---------------------------------------------------
Inheritance of Critter
*/

class Enemy extends Critter {
    constructor(sprite = 'enemy-bug', x0=-101, y0=60, speed=150){
        super(sprite, x0, y0);
        this.sprite = `images/${sprite}.png`;
        this.x0 = x0; // 1st row=0; next row=1st row+101; so on
        this.y0 = y0; // 1st line=60; next line=1st line+83; so on
        this.speed = speed;
    }

    // Update the enemy's position
    // Parameter: dt, a time delta between ticks
    update(dt){ 
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        if(this.x < 101 + 4*this.xMove){
            this.x += this.speed*dt;
        }else{
            this.x = this.x0;
        }
        
        // Check if collide
        // Move to Enemy method to avoid looping over all enemies but just on the current reference
        if((this.y === player.y) && (player.x - 101/2 <= this.x) && (this.x <= player.x + 101/2) ){
            if(this.sprite==='images/enemy-bug.png'){
                this.reset();
            }
        }

    }

    // A reset function to reset player position
    reset(){
        player.x = player.x0;
        player.y = player.y0;
    }

    // Draw the enemy on the screen, required method for game
    render() {
        super.render();
    };
    



}



/*
PLAYER -----------------------------------------------------------

Player class:
    Constructor:
        Properties:
            - x pos
            - y pos
            - sprite img
        Methods:
            - Update position:
                - Check if collide: did Player x & y cross with enemies?
                - Check if win: did Player reach water?
            - Render:
                - Move Player to current x & y coordinates
            - Handle keyboard inputs:
                - Update Player's x & y property according to input
            - Reset Player
                - Set x & y to their starting coordinates
*/

// Now write your own player class
class Player extends Critter {
    constructor(sprite = 'char-cat-girl', x0=0, y0=60){
        super(sprite, x0, y0);
        this.sprite = `images/${sprite}.png`;
        this.x0 = x0+this.xMove*2; // 1st row=0; next row=1st row+101
        this.y0 = y0+this.yMove*4; // 1st line=60; next line=1st line+83
        this.win = false;
    }
    
    // a handleInput() method.
    handleInput(key){
        
        switch(key){
            case 'left':
                if((this.x===0) || ((this.y===Rock.y) && (this.x===Rock.x+this.xMove)) ){
                    break;
                }else{
                    this.x -= this.xMove;
                    break;
                }

            case 'up':
                if((this.y === 60)){
                    this.y -= 1;
                    break;
                }else if((this.y===Rock.y+this.yMove) && (this.x===Rock.x)){
                    break;
                }
                else{
                    this.y -= this.yMove;
                    break;
                }

            case 'right':
                if((this.x===this.xMove*4) || ((this.y===Rock.y) && (this.x===Rock.x-this.xMove))){
                    break;
                }else{
                    this.x += this.xMove;
                    break;
                }

            case 'down':
                if((this.y===this.y0) || ((this.y===Rock.y-this.yMove) && (this.x===Rock.x))){
                    break;
                }else{
                    this.y += this.yMove;
                    break;
                }
        }
    }
    // This class requires an update()
    update(){

        // Check if win
        if(this.y < 60){
            this.win = true;
        }
    }

    // This class requires an render()
    render(){
        super.render();
    }




}


// A function to get random number between two values
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}
// A function to get random Int between two values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Place all enemy objects in an array called allEnemies
 
let allEnemies;
// Generate 5 enemies with various speed and starting positions
function randomEnemies(){
    allEnemies = [];
    for(let n = 0; n < 5; n++){
        s = 101 * getRandomNum(1, 5);
        x = -101 * getRandomNum(0, 2);
        xRock = 101 * getRandomInt(0,4);
        y = 60 + 83 * getRandomInt(0,3);
    
        if(n===0){
            Rock = new Enemy('Rock', xRock, y, 0);
            allEnemies.push(Rock);
        }else{
            enemy = new Enemy('enemy-bug', x, y, s);
            allEnemies.push(enemy);
        }
    
    }
}

// Place the player object in a variable called player
let player = new Player();
// let player = new Player('char-pink-girl'); // Customize player sprite

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/* This object defines the publicly accessible functions available to
* developers by creating a global Resources object.
*/    
window.App = {
    randomEnemies: randomEnemies
};