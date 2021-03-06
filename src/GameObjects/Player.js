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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, parent, name, frameData, frames, frameRate, loop) {
        var _this = _super.call(this, game, parent, name, frameData, frames, frameRate, loop) || this;
        _this.newDirection = null;
        _this.direction = 'right';
        return _this;
    }
    return Player;
}(Phaser.Animation));
