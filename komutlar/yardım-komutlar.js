const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");
exports.run = async(client, message, args) => {
    if (!args[0]) message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail(embedThumbnail)
    .addField('bot', `\`${prefix}komutlar bot\``, true)
    .addField('ekonomi (Eklenmedi)', `\`${prefix}komutlar ekonomi\``, true)
    .addField('eğlence', `\`${prefix}komutlar eğlence\``, true)
    .addField('kahve (Eklenmedi)', `\`${prefix}komutlar kahve\``, true)
    .addField('kullanıcı', `\`${prefix}komutlar kullanıcı\``, true)
    .addField('profil', `\`${prefix}komutlar profil\``, true)
    .addField('mod', `\`${prefix}komutlar mod\``, true)
    .addField('müzik (Eklenmedi)', `\`${prefix}komutlar müzik\``, true)
    .addField('oyun', `\`${prefix}komutlar oyun\``, true)
    .addField('tatlı (Eklenmedi)', `\`${prefix}komutlar tatlı\``, true)
    ]})

    if (args[0] === "bot") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'dil (Eklenmedi)', `> Kullanıcı hesabınıza göre botun dilini değiştirebilirsiniz.`, true)
    .addField(''+prefix+'komutlar', `> Botun komut listesini öğrenebilirsin.`, true)
    .addField(''+prefix+'oyver', `> Bota oy vererek manevi bir şekilde destek çıkabilirsin.`, true)
    .addField(''+prefix+'ping', `> Botun mesaj ve sunucu tepkimesini görebilirsin.`, true)
    .addField(''+prefix+'ön-ek (Eklenmedi)', `> Sunucuda botun komut çalıştırma ön ekini değiştirebilirsin`, true)
    .addField(''+prefix+'yardım', `> Bot hakkında yardım alabilirsin.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }

   if (args[0] === "mod") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'ban', `> Sunucudan bir kişiyi yasaklayabilirsin`, true)
    .addField(''+prefix+'kick (Eklenmedi)', `> Sunucudan bir kişiyi atabilirsin.`, true)
    .addField(''+prefix+'konuştur (Eklenmedi)', `> Kahve tarafından susturulan üyenin susturmasını açabilirsin.`, true)
    .addField(''+prefix+'sustur (Eklenmedi)', `> Bir üyeyi sınırsız olarak sustur.`, true)
    .addField(''+prefix+'süreli-rol (Eklenmedi)', `> Bir kişiye süreli rol ver.`, true)
    .addField(''+prefix+'süreli-sustur (Eklenmedi)', `> Bir kişiyi süreli olarak sustur`, true)
    .addField(''+prefix+'temizle (Eklenmedi)', `> 14 gün önceden atılan mesajları sil.`, true)
    .addField(''+prefix+'unban (Eklenmedi)', `> Yasaklanmış bir üyenin yasağını kaldır.`, true)
    .addField(''+prefix+'yavaşmod (Eklenmedi)', `> Bir kanala yavaş mod atayın.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }

   if (args[0] === "kahve") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'fal (Eklenmedi)', `> Kahve falına bakabilirsin.`, true)
    .addField(''+prefix+'kahvegif (Eklenmedi)', `> Birbirinden ilginç kahve giflerine bakabilirsin.`, true)
    .addField(''+prefix+'kahve-ısmarla (Eklenmedi)', `> Arkadaşlarınıza kahve ısmarlayabilirsiniz.`, true)
    .addField(''+prefix+'kahve (Eklenmedi)', `> Menüden kahve numarasını yazarak sipariş verebilirsiniz.`, true)
    .addField(''+prefix+'menü (Eklenmedi)', `> Kahve menüsünü görüntüleyebilirsin.`, true)
    .addField(''+prefix+'sözler (Eklenmedi)', `> Birbirinden ilginç kahveyle alakalı sözler öğrenebilirsin.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }

   if (args[0] === "oyun") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'habbo (Eklenmedi)', `> Habbo Türkiye sunucusundaki karakterini görüntüleyebilirsin.`, true)
    .addField(''+prefix+'mc-avatar (Eklenmedi)', `> Orijinal Minecraft hesabına ait skinin avatarını görüntüleyebilirsin.`, true)
    .addField(''+prefix+'mcbaşarım', `> Minecraft başarımları oluşturabilirsin.`, true)
    .addField(''+prefix+'mcskin', `> Orijinal Minecraft hesabına ait skinini görüntüleyebilirsin.`, true)
    .addField(''+prefix+'mcsunucu', `> Bir minecraft sunucusuna ait verileri görüntüleyebilirsin.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }

   if (args[0] === "eğlence") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'atatürk (Eklenmedi)', `> Avatarınıza ATATÜRK çerçevesi ekler.`, true)
    .addField(''+prefix+'azerbaycan (Eklenmedi)', `> Avatarınıza Azerbaycan çerçevesi ekler.`, true)
    .addField(''+prefix+'bilek-güreşi (Eklenmedi)', `> Avatarınıza bilekgüreşi çerçevesi ekler.`, true)
    .addField(''+prefix+'cj (Eklenmedi)', `> Avatarınıza CJ çerçevesi ekler.`, true)
    .addField(''+prefix+'doğum-günü (Eklenmedi)', `> Avatarınıza doğum günü çerçevesi ekler.`, true)
    .addField(''+prefix+'hapishane (Eklenmedi)', `> Avatarınıza hapishane çerçevesi ekler.`, true)
    .addField(''+prefix+'hypesquad (Eklenmedi)', `> Avatarınıza hypesquad çerçevesi ekler.`, true)
    .addField(''+prefix+'kedi (Eklenmedi)', `> Birbirinden güzel kedi fotoğraflarını görebilirsin.`, true)
    .addField(''+prefix+'kelimebulmaca (Eklenmedi)', `> Doğru kelimeleri 5 saniye içinde tahmin et ve kahve parası kazan.`, true)
    .addField(''+prefix+'köpek (Eklenmedi)', `> Birbirinden güzel köpek fotoğrafları görebilirsin.`, true)
    .addField(''+prefix+'rip (Eklenmedi)', `> Avatarınıza mezar çerçevesi ekler.`, true)
    .addField(''+prefix+'sniper (Eklenmedi)', `> Avatarınıza sniper çerçevesi ekler.`, true)
    .addField(''+prefix+'takım (Eklenmedi)', `> Avatarınıza süper ligteki takımların çerçevesi ekler.`, true)
    .addField(''+prefix+'triggered', `> Avatarınıza triggered çerçevesi ekler.`, true)
    .addField(''+prefix+'türkiye (Eklenmedi)', `> Avatarınıza TÜRKİYE çerçevesi ekler.`, true)
    .addField(''+prefix+'wasted', `> Avatarınıza wasted çerçevesi ekler.`, true)
    .addField(''+prefix+'trinity', `> Avatarınıza trinity çerçevesi ekler.`, true)
    .addField(''+prefix+'yazı-tura', `> Yazı tura atabilirsin.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }

   if (args[0] === "profil") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'profil', `> Profilini görüntüleyebilirsin.`, true)
    .addField(''+prefix+'açıklama', `> Profil açıklamanı değiştirebilirsin.`, true)
    .addField(''+prefix+'görsel', `> Profiline görsel ekleyebilirsin.`, true)
    .addField(''+prefix+'renk', `> Profil rengi(embed rengini) değiştirebilirsin.`, true)
    .addField(''+prefix+'rozet (Eklenmedi)', `> Profiline rozet alıp sergileyebilirsin.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }

   if (args[0] === "kullanıcı") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'afk', `> Arkadaşlarına klavyeden uzakta olduğunu bildirebilirsin.`, true)
    .addField(''+prefix+'covid19 (Eklenmedi)', `> Bölgelere ait korona virüs vakası hakkında bilgi edinebilirsin.`, true)
    .addField(''+prefix+'discrim (Eklenmedi)', `> Discord #???? kısmını tamamen rastgele olacak bir şekilde değiştirebilirsin.`, true)
    .addField(''+prefix+'döviz', `> Güncel döviz kuruna bakabilirsin.`, true)
    .addField(''+prefix+'jumbo (Eklenmedi)', `> Bir emojiyi büyültebilirsin.`, true)
    .addField(''+prefix+'kullanıcı-bilgi', `> Bir kullanıcı hakkında bilgi edinebilirsin.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }

   if (args[0] === "ekonomi") {
    return message.channel.send({ embeds: [new MessageEmbed()
    .setColor(embedColor)
    .setThumbnail()
    .setAuthor(message.author.username)
    .addField(''+prefix+'para-gönder (Eklenmedi)', `> Arkadaşlarına harçlık gönderebilirsin.`, true)
    .addField(''+prefix+'para', `> Bakiyeni görüntüleyebilirsin.`, true)
    .setFooter('Tüm komut listesini kahvebot.com/komutlar adresi üzerinden görüntüleyebilirsiniz.', client.user.displayAvatarURL({ format: 'png', dynamic: true }))
    ]})
   }
};

exports.conf = {
    aliases: ["K", "KOMUTLAR", "commands", "COMMANDS", "C"]
};
exports.help = {
    name: "komutlar"
}