const Discord = require("discord.js");

const admin = require('firebase-admin');
try {
      // It's fb-auth.json, not auth.json!
	var fb_auth = require('./fb-auth.json');
} catch (error) {
	var fb_auth = {
            project_id: 'tensorbot-bb058',
            client_email: process.env.client_email,
            private_key: process.env.private_key
	};
}
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: fb_auth.project_id,
    clientEmail: fb_auth.client_email,
    privateKey: unescape(fb_auth.private_key)
  }),
  databaseURL: 'https://tensorbot-bb058.firebaseio.com/'
});

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
const member_count = require("./functions/member_count.js");

global.createNewRole = function(guild, roleInfo) {
      var role = guild.roles.find(x => x.name == roleInfo.name);
      if (!role) {
            role = guild.createRole(roleInfo);
      }
      return role;
}

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
  setInterval(() => {
  bot.user.setStatus('idle')
  }, 300000)
  
  
  
});

bot.on("message", message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    admin.database().ref('servers/' + message.guild.id + '/settings/prefix').once('value').then(
	    (snapshot) => {
		    var prefix = snapshot.val();
		    if (prefix == undefined || prefix == '') {
			    prefix = config.prefix;
		    }
		    if (!message.content.startsWith(prefix)) return;
		    let commandfile = bot.commands.get(cmd.slice(prefix.length));
		    if (commandfile) commandfile.run(bot, message, args);
	    }
    );
});

bot.login(auth.token);
