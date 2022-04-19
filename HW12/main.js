var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var platforms;
var player;
var stars;
var bombs;
var spikes;
var cursors;
var score = 0;
var scoreText;
var gameOver = false;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('spike', 'assets/spikes.png');
    this.load.spritesheet('pacman', 'assets/pacman.png', {
        frameWidth: 28,
        frameHeight: 28
    });
}

function create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(100, 200, 'ground');
    platforms.create(100, 400, 'ground');
    platforms.create(700, 100, 'ground');
    platforms.create(700, 300, 'ground');


    spikes = this.physics.add.staticGroup();

    spikes.create(150, 376, 'spike');
    spikes.create(150, 176, 'spike');
    spikes.create(650, 276, 'spike');
    spikes.create(650, 76, 'spike');


    player = this.physics.add.sprite(28, 308, 'pacman');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('pacman', {
            start: 7,
            end: 10
        }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'stationary',
        frames: [{
            key: 'pacman',
            frame: 5
        }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('pacman', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: {
            x: 12,
            y: 0,
            stepX: 70
        }
    });

    stars.children.iterate(function(child) {
        child.setBounce(Phaser.Math.FloatBetween(0.5, 1));
        child.setCollideWorldBounds(true);
        child.setVelocity(Phaser.Math.Between(-200, 200), 20);
        child.allowGravity = false;

    });

    bombs = this.physics.add.group();

    scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#000'
    });

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);

    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.overlap(player, spikes, hitSpike, null, this);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

}

function update() {

    if (gameOver) {
        return;
    }

    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);

        player.anims.play('stationary');
    }

    if (cursors.space.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}

function collectStar(player, star) {
    star.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0) {
        stars.children.iterate(function(child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}

function hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('stationary');

    gameOver = true;
}

function hitSpike(player, spike) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('stationary');

    gameOver = true;
}