const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	client.user.setActivity("DM me for help!");
	client.user.setPresence({ status: 'Do Dot Disturb', game: { name: 'Im being updated' } });
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("info")) {
    message.channel.send("Hi. I am a custom bot made by ```Joeyyy#68351```. Please dm me if you need help. This bot was made for YouFoundMaxx");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("I am doing fine. Expect more updates!");
  }
});

client.login("NDQyODE0NjU1NTc3MDYzNDI1.DdESzw.KMgX0ZsAGunsdwyKqo_08DtZKj4");