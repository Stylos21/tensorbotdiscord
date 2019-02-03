// Post the 'Machine Learning' xkcd comic the the server's default channel at random intervals (on average, once every week)
function xkcd() {
      // Loop through all guilds bot is a member of
      bot.guilds.forEach(
            (guild) => {
                  // Randomly determine whether comic should be posted
                  if (Math.random() < 1 / 24 / 7) {
                        // Post comic
                        guild.systemChannel.send('Obligatory xkcd: https://xkcd.com/1838/');
                  }
            }
      );
}

// Run function once every hour
var interval = setInterval(xkcd, 1000 * 60 * 60);
