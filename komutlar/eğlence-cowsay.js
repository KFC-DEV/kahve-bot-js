var cowsay = require("cowsay");
const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = (client, msg, args) => {

    let text = args.join(" ");

    msg.channel.send({ content: "```" + cowsay.say({
        text : text
    }) + "```" })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cowsay',
  description: 'İstediğiniz Şeyi İnek Söylermiş Gibi Yazar.',
  usage: 'cowsay [yazı]'
};