const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kick someone!')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to kick')
                .setRequired(true)),
    async execute(interaction) {
        if (interaction.isCommand && interaction.isCommand()) {
            // Slash command execution
            const sender = interaction.user;
            const slappedUser = interaction.options.getUser('user');
            const kickGif = await anime.kick();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is kicking ${slappedUser}! 👋`)
                .setImage(kickGif)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } else {
            // Prefix command execution
            const sender = interaction.author;
            const targetUser = interaction.mentions.users.first();
            const hiGif = await anime.kick();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is kicking ${targetUser || 'the air'}! 👋`)
                .setImage(kickGif);

            interaction.reply({ embeds: [embed] });
        }
    },
};
