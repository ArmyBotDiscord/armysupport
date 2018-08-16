const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = "*";

bot.login(process.env.TOKEN);

bot.on("ready", () => {

    console.log("Je suis prêt !");
    bot.user.setGame("Regarder des mangas");

});

bot.on('message', async message => { 

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');
    }
});
