const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hi')
        .setDescription('Wave someone!')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to punch')
                .setRequired(true)),
    async execute(interaction) {
        if (interaction.isCommand && interaction.isCommand()) {
            // Slash command execution
            const sender = interaction.user;
            const slappedUser = interaction.options.getUser('user');
            const hiGif = await anime.punch();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is waving ${slappedUser}! 👋`)
                .setImage(hiGif)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } else {
            // Prefix command execution
            const sender = interaction.author;
            const targetUser = interaction.mentions.users.first();
            const hiGif = await anime.hi();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is waving ${targetUser || 'the air'}! 👋`)
                .setImage(hiGif);

            interaction.reply({ embeds: [embed] });
        }
    },
};
