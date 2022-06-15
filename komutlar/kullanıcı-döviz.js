const { MessageEmbed } = require("discord.js");
const { Database } = require('coffeedb');
const db = new Database('./Database/ekonomi.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  const DBL = require('dblapi.js')
  const dbl = new DBL('BOTUN DBL TOKENİ', client)
  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {
    var request = require('request');
    equest('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
      var info = JSON.parse(body);
    request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
      var euro = JSON.parse(body);

    let doviz = new Discord.RichEmbed()
    .setColor(embedColor)
    .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
    .addField(" Döviz", `** Dolar: **${info.buying} TL\n** Euro: **${euro.buying} TL`)
    message.channel.send({ embeds: [doviz] });
    }
})
    }
})
  } else {
    return message.channel.send({ embeds: [new MessageEmbed().setColor(embedColor).setDescription('Görünüşe Göre Bota **Oy** Vermemişsiniz. Bota 12 Saat de Bir Oy Vermeniz **Gerekmektedir**. Eğer Oy Verdiyseniz ve **2-3** Dakika Geçtiyse **Oy Vererek** Kullanılan Komutları Kullanabilirsiniz. Oy linki;\nhttps://top.gg/bot/BOT_ID/vote\nHerhangi Bir Sorun Veya Öneri İçin ➡ https://discord.gg/invite-code')] }) 
  } 
})
};

exports.conf = {
    aliases: ["DÖVİZ", "DOVİZ", "DOVIZ", "doviz", 'dovız']
};
exports.help = {
    name: "döviz"
};