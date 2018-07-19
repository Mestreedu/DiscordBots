const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let xp = require("./xp.json");


bot.on("ready", async () => {
  console.log("Ela esta viva");
  bot.user.setActivity("com o Cl4pTr4p!");

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

// Dale
  if(cmd === '-Dale' || cmd === '-dale'){
    return message.channel.send("Dale!");
  }

//Angel Perguntas e Respostas
  if(cmd === '-Angel' || cmd === '-angel'){
    if(!args[2]) return message.reply("Faça uma pergunta completa, ta achando que eu vou entender isso ai?");
    let replies = ["Sim", "Não", "Com certeza", "Não tenho certeza", "Vou ter que pensar sobre isso", "Definitivamente não", "É sério? Claro que não", "Claro, isso é FUNDAMENTAL", "Eu não vou responder isso", "O que voce esperava que eu fosse responder?", "Isso é impossivel"];
    let result = Math.floor((Math.random() * replies.length));
    return message.channel.send(replies[result]);
  }

// Identidade, Cartão de Identidade do Membro
  if(cmd === '-Id' || cmd === '-id'){
      if(message.author.presence.game === null){
        let icon = message.author.displayAvatarURL;
        let name = message.author.username;
        let embed = new Discord.RichEmbed()
        .setTitle("Identidade")
        .setThumbnail(icon)
        .setColor("#00ffff")
        .addField("Nome", name)
        .addField("Membro desde", message.member.joinedAt)
        .addField("Cargo", message.member.highestRole)
        .addField("Jogando", "Ahh, você não esta jogando nada no momento..");
        return message.channel.send(embed);
      }else if(message.author.presence.game.name === "Fortnite"){
        let icon = message.author.displayAvatarURL;
        let name = message.author.username;
        let embed = new Discord.RichEmbed()
        .setTitle("Identidade")
        .setThumbnail(icon)
        .setColor("#00ffff")
        .addField("Nome", name)
        .addField("Membro desde", message.member.joinedAt)
        .addField("Cargo", message.member.highestRole)
        .addField("Jogando", "Minecraft com armas");
        return message.channel.send(embed);
      }else{
        let icon = message.author.displayAvatarURL;
        let name = message.author.username;
        let embed = new Discord.RichEmbed()
        .setTitle("Identidade")
        .setThumbnail(icon)
        .setColor("#00ffff")
        .addField("Nome", name)
        .addField("Membro desde", message.member.joinedAt)
        .addField("Cargo", message.member.highestRole)
        .addField("Jogando", message.author.presence.game.name);
        return message.channel.send(embed);
      }
}

//enemy controller
  if(message.content.startsWith('⬅➡🅰🅱')||message.content.startsWith('⬅ ➡ 🅰 🅱')){
    if(message.mentions.users.size === 1){
      let mentioned = message.guild.member(message.mentions.users.first()).nickname;
      var text = message.content.split(message.guild.member(message.mentions.users.first()))[1];
      let mentionedu = message.mentions.users.first().username;
      let avatar = message.mentions.users.first().avatarURL;
        if(mentioned === null){
          mentioned = mentionedu;
        }
      message.channel.fetchWebhooks()
      .then(webhooks => webhooks.first().send(text,{avatarURL:avatar,username:mentioned}));
      //.catch(console.error);
      message.delete();
    }
  }




});

bot.login(tokenfile.token);
