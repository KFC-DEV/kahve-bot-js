const { MessageEmbed } = require("discord.js");
const moment = require('moment');
const { Database } = require('coffeedb');
const db = new Database('./Database/ekonomi.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");


exports.run = async (bot, message, args) => {
        let user = message.mentions.users.first() || message.author;
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL();
        userinfo.id = user.id;
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
        userinfo.dctarih = moment.utc(message.guild.members.cache.get(user.id).user.createdAt).format('DD MMMM YYYY h:mm')
        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma\``)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)
        userinfo.dctarihkatilma = moment.utc(message.guild.members.cache.get(user.id).joinedAt).format('DD MMMM YYYY h:mm')
        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)


        const kullanıcıBilgi = new MessageEmbed()
        .setAuthor(user.username, bot.user.avatarURL())
        .setColor(embedColor)
        .addField("ID", `${userinfo.id}`, true)
        .addField("Sunucudaki İsmi", `${message.guild.user.username}`, true)
        .addField("Oyun", `Oynadığı bir oyun yok!`, true)
        .addField("Rolleri", `${message.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' ') || "Bu kullanıcıda hiçbir rol bulunmuyor."}`, true)
        .addField("Bot mu?", userinfo.bot, true)
        .addField("Sunucuya Katılma Tarihi", userinfo.dctarihkatilma, true)
        .addField("Hesap Oluşturma Tarihi", userinfo.dctarih, true)
        .addField("Premium Kullanıcı mı?", db.fetch(`premiumkullanıcı_${message.author.id}`) || "Hayır değil.", true)
        message.channel.send({ embeds: [kullanıcıBilgi] })
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcı-bilgi', 'kullanıcı-bilği'],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı'
};