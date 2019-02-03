const Discord = require("discord.js");

// Give a special role to users with one-letter long nicknames
function oneLetterUsername(oM, nM) {
      // Create 'One-letter nickname club' role with a random color if it does not already exist
      var role = createNewRole(nM.guild, {
            name: 'One-letter nickname club',
            color: 'RANDOM',
            mentionable: true
      });
      Promise.resolve(role).then(
            (role) => {
                  // If nickname is exactly one character long, add role to user
                  if (nM.displayName.length === 1) {
                        nM.addRole(role);
                  }
                  // Otherwise, remove the role if they already have it
                  else {
                        nM.removeRole(role);
                  }
            }
      );
}

function refreshAll() {
      bot.guilds.forEach(
            (guild) => {
                  guild.members.forEach(
                        (member) => oneLetterUsername(undefined, member)
                  )
            }
      );
}

// If a guild member's nickname changes, check if they qualify for the role
bot.on('guildMemberUpdate', (oldMember, newMember) => oneLetterUsername(oldMember, newMember))

// Export run function
module.exports = {
      'run': oneLetterUsername,
      'refreshAll': refreshAll
};
