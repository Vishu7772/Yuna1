```js
module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {

        if(!message.guild || message.author.bot) return;
        if(message.channel.id !== '1218073233467637770') return;
        const reactions = ['💓'];

        reactions.forEach(async react => {
            await message.react(react).catch(() => { })
        })
        
    }
}```
