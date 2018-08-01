class GamePlayState extends Phaser.State {
    	START_POSITION: number = 150;
        SQUARE_SIZE: number = 15;
        level: number = 1;

        game: Phaser.Game;
        cursors: Phaser.CursorKeys;
        player: Player;
        // apple: Apple;
        textStyle_Key: Phaser.PhaserTextStyle;
        textStyle_Value: Phaser.PhaserTextStyle;
        scoreTextValue: Phaser.Text;
        speedTextValue: Phaser.Text;
        levelTextValue: Phaser.Text;
        addNew: boolean;
        playScreenImage: Phaser.Sprite;
        food: Phaser.Sound;
		moveSound: Phaser.Sound;
		ball: Phaser.Sprite;

        constructor() {
            super();
		}
		
		public preload(){
			this.game.load.image("ball", "/assets/ballgame.png");

		}

        public create() {
            
            // this.playScreenImage.scale.setTo(this.game.width / this.playScreenImage.width, this.game.height / this.playScreenImage.height);

			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.world.setBounds(0, 0, 1900, 1220);
			this.playScreenImage = this.add.sprite(0, 0, 'scene');
			// this.player = new Player(this.game, this.START_POSITION, this.START_POSITION, 'player');

			this.ball = this.game.add.sprite(50,50,"ball");
			this.ball.scale.setTo(0.1);
			this.ball.anchor.setTo(0.5);
			this.game.physics.arcade.enable(this.ball);
			this.game.camera.follow(this.ball);
			this.cursors = this.game.input.keyboard.createCursorKeys();

			
            // //this.checkScreen();
            // this.player = new Player(this.game, this.START_POSITION, this.START_POSITION, 'snake');
            
            // // Initial snake
            // for (var i = 1; i < 5; i++) {
            //     this.player.snakeBody[i] = this.game.add.sprite(this.START_POSITION + i * this.SQUARE_SIZE, this.START_POSITION, 'snake');
            // }

            // // Style for text
            // this.textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
            // this.textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
            
            // // Score.
            // this.game.add.text(30, 20, "SCORE", this.textStyle_Key);
            // this.scoreTextValue = this.game.add.text(90, 18, this.player.score.toString(), this.textStyle_Value);

            // // Speed.
            // this.game.add.text(500, 20, "SPEED", this.textStyle_Key);
            // this.speedTextValue = this.game.add.text(558, 18, this.player.speed.toString(), this.textStyle_Value);

            // // Level.
            // this.game.add.text(300, 20, "LEVEL", this.textStyle_Key);
            // this.levelTextValue = this.game.add.text(280, 18, this.level.toString(), this.textStyle_Value);
            
            // this.game.physics.enable(this.player.snakeHead, Phaser.Physics.ARCADE);

           
            // this.generateApple();
        }

        public update() {

			this.ball.body.velocity.x = 0;
			this.ball.body.velocity.y = 0;

			if (this.cursors.left.isDown)
			{
				this.ball.body.velocity.x = -240;
			}
			else if (this.cursors.right.isDown)
			{
				this.ball.body.velocity.x = 240;
			}

			if (this.cursors.up.isDown)
			{
				this.ball.body.velocity.y = -240;
			}
			else if (this.cursors.down.isDown)
			{
				this.ball.body.velocity.y = 240;
			}
			

            // if (this.cursors.right.isDown && this.player.direction != 'left') {
            //     this.player.newDirection = 'right';
            // }
            // else if (this.cursors.left.isDown && this.player.direction != 'right') {
            //     this.player.newDirection = 'left';
            // }
            // else if (this.cursors.up.isDown && this.player.direction != 'down') {
            //     this.player.newDirection = 'up';
            // }
            // else if (this.cursors.down.isDown && this.player.direction != 'up') {
            //     this.player.newDirection = 'down';
            // }

            // this.player.speed = Math.min(10, Math.floor(this.player.score / 5));
            // this.speedTextValue.text = '' + this.player.speed;

            // this.level = Math.min(10, Math.floor(this.player.score / 3));
            // this.levelTextValue.text = '' + this.level;

            // this.player.updateDelay++;

            // if (this.player.updateDelay % (10 - this.player.speed) == 0) {

            //     // Snake movement
            //     var firstCell = this.player.snakeBody[this.player.snakeBody.length - 1],
            //         lastCell = this.player.snakeBody.shift(),
            //         oldLastCellx = lastCell.x,
            //         oldLastCelly = lastCell.y;

            //     // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
            //     if (this.player.newDirection) {
            //         this.player.direction = this.player.newDirection;
            //         this.player.newDirection = null;
            //     }

            //     // Change the last cell's coordinates relative to the head of the snake, according to the direction.
            //     if (this.player.direction == 'right') {
            //         lastCell.x = firstCell.x + this.SQUARE_SIZE;
            //         lastCell.y = firstCell.y;
            //     }
            //     else if (this.player.direction == 'left') {
            //         lastCell.x = firstCell.x - this.SQUARE_SIZE;
            //         lastCell.y = firstCell.y;
            //     }
            //     else if (this.player.direction == 'up') {
            //         lastCell.x = firstCell.x;
            //         lastCell.y = firstCell.y - this.SQUARE_SIZE;
            //     }
            //     else if (this.player.direction == 'down') {
            //         lastCell.x = firstCell.x;
            //         lastCell.y = firstCell.y + this.SQUARE_SIZE;
            //     }

            //     // Place the last cell in the front of the stack.
            //     // Mark it the first cell.
            //     this.player.snakeBody.push(lastCell);
            //     firstCell = lastCell;

            //     if (this.addNew) {
            //         this.player.snakeBody.unshift(this.game.add.sprite(oldLastCellx, oldLastCelly, 'snake'));
            //         this.addNew = false;
            //     }
                
            //     this.appleCollision();
            //     // this.selfCollision(firstCell);
            //     // this.wallCollision(firstCell);
            // }
        }

        generateApple() {

            // Chose a random place on the grid.
            var randomX = Math.floor(Math.random() * 40) * this.SQUARE_SIZE,
                randomY = Math.floor(Math.random() * 30) * this.SQUARE_SIZE;

            // Add a new apple.
            // this.apple = new Apple(this.game, randomX, randomY);
		}

}