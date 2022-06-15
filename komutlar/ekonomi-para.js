const { MessageEmbed } = require("discord.js");
const { Database } = require('coffeedb');
const db = new Database('./Database/ekonomi.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    let kahvePara = db.fetch(`kahvepara_${message.author.id}`)

    message.channel.send({ content: ':credit_card: **'+message.author.username+'** adlı kişinin parası: '+kahvePara || "0"+'' })
};

exports.conf = {
    aliases: ["PARA", "COİN", "COIN", "MONEY", 'money', 'coin', 'CASH', 'cash']
};
exports.help = {
    name: "para"
}