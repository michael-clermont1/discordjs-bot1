require('dotenv').config();

const { DMChannel } = require('discord.js');
const { Client, ClientUser, TextChannel, NewsChannel, } = require('discord.js');
const { Endpoints } = require('../node_modules/discord.js/src/util/Constants');

const client = new Client();
const PREFIX = "!";


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', (message) => {
    console.log(`[${message.author.tag}]`,`[${message.channel.name}]`, message.content);
})


client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.length >= 500)
    message.reply(`https://media.discordapp.net/attachments/754285635728310377/846832878792605746/Retarded.gif`)
})

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
    if (CMD_NAME === 'mute') {
        if(!message.member.roles.cache.has('871193337162498068')) return message.reply(`You can't use mute command`)
            const role = message.guild.roles.cache.get('871193337162498068');
            if (!role) return message.reply(`can't get a role`)
            const member = message.mentions.members.first()
             if (!member) return message.reply('Please mention a valid member')
             member.roles.add(role).then(newMember => {
                message.channel.send(`successfully muted member, ${member.user}`)
      })
    } }
},)
client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
    if (CMD_NAME === 'unmute') {
        if(!message.member.roles.cache.has('829184232357494794')) return message.reply(`You can't use mute command`)
            const role = message.guild.roles.cache.get('838944411936358450');
            if (!role) return message.reply(`can't get a role`)
            const member = message.mentions.members.first()
             if (!member) return message.reply('Please mention a valid member')
             member.roles.remove(role).then(newMember => {
                message.channel.send(`successfully unmuted member, ${member.user}`)
      })
    } }
},)

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
            if (CMD_NAME === 'role') {
                if(!message.author.id == ('183814285191938048')) return message.reply(`You can't use mute command`)
                    const role = message.guild.roles.cache.get('829181902111244308');
                     message.member.roles.add(role)
              }
            } },)
client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
            if (CMD_NAME === 'no') {
                if(!message.author.id == ('183814285191938048')) return message.reply(`You can't use mute command`)
                    const role = message.guild.roles.cache.get('829181902111244308');
                    if (message.member.roles = (role))
                    message.member.roles.remove(role)
              }
            } },)
client.on('message', (message) => {
if (message.content == 'Garte')
message.channel.send('<@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> <@536545470055448587> ')
})

client.on('message', (message) => { 
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
    if (message.channel.type === "dm") {
        return message.reply('You cannot execute spam within a DM!');
    }
    message.guild.members.cache.get(args[0]);
    const ping = message.mentions.members.first()
    if (CMD_NAME === 'spam') {
    if (!ping) return message.reply('Please mention a valid member')
    const interval = setInterval(function() {
        message.channel.send(` ${ping}`)
        .catch(err => {
          console.error(err);
          clearInterval(interval);
        });
    }, 1000); 
    task = interval; }
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
            if (CMD_NAME === 'cease') {
            clearInterval(task);
            message.channel.send(' ```Ceased spamming```')
    }}
}},)
            
client.login(process.env.DISCORD_TOKEN);
