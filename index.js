import dotenv from 'dotenv'
import { Client } from 'discord.js-selfbot-v13'
import axios from 'axios'
import chalk from 'chalk'

dotenv.config()


const asciiArt = `
 ## ##     ####    ## ##   ### ##     ##     ###  ##  ##  ###  
##   ##     ##    ##   ##   ##  ##     ##      ## ##  ##   ##  
##          ##    ##   ##   ##  ##   ## ##    # ## #  ##   ##  
##          ##    ##   ##   ## ##    ##  ##   ## ##   ##   ##  
##          ##    ##   ##   ##  ##   ## ###   ##  ##  ##   ##  
##   ##     ##    ##   ##   ##  ##   ##  ##   ##  ##  ##   ##  
 ## ##     ####    ## ##   ### ##   ###  ##  ###  ##   ## ##   
`;


console.log(chalk.magenta(asciiArt))

let bumpCount = 0;
const client = new Client()

client.on('ready', async () => {
    console.log(chalk.green(`Logged in as ${client.user.tag}!`))  

    
    process.title = `Ciobanu Services | .gg/harmonyisland | ${client.user.tag} | Bump count: ${bumpCount}`

    const channel = await client.channels.fetch(process.env.BUMP_CHANNEL)
    
    async function bump() {
        await channel.sendSlash('302050872383242240', 'bump')
        bumpCount++;  
        console.count('Bumped!')
        
        
        process.title = `Ciobanu Services | .gg/harmonyisland | ${client.user.tag} | Bump count: ${bumpCount}`
    }

    client.on('messageCreate', async (message) => {
        
        if (message.channel.id === process.env.BUMP_CHANNEL && message.author.id === process.env.TRIGGER_USER_ID) {
            await bump()
        }
    })
})

client.login(process.env.TOKEN)
