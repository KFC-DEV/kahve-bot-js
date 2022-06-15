const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");
exports.run = (client, message, args) => {
var url = "https://mcapi.tc/?" + args[0] + "/json";
  let reason = args.slice(0).join(' ');
    request(url, function (err, response, body) {
        if (err) {
            console.log(err);
            return message.channel.sendEmbed({ content: "Hata! Sunucu bilgileri alınırken beklenmedik bir hatayla karşılaştık." });
        }
            body = JSON.parse(body);
            if (body.status) {
                message.channel.send({ content: 'Böyle Bir Sunucu Yok Veya Şuanda Kapalı Lütfen İp Adresini Kontrol Et' })
            }
            if (body.players || body.players == "0") {
              const embed = new MessageEmbed()
                .setColor(embedColor)
                .setImage("http://status.mclive.eu/"+ reason +"/"+ body.hostname +"/25565/banner.png")
              message.channel.send({ embeds: [embed] })


}
});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['minecraft-server', 'mc-sunucu', 'minecraft-sunucu']
};
      
exports.help = {
    name: 'mcsunucu'
};