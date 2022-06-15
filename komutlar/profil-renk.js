const { MessageEmbed } = require("discord.js");
const { Database } = require("coffeedb");
const db = new Database("./Database/profil.json");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    let embedRenk = args.join(" ")

    if (!embedRenk) {
    return message.channel.send({ content: 'Bir renk kodu girmen lazım örnek: (*'+prefix+'renk <renk_kodu>.*)' })
    }

    const açıklamaEmbed = new MessageEmbed()
    .setColor(embedRenk)
    .setAuthor(message.author.username)
    .setDescription('<@'+message.author.id+'>, Profil rengin(embed rengi) **'+embedRenk+'** oldu *bu embedde bulunuyor yaptığın renk*.')
    message.channel.send({ embeds: [açıklamaEmbed] })
    db.set(`profilcolor_${message.author.id}`, embedRenk)
};

exports.conf = {
    aliases: ["COLOR", "color", "CLR", "RENK", 'rnk', 'renk']
};
exports.help = {
    name: "embed-renk"
}