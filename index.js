const Discord = require('discord.js');
const client = new Discord.Client();
const Fs = require('fs')
const config = require('./config.json')



client.login"token": ""



client.on('message', async(msg) => {
    let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
    if(msg.author.bot) return;
    if(!msg.guild) return;
    if(msg.content.length >= config.max) {

    msg.delete();
    msg.reply(`${config.message}`)

          

 if (!UserJSON[msg.author.id]) {
    if (msg.author.bot) return;
    UserJSON[msg.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }



UserJSON[msg.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[msg.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[msg.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = msg.member
  let role = msg.guild.roles.cache.find(r => r.name === `${config.role}`);

  user.roles.add(role)
  console.log(`lol i muted ${msg.author}`)
}
                
            
    }
})
