class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftArmX = this.bodyX + 110;
        this.leftArmY = this.bodyY + 20;

        this.rightArmX = this.bodyX - 95;
        this.rightArmY = this.bodyY + 20;

        this.leftLegX = this.bodyX + 65;
        this.leftLegY = this.bodyY + 125;

        this.rightLegX = this.bodyX - 65;
        this.rightLegY = this.bodyY + 125;

        this.fangX = this.bodyX;
        this.fangY = this.bodyY + 20;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 20;

        this.eyesX = this.bodyX;
        this.eyesY = this.bodyY - 20;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueA.png");
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueB.png");
        my.sprite.rightArm.setFlipX(true);

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_darkA.png");
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_darkA.png");
        my.sprite.rightLeg.setFlipX(true);

        my.sprite.fang = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.smile = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.smile.visible = false;
        my.sprite.eyes = this.add.sprite(this.eyesX, this.eyesY, "monsterParts", "eye_angry_blue.png");
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        
        this.input.keyboard.on('keydown', (event) => {
            if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.A) {
                
                my.sprite.body.x -= 1; 
                my.sprite.leftArm.x -= 1;
                my.sprite.rightArm.x -= 1;
                my.sprite.leftLeg.x -= 1;
                my.sprite.rightLeg.x -= 1;
                my.sprite.fang.x -= 1;
                my.sprite.smile.x -= 1;
                my.sprite.eyes.x -= 1;
            } else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.D) {
                
                my.sprite.body.x += 1; 
                my.sprite.leftArm.x += 1;
                my.sprite.rightArm.x += 1;
                my.sprite.leftLeg.x += 1;
                my.sprite.rightLeg.x += 1;
                my.sprite.fang.x += 1;
                my.sprite.smile.x += 1;
                my.sprite.eyes.x += 1;
            }
        });

  

    
        this.input.keyboard.on('keydown', (event) => {
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
                my.sprite.smile.visible = true;
                my.sprite.fang.visible = false;
            }
        });
       
        this.input.keyboard.on('keydown', (event) => {
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.F) {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        }
        });
       
    }

}