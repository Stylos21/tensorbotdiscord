const Discord = require("discord.js");
const config = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

bot.commands = new Discord.Collection();

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

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);


})

bot.login(process.env.bot_token);
