const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592302721910964228")
setInterval(function() {
channel.send(`No One لعيون يوسف  :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
