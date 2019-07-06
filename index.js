const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NTk3MTQ2NzI4NTc1MDA4NzY4.XSD3Dg.pgjkCjIZNWQlVpwp5vzygzl0dQs')
var http = require("http");
setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 60000); // every 5 minutes (300000)
