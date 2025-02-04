const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('russian-roulette')
		.setDescription("Risk a 5 minute timeout"),
	async execute(interaction) {
		const rand = Math.floor(Math.random() * 6);

		console.log(rand);

		if (rand === 0) {
			await interaction.member.timeout(5 * 60 * 1000);
			await interaction.reply("BANG")
		} else {
			await interaction.reply("click");
		}
	}
};
