const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Do you play any instruments?', (instrument) => {
        rl.question("What's your favourite meal? ", (meal) => {
          rl.question("What's your favourite food? ", (food) => {
            rl.question('What sport do you like? ', (sport) => {
              rl.question(
                "What's your superpower or AKA tell us what are you amazing at? ",
                (superpower) => {
                  rl.question('what are you believe in?', (religion) => {
                    console.log(
                      `${name} loves listening to ${music} while ${activity}, ${name} also plays ${instrument}. ${name}'s fav meal of the day is ${meal} and she/he enjoys ${food}, prefers ${sport}, and is amazing at ${superpower}. Lastly, ${name} belives in ${religion}`
                    );
                    rl.close();
                  });
                }
              );
            });
          });
        });
      });
    });
  });
});
