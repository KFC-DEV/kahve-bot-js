const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    const yardımEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail(embedThumbnail)
    .setAuthor(message.user.username)
    .setDescription('Kahve bota oy vererek destek çıkabilirsiniz')
    .addField('Oy verme bağlantısı', `[Oy vermek için tıkla!](https://top.gg/bot/369059067651555339/vote)`, true)
    .addField('Nasıl oy verilir?', `[Youtube videomuzu izle!](https://www.youtube.com/watch?v=udn39Bl1YGA)`, true)
    message.channel.send({ embeds: [yardımEmbed] })
};

exports.conf = {
    aliases: ["OYVER", "OV", "VOTE", "VT"]
};
exports.help = {
    name: "oyver"
}