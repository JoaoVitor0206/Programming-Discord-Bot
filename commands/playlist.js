const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Listen to the best study playlist"),
  async execute(interaction) {
    await interaction.reply("https://open.spotify.com/playlist/7MdqJG030efAQl9QYrCsQb?si=1033efe532714a22")
  }
}