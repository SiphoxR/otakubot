const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('sstoken')


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", function(message)
  {
    var input = message.content.toUpperCase();

if (input === "O!AIDE"){
  var embed = new Discord.RichEmbed()
.setTitle("Page d'aide")
.setDescription("Merci d'utiliser Otaku's Bot, voici ses commandes orientées **Autre**")
.addField("o!aide", "Permet d'afficher la page d'aide")
.addField("o!invite", "Permet d'avoir le lien pour m'invité sur votre serveur !")
.addField("o!discord", "Permet d'avoir le lien de mon serveur discord")
.setColor("0x80FF00")
        message.channel.send(embed);
}

if (input === "O!AIDE"){
  var embed = new Discord.RichEmbed()
.setTitle("Page d'aide")
.setDescription("Merci d'utiliser Otaku's Bot, voici ses commandes orientées **Modération**")
.setColor("0x80FF00")
        message.channel.send(embed);
}

if (input === "O!DISCORD")
 {
   message.channel.send("Mon serveur discord : https://discord.gg/FqrGCWq :wink:");
 }


if (input === "O!INVITE")
 {
   message.channel.send("Le lien pour m'invitez sur votre serveur : https://discordapp.com/oauth2/authorize?client_id=481083483356266516&scope=bot&permissions=2146958847 ");
 }

 bot.on('message', message => {
    if (message.content.startsWith("o!chat")) {
      message.delete(message.author);
      let argson = message.content.split(" ").slice(1);
      let vcsmsg = argson.join(" ")
      if(!message.guild.channels.find("name", "💬-général")) return message.reply("Erreur le channel `💬-général` est introuvable")
      if(message.channel.name !== "💬-général") return message.reply("Commande à effectuer dans `💬-général`");
      if(!vcsmsg) return message.reply("Merci d'envoyer un message à envoyer dans la globalité des Discords")

      var replys = [
        '#01FEDC',
        '#FE0101',
        '#FE6F01',
        '#FEF601',
        '#6FFE01',
        '#1201FE',
        '#7F01FE',
        '#FE01C3',
        '#0166FE',
        '#FE0177'
      ];

      let reponse = (replys[Math.floor(Math.random() * replys.length)])
      var embed = new Discord.RichEmbed()
       .setColor(reponse)
       .setAuthor("IkaBeyBot - Virtual Channels", bot.user.avatarURL)
       .addField("Serveur", message.guild.name, true)
       .addField("Utilisateur", message.author.tag, true)
       .addField("Message", vcsmsg)
       .setFooter("IkaBeyChat")
       .setTimestamp()
       bot.channels.findAll('name', '💬-général').map(channel => channel.send(embed))
    }
 })

});
