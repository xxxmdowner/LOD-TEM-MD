const { fetchJson } = require('../lib/functions')
const { downloadTiktok } = require("@mrnima/tiktok-downloader");
const getFBInfo = require("@xaviabot/fb-downloader");
const cheerio = require('cheerio')
const { igdl } = require('ruhend-scraper')
const axios = require('axios');
const { cmd, commands } = require('../command')
 
const config = require('../config.cjs')
const { BufferJSON, Browsers, WA_DEFAULT_EPHEMERAL, makeWASocket, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, useMultiFileAuthState, fetchLatestBaileysVersion, downloadContentFromMessage} = require('@whiskeysockets/baileys');
let prefix = config.PREFIX;


cmd({
    pattern: "tiktok",
    alias: ["tt"],
    react: "🎥",
    desc: "download tt videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    if(config.BTN_MSG === true && !isGroup){
        try {
        if (!q && !q.startsWith("https://")) return await reply("*give me tiktok url ❌*")
        m.react('⬇️')
        //fetch data from api  
        let data = await downloadTiktok(q);
        let dat = data.result;

    let desc2 = `
    🎟️ *QUEEN ANJU-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please select you want to download:*

Title * ${data.result.title}
  
*URL:* ${q}`
    let msg = generateWAMessageFromContent(
        m.chat,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                body: {
                  text: `👉 𝐇𝐞𝐥𝐥𝐨 ${pushname} 𝐈'𝐦 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚\n\n🍂 𝐉𝐨𝐢𝐧 𝐌𝐲 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 -:\n\nhttps://whatsapp.com/channel/0029Vaj5XmgFXUubAjlU5642\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗*`
                },
                carouselMessage: {
                  cards: [
                    {
                      header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: data.result.image } }, { upload: conn.waUploadToServer })),
                        title: ``,
                        gifPlayback: true,
                        subtitle: `©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗`,
                        hasMediaAttachment: false
                      }),
                      body: { text: `${desc2}`},
                      nativeFlowMessage: {
                        buttons: [
                        {
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"📼 SD QUALITY\",\"id\":\"${prefix}tnw ${dat.dl_link.download_mp4_1}"}`
                        },
                        {
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"🎟️ HD QUALITY\",\"id\":\"${prefix}tww ${dat.dl_link.download_mp4_2}"}`
                        },                                            
                        {
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"🎶 Audio file\",\"id\":\"${prefix}ta ${dat.dl_link.download_mp3}"}`
                        },
                        {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐀𝐍𝐉𝐔 𝐌𝐃 V3 💚\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                        },
                        ],
                      },
                    }
                  ],
                             messageVersion: 1,
                             },
                             contextInfo: {
                             mentionedJid: [m.sender],
                             forwardingScore: 999,
                             isForwarded: true,
                             forwardedNewsletterMessageInfo: {
                             newsletterJid: '120363299978149557@newsletter',
                             newsletterName: `𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗`,
                             serverMessageId: 143
                                }
                            }
                        }
                    }
                },
            },
            { quoted: mek })
            
                await conn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id,
        });

} catch (e) {
console.log(e);
reply(`${e}`);
}
} else {
    try {
        if (!q && !q.startsWith("https://")) return await reply("*give me tiktok url ❌*")
        m.react('⬇️')
        //fetch data from api  
        let data = await downloadTiktok(q);
     let desc = `
     🎟️ *QUEEN ANJU-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title * ${data.result.title}

*!.* Tiktok Video

   1 | 📼 SD QUALITY
   2 | 🎟️ HD QUALITY

*!.* Tiktok Audio

   3 | 🎶 Audio file
   
*URL:* ${q}
     
     `

const sentMsg = await conn.sendMessage(from, {
  image: { url: data.result.image}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
  caption: desc,
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
const messageID = sentMsg.key.id; // Save the message ID for later reference


// Listen for the user's response
conn.addReplyTracker(messageID, async (mek, messageType) => {
    if (!mek.message) return;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // React to the user's reply (the "1" or "2" message)
    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
        let dat = data.result;

        // React to the upload (sending the file)
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        if (messageType === '1') {
            // Handle option 1 (no wm File)
            await conn.sendMessage(from, {
              video: { url: dat.dl_link.download_mp4_1}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ WHATSAPP BOT",
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
            }
         else if (messageType === '2') {
            // Handle option 2 (wm File)
            await conn.sendMessage(from, {
              video: { url: dat.dl_link.download_mp4_2}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ WHATSAPP BOT",
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
            }); }
           
          else if (messageType === '3') {
            //Handle option 3 (audio File)  
          await conn.sendMessage(from, { audio: { url: dat.dl_link.download_mp3 }, mimetype: "audio/mpeg" }, { quoted: mek })  
    
          }

        // React to the successful completion of the task
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

        console.log("Response sent successfully");
});

} catch (e) {
console.log(e);
reply(`${e}`);
}
}
});

cmd({
    pattern: "tnw",
    react: "⬇",    
    filename: __filename
  },
  
  async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{      
  await conn.sendMessage(from, { react: { text: '⬆', key: mek.key }})
  await conn.sendMessage(from, { video: { url: q }, mimetype: "video/mp4", caption: `> NO-WATERMARK\n\n© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ❤️‍🩹` }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  }catch(e){
  await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
  console.log(e)
  reply(`Error !!\n\n*${e}*`)
  }
  })
  
  cmd({
    pattern: "tww",
    react: "⬇",    
    filename: __filename
  },
  
  async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{      
  await conn.sendMessage(from, { react: { text: '⬆', key: mek.key }})
  await conn.sendMessage(from, { video: { url: q}, mimetype: "video/mp4", caption: `> WITH-WATERMARK \n\n© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ❤️‍🩹` }, { quoted: mek })  
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  }catch(e){
  await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
  console.log(e)
  reply(`Error !!\n\n*${e}*`)
  }
  })
  
  cmd({
    pattern: "ta",
    react: "⬇",    
    filename: __filename
  },
  
  async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{      
  await conn.sendMessage(from, { react: { text: '⬆', key: mek.key }})
  await conn.sendMessage(from, { audio: { url: q }, mimetype: "audio/mpeg" }, { quoted: mek })  
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  }catch(e){
  await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
  console.log(e)
  reply(`Error !!\n\n*${e}*`)
  }
  })

// Facebook Downloader
cmd({
  pattern: "fb",
  alias: ["facebook"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  if(config.BTN_MSG === true && !isGroup){
    try {

  if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });

const result = await getFBInfo(q);
  const captionHeader = `
💢 QUEEN ANJU-MD FB DOWNLOADER 💢

🎞 TITLE 🎞 ${result.title}

Fb-Url: -=-${q} 
`;

let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `👉 𝐇𝐞𝐥𝐥𝐨 ${pushname} 𝐈'𝐦 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚\n\n🍂 𝐉𝐨𝐢𝐧 𝐌𝐲 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 -:\n\nhttps://whatsapp.com/channel/0029Vaj5XmgFXUubAjlU5642\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗*`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: result.thumbnail } }, { upload: conn.waUploadToServer })),
                    title: ``,
                    gifPlayback: true,
                    subtitle: `©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗`,
                    hasMediaAttachment: false
                  }),
                  body: { text: `${captionHeader}`},
                  nativeFlowMessage: {
                    buttons: [
                    {
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"📼 SD QUALITY\",\"id\":\"${prefix}fbhd ${result.sd}"}`
                    },
                    {
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"🎟️ HD QUALITY\",\"id\":\"${prefix}fbhd ${result.hd}"}`
                    },                                            
                    {
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"🎶 Audio file\",\"id\":\"${prefix}ta ${result.sd}"}`
                    },
                    {
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"𝐀𝐍𝐉𝐔 𝐌𝐃 V3 💚\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                    },
                    ],
                  },
                }
              ],
                         messageVersion: 1,
                         },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363299978149557@newsletter',
                         newsletterName: `𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗`,
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: mek })
        
            await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
} catch (e) {
console.log(e);
reply(`${e}`);
}
} else {
     try {
    
      if (!q || !q.startsWith("https://")) {
        return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
    }
    
    await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });
    
    const result = await getFBInfo(q);
    
        const captionHeader = `
    💢 QUEEN ANJU-MD FB DOWNLOADER 💢
    
    🎞 TITLE 🎞 ${result.title}
    
    🔢 Please reply the number you want to select
    
    [1] facebook Video
    1.1 | 🪫 SD QUALITY
    1.2 | 🔋 HD QUALITY
    
    [2] facebook Audio
    2.1 | 🎶 Audio file
    2.2 | 📂 Document file
    2.3 | 🎤 Voice cut [ptt]
    
    
    Fb-Url: -=-${q} 
    `;
    
    const sentMsg = await conn.sendMessage(from, {
      image: { url: result.thumbnail}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
      caption: captionHeader,
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
    const messageID = sentMsg.key.id; // Save the message ID for later reference
    
    
    // Listen for the user's response
    conn.addReplyTracker(messageID, async (mek, messageType) => {
        if (!mek.message) return;
        const from = mek.key.remoteJid;
        const sender = mek.key.participant || mek.key.remoteJid;
    
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
            
            
    
            // React to the upload (sending the file)
            await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
    
            if (messageType === '1.1') {
                // Handle option 1 (sd File)
                await conn.sendMessage(from, {
                  video: { url: result.sd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                  caption: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ WHATSAPP BOT",
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
              }
    
              else if (messageType === '1.2') {
                // Handle option 2 (hd File)
                await conn.sendMessage(from, {
                  video: { url: result.hd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                  caption: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ WHATSAPP BOT",
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
              }
               
              else if (messageType === '2.1') {
                //Handle option 3 (audio File)  
              await conn.sendMessage(from, { audio: { url: result.sd }, mimetype: "audio/mpeg" }, { quoted: mek })
              }
              
              else if (messageType === '2.2') {
                await conn.sendMessage(from, {
                  document: { url: result.sd },
                  mimetype: "audio/mpeg",
                  fileName: `ANJU-MD/FBDL.mp3`,
                  caption: "*© QUEEN ANJU WHATSAPP BOT MD*",
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
              }, { quoted: mek });
              }
              
              else if (messageType === '2.3') {
                //Handle option 3 (audio File)  
              await conn.sendMessage(from, { audio: { url: result.sd }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
        
              }
    
            // React to the successful completion of the task
            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    
            console.log("Response sent successfully");
      });
    } catch (e) {
    console.log(e);
    reply(`${e}`);
    }
}
})
cmd({
    pattern: "fbhd",
    react: "⬇",    
    filename: __filename
  },
  
  async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{      
  await conn.sendMessage(from, { react: { text: '⬆', key: mek.key }})
  await conn.sendMessage(from, { video: { url: q }, mimetype: "video/mp4", caption: `>© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ❤️‍🩹` }, { quoted: mek })  
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  }catch(e){
  await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
  console.log(e)
  reply(`Error !!\n\n*${e}*`)
  }
  })
  
  cmd({
    pattern: "fba",
    react: "⬇",    
    filename: __filename
  },
  
  async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{      
  await conn.sendMessage(from, { react: { text: '⬆', key: mek.key }})
  await conn.sendMessage(from, { audio: { url: q }, mimetype: "audio/mpeg" }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  }catch(e){
  await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
  console.log(e)
  reply(`Error !!\n\n*${e}*`)
  }
  })

cmd({
    pattern: "twitter",
    alias: ["tweet", "twdl"],
    desc: "Download Twitter videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  if(config.BTN_MSG === true && !isGroup){
    try {
    if (!q || !q.startsWith("https://")) {
      return conn.sendMessage(from, { text: "❌ Please provide a valid Twitter URL." }, { quoted: mek });
    }

    // React to indicate processing start
    await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });

    // Fetch video information from Dark Yasiya Twitter API
    const twitterData = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = twitterData.data;

    if (!data || !data.status || !data.result) {
      return m.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { desc, thumb, video_sd, video_hd } = data.result;
    const captionHeader = `
💢 QUEEN ANJU-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}


Twitter URL: ${q}
`;
 
    let msg = generateWAMessageFromContent(
        m.chat,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                body: {
                  text: `👉 𝐇𝐞𝐥𝐥𝐨 ${pushname} 𝐈'𝐦 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚\n\n🍂 𝐉𝐨𝐢𝐧 𝐌𝐲 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 -:\n\nhttps://whatsapp.com/channel/0029Vaj5XmgFXUubAjlU5642\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗*`
                },
                carouselMessage: {
                  cards: [
                    {
                      header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: conn.waUploadToServer })),
                        title: ``,
                        gifPlayback: true,
                        subtitle: `©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗`,
                        hasMediaAttachment: false
                      }),
                      body: { text: `${desc}`},
                      nativeFlowMessage: {
                        buttons: [
                        {
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"📼 SD QUALITY\",\"id\":\"${prefix}fbhd ${video_sd}"}`
                        },
                        {
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"🎟️ HD QUALITY\",\"id\":\"${prefix}fbhd ${video_hd}"}`
                        },                                            
                        {
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"🎶 Audio file\",\"id\":\"${prefix}ta ${video_sd}"}`
                        },
                        {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐀𝐍𝐉𝐔 𝐌𝐃 V3 💚\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                        },
                        ],
                      },
                    }
                  ],
                             messageVersion: 1,
                             },
                             contextInfo: {
                             mentionedJid: [m.sender],
                             forwardingScore: 999,
                             isForwarded: true,
                             forwardedNewsletterMessageInfo: {
                             newsletterJid: '120363299978149557@newsletter',
                             newsletterName: `𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂. 💗`,
                             serverMessageId: 143
                                }
                            }
                        }
                    }
                },
            },
            { quoted: mek })
            
                await conn.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id,
        });
  } catch (e) {
    console.log(e);
    reply(`An error occurred: ${e}`);
  }
} else {
try {
    if (!q || !q.startsWith("https://")) {
      return conn.sendMessage(from, { text: "❌ Please provide a valid Twitter URL." }, { quoted: mek });
    }

    // React to indicate processing start
    await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });

    // Fetch video information from Dark Yasiya Twitter API
    const twitterData = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = twitterData.data;

    if (!data || !data.status || !data.result) {
      return m.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { desc, thumb, video_sd, video_hd } = data.result;
    const captionHeader = `
💢 QUEEN ANJU-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

🔢 Please reply with the number for your selection:

[1] Twitter Video
  1.1 | 🪫 SD QUALITY
  1.2 | 🔋 HD QUALITY

[2] Twitter Audio
  2.1 | 🎶 Audio file
  2.2 | 📂 Document file
  2.3 | 🎤 Voice (ptt)

Twitter URL: ${q}
`;

    const sentMsg = await conn.sendMessage(from, {
      image: { url: thumb}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
      caption: captionHeader,
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
    const messageID = sentMsg.key.id;

    // Listen for the user's response
    conn.addReplyTracker(messageID, async (mek, messageType) => {
        if (!mek.message) return;
        const from = mek.key.remoteJid;
        const sender = mek.key.participant || mek.key.remoteJid;

        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });

        if (messageType === '1.1') {
          // Send SD video
          await conn.sendMessage(from, {
            video: { url: video_sd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ",
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
        } else if (messageType === '1.2') {
          // Send HD video
          await conn.sendMessage(from, {
            video: { url: video_hd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ WHATSAPP BOT",
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
        } else if (messageType === '2.1') {
          // Send audio as an audio file
          await conn.sendMessage(from, { audio: { url: video_sd }, mimetype: "audio/mpeg" }, { quoted: mek });
        } else if (messageType === '2.2') {
          // Send audio as a document file
          await conn.sendMessage(from, {
            document: { url: video_sd },
            mimetype: "audio/mpeg",
            fileName: `ANJU-MD/TWDL.mp3`,
            caption: "*© QUEEN ANJU WHATSAPP BOT MD*",
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
          }, { quoted: mek });
        } else if (messageType === '2.3') {
          // Send audio as a voice note (ptt)
          await conn.sendMessage(from, { audio: { url: video_sd }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });
        }

        // React to completion
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

        console.log("Twitter response sent successfully");
    });
  } catch (e) {
    console.log(e);
    reply(`An error occurred: ${e}`);
  }
}
});




cmd({
    pattern: "mediafire",
    desc: "To download MediaFire files.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        if (!q) return m.reply("Please provide a valid MediaFire link.");
        
        // React to indicate download start
        m.react('⬇️');
        
        // Fetch file information from the Dark Yasiya API
        const response = await axios.get(`https://www.dark-yasiya-api.site/download/mfire?url=${q}`);
        const resData = response.data;

        if (!resData || !resData.status || !resData.result || !resData.result.dl_link) {
            return m.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
        }

        const fileUrl = resData.result.dl_link;
        const fileName = resData.result.fileName || "mediafire_download";
        const fileType = resData.result.fileType || "application/octet-stream";
        
        // React to indicate file is being sent
        m.react('⬆️');

        let msg = `
        © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ MEDIAFIRE DL

        File Name : ${fileName}

        File Type : ${fileType}
        `

        // Send file to chat without downloading
        await conn.sendMessage(from, {
          document: { url: fileUrl},
          mimetype: fileType,
          fileName: fileName, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: msg,
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

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});


cmd({

  pattern: "ig",
  desc: "To download instagram videos.",
  react: "🎥",
  category: "download",
  filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
  
if (!q) return m.reply(`Please Give Me a vaild Link...`);
m.react('⬇️')

       let res = await igdl(q);
      
       let data = await res.data;
       for (let i = 0; i < 20; i++) {
          let media = data[i];
          let downloadurl = media.url
           m.react('⬆️')
          await conn.sendMessage(from,{
            video: {url:downloadurl},
            mimetype:"video/mp4",
            caption: `>  © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚*`,
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
            }},{quoted:mek})
           m.react('✅')
       }

}catch(e){
console.log(e)
}
})






const fs = require('fs');
const path = require('path');


// Command handler for searching Avatar episodes
cmd({
    pattern: "baiscope",
    react: '📑',
    category: "download",
    desc: "baiscope.lk",
    filename: __filename
}, async (conn, m, mek, { from, q, isDev, reply }) => {
    try {
        if (!q) return await reply('*Please provide a search query! (e.g., Avatar)*');

        // Construct the search URL
        const searchUrl = `https://www.baiscope.lk/?s=${encodeURIComponent(q)}`;
        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);

        let episodes = [];

        // Scrape episode details (title, link, and image)
        $("article.elementor-post").each((index, element) => {
            const title = $(element).find("h5.elementor-post__title > a").text().trim();
            const episodeLink = $(element).find("h5.elementor-post__title > a").attr("href");
            const imgUrl = $(element).find(".elementor-post__thumbnail img").attr("src");

            if (title && episodeLink && imgUrl) {
                episodes.push({
                    title,
                    episodeLink,
                    imgUrl
                });
            }
        });

        // If no episodes found
        if (episodes.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        // Prepare message info
        let info = `📺 Search Results for *${q}:*\n\n`;
        episodes.forEach((ep, index) => {
            info += `*${index + 1}.* ${ep.title}\n🔗 Link: ${ep.episodeLink}\n\n`;
        });

        // Send the compiled information
        const sentMsg = await conn.sendMessage(from,
            { text: info,
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
             }, { quoted: mek });
        const messageID = sentMsg.key.id; // Save the message ID for later reference

        // Listen for the user's response
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;

            // Check if the message is a reply to the previously sent message
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
            if (isReplyToSentMsg) {
                const selectedNumber = parseInt(messageType.trim());
                if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= episodes.length) {
                    const selectedEpisode = episodes[selectedNumber - 1];

                    // Fetch the download link from the selected episode page
                    const episodeResponse = await axios.get(selectedEpisode.episodeLink);
                    const $episodePage = cheerio.load(episodeResponse.data);
                    const downloadLink = $episodePage("a.dlm-buttons-button").attr("href");

                    if (downloadLink) {
                        // Send the image of the selected episode along with the details
                        await conn.sendMessage(from, {
                            image: { url: selectedEpisode.imgUrl },
                            caption: `🎬 *${selectedEpisode.title}*\n🔗 Link: ${selectedEpisode.episodeLink}\n⬇️ Download will follow.`,
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
                        }, { quoted: mek });

                        // Download the ZIP file
                        const zipFilePath = path.join(__dirname, 'downloaded_episode.zip');
                        const writer = fs.createWriteStream(zipFilePath);

                        const downloadResponse = await axios({
                            url: downloadLink,
                            method: 'GET',
                            responseType: 'stream'
                        });
downloadResponse.data.pipe(writer);

                        writer.on('finish', async () => {
                            // Once the download is complete, send the ZIP file to the user
                            await conn.sendMessage(from, {
                                document: { url: zipFilePath },
                                mimetype: 'application/zip',
                                fileName: `${selectedEpisode.title}.zip`,
                                caption: `*${selectedEpisode.title}*\n\n© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚`,
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
                            }, { quoted: mek });

                            // Optionally delete the downloaded ZIP file after sending
                            fs.unlinkSync(zipFilePath);
                        });

                        writer.on('error', (err) => {
                            console.error('Error downloading ZIP file:', err);
                            reply('*Error downloading the episode ZIP file.*');
                        });

                    } else {
                        await reply('*Download link not found for the selected episode.*');
                    }
                } else {
                    await reply('*Invalid selection. Please choose a valid number.*');
                }
            }
        });

    } catch (error) {
        console.error(error);
        await reply('*An error occurred while scraping the data.*');
    }
});

// Command handler for searching cartoons
cmd({
    pattern: "ginisisila",
    react: '📑',
    category: "download",
    desc: "ginisisilacartoon.net",
    filename: __filename
}, async (conn, m, mek, { from, q, isDev, reply }) => {
    try {
        if (!q) return await reply('*Please provide a search query! (e.g., Garfield)*');

        // Construct the search URL
        const searchUrl = `https://ginisisilacartoon.net/search.php?q=${encodeURIComponent(q)}`;
        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);

        let episodes = [];

        // Scrape episode details
        $("div.inner-video-cell").each((index, element) => {
            const title = $(element).find("div.video-title > a").attr("title");
            const postedTime = $(element).find("div.posted-time").text().trim();
            const episodeLink = $(element).find("div.video-title > a").attr("href");
            const imageUrl = $(element).find("div.inner-video-thumb-wrapper img").attr("src"); // Get episode image URL

            if (title && episodeLink) {
                episodes.push({
                    title,
                    postedTime,
                    episodeLink: `https://ginisisilacartoon.net/${episodeLink}`,
                    imageUrl: imageUrl
                });
            }
        });

        // If no episodes found
        if (episodes.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        // Prepare message info
        let info = `📺 Search Results for *${q}:*\n\n`;
        episodes.forEach((ep, index) => {
            info += `*${index + 1}.* ${ep.title}\n🗓️ Posted: ${ep.postedTime}\n🔗 Link: ${ep.episodeLink}\n\n`;
        });

        // Send the compiled information
        const sentMsg = await conn.sendMessage(from,{ text: info ,
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
        }, { quoted: mek });
        const messageID = sentMsg.key.id; // Save the message ID for later reference

        // Listen for the user's response
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;
// Check if the message is a reply to the previously sent message
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
            if (isReplyToSentMsg) {
                const selectedNumber = parseInt(messageType.trim());
                if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= episodes.length) {
                    const selectedEpisode = episodes[selectedNumber - 1];

                    // Send episode details with image first
                    const episodeInfo = `*🪄 ɴᴀᴍᴇ:-* ${selectedEpisode.title}\n⏳ *ᴅᴀᴛᴇ:-* ${selectedEpisode.postedTime}\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- ${selectedEpisode.episodeLink}\n\n☘ *We are uploading the Movie/Episode you requested.*`;
                    const imageMessage = {
                        image: { url: selectedEpisode.imageUrl },
                        caption: episodeInfo,
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
                    };
                    await conn.sendMessage(from, imageMessage, { quoted: mek });

                    // Fetch the episode page to extract the video link (iframe src)
                    const episodePageResponse = await axios.get(selectedEpisode.episodeLink);
                    const $ = cheerio.load(episodePageResponse.data);

                    // Extract the IFRAME src link
                    const iframeSrc = $('div#player-holder iframe').attr('src');

                    if (iframeSrc) {
                        // Call the external API to get the download link using the iframe link
                       const apiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${iframeSrc}&apikey=mnp3grlZ`;

                        try {
                            const downloadResponse = await axios.get(apiUrl);
                            const downloadUrl = downloadResponse.data.result.downloadUrl; // Assuming this is the correct path

                            if (downloadUrl) {
                                // Send the video as a document (.mp4)
                                await conn.sendMessage(from, {
                                    document: { url: downloadUrl },
                                    mimetype: "video/mp4",
                                    fileName: `MR JANIYA | ${selectedEpisode.title}.mp4`,
                                    caption: `${selectedEpisode.title} |  © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗\n\n© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚`,
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
                                }, { quoted: mek });
                            } else {
                                await reply('Failed to retrieve the download link for this episode.');
                            }
                        } catch (error) {
                            console.error('Error fetching the download link:', error);
                            await reply('An error occurred while trying to fetch the download link.');
                        }

                    } else {
                        await reply('No downloadable link found for this episode.');
                    }

                } else {
                    await reply(`Please reply with a valid number from the list.`);
                }
            }
        });

    } catch (e) {
        reply('*Error occurred while scraping!*');
        console.error(e);
    }
});


cmd({
    pattern: "apk",
    desc: "Download apk.",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("⬇")
      
const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${q}/limit=1`;
const response = await axios.get(apiUrl);
const data = response.data;

let step1 = data.datalist.list[0].size % 1000000
let step2 = `.` + step1
let step3 = data.datalist.list[0].size / 1000000
let correctsize = step3 - step2
    
let desc = `
*「 🗃️𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐀𝐏𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑🗃️ 」*

*╭──📦 APK Details 📦──◦•◦❥•*
*╎*
*╎* *🏷️ Nᴀᴍᴇ :* ${data.datalist.list[0].name}
*╎* *📦 Sɪᴢᴇ :* ${correctsize}MB
*╎* *🔖 Pᴀᴄᴋᴀɢᴇ :* ${data.datalist.list[0].package}
*╎* *📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ${data.datalist.list[0].updated}
*╎* *👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ${data.datalist.list[0].developer.name}
*╎*
*╰────────────────────◦•◦❥•*
* 𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚`
await m.react("⬆")
await conn.sendMessage(from,{
    document: {url: data.datalist.list[0].file.path_alt},
    fileName: data.datalist.list[0].name,
    mimetype: 'application/vnd.android.package-archive',
    caption: desc,
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
    }},{quoted: mek})
        
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})





cmd({

    pattern: "gdrive",
    desc: "To download Gdrive files.",
    react: "🌐",
    category: "download",
    filename: __filename
  
  },
  
  async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  
  try{
    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
  if (!q) return m.reply(`Please Give Me a vaild Link...`);
  
  const apiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${q}&apikey=mnp3grlZ`;

  const downloadResponse = await axios.get(apiUrl);
                            const downloadUrl = downloadResponse.data.result.downloadUrl; // Assuming this is the correct path

                            if (downloadUrl) {
                                // Send the video as a document (.mp4)
                                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
                                await conn.sendMessage(from, {
                                    document: { url: downloadUrl },
                                    mimetype: downloadResponse.data.result.mimetype,
                                    fileName: downloadResponse.data.result.fileName,
                                    caption: `|  © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗\n\n© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚`,
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
                                }, { quoted: mek });
                            }
         
                            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
  }catch(e){
  console.log(e)
  }
  });
  
  // Replace this URL with your actual webpage URL


cmd({
  pattern: 'spotify',
  react: '🎵',
  category: 'download',
  desc: 'Search and download songs from Spotify.',
  filename: __filename
}, async (conn, message, mek, { from, q, reply }) => {
  try {
    if (!q) {
      return await reply("*Please provide a song name to search!*");
    }

    // Fetch search results from Spotify API
    let response = await fetchJson(`https://api.agatz.xyz/api/spotify?message=${q}`);
    let data = response.data;
    let item = data[0];

    if (!data || data.length === 0) {
      return await reply("*No results found for your search! Try a different query.*");
    }

    let resultMessage = `
🔍 *Spotify Search Results*

  ${item.trackName}*

📀 *Artist*: ${item.artistName}
💽 *Album*: ${item.albumName}
⏱️ *Duration*: ${item.duration}
🔗 *URL*: [Click Here](${item.externalUrl})
🎧 *Enjoy the music brought to you by* *Queen Anju Bot*! 

🔽 *To download send:*

1. *Audio File* 🎶
2. *Document File* 📂

> *Created with ❤️ by Janith Rashmika* 

> * © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚   
*💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD    
`
let info = `
📀 *Artist*: ${item.artistName}
💽 *Album*: ${item.albumName}
⏱️ *Duration*: ${item.duration}
🔗 *URL*: [Click Here](${item.externalUrl})
🎧 *Enjoy the music brought to you by* *Queen Anju Bot*! `

async function ytmp33() {
    let attempts = 0;
    const maxAttempts = 100;

    while (attempts < maxAttempts) {
        attempts++;
        console.log(`Retrying... Attempt ${attempts}`);
        
        try {
            const datasa = await fetchJson(`https://api.siputzx.my.id/api/d/spotify?url=${item.externalUrl}`);
            if (datasa && datasa.metadata) {
                return datasa; // Download URL Found
            }
        } catch (error) {
            console.error(`Attempt ${attempts} failed: ${error.message}`);
        }
    }

    throw new Error(`Failed to get download URL after ${maxAttempts} attempts.`);
}
let res =await ytmp33();
let datas = res.metadata;
// Send the initial message and store the message ID
const sentMsg = await conn.sendMessage(from, {
  image: { url: datas.cover_url}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
  caption: resultMessage,
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
const messageID = sentMsg.key.id; // Save the message ID for later reference


// Listen for the user's response
conn.addReplyTracker(messageID, async (mek, messageType) => {
    if (!mek.message) return;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // React to the user's reply (the "1" or "2" message)
    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });

      const downloadUrl = res.download;

      // React to the upload (sending the file)
      await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

      if (messageType === '1') {
          // Handle option 1 (Audio File)
          await conn.sendMessage(from, { 
              audio: { url: downloadUrl }, 
              mimetype: "audio/mpeg" ,
              contextInfo: {
                  externalAdReply: {
                      title: item.trackName,
                      body: item.albumName,
                      mediaType: 1,
                      sourceUrl: item.externalUrl,
                      thumbnailUrl: datas.cover_url, // This should match the image URL provided above
                      renderLargerThumbnail: true,
                      showAdAttribution: true
                  }
              }
          
          }, { quoted: mek });
      } else if (messageType === '2') {
          // Handle option 2 (Document File)
          await conn.sendMessage(from, {
              document: { url: downloadUrl},
              mimetype: "audio/mp3",
              fileName: `${item.trackName}.mp3`, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: info,
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
      }

      // React to the successful completion of the task
      await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

      console.log("Response sent successfully");
});
  } catch (error) {
    console.error(error);
    await reply("🚩 *Error occurred while processing your request!*");
  }
});


