const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login(process.env.TOKEN);

client.on("ready", () => {

    console.log("Je suis prêt !");
    client.user.setGame("Regarder des mangas");

});

client.on('message', async message => { 

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');
    }
});
