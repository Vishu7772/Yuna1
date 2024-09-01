const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bye')
        .setDescription('bye someone!')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to bye')
                .setRequired(true)),
    async execute(interaction) {
        if (interaction.isCommand && interaction.isCommand()) {
            // Slash command execution
            const sender = interaction.user;
            const slappedUser = interaction.options.getUser('user');
            const byeGif = await anime.bye();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is saying goodbye to ${slappedUser}! 👋`)
                .setImage(byeGif)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } else {
            // Prefix command execution
            const sender = interaction.author;
            const targetUser = interaction.mentions.users.first();
            const byeGif = await anime.bye();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is saying goodbye to ${targetUser || 'the air'}! 👋`)
                .setImage(byeGif);

            interaction.reply({ embeds: [embed] });
        }
    },
};
