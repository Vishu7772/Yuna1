const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const cmdIcons = require('../../UI/icons/commandicons');
const lang = require('../../events/loadLanguage');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fuckoff')
        .setDescription(lang.fuckoffCommandDescription)
        .addUserOption(option =>
            option.setName('target')
                .setDescription(lang.fuckoffTargetDescription)
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    async execute(interaction) {
        if (interaction.isCommand && interaction.isCommand()) { 
            if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) {
                const embed = new EmbedBuilder()
                    .setColor('#ff0000')
                    .setDescription(lang.fuckNoPermission);
                return interaction.reply({ embeds: [embed], ephemeral: true });
            }

            const target = interaction.options.getUser('target');
            const member = interaction.guild.members.cache.get(target.id);

            if (!member.kickable) {
                const embed = new EmbedBuilder()
                    .setColor('#ff0000')
                    .setDescription(lang.fuckCannotfuck.replace('${target.tag}', target.tag));
                return interaction.reply({ embeds: [embed], ephemeral: true });
            }

            await member.kick();
            const embed = new EmbedBuilder()
                .setColor('#00ff00')
                .setDescription(lang.fuckSuccess.replace('${target.tag}', target.tag));
            await interaction.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setColor('#3498db')
                .setAuthor({ 
                    name: lang.fuckoffAlert, 
                    iconURL: cmdIcons.dotIcon,
                    url: "https://discord.com/invite/ACgH3AUzcq"
                })
                .setDescription(lang.fuckOnlySlashCommand)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        }  
    },
};
