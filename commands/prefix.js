const firebase = require('firebase-admin');
const Discord = require('discord.js');
var database = firebase.database();

module.exports.run = async (bot, message, args) => {
      database.ref('servers/' + message.guild.id + '/settings/prefix').set(args[0]).then(
            () => message.channel.send('Server command prefix updated to `' + args[0] + '`')
      );
};

module.exports.help = {
  name: 'prefix'
};
