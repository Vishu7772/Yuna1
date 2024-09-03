const { EmbedBuilder } = require('discord.js');
const lang = require('../../events/loadLanguage');

module.exports = {
    name: 'ganpati',
    description: lang.ganpatiDescription,
    execute(message, args) {
        let today = new Date();
        let ganpati = new Date(today.getFullYear(), 10, 4);

        
        if (today.getMonth() === 10 && today.getDate() > 4) {
            ganpati.setFullYear(ganpati.getFullYear() + 1);
        }

        let one_day = 1000 * 60 * 60 * 24;
        let daysLeft = Math.ceil((ganpati.getTime() - today.getTime()) / one_day);

       
        const embed = new EmbedBuilder()
            .setTitle(lang.ganpatiTitle)
            .setDescription(`${daysLeft} ${lang.ganpatiCountdown}`)
            .setColor('#ffcc00'); 

        message.reply({ embeds: [embed] });
    },
};
