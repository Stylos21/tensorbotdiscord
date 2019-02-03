const Discord = require("discord.js");
const config = require("./config.json");
try {
	var auth = require('./auth.json');
} catch (error) {
	var auth = {
		'token': process.env.BOT_TOKEN
	};
}
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = config.prefix
bot.commands = new Discord.Collection();
//ignore this comment pls lol - elementzprojects
fs.readdir("./commands", (err, files) => {
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) console.log("Couldn't find the command!");
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
bot.on("ready", () => {
  bot.user.setActivity(`with TensorFlow`);
});

bot.on("message", message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!message.content.startsWith("tf!")) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
});

bot.on("guildMemberAdd", (member) => {
      var guild = member.guild;
      if (guild.memberCount % 100 == 0) {
            var role = guild.roles.find(x => x.name == guild.memberCount + 'th');
		if (!role) {
			role = guild.createRole({
				name: guild.memberCount + 'th',
				color: 'RANDOM',
				mentionable: true
			});
		}

		// https://stackoverflow.com/a/27760489
		Promise.resolve(role).then(
			(role) => {
				member.addRole(role).then(
					() => guild.systemChannel.send('Congratulations ' + member + ', you are the ' + guild.memberCount + 'th person to join the `' + guild.name + '` server!')
				);
			}
		);
      }
});

bot.login(auth.token);
