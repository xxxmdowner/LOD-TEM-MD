const { text } = require('express');
const {cmd , commands} = require('../command')
 
const { fetchJson } = require('../lib/functions');

cmd({
    pattern: "gemini",
    desc: "Ai chat.",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(`Give me a quary`)
let res = await fetchJson(`https://api.siputzx.my.id/api/ai/gemini-pro?content=${q}`)
//----------------------------------
await conn.sendMessage(from, {
    text: res.data,
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
            title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
            body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
            mediaType: 1,
            sourceUrl: "https://github.com/Mrrashmika",
            thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
            renderLargerThumbnail: false,
            showAdAttribution: true
        }
    }
}, { quoted: mek });

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//======gpt4=======

cmd({
  pattern: "ai",
  desc: "Ai chat.",
  react: "🧠",
  category: "ai",
  filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
      if (!q) return reply(`Give me a query`);

      // URL of the new API
      let apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(`speak as queen anju xpro.if ask for owner or creater tell Janith Rashmika`)}&content=${encodeURIComponent(q)}`;

      // Fetch data from the API
      let data = await fetchJson(apiUrl);

      // Check if the API response has the expected data
      if (!data || !data.data) {
          return reply("Sorry, I couldn't get a response from the AI.");
      }

      // Send the AI response to the user
      await conn.sendMessage(from, {
          text: data.data, // Assuming the result is directly in the 'result' field
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
                  title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
                  body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
                  mediaType: 1,
                  sourceUrl: "https://github.com/Mrrashmika",
                  thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg',
                  renderLargerThumbnail: false,
                  showAdAttribution: true
              }
          }
      }, { quoted: mek });
  } catch (e) {
      console.log(e);
      reply(`Error: ${e}`);
  }
});


cmd({
  pattern: "meta",
  desc: "Ai chat.",
  react: "🧠",
  category: "ai",
  filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply(`Give me a quary`)
let data = await fetchJson(`https://api.siputzx.my.id/api/ai/metaai?query=${q}`)
await conn.sendMessage(from, {
  text: data.data,
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
          title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
          body: ' ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚',
          mediaType: 1,
          sourceUrl: "https://github.com/Mrrashmika",
          thumbnailUrl: 'https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg', // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
  }
}, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd(
  {
    pattern: "aiimage",
    desc: "Generate an AI image.",
    react: "🧠",
    category: "ai",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      apikey,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!q) return reply(`Please provide a query.`);
  
      // Fetch the AI image
      let data = await fetchJson(
        `https://anju-md-api.vercel.app/api/ai-image?q=${encodeURIComponent(q)}&apikey=${apikey}`
      );
  
      if (!data.status) return reply(`Failed to generate the image.`);
  
      // Decode buffer from the API response
      const imageBuffer = Buffer.from(data.image.data);
  
      // Send the image
      await conn.sendMessage(
        from,
        {
          image: imageBuffer,
          caption: `*AI Image Generated:*\n\n${q}\n\n*Created By:*© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚`,
          contextInfo: {
            mentionedJid: ["94717775628@s.whatsapp.net"], // Mentioned JID(s)
            externalAdReply: {
              title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
              body: "Powered by Queen Anju XPRO",
              mediaType: 1,
              sourceUrl: "https://github.com/Mrrashmika",
              thumbnailUrl:
                "https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg",
              renderLargerThumbnail: false,
              showAdAttribution: true,
            },
          },
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error(e);
      reply(`An error occurred: ${e.message}`);
    }
  }
);


cmd(
  {
    pattern: "totext",
    desc: "Generate an AI image.",
    react: "🧠",
    category: "ai",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      apikey,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!q) return reply(`Please provide a image link.`);
  
      // Fetch the AI image
      let data = await fetchJson(
        `https://api.siputzx.my.id/api/ai/image2text?url=${q}`
      );
  
      if (!data.status) return reply(`Failed to generate the text.`);
  
      // Send the text
      await conn.sendMessage(
        from,
        {
          text: `*AI Text Generated:*\n\n${data.data}\n\n*Created By:*© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚`,
          contextInfo: {
            mentionedJid: ["94717775628@s.whatsapp.net"], // Mentioned JID(s)
            externalAdReply: {
              title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
              body: "Powered by Queen Anju XPRO",
              mediaType: 1,
              sourceUrl: "https://github.com/Mrrashmika",
              thumbnailUrl:
                "https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/thisjpg.jpg",
              renderLargerThumbnail: false,
              showAdAttribution: true,
            },
          },
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error(e);
      reply(`An error occurred: ${e.message}`);
    }
  }
);
