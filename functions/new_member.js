const Discord = require("discord.js");

// Create a special role for every 100th member to join the server
bot.on("guildMemberAdd", (member) => {
      var guild = member.guild;
      // Check if new member is the 100th, 200th, 300th, etc. member to join the server
      if (guild.memberCount % 100 == 0) {
            // Create a new role for the member (if nonexistent)
            var role = createNewRole(guild, {
                  name: guild.memberCount + 'th',
                  color: 'RANDOM',
                  mentionable: true
            });

		// https://stackoverflow.com/a/27760489
		Promise.resolve(role).then(
			(role) => {
                        // Add the role to the member then notify them via a public message
				member.addRole(role).then(
					() => guild.systemChannel.send('Congratulations ' + member + ', you are the ' + guild.memberCount + 'th person to join the `' + guild.name + '` server!')
				);
			}
		);
      }
});
