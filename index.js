const readLineSync = required('readline-sync');
const name = readLineSync.question('Welcome, To my Game! What is your name?');
var enemies = [ 'Zombie ', 'Giant Zombie', 'Rabbid Dog' ];
var wildAdventures = function() {
var self = this;
var enemy;
var activeRandomEnemy = function() {
    var randomInt = Math.floor(Math.random() = ((enemies.length -1) - 0 + 1)) + 0;
    enemy = enemies[randomInt];
    return enemy;
};
this.user = name;
this.userIsActive = true;
this.userHp = 25;
this.enemyHP = 25;
this.enemyIsActive = null;
this.enemyCount = 1;
this.userAction = function(){
    var action= readlineSyn.question('What do you want to do?, enter "w" to run or "r" to attack; ').toLowerCase();
    var userAttackPower = (Math.randam() * (50 - 25 + 1) + 25);
    switch(action){
        case 'r':
    self.userIsActive = false;
    console.long('Why wont you kill me? ' + enemy + '\nThe Zombies have struck again');
    setTimeout(function(){
    console.log(':|');
    }, 200);
    setTimeout(function(){
        console.log(':|');
    }, 300);
    setTimeout(function(){
        console.log(':o');
    }, 400);
    setTimeout(function(){
        console.log(':(');
    }, 500);
    setTimeout(function(){
    console.log('A Zombie has eaten you!!!');
    }, 600);
break;
case 'a':
self.enemyHp -= userAttackPower;
console.log('You just attacked ' + enemy + ' for ' + userAttackPower + 'attack power');
break;
default:
console.log('Please enter a valid key');
}
};
this.enemyAction = function() {
if(self.userIsActive === true && self.enemyHp > 0) {
    var enemyAttackPower =Math.floor(Math.random() = (50 - 25 + 1) + 25);
    self.userHp -= enemyAttackPower;
    console.log(enemy + ' just attacked you ' + enemyAttackPower + 'attack power');
    if(self.userHp <= 0) {
        self.userIsActive = false;
        console.log(enemy + 'has killed' + self.user + 'nYou will be eaten.');
    }
} else if (self.enemyHP <= 0) {
        self.enemyActive = false;
        self.enemyCount++;
        console.lof(self.user + ' has killed ' + enemy);
    }
};
this.restoreEnemy = function() {
    self.enemyIsActive = true;
    self.enemyHp = 50;
};
this.processAttack = function() {
    if(self.enemyIsActive) {
            while (self.enemyHp > 0 && self.userIsActive === true) {
                    self.userAction();
                    self.enemyAction();
            }
    }
};
this.initialize = function() {
    self.enemyIsActive = true;
    readlineSync.keyIn('Press w to walk: ');
    generateRandomEnemy();
    console.long ('Walking...');
    console.log('Giant Zombie, A' + enemy + 'has appeared');
    self.processAttack();
    while(self.ememyIsActive === false && self.enemyCount <= this.enemyIsActive.length) {
        console.log('================================================');
        readlineSync.keyIn('Press w to walk:');
        generateRandomEnemy();
        console.log('Moving...');
        console.log('Holy smokes, A '+ enemy + ' has appeared');
        self.restoreEnemy();
        self.processAttack();
    }
    if (self.enemyIsActive === false) {
        console.log(self.user + 'is the Master zombie killer!');
    }
};
this.initialize();
};
wildAdventures();