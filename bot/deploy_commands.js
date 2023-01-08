const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10')
const { clientId, guildId, token } = require('./config.json');


const commands = [
  new SlashCommandBuilder().setName('tictactoe').setDescription('Play a game of tic-tac-toe'),

]

const rest = new REST({ version: '10' }).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands.map(command => command.toJSON()) })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);