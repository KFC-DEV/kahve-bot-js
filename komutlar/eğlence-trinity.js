const { MessageEmbed } = require("discord.js");
var Jimp = require('jimp');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async (client, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.displayAvatarURL({format: "png"}), (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://raw.githubusercontent.com/batuhan121/botumuzg-zelbroo-/master/efektler/discord/trinity.png", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./img/trinity/${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.MessageAttachment(`./img/trinity/${client.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
 
}

exports.conf = {
    enabled: true,
    guildOnly: true,
aliases:[],
    permLevel: 0
}

exports.help = {
name: 'trinity',     
description: 'Etiketlediğinin Kişinin Fotoğrafına trinity Efekti Uygular',     
usage: "trinity @kullanıcı",
}