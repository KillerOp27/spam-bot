const Discord = require('discord.js');
const client = new Discord.Client();
//Note: npm init -y , npm start

client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'Your Soul',
            type: "WATCHING",
        }
    });
});

client.once('ready', () => {
    console.log("I'm gonna spam you");
});

client.on('message', message => {
  // ...
  if (message.content === '$SPAM') {
    message.channel.send('$SPAM');
  }
});

client.login('NzI3OTMwNzUzNTA1MDM0MzYx.XvzGbg.255735_MMLciqkQgcGyWSbFX45k')