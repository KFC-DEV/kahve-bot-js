const { MessageEmbed } = require('discord.js');
const { prefix, embedColor, embedErrorColor, embedFooter, embedImage, embedThumbnail, botName, botID, OwnerName, OwnerID } = require("../ayarlar.json");
exports.run = async(client, message, args ) => {
  
let banlanıcak = message.mentions.users.first()
let guild = message.guild

  if (!banlanıcak) return message.channel.send({ embeds: [new MessageEmbed().setColor(embedErrorColor).setAuthor(message.author.username).setDescription('Geçersiz komut kullanım şekli bir de şöyle kullanmayı deneyin:\n`'+prefix+'ban <kullanıcı> (sebep)`\n\nArgümanlar:\n`üye:` *mesaj içeriğinde bahsedilmiş üye*\n`sebep:` *Metin (zorunlu değil)*')] })

  let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send({ embeds: [new MessageEmbed().setColor(embedErrorColor).setAuthor(message.author.username).setDescription('Geçersiz komut kullanım şekli bir de şöyle kullanmayı deneyin:\n`'+prefix+'ban <kullanıcı> (sebep)`\n\nArgümanlar:\n`kullanıcı:` *mesaj içeriğinde bahsedilmiş üye*\n`sebep:` *Metin (zorunlu değil)*')] 
  })
  
  message.channel.send({ embeds: [new MessageEmbed().setColor(embedColor).setDescription(''+banlanıcak+' Adlı kullanıcı, <@'+message.author.id+'> tarafından **'+sebep+'** yüzünden banlandı.')
  ] })

  banlanıcak.send({ content: '```\n'+guild.name+' banlandın. SEBEP: '+sebep+'\n```' })
  guild.members.ban(banlanıcak)
};
exports.conf = {
  aliases: ['BAN'],
  permLevel: 0
};
exports.help = {
  name: 'ban'
}; 