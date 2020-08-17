const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", () =>{
  console.log(`${client.user.username} is Online!`)
});

client.on("message", message =>{
    if(message.content.startsWith(prefix + "ping")) {
        message.channel.send(`${message.author} Pong!`)
    }
});

client.login(config.token)
