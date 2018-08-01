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
var GameMenuState = (function (_super) {
    __extends(GameMenuState, _super);
    function GameMenuState() {
        var _this = _super.call(this) || this;
        _this.TEXT_POS_X = 135;
        return _this;
    }
    GameMenuState.prototype.create = function () {
        var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        this.menuScreenImage = this.add.sprite(0, 0, 'menu');
        this.menuScreenImage.scale.setTo(this.game.width / this.menuScreenImage.width, this.game.height / this.menuScreenImage.height);
        var startButton = this.game.add.button((this.game.canvas.width / 2), (this.game.canvas.height / 2), 'button-start', this.startGame, this);
        startButton.scale.setTo(0.5);
        startButton.anchor.setTo(0.5);
        this.text = this.game.add.text(((this.game.canvas.width / 2) - this.TEXT_POS_X), (this.game.canvas.height / 4), "Igra za Borud", style);
    };
    GameMenuState.prototype.startGame = function () {
        this.game.state.start('GamePlayState');
    };
    return GameMenuState;
}(Phaser.State));
