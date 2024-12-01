import dotenv from 'dotenv'
import { Client } from 'discord.js-selfbot-v13'
import axios from 'axios'
import chalk from 'chalk'

dotenv.config()

// ASCII Art
const asciiArt = `
 ## ##     ####    ## ##   ### ##     ##     ###  ##  ##  ###  
##   ##     ##    ##   ##   ##  ##     ##      ## ##  ##   ##  
##          ##    ##   ##   ##  ##   ## ##    # ## #  ##   ##  
##          ##    ##   ##   ## ##    ##  ##   ## ##   ##   ##  
##          ##    ##   ##   ##  ##   ## ###   ##  ##  ##   ##  
##   ##     ##    ##   ##   ##  ##   ##  ##   ##  ##  ##   ##  
 ## ##     ####    ## ##   ### ##   ###  ##  ###  ##   ## ##   
`;

// Print ASCII art
console.log(chalk.magenta(asciiArt))

let bumpCount = 0;
const client = new Client()

client.on('ready', async () => {
    console.log(chalk.green(`Logged in as ${client.user.tag}!`))  // Green color for the login message

    // Set the console window title
    process.title = `Ciobanu Services | .gg/harmonyisland | ${client.user.tag} | Bump count: ${bumpCount}`

    const channel = await client.channels.fetch(process.env.BUMP_CHANNEL)
    
    async function bump() {
        await channel.sendSlash('302050872383242240', 'bump')
        bumpCount++;  // Increase the bump count
        console.count('Bumped!')
        
        // Update the console window title after each bump
        process.title = `Ciobanu Services | .gg/harmonyisland | ${client.user.tag} | Bump count: ${bumpCount}`
    }

    client.on('messageCreate', async (message) => {
        // Check if the message is from the correct channel and user
        if (message.channel.id === process.env.BUMP_CHANNEL && message.author.id === process.env.TRIGGER_USER_ID) {
            await bump()
        }
    })
})

client.login(process.env.TOKEN)
