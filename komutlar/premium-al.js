const { MessageEmbed } = require('discord.js')
const { Database } = require('coffeedb');
const db = new Database('./Database/premium.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async (client, message, args) => { 

    if(message.author.id !== '460920273064165407')
    return;

    const args0 = args[0];
    if(!args0) {
    message.channel.send({ content: 'Premiumunu alacağın kullanıcının *ID*\'sini belirt!' })
    } else {
  
 
    db.delete(`premiumsistemi_${args0}`,"deaktif")
    message.channel.send({ content: 'Kullanıcıdan başarıyla premium alındı!' })
 
}
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-al'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumal',
    description: 'premiumal',
    usage: 'premiumal',

}