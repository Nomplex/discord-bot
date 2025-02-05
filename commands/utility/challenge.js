const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('challenge')
		.setDescription('Challenge another user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user to challenge')
				.setRequired(true)
		)
		.addNumberOption(option =>
			option
				.setName('time')
				.setDescription('The amount of time to wager (in minutes)')
				.setRequired(false)
		),
	async execute(interaction) {
		console.log(interaction);
		const p1 = interaction.user;
		const p2 = interaction.options.getUser('target');
		console.log(p2);
		const time = interaction.options.getNumber('time') ?? 5;
		await interaction.reply(`${p1.globalName} has challenged ${p2.globalName}. They have wagered ${time} minutes`);

	},
};
