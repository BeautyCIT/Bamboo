const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.includes === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NTk3MTQ2NzI4NTc1MDA4NzY4.XSD3Dg.pgjkCjIZNWQlVpwp5vzygzl0dQs')
var http = require("http");
setInterval(function() {
    http.get("https://bamboo69.herokuapp.com/");
}, 300000); // every 5 minutes (60000)
