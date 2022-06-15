const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");

exports.run = (client, message, args) => {
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Yeni ödül kazandin!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.edit({ content: "Sadece **22** Karakter mesaj girebilirsin." }).then(msg.delete.bind(msg), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
   message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['minecraft-başarım']
};

exports.help = {
  name: 'mcbaşarım',
  description: 'Send a Minecraft Achievement image to the channel',
  usage: 'mcödül Title|Text '
};