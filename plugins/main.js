const {cmd ,command} = require('../command');
 
const config = require('../config.cjs');
const os = require("os")
const {runtime , fetchJson} = require('../lib/functions');
//alive
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    react: "🛠️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, mnu, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const voice = {
    alive: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/Auto_voice/AUD-20241111-WA0028.aac'
}

let img = await fetchJson(`https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/logo.json`)
let ALIVE_IMG = img.alive;
let aliveMsg = `
🧚‍♂️⃟🩵 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 🧚‍♂️⃟🩵

✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Colombo' })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${require('../package.json').version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../package.json').version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 𝚚𝚞𝚎𝚎𝚗 𝗮𝗻𝗷𝘂! ✨

> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴏᴍᴘʟᴇ𝘁𝘦𝗱 𝗯ʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD
`;

await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

await conn.sendMessage(from, {
  image: { url: img.alive}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
  caption: aliveMsg,
  contextInfo: {
      mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363299978149557@newsletter',
          newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
          serverMessageId: 999
      },
      externalAdReply: {
          title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
          body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
          mediaType: 1,
          sourceUrl: "https://github.com/Mrrashmika",
          thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
  }
});
}catch(e){
console.log(e)
reply(`${e}`)
}
});

//system
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    react: "🏷️",
    desc: "To Check uptime , ram and more.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `
🏷️ SYSTEM STATUS

🔄 UPTIME: ${runtime(process.uptime())}
🔋 RAM USAGE: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
💻 HOST NAME: ${os.hostname()}
👑 BOT OWNER: Janith Rashmika

> * © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚  
> *💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD 
`
await conn.sendMessage(from, {
  image: { url: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg'}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
  caption: status,
  contextInfo: {
      mentionedJid: ['94717775628@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363299978149557@newsletter',
          newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
          serverMessageId: 999
      },
      externalAdReply: {
          title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
          body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
          mediaType: 1,
          sourceUrl: "https://github.com/Mrrashmika",
          thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
  }
}); 
}catch(e){
console.log(e)
reply(`${e}`)

}
})

//runtime
cmd({
    pattern: "runtime",
    alias: ["uptime"],
    react: "😇",
    desc: "To Check uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `
😇𝚁𝚄𝙽𝚃𝙸𝙼𝙴😇:  ${runtime(process.uptime())}

> * © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚  
> *💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD 
`


await conn.sendMessage(from, { text: status ,
    contextInfo: {
      mentionedJid: [ '' ],
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363299978149557@newsletter',
        newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
        serverMessageId: 999
      },
  externalAdReply: { 
  title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
  body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
  mediaType: 1,
  sourceUrl: "https://github.com/Mrrashmika" ,
  thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg' ,
  renderLargerThumbnail: true,
  showAdAttribution: true
  }
  }}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)

}
})

//ping
cmd({
  pattern: "ping",
  desc: "Check bot's response time.",
  category: "main",
  react: "❤️‍🩹",
  filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    const mnu = {
        key: {
            participants: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            fromMe: true,
            id: "©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚"
        },
        message: {
            contactMessage: {
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Sy\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        participant: "0@s.whatsapp.net"
    };
      const startTime = Date.now()
      const message = await conn.sendMessage(from, { text: '𝗣𝗶𝗻𝗴𝗶𝗻𝗴...' })
      const endTime = Date.now()
      const ping = endTime - startTime
      await conn.sendMessage(from, { text: `⏰ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗶𝗺𝗲 : ${ping}ms` }, { quoted: mnu })
  } catch (e) {
      console.log(e)
      reply(`${e}`)
  }
})

//owner
cmd({
    pattern: "owner",
    react: "👨‍💻",
    alias: ["dev","createor","developer"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let tex = `
*🪄Hello* ${pushname},

*🧚‍♀️𝐈'𝐦 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚 -𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭💗*

> 👨‍💻 *MY 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* ⚖️

*⚡ηαмє -: KING RASHMIKA*
*⚡αgє -: 18*
*⚡ηυмвєя* -: +94717775628
*⚡уσυтυвє* -: https://www.youtube.com/@gamingrash2006

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ -: *⚡©GAMING RASH 2024💗*

`


// send a contact!
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:MR RASHMIKA\n' // full name
            + 'ORG:JANITH RASHMIKA;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=94717775628:+94 71777 5628\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await conn.sendMessage(
    from,
    { 
        contacts: { 
            displayName: 'Janith Rashmika', 
            contacts: [{ vcard }] 
        }
    }
);

await conn.sendMessage(from, { 
  image: {url: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg'},
  caption: tex ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363299978149557@newsletter',
      newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
      serverMessageId: 999
    },
externalAdReply: { 
title: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
mediaType: 1,
sourceUrl: "https://github.com/Mrrashmika" ,
thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//
