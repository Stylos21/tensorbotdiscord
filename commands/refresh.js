const Discord = require("discord.js");
const one_letter_username = require("../functions/one_letter_username.js");

module.exports.run = async (bot, message, args) => {
   one_letter_username.refreshAll();
   message.reply('Refreshed and updated all TensorBot functions!');
};

module.exports.help = {
  name: "refresh"
}
