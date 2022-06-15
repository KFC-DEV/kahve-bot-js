const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    let member = message.mentions.members.first();
    let body = 'https://mc-heads.net/body/' + mesaj
    if (mesaj.length < 1) return message.channel.send({ content: 'bir oyuncu adı belirtmelisin.' });
    if (mesaj == member) {
       message.channel.send({ content: 'kullanıcı değil, bir oyuncu adı belirtmelisin :/' })
    } else {
    const mcbody = new MessageEmbed()
      .setColor(embedColor)
      .setAuthor(message.author.username)
      .setDescription(mesaj +' adlı oyuncunun minecraft skini')
      .setImage(body)
    message.channel.send({ embeds: [mcbody] });
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['minecraft-skin', 'mc-görünüm', 'minecraft-görünüm']
};

exports.help = {
  name: 'mcskin'
};