const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('punch')
        .setDescription('Punch someone!')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to punch')
                .setRequired(true)),
    async execute(interaction) {
        if (interaction.isCommand && interaction.isCommand()) {
            // Slash command execution
            const sender = interaction.user;
            const slappedUser = interaction.options.getUser('user');
            const pucnhGif = await anime.punch();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is punching ${slappedUser}! 👋`)
                .setImage(punchGif)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } else {
            // Prefix command execution
            const sender = interaction.author;
            const targetUser = interaction.mentions.users.first();
            const punchGif = await anime.punch();

            const embed = new EmbedBuilder()
                .setColor('#ffcc00')
                .setDescription(`${sender} is punching ${targetUser || 'the air'}! 👋`)
                .setImage(punchGif);

            interaction.reply({ embeds: [embed] });
        }
    },
};
