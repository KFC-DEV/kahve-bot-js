const Discord = require('discord.js');
const { Database } = require('coffeedb');
const db = new Database('./Database/ekonomi.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");
exports.run = async (client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || config.prefix
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({ content: 'Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.' })
  if (!args[0]) return message.channel.send({ content: "Silinecek mesajın miktarını yaz!" });
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send({ content: `${args[0]} tane mesaj silindi` })
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle '
};