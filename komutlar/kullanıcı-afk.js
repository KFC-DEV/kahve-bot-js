const { MessageEmbed } = require("discord.js");
const { Database } = require('coffeedb');
const db = new Database('./Database/afk.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let user = message.author
  let sebep = args.join(" ")
 
  if (!sebep) return message.channel.send({ content: 'Bir Sebeb Yazmalısın!' })
 
  db.set(`afk_${user.id}`, sebep)
  message.channel.send({ embeds: [new MessageEmbed().setColor(embedColor).setAuthor(message.author.username).setTitle('Artık AFK!').setDescription('**'+sebep+'** sebebiyle klavyeden uzakta!')] })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk'
}