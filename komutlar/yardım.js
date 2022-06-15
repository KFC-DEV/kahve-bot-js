const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");
exports.run = async(client, message, args) => {
    const yardımEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor('Kahve Bot Ekibi')
    .setDescription('Tüm komut listesi için `'+prefix+'komutlar`\nKahve bota [premium](https://kahvebot.com/premium) alarak destek çıkabilirsiniz.')
    .addField('» Premium', `↳ [kahvebot.com/premium](https://discord.gg/6Q8Geju)`, true)
    .addField('» Komut Listesi', `↳ [kahvebot.com/komutlar](https://discord.gg/6Q8Geju)`, true)
    .addField('» Bot Kullanımı', `↳ [kahvebot.com/kullanim](https://discord.gg/6Q8Geju)`, true)
    .addField('» Destek Sunucusu', `↳ [kahvebot.com/sunucu](https://discord.gg/6Q8Geju)`, true)
    .setImage(embedImage)
    message.channel.send({ embeds: [yardımEmbed] })
};

exports.conf = {
    aliases: ["Y", "YARDIM", "help", "HELP", "H"]
};
exports.help = {
    name: "yardım"
}