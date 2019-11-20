function Player(posX, posY, flag) {
    this.posX = posX;
    this.posY = posY;
    this.isJumping = false;
    this.canJump = true;
    this.health = 100;
    
    if(flag==1){
        this.width = 147;
        this.height = 120;
        this.character = new Spritesheet("assets/elephant.png", this.width, this.height);
        this.runAnim = new Animation(this.character, 10, 0, 4);
        this.jumpAnim = new Animation(this.character, 10, 0, 4);
        this.landAnim = new Animation(this.character, 10, 0, 4);
        this.anim = this.runAnim;
    }
    else {
        this.width = 45;
        this.height = 56;
        this.character = new Spritesheet("assets/player.png",this.width, this.height);
        this.runAnim = new Animation(this.character, 4, 0, 8);
        this.jumpAnim = new Animation(this.character, 4, 9, 9);
        this.landAnim = new Animation(this.character, 4, 8, 8);
        this.anim = this.runAnim;
    }
    this.crashed = function (obst) {
        var playerLeft = this.posX + 15;
        var playerRight = this.posX + this.width - 60;
        var playerTop = this.posY - this.height + 90;
        var playerBottom = this.posY;
        var obstLeft = obst.x;
        var obstRight = obst.x + obst.scaledW - 10;
        var obstTop = obst.newYPoz - obst.scaledH - 15;
        var obstBottom = obst.newYPoz;
        var crash = false;
        if ((playerRight < obstLeft) || (playerBottom < obstTop) || (playerLeft > obstRight) || (playerTop > obstBottom)) {
            crash = true;
        }
        return crash;
    };
    this.drawPlayer = function () {
        this.anim.draw(this.posX, this.posY);
        this.anim.update();
    };
}