class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 500, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    public preload() {
        this.game.load.image('menu', '/assets/game-background.jpg');
        this.game.load.image('scene', '/assets/main-scane.jpg');

        this.game.load.image('game-over', '/assets/game-over.jpg');
        // this.game.load.spritesheet('player', '/assets/hero.png');
        this.game.load.spritesheet('enemy', '/assets/enemis.png', 100, 110);
        this.game.load.image('button-start', '/assets/button.png');

        // this.game.load.audio('food', ['/Audio/foot.wav']);
    }

    create() {
        this.game.state.add('GameMenuState', GameMenuState, true);
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.state.add('GamePlayState', GamePlayState, false);
        this.game.state.add('GameMapState', GameMapState, false);
        
        this.game.state.start('GameMenuState');
    }

}

window.onload = () => {

    var game = new SimpleGame();

};