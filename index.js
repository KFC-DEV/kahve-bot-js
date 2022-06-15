const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const { Database } = require("coffeedb");
const db = new Database("./Database/main.json")

const token = 'TOKEN' // const { token } = require("../ayarlar.json") Yapabilirsin!


const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} Toplam Komut!`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.help.name} Adlı Komut Aktif!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});



client.login(token);
///////////////////////////// COMMANDS ///////////////////////////////////
client.on('message', async message => {
  const { Database } = require("coffeedb");
  const db = new Database("./Database/afk.json");
    
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`afk`)) return;
 
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send({ content: `<@${message.author.id}> hoş geldin` })
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send({ embeds: [new Discord.MessageEmbed()
    .setColor(embedColor)
    .setDescription(`<@${kullanıcı.id}> şu anda AFK.\nSebep: **${sebep}**`)]})
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send({ content: `<@${message.author.id}> hoş geldin` })
      db.delete(`afk_${message.author.id}`)
    }
  }
});