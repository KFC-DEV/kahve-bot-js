const { MessageEmbed } = require('discord.js')
const { Database } = require('coffeedb')
const db = new Database('./Database/premium.json')
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let premium = await db.fetch(`premiumsistemi_${message.author.id}`)
  let premiumKontrolText;
  if (premium == null) premiumKontrolText = 'Bu sunucuda *premium* aktif değil.'
  if (premium == 'aktif') premiumKontrolText = 'Bu sunucu için *premium* aktif.'
  if (premium == 'deaktif') premiumKontrolText = 'Bu sunucuda *premium* aktif değil.'
  
  const premiumEmbed = new MessageEmbed()
  .setColor(embedColor)
  .setDescription(premiumKontrolText)
  message.channel.send({ embeds: [premiumEmbed] })
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["premiumkontrol"],
    permLevel: 0,
}

exports.help = {
    name: 'premium-kontrol',
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontorol'
}