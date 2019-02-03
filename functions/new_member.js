bot.on("guildMemberAdd", (member) => {
      var guild = member.guild;
      if (guild.memberCount % 100 == 0) {
            var role = createNewRole(guild, {
                  name: guild.memberCount + 'th',
                  color: 'RANDOM',
                  mentionable: true
            });

		// https://stackoverflow.com/a/27760489
		Promise.resolve(role).then(
			(role) => {
				member.addRole(role).then(
					() => guild.systemChannel.send('Congratulations ' + member + ', you are the ' + guild.memberCount + 'th person to join the `' + guild.name + '` server!')
				);
			}
		);
      }
});
