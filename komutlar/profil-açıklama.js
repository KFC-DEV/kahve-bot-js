const { MessageEmbed } = require("discord.js");
const { Database } = require("coffeedb");
const db = new Database("./Database/profil.json");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    let açıklamaText = args.join(" ")

    if (!açıklamaText) {
    return message.channel.send({ content: 'Bir açıklama girmen lazım örnek: (*'+prefix+'açıklama Kahve Botun Sahibi.*)' })
    }

    const açıklamaEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor(message.author.username)
    .setDescription('<@'+message.author.id+'>, Varsayılan açıklaman **'+açıklamaText+'** oldu.')
    message.channel.send({ embeds: [açıklamaEmbed] })
    db.set(`profilaçıklama_${message.author.id}`, açıklamaText)
};

exports.conf = {
    aliases: ["AÇIKLAMA", "AÇKLM", "DESCRİPTİON", "DESC"]
};
exports.help = {
    name: "açıklama"
}