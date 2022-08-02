const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`A goblin approaches you, how do you feel about goblins? `, (answer1) => {
  rl.question(`The goblin runs in to its little cabin and comes back with a very small pie, what do you do? `, (answer2) => {
    rl.question(`On closer inspection the pie looks immaculate BUT you can tell it was made with rats from the forest.\nDoes this change how you feel? `, (answer3) => {
      rl.question(`What kind of adventurer do you consider yourself? `, (answer4) => {
        rl.question(`How much gold do you have stored in the bank in town? `, (answer5) => {
          rl.question(`How well is that bank guarded? `, (answer6) => {
            rl.question(`Did you eat any of the pie the goblin gave you? (yes/no) `, (answer7) => {
              console.log(`This is how you feel about goblins:\n${answer1}`);
              console.log(`This is what you did when offered pie by the goblin:\n${answer2}`);
              console.log(`Did discorvering the nature of the pie change your opinion:\n${answer3}`);
              console.log(`The kind of adventurer you consider yourself is:\n${answer4}`);
              console.log(`You said you have '${answer5}' stored in the town nearby...`);
              console.log(`According to you the bank is '${answer6}' guarded.`);
              if (answer7.toLowerCase() === 'yes') {
                console.log(`You ate the pie. It was immaculate.`);
              } else if (answer7.toLowerCase() === 'no') {
                console.log(`You didn't eat the pie. You missed out on the best pie of your entire life.`);
              } else if (answer7.toLowerCase() !== 'no' && answer7.toLowerCase() !== 'yes') {
                console.log(`You answered ${answer7} when asked yes or no, woops. You'll never know about the pie.`);
              }
              rl.close();
            });
          });
        });
      });
    });
  });
});