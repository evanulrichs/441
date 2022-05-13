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
        update: update,
    }
};

var cursors;
var player;
var sky;
var face;
var explosion;
var currentHealth = 5;
var gameVelocity = 0;
var score = 0;
var gameLose = false;

var game = new Phaser.Game(config);

function preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('ship', 'assets/sprites/alienbusters.png');
    this.load.image('particle', 'assets/particles/white.png');
    this.load.image('health', 'assets/sprites/healthbar.png');
    this.load.image('life', 'assets/sprites/zelda-life.png');
    this.load.spritesheet('face', 'assets/sprites/metalface78x92.png', {
        frameWidth: 78,
        frameHeight: 92
    });
    this.load.spritesheet('explosion', 'assets/sprites/explosion.png', {
        frameWidth: 64,
        frameHeight: 64
    });
}

function create() {

    sky = this.add.tileSprite(0, 0, 1200, 600, "sky").setOrigin(0).setScrollFactor(0, 1);

    player = this.physics.add.image(100, 300, 'ship');

    player.setBounce(.25);
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

    face = this.physics.add.sprite(800, 1239, 'face');

    life = this.physics.add.image(1065, 40, 'life');
    life.setScale(1.5);
    health = this.physics.add.image(1065, 50, 'health');
    health.setScale(2);

    scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#FFF'
    });

    this.anims.create({
        key: 'glow',
        frames: this.anims.generateFrameNumbers('face', {
            start: 0,
            end: 5
        }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'boom',
        frames: this.anims.generateFrameNumbers('explosion', {
            start: 0,
            end: 24
        }),
        frameRate: 50,
        repeat: 0
    });

    this.physics.add.collider(player, face, hitFace, null, this);
    this.physics.add.overlap(player, face, hitFace, null, this);
}


function update() {

    if (gameLose) {
        return;
    }

    //ship acceleration
    if (player.x <= 200) {
        player.setAccelerationX(200);
    } else if (player.x > 200) {
        player.setAccelerationX(-200);
    } else {
        player.setAccelerationX(0);
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
    if (gameVelocity < 15) {
        gameVelocity += .1;
    }
    sky.tilePositionX += gameVelocity;

    //face animation
    face.anims.play('glow', true);
    face.x -= gameVelocity;
    face.setVelocity(0);

    if (face.x < -39) {
        face.x = 1239;
        face.y = Phaser.Math.Between(1, 11) * 50;
    }

    //scorekeeping
    score += Math.round(gameVelocity / 10);

    scoreText.setText('Score: ' + score);

}

function hitFace() {

    gameVelocity = 0;

    player.setVelocityX(-500);

    explosion = this.physics.add.sprite(face.x, face.y, 'explosion');
    explosion.anims.play('boom', true);

    if (currentHealth != 1) {
        currentHealth -= 1;
        health.setCrop(0, 0, currentHealth * 20, 100);
    } else {
        currentHealth -= 1;
        health.setCrop(0, 0, currentHealth * 20, 100);
    }

    face.x = 1239;
    face.y = Phaser.Math.Between(1, 11) * 50;

    if (currentHealth == 0) {
        console.log("you died");

        this.add.rectangle(600, 300, 800, 400, 0x000, .7);

        this.add.text(290, 200, 'GAMEOVER', {
            fontSize: '128px',
            fill: '#FFF'
        });
        this.add.text(240, 350, 'Final Score: ' + score, {
            fontSize: '72px',
            fill: '#FFF'
        });

        gameVelocity = 0;

        player.disableBody(true);

        gameLose = true;
    }
}