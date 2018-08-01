class GameMenuState extends Phaser.State {
    public game: Phaser.Game;
	public text: Phaser.Text;

    private readonly TEXT_POS_X: number = 135;
    private menuScreenImage: Phaser.Sprite;
    

    constructor() {
        super();
    }

    create() {
        var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        this.menuScreenImage = this.add.sprite(0, 0, 'menu');
        this.menuScreenImage.scale.setTo(this.game.width / this.menuScreenImage.width, this.game.height / this.menuScreenImage.height);
		var startButton = this.game.add.button((this.game.canvas.width / 2), (this.game.canvas.height / 2), 'button-start', this.startGame, this);
		startButton.scale.setTo(0.5);
		startButton.anchor.setTo(0.5);
        this.text = this.game.add.text(((this.game.canvas.width / 2) - this.TEXT_POS_X), (this.game.canvas.height / 4), "Igra za Borud", style);
    }

    startGame() {
        this.game.state.start('GamePlayState');
    }
}