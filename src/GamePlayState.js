var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GamePlayState = (function (_super) {
    __extends(GamePlayState, _super);
    function GamePlayState() {
        var _this = _super.call(this) || this;
        _this.START_POSITION = 150;
        _this.SQUARE_SIZE = 15;
        _this.level = 1;
        return _this;
    }
    GamePlayState.prototype.preload = function () {
        this.game.load.image("ball", "/assets/ballgame.png");
    };
    GamePlayState.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0, 0, 1900, 1220);
        this.playScreenImage = this.add.sprite(0, 0, 'scene');
        this.ball = this.game.add.sprite(50, 50, "ball");
        this.ball.scale.setTo(0.1);
        this.ball.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.ball);
        this.game.camera.follow(this.ball);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    };
    GamePlayState.prototype.update = function () {
        this.ball.body.velocity.x = 0;
        this.ball.body.velocity.y = 0;
        if (this.cursors.left.isDown) {
            this.ball.body.velocity.x = -240;
        }
        else if (this.cursors.right.isDown) {
            this.ball.body.velocity.x = 240;
        }
        if (this.cursors.up.isDown) {
            this.ball.body.velocity.y = -240;
        }
        else if (this.cursors.down.isDown) {
            this.ball.body.velocity.y = 240;
        }
    };
    GamePlayState.prototype.generateApple = function () {
        var randomX = Math.floor(Math.random() * 40) * this.SQUARE_SIZE, randomY = Math.floor(Math.random() * 30) * this.SQUARE_SIZE;
    };
    return GamePlayState;
}(Phaser.State));
