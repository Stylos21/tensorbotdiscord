const Discord = require("discord.js");
const config = require("./config.json");
try {
	var auth = require('./auth.json');
} catch (error) {
	var auth = {
		'token': process.env.bot_token
	};
}
global.bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

const xkcd = require("./functions/xkcd.js");
const new_member = require("./functions/new_member.js");
const one_letter_username = require("./functions/one_letter_username.js");

global.createNewRole = function(guild, roleInfo) {
      var role = guild.roles.find(x => x.name == roleInfo.name);
      if (!role) {
            role = guild.createRole(roleInfo);
      }
      return role;
}

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
  one_letter_username.refreshAll();
});

bot.on("message", message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!message.content.startsWith("tf!")) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
});

bot.login(auth.token);
