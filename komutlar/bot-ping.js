const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = async(client, message, args) => {
    message.channel.send({ content: '🏓 Pong! Mesaj Gecikmesi '+client.ws.ping+'ms.' })
};

exports.conf = {
    aliases: ["PİNG", "PING", "pıng"]
};
exports.help = {
    name: "ping"
}