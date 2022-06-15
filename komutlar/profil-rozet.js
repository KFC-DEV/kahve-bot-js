const { MessageEmbed } = require("discord.js");
const { Database } = require("coffeedb");
const db = new Database("./Database/rozetler.json");
const ekonomidb = new Database("./Database/ekonomi.json");
const premiumDB = new Database("./Database/premium.json");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    let premium_sistemi = premiumDB.has(`premiumsistemi_${message.author.id}`)
    if (!premium_sistemi == true) {
    const premiumSistemi = new MessageEmbed()
    .setColor(embedColor)
    .setDescription(`Sende Premium bulunmuyor bu yüzden bu komutu kullanamazsın ama *premium* alarak hem kullanabilir hemde botun aktif bir şekilde kalmasına destek olabilirsin almak için [websitemize git](https://kahvebot.com/premium)!`)
    return message.channel.send({ embeds: [premiumSistemi] }) 
    } else {
    if (!args[0]) {
    message.channel.send({ content: '<@'+message.author.id+'>, lütfen bir opsiyon giriniz. Mevcut opsiyonlar **rozetler,** **al,** **rozetlerim**'})
    }

    if (args[0] === "rozetler") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setDescription('Alabileceğiniz **6** rozet mevcut\nBunlar sırasıyla `balance (5000 KHV), bravery (5000 KHV), brilliance (5000 KHV), hypesquad (7500 KHV), partner (7500 KHV), türk bayrağı (0 KHV)`\n\nRozetlere göz atmak için web sitemizi ziyaret edebilirsiniz [gitmek için tıkla](https://kahvebot.com/arkaplanlar)')]})
    }

    if (args[0] === "al") {
    return message.channel.send({ content: 'Rozet almak için bir rozet belirt örnek *k!rozet <rozet_ismi> (rozetleri görmek için "k!rozet rozetler")*' })
    }
    
    if (args[0] === "türk-bayrağı") {
    let türk_bayrağı = ':flag_tr:'
    return message.channel.send({ content: '<@'+message.author.id+'>, artık türk bayrağı rozetine sahipsin.' })
    db.set(`rozetlerim_${message.author.id}`, türk_bayrağı)
    }

    if (args[0] === "balance") {
    let balanceBadge = 'Balance'
    return message.channel.send({ content: '<@'+message.author.id+'>, artık balance rozetine sahipsin.' })
    db.set(`rozetlerim_${message.author.id}`, balanceBadge)
    }

    if (args[0] === "bravery") {
    let braveryBadge = 'Bravery'
    return message.channel.send({ content: '<@'+message.author.id+'>, artık bravery rozetine sahipsin.' })
    db.set(`rozetlerim_${message.author.id}`, braveryBadge)
    }

    if (args[0] === "brilliance") {
    let brillianceBadge = 'Brilliance'
    return message.channel.send({ content: '<@'+message.author.id+'>, artık brilliance rozetine sahipsin.' })
    db.set(`rozetlerim_${message.author.id}`, brillianceBadge)
    }

    if (args[0] === "hypesquad") {
    let hypesquadBadge = 'Hypesquad'
    return message.channel.send({ content: '<@'+message.author.id+'>, artık hypesquad rozetine sahipsin.' })
    db.set(`rozetlerim_${message.author.id}`, hypesquadBadge)
    }

    if (args[0] === "partner") {
    let partnerBadge = 'Partner'
    return message.channel.send({ content: '<@'+message.author.id+'>, artık partner rozetine sahipsin.' })
    db.set(`rozetlerim_${message.author.id}`, partnerBadge)
    }
    
    if (args[0] === "rozetlerim") {
    let rozetlerim = db.fetch(`rozetlerim_${message.author.id}`)
    message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setDescription(`Sende bulunan rozetler: \`${rozetlerim || "Hiç rozetin bulunmuyor!"}\``)]})
    }
}
};

exports.conf = {
    aliases: ["ROZET", "BADGE", "RZT", "BDG", 'badge']
};
exports.help = {
    name: "rozet"
}