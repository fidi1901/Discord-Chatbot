const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10')
const { clientId, guildIds, token } = require('../config.json');


const commands = [
  new SlashCommandBuilder().setName('tictactoe').setDescription('Play a game of tic-tac-toe'),

]

const rest = new REST({ version: '10' }).setToken(token)

for (i = 0; i < guildIds.length; i++) {
  rest.put(Routes.applicationGuildCommands(clientId, guildIds[i]), { body: commands.map(command => command.toJSON()) })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
}
