const { EmbedBuilder, PermissionsBitField } = require('discord.js');

const NoPrefixSchema = require('../noPrefixSchema.js');

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

return message.reply("Please mention a user to remove.");}

try {

const removedUser await noPrefixSchema.findOneAndDelete ((userId: user.id));

if (IremovedUser) {

return message.reply("User is not in the no-prefix list.");

I

}

message.reply("Successfully removed $(user.tag) from the no-prefix list.");

} catch (error) {

console.error(error);

message.reply('An error occured while removing the user.');

}

}
}

} else if (subCommand === 'list') {

try {

const users await noPrefixSchema.find({});

if (users.length === 0) {

return message.reply('The no-prefix list is empty');

}

const userList = users.map(user => <@${user.userId)>').join('\n');

const embed = new EmbedBuilder()

.setTitle('No Prefix Users')

.setDescription(userList)

.setColor('Random')

message.reply({ embeds: [embed] });
  } catch (error) {

console.error(error);

message.reply('An error occured.');

}

I

} else

message.reply('Invalid subcommand. please user "add", "remove", "list');
}
                                       }
                           }
  
  

