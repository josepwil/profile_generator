const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (nameVal) => {
  const name = nameVal;

  rl.question('What is an activity you like doing? ', (activityVal) => {
    const activity = activityVal;

    rl.question('What do you listen to while doing that? ', (musicVal) => {
      const music = musicVal;

      rl.question('Which meal is your favourite? ', (favouriteMealVal) => {
        const favouriteMeal = favouriteMealVal;

        rl.question('What is your favourite thing to eat for that meal? ', (foodVal) => {
          const food = foodVal;

          rl.question('Which is your favourite sport? ', (sportVal) => {
            const sport = sportVal;

            rl.question('What is your superpower? ', (superpowerVal) => {
              const superpower = superpowerVal;
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${favouriteMeal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

