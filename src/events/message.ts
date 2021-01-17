import { Guild, Message } from "discord.js";
import Bot from "..";
import Command from "../interfaces/command";

const triggers = {
    "anime": "*Sneezes*.. I feel asthough ive been talked about..",
    "instrument": "Well thats humerus, my favorite is the Trombone",
    "kawai": "Ew",
    "bears": "Beets. Battlestar Galactia.",
    "SUPER": "HOT",
    "uwu": "Nyaaa~",
    "sao": "ew",
    "games": "Why do you need games if you have me UwU",
    "0099ff": "Shhhh dont give out my secrets...",
    "android": "Well done, android. The Enrichment Center once again reminds you that Android Hell is a real place",
    "bots": "HaAhHA.. nO No.. YoU DoNT nEEd AnY oThER bOT."
}

let getPrefix = (guild: Guild): string => "!";

export default async (bot: Bot, message: Message): Promise<void> => {
    // Ignore other bots and messages outside of a server
    if (message.author.bot && !message.guild) return;
    
    let prefix: string = getPrefix(message.guild);

    if (message.mentions.users.has(bot.user.id)) {
        await message.channel.send(`The prefix for Animelee is ${prefix}`);
        return;
    }

    // if toggle auto is turned on in this server
    if (true) {
        for (const [key, value] of Object.entries(triggers)) {
            if (message.content.includes(key)) {
                await message.channel.send(value);
                break;
            }
        }
    }

    if (true) {
        // Some mob activity
    }

    // Run the command triggered, if the correct
    if (message.content.indexOf(prefix) == 0) {
        const args: string[] = message.content.split(" ").slice(1);
        const cmdName: string = message.content.split(" ").shift();

        const cmd: Command = bot.commands.get(cmdName);

        if (cmd) {
            cmd.run(bot, message, args);
        }
    }
}