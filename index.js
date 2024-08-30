const client = require('./main');
require('./bot');
require('./shiva');

const loadEventHandlers = () => {
    console.log('\x1b[36m[ WELCOME ]\x1b[0m', '\x1b[32mWelcome System Active ✅\x1b[0m');
    const guildMemberAddHandler = require('./events/guildMemberAdd');
    guildMemberAddHandler(client);
    console.log('\x1b[36m[ TICKET ]\x1b[0m', '\x1b[32mTicket System Active ✅\x1b[0m');
    const ticketHandler = require('./events/ticketHandler');
    ticketHandler(client);
    console.log('\x1b[36m[ VOICE CHANNEL ]\x1b[0m', '\x1b[32mVoice Channel System Active ✅\x1b[0m');
    const voiceChannelHandler = require('./events/voiceChannelHandler');
    voiceChannelHandler(client);
    console.log('\x1b[36m[ GIVEAWAY ]\x1b[0m', '\x1b[32mGiveaway System Active ✅\x1b[0m');
    const giveawayHandler = require('./events/giveaway');
    giveawayHandler(client);
    console.log('\x1b[36m[ AUTOROLE ]\x1b[0m', '\x1b[32mAutorole System Active ✅\x1b[0m');
    const autoroleHandler = require('./events/autorole');
    autoroleHandler(client);
    console.log('\x1b[36m[ REACTION ROLES ]\x1b[0m', '\x1b[32mReaction Roles System Active ✅\x1b[0m');
    const reactionRoleHandler = require('./events/reactionroles');
    reactionRoleHandler(client);
    const nqnHandler = require('./events/nqn');
    nqnHandler(client);
    const emojiHandler = require('./events/emojiHandler');
    console.log('\x1b[36m[ NQN Module ]\x1b[0m', '\x1b[32mEmoji System Active ✅\x1b[0m');
    emojiHandler(client);
    require('./events/music')(client);
    require('./shiva');
};
const NoPrefixSchema = require('./Schemas.js/noPrefixSchema'

client.on('messageCreate', async message => {

if (message.author.bot) return;

I

const noPrefixUser = await noPrefixSchema.findOne({ userId: message.author.

id });

let command, args;

if (noPrefixUser) {

const messageArray message.content.trim().split(/+/);

command = messageArray.shift().toLowerCase();

args = messageArray;
    if (noPrefixUser) {

const messageArray = message.content.trim().split(/+/);

command = messageArray.shift().toLowerCase();

args = messageArray;

} else {

const prefix = '*';

if (Imessage.content.startsWith(prefix)) return;

args = message.content.slice(prefix.length).trim().split(/+/);

command = args.shift().toLowerCase();

}

const prefixcmd = client.prefix.get(command) || Array.from(client.prefix.

values()).find((cmd) => cmd.aliases && cmd.aliases.includes (command));
    const prefixcmd = client.prefix.get(command) || Array.from(client.prefix.

values()).find((cmd) => cmd.aliases && cmd.aliases.includes (command));

I

if (prefixcmd) {

prefixcmd.run(client, message, args);
});

loadEventHandlers();
