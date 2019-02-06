const firebase = require('firebase-admin');
const Discord = require('discord.js');
var database = firebase.database();

function updateMembers(member) {
      var guild = member.guild;
      database.ref('servers/' + guild.id + '/members/states/' + Date.now()).set(guild.memberCount);
      database.ref('servers/' + guild.id + '/members/record').once('value').then((record) => {
            if (!record.val() || guild.memberCount > record.val()) {
                  database.ref('servers/' + guild.id + '/members/record').set(guild.memberCount);
            }
      });
}

bot.on('guildMemberAdd', (member) => updateMembers(member));
bot.on('guildMemberRemove', (member) => updateMembers(member));
