const { EmbedBuilder, PermissionsBitField } = require('discord.js');

const NoPrefixSchema = require('../Schemas.js/noPrefixSchema');

const authorizedUsers = ['1187666470990266410', 'ID2', 'ID3'];

I

module.exports = {

name: 'noprefix',

description: 'Manage no prefix users',

run:async (client, message, args) => {

if (lauthorizedUsers.includes (message.author.id)) {return;

}

if (largs[0])
  return message.reply("Please provide a valid subcommand: "add", "remove", "list".");
I

}

const subCommand = args[0].toLowerCase();

if (subCommand === 'add')

const user message.mentions.first();

if (luser) {

return message.reply("Please mention a user to add.");
}

try {

const existingUser = await NoPrefixSchema.findOne({userId: user.id }); if (existingUser)

{

return message.reply("User is already in the no-prefix list.");

}

const newUser = new NoPrefixSchema ((userId: user.id });

await newUser.save();

message.reply("Successfully added ${user.tag) to the no-prefix list."); }
catch (error)
  {

console.error(error);

message.reply(An error occured.");

}

} else if (subCommand === 'remove') {

const user message.mentions.first();

if (luser) {

return message.reply("Please mention a user to remove.");

}
  
  

