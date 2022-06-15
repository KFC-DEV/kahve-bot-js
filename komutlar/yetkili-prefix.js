const Discord = require('discord.js')
const { Database } = require('coffeedb');
const db = new Database('./Database/önek.json');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");
exports.run = async (client, message, args) => {
    let a = prefix
    let p = await db.fetch(`prefix_${message.guild.id}`) || prefix
    let o = await db.fetch(`prefix_${message.guild.id}`)
    if (!message.member.permission.has("ADMINISTRATOR")) return message.channel.send({ content: 'Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.' })

    if(args[0] === "ayarla") {
    if(o) { return message.channel.send({ content: 'Ayarlanmış Şeyi Tekrar Ayarlıyamassın | Şuanki Ön-ek:** '+p+' **Sıfırlamak İçin** '+p+'**ön-ek sıfırla**' });
          }
    if(!args[1]) return message.channel.send({ content: 'Bir Ön-ek Girip Tekrar Dene - Ön-ek: '+p+'' });
    db.set(`prefix.${message.guild.id}`, args[1])
    message.channel.send({ content: 'Ön-ek Başarıyla Ayarlandı - Ön-ek: '+args[1]+'' });
    }
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send({ content: 'Ayarlanmayan Ön-ek Sıfırlayamazsınız - PrÖn-ekefix: '+p+'' });
    }
    db.delete(`prefix.${message.guild.id}`)       
     return message.channel.send({ content: 'Ön-ek Başarıyla Sıfırlandı - Ön-ek: '+a+'' });
    }
   
    if(!args[0]) return message.channel.send({ content: 'Ön-ek Ayarlamak İçin **Örnek:** \`'+p+'ön-ek ayarla <ön-ek>\` \nSıfırlamak İçin **Örnek:** \`'+p+'ön-ek sıfırla\` - Şuanki Ön-ek: \`'+p+'\`' });
    
};

exports.conf = {
aliases: ['p', 'prefix']
};
exports.help = {
    name: "ön-ek"
};