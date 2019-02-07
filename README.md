# tensorbotdiscord

TensorBot is a custom Discord bot developed for the [TensorFlow Discord server](https://discordservers.com/server/395520812347686912), and developed by [@elementz#7739](https://github.com/elementzprojects) and [@generic_discord_user#1168](https://github.com/generic-github-user). It provides various functionalities that the staff of the server have hoped to implement that are not available in other bots. These functionalities include:

- Custom greeting messages and new member introductions
- Automatic token roles for new members who joined at specific points in time ✓
- Statistic tracking and record keeping
  - Number of members online ✓
  - Total members ✓
- Custom roles for specific server members
- Role for members with one letter usernames ✓
- TensorFlow chatbot and natural language processing (NLP) integration
- Posting [this xkcd comic](https://xkcd.com/1838/) to the server at random intervals ✓
- TensorFlow API reference commands
  - [TensorFlow Python](https://www.tensorflow.org/)
  - [TensorFlow.js](https://js.tensorflow.org/)
  - TensorFlow C++
  - TensorFlow Java
 - Machine learning acronym glossary

To invite TensorBot to a Discord server, use [this link](https://discordapp.com/oauth2/authorize?client_id=540306502930530344&scope=bot&permissions=536341991). 

# Commands

Below is a list of all commands available with TensorBot.

| Command Name |                              Description                              |                  Arguments                 |                                         Example Usage                                        |
|:------------:|:---------------------------------------------------------------------:|:------------------------------------------:|:--------------------------------------------------------------------------------------------:|
|     hello    | Say hello to TensorBot!                                               | none                                       | tf!hello                                                                                     |
|    prefix    | Set custom TensorBot command prefix.                                  | prefix - string                            | tf!prefix tf!!                                                                               |
|     docs     | Reference TensorFlow documentation.                                   | docs reference - string OR docs link - URL | tf!docs inputLayer tf!docs https://js.tensorflow.org/api/latest/index.html#layers.inputLayer |
|    refresh   | Refresh TensorBot functions that normally load on bot initialization. | none                                       | tf!refresh                                                                                   |
