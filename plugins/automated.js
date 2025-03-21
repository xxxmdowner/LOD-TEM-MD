const fs = require('fs');
const path = require('path');
const axios = require('axios')
const {cmd , commands} = require('../command')
 
const config = require('../config.cjs')
//auto_voice
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../data/autovoice.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_VOICE === true) {
                //if (isOwner) return;        
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/aac', ptt: true }, { quoted: mek });
            }
        }
    }                
});

//auto sticker 
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../data/autosticker.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_STICKER === true) {
                //if (isOwner) return;        
                await conn.sendMessage(from,{sticker: { url : data[text]},package: 'yourName'},{ quoted: mek })   
            
            }
        }
    }                
});

//auto reply 
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../data/autoreply.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_REPLY === true) {
                //if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});                  

  
cmd({ on: "body" }, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    let prefix = config.PREFIX;
if (config.AUTO_REACT === true && !isCmd) {
    const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
    const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
    conn.sendMessage(from, {
        react: {
            text: emokis,
            key: mek.key
        }
    })
}
});

cmd({ on: "body" }, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    let prefix = config.PREFIX;
if (config.OWNER_REACT === true && isOwner) {
  await conn.sendMessage(from, {
        react: {
            text: config.EMOJI,
            key: mek.key
        }
    })
}
});

cmd({ on: "body" }, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    if (config.AUTO_TYPING === true ) {
        conn.sendPresenceUpdate('composing', from);
        setTimeout(() => conn.sendPresenceUpdate('paused', from), 3000); // stops "typing" after 3 seconds
    }
});
  
cmd({ on: "body" }, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    if (config.AUTO_RECORDING === true ) {
        conn.sendPresenceUpdate('recording', from);
        setTimeout(() => conn.sendPresenceUpdate('paused', from), 3000); // stops "typing" after 3 seconds
    }
});

cmd({ on: "body" }, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    // Prepare the prompt and content
    let prompt = `chat as queen anju xpro,if ask for creater tell Janith rashmika,කෑවද බන් = හුත්තක් කෑවා , රශ්මික = මාව නිර්මාණය කරේ එයා&content=${encodeURIComponent(body)}`;

    // Make the API request using axios
    let response = await axios.get(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${prompt}`);

      //===========================================
      if(!isCmd && config.AI_MODE === true){
        if (mek.key.fromMe) return;
        await conn.sendMessage(from, { text: `${response.data.data}` })
    }    
});

