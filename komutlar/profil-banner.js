const { MessageEmbed } = require("discord.js");
const { Database } = require("coffeedb");
const db = new Database("./Database/profil.json");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    let bannerLink = args.join(" ")

    if (!bannerLink) {
    return message.channel.send({ content: 'Bir resim urlsi girmen lazım örnek: (*'+prefix+'banner <görsel_link>.*)' })
    }

    const açıklamaEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor(message.author.username)
    .setDescription('<@'+message.author.id+'>, Profil bannerın(arkaplanın) **'+bannerLink+'** oldu *aşağıda görseli görebilirsin*.')
    .setImage(bannerLink)
    message.channel.send({ embeds: [açıklamaEmbed] })
    db.set(`profilbanner_${message.author.id}`, bannerLink)
};

exports.conf = {
    aliases: ["ARKA-PLAN", "ARK-PLN", "ARKAPLAN", "BANNER", 'BNNR', 'banner']
};
exports.help = {
    name: "arkaplan"
}