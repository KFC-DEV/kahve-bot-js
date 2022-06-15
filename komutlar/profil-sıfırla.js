const { MessageEmbed } = require("discord.js");
const { Database } = require("coffeedb");
const db = new Database("./Database/profil.json");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    const sıfırlaEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor(message.author.username)
    .setDescription('<@'+message.author.id+'>, Profilindeki tüm ayarlar sıfırlandı *senin için yeni bir başlangıç olur*.')
    message.channel.send({ embeds: [sıfırlaEmbed] })
    db.delete(`profilaçıklama_${message.author.id}`)
    db.delete(`profilbanner_${message.author.id}`)
    db.delete(`profilcolor_${message.author.id}`)
};

exports.conf = {
    aliases: ["DELETE", "REMOVE", "DLT", "RMV", 'delete', 'remove', 'sil', 'SİL']
};
exports.help = {
    name: "sıfırla"
}