const { MessageEmbed } = require('discord.js')
const { Database } = require('coffeedb')
const db = new Database('./Database/premium.json')
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async (client, message, args) => { 
  
if(message.author.id !== '460920273064165407') if(message.author.id !== '460920273064165407')
    
      return;
  

 const args0 = args[0];
  if(!args0) {
    message.channel.send({ content: 'Premium alan kişinin *ID*\'sini gir!' })
  } else {
  
  db.set(`premiumsistemi_${args0}`, "aktif")
  message.channel.send({ content: 'Başarıyla premium verildi.' })
}
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-ver'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumver',
    description: '',
    usage: '',

}