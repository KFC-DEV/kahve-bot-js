const { MessageEmbed } = require("discord.js");
const { Database } = require('coffeedb');
const db = new Database('./Database/ekonomi.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    if(message.author.id !== '460920273064165407')
    return;

    let user = message.mentions.users.first()

    if (!user) return message.channel.send({ content: 'Kime para yollayacağımı etiketlemen lazım!' });
    if (user.bot === true) return message.channel.send({ content: 'Parayı bir bota yollarsan sen zararlı çıkarsın!' });
    
    let para = args[1];
    if (!para) return message.channel.send({ content: 'Yollayacağın miktarı yazman gerek!' });
    
    if (isNaN(para) === "true" ) return message.channel.send({ content: "Bir yazımı yollayacaksın? Lütfen bir miktar girin" })
    let paras = await db.fetch(`kahvepara_${user.id}`);

    const gönderildi = new MessageEmbed()
    .setColor(embedColor)
    .setDescription('Hey! admin bir kullanıcıya para gönderdin Gönderdiğin Miktar: `'+para+'`')
    message.channel.send({ embeds: [gönderildi] })
    db.add(`kahvepara_${user.id}`, para)
};

exports.conf = {
    aliases: ["ADMİN-PARA-GÖNDER", "ADMİNPARAGÖNDER", "ADMIN-CONİ-SEND", "ADMIN-COİN-GİVE", 'admin-money-give', 'admin-coin-give', 'admin-para-gönder']
};
exports.help = {
    name: "admin-paragönder"
}