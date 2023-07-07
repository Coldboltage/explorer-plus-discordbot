"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize dotenv
require('dotenv').config();
// Discord.js versions ^13.0 require us to explicitly define client intents
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({ intents: discord_js_1.GatewayIntentBits.Guilds });
client.on('ready', () => {
    var _a;
    console.log(`Logged in as ${(_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
});
const test = "This is a string";
// Log In our bot
client.login(process.env.CLIENT_TOKEN);
