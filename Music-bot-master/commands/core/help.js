const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "All the commands this bot has!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('This code comes from a GitHub project [Daniel](https://github.com/duydz0906).\nThe use of this one is possible while keeping the credits for free.\nIf you want to remove the credits join the Discord support server. [here](https://discord.gg/3K6HMczhGM)')
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Music comes first - Made with heart by Daniel ❤️', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.editReply({ embeds: [embed] });
    },
};