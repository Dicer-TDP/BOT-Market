const {Client, Collection} = require('discord.js');
const bot = new Client();
const fs = require('fs');

bot.commands = new Collection();

const token = 'up'

var prefix = 'ds';



const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));
for(const _file of commandFiles) {
    const command = require(`./command/${_file}`);
    bot.commands.set(command.name, command)
}

bot.once("ready", () => {
    bot.user.setStatus("Lagi dibenerin");
    console.log("Bot Aktif!`");
})

bot.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        bot.commands.get('ping').execute(message);
    } else if(command === 'harga') {
        bot.commands.get('harga').execute(message);
    } else if(command === 'pengumuman') {
        bot.commands.get('pengumuman').execute(message);
    } else if(command === 'author') {
        bot.commands.get('pengumuman').execute(message);
    } else if(command === 'version') {
        bot.commands.get('version').execute(message);
    } else if(command === 'help') {
        bot.commands.get('help').execute(message);
    }
})

    bot.on('guildMemberAdd', member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
        const peraturan = member.guild.channels.cache.find(ch => ch.name === 'rules');

        if(!channel) return;

        if(member.guild.name === 'DIGISTORE29') {
            channel.send(`Halo ${member}, Testing! ${peraturan} `);
        }
    })

bot.login(token);
