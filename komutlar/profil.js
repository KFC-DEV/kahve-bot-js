const { MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
const { Database } = require("coffeedb");
const db = new Database("./Database/profil.json");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    let kahvePara = db.fetch(`kahvepara_${message.author.id}`)
    let profilAçıklama = db.fetch(`profilaçıklama_${message.author.id}`)
    let profilBanner = db.fetch(`profilbanner_${message.author.id}`)
    let profilColor = db.fetch(`profilcolor_${message.author.id}`)
    let rozetlerim = db.fetch(`rozetlerim_${message.author.id}`)

    let user = message.mentions.users.first() || message.author;
    const profilEmbed = new MessageEmbed()
    .setColor(profilColor || embedColor)
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 2048}))
    .setAuthor(user.username)
    .addField('Kullanıcı', `${user.tag}`, false)
    .addField('Açıklama', `${profilAçıklama || "Bir Açıklama Girilmemiş!"}`, false)
    .addField('Para', `${kahvePara || "0"}`, false)
    .addField('Rozetler', `${rozetlerim || "Hiç rozetin bulunmuyor! (*ayarlamak için: "+prefix+"rozet*)"}`, false)
    .setImage(profilBanner || "https://media.discordapp.net/attachments/369041688171118593/628635631739994132/021419_coffeeclimatechange.png?width=922&height=396")
   
    // const row = new MessageActionRow().addComponents([
    // new MessageButton()
    // .setLabel('Discord Hesabı')
    // .setStyle('LINK')
    // .setURL('http://www.discord.com/user/'+user.id+'')
    // .setEmoji('👤')
    // ])
    
    // const row2 = new MessageActionRow().addComponents([
    // new MessageButton()
    // .setLabel('Discord Avatarı')
    // .setStyle('LINK')
    // .setURL(user.displayAvatarURL({ dynamic: true, size: 2048 }))
    // .setEmoji('🖼')
    // ])

    // const row3 = new MessageActionRow().addComponents([
    // new MessageButton()
    // .setLabel('Profil Banner(Bot)')
    // .setStyle('LINK')
    // .setURL(profilBanner || "https://media.discordapp.net/attachments/369041688171118593/628635631739994132/021419_coffeeclimatechange.png?width=922&height=396")
    // .setEmoji('🖼')
    // ])

    message.channel.send({ embeds: [profilEmbed]/*, components: [row, row2, row3]*/ })
};

exports.conf = {
    aliases: ["profile", "PROFİLE", "PROFILE", "profıle", "pp", "PROFİL", "PROFIL"]
};
exports.help = {
    name: "profil"
}