var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var cursors;
var player;
var playerVelocity = 100;
var sky;
var skyVelocity = 0;

var game = new Phaser.Game(config);

function preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('ship', 'assets/sprites/alienbusters.png');
    this.load.image('particle', 'assets/particles/white.png');
    this.load.spritesheet('bomb', 'assets/sprites/metalface78x92.png', {
        frameWidth: 32,
        frameHeight: 32
    });
}

function create() {

    sky = this.add.tileSprite(0, 0, 1200, 600, "sky").setOrigin(0).setScrollFactor(0, 1);

    player = this.physics.add.image(100, 300, 'ship');

    player.setBounce(1, 1);
    player.setCollideWorldBounds(true);

    var particles = this.add.particles('particle');

    var emitter = particles.createEmitter({
        scale: { start: 0.5, end: 0 },
        blendMode: 'ADD',
    });

    emitter.startFollow(player);
    emitter.followOffset.x = -70;
    emitter.setGravityX(-1000);
    emitter.setSpeedX(-800);

    cursors = this.input.keyboard.createCursorKeys();

    bomb = this.physics.add.sprite(100, 450, 'bomb');

    this.anims.create({
        key: 'rotate',
        frames: this.anims.generateFrameNumbers('bomb', {
            start: 0,
            end: 5
        }),
        frameRate: 10,
        repeat: -1
    });
}


function update() {

    //intro acceleration
    if (player.x <= 150) {
        player.setAccelerationX(200);
    } else if (player.x > 150 && player.x <= 300) {
        player.setAccelerationX(-50);
    } else {
        player.setAccelerationX(0);
        player.setVelocityX(0);
    }

    //controls
    if (cursors.up.isDown) {
        player.setAccelerationY(-500);
    } else if (cursors.down.isDown) {
        player.setAccelerationY(500);
    } else {
        player.setAccelerationY(0);
    }

    //sky acceleration
    if (skyVelocity < 15) {
        skyVelocity += .1;
    }
    sky.tilePositionX += skyVelocity;

    bomb.anims.play('rotate', true);
}