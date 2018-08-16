const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login(process.env.TOKEN);

client.on("ready", () => {

    console.log("Je suis prêt !");
    client.user.setGame("Regarder des Mangas");

});

client.on('message', async message => { 
