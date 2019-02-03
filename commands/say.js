const Discord = require('discord.js');
module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('na bro');
    console.log('hello') //test
    message.delete();
    message.channel.send(args.join(' ').replace("@everyone", "everyone").replace("@here", "here")).catch(console.error);
}


module.exports.help = {
    name: "say"
}
