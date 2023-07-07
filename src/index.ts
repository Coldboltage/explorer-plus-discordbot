// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: GatewayIntentBits.Guilds});

client.on('ready', () => {
 console.log(`Logged in as ${client?.user?.tag}!`);
});

const test:string = "This is a string" 

// Log In our bot
client.login(process.env.CLIENT_TOKEN);