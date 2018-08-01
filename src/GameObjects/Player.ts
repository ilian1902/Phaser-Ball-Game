class Player extends Phaser.Animation{
    game: Phaser.Game;
    speed: number;
    public newDirection: string;
    direction: string;

    constructor(game: Phaser.Game, parent: Phaser.Sprite, name: string, frameData: Phaser.FrameData, frames: number[] | string[], frameRate?: number, loop?: boolean) {
        super(game, parent, name, frameData, frames, frameRate, loop);

        
        this.newDirection = null;
        this.direction = 'right';
    }
}