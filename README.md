# Discord Auto Bumper
[<img src = "https://cdn.discordapp.com/attachments/1048608653164433480/1312543065340379199/image.png?ex=674d893c&is=674c37bc&hm=719a1afb39fd1c20fae2accd4829ad000996e4829d11f1ccee2783c7c34e2fc5&">]

A selfbot that automatically bump your server.

# WARNING
Selfbots are against Discord's Terms of Service.
Which can be found at https://discord.com/guidelines and https://discord.com/terms

Based on my own experience, I have been using the script for several weeks without any issues with Discord. However, if for any reason Discord suspends your account, I take no responsibility for it. I strongly recommend using an **alt** account for the script.

# Setup
Installation is simple. Create a **.env** file and copy the following into it:
```
BUMP_CHANNEL=CHANNEL_ID
TRIGGER_USER_ID=The bump reminder bot id. This prevent the self bot from spamming the command.
TOKEN=Your alt account token.
```

Next, open a CMD or, if you're using Visual Studio Code, a terminal. If you're using CMD, make sure to navigate to the folder where the selfbot is located. Then enter the following commands:
```npm install ``` 
```npm install dotenv  ```
```npm install chalk  ```
```npm install axios  ```

# Start
Once this is done, you're ready to use it. We highly recommend using a Linux VPS, although your local host or a Windows VPS will also work, depending on what you have available.

To start the script, follow these steps:
- **For Windows**: Run the `starter.bat` file.
- **For Linux**:
  I) If you only want it to run while your VPS terminal is open, use the command:
     ```
     node index.js
     ```
  II) If you want it to run continuously, we recommend installing `pm2` on your system.
