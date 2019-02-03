function xkcd() {
      bot.guilds.forEach(
            (guild) => {
                  if (Math.random() < 1 / 24 / 7) {
                        guild.systemChannel.send('Obligatory xkcd: https://xkcd.com/1838/');
                  }
            }
      );
}

var interval = setInterval(xkcd, 1000 * 60 * 60);
