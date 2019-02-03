function oneLetterUsername(oM, nM) {
      var role = createNewRole(nM.guild, {
            name: 'One-letter nickname club',
            color: 'RANDOM',
            mentionable: true
      });
      Promise.resolve(role).then(
            (role) => {
                  if (nM.displayName.length === 1) {
                        nM.addRole(role);
                  } else {
                        nM.removeRole(role);
                  }
            }
      );
}

bot.on('guildMemberUpdate', (oldMember, newMember) => oneLetterUsername(oldMember, newMember))

module.exports = {
      'run': oneLetterUsername
};
