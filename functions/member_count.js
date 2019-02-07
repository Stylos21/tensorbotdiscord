// Import stuff
const firebase = require('firebase-admin');
const Discord = require('discord.js');
var database = firebase.database();

// Update recorder server member counts
function updateMembers(member) {
      // Get guild from new (or leaving) member
      var guild = member.guild;
      // Add current server member count and timestamp to list
      database.ref('servers/' + guild.id + '/members/states/' + Date.now()).set(guild.memberCount);
      // Get current record for most members on server
      database.ref('servers/' + guild.id + '/members/record').once('value').then((record) => {
            // If record is not already created, create it
            // If record is broken, update it
            if (!record.val() || guild.memberCount > record.val()) {
                  // Set servers/server_id/members/record to updated member count
                  database.ref('servers/' + guild.id + '/members/record').set(guild.memberCount);
            }
      });
}

// Bind event listeners for when guild members join or leave the server
bot.on('guildMemberAdd', (member) => updateMembers(member));
bot.on('guildMemberRemove', (member) => updateMembers(member));
