const readLineSync = required('readline-sync');
const name = readLineSync.question('Welcome, to the escape room! What is your name?');

readLineSync.keyInPause(`
Welomce To The Escape Room, ${name}, 
you must find your way out or die.
`);

readLineSync.keyInPause(`
In the Room there is a key that will unlock a door.
There is also a hole in the wall watch out.
You must chose the correct path to escape and survive.
`);

let isAlive = True;
let isDoorOpen = false;
let hasKey = false;

while (isAlive == true && isDoorOpen == false){
    const chooseAction = readLineSync.KeyIn(`
    Pick a Number for an action:
    1. put hand in the hole
    2. Find the key
    3. Open the door 

    `, {Limit: `$<1-3>`});

    if (chooseAction == 1){
        console.log(`
        Wrong Decision, ${name}, You have DIED.
        `);
        isAlive = false;
    } else if (chooseAction == 2 && hasKey == false) {
        console.log(`
        Great you have found the key! What is your next move?`)
        hasKey = true;
    }   else if (chooseAction == 2 && hasKey == true) {
        console.log(`
        You Have the key. Use the key on the door and escape.

        What is your next move?
        `);
    }   else if (chooseAction == 3 && hasKey == false) {
        console.log(`
        The door is locked. Find the key to unlock it to escape.

        What is your next move?
        `);
    }   else if (chooseAction == 3 && hasKey == false) {
        console.log(`
        Good job ${name}, You have gotten the key and unlocked it.
        You have gotten out of the escape room congrats!

        Thanks for playing my escape room.
        `)
    }
}