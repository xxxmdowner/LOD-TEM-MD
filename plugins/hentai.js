const axios = require('axios');
const { cmd, commands } = require('../command');
 



// Common hentai image command handler
const hentaiImageHandler = async (type, conn, mek, m, { reply, isGroup }) => {
    if (!isGroup) {
        reply('This command is reserved for groups only.');
        return;
    }

    const urls = {
        hwaifu: 'https://api.waifu.pics/nsfw/waifu',
        hneko: 'https://api.waifu.pics/nsfw/neko',
        trap: 'https://api.waifu.pics/nsfw/trap',
        blowjob: 'https://api.waifu.pics/nsfw/blowjob',
    };

    try {
        const promises = [];
        for (let i = 0; i < 5; i++) {
            promises.push(axios.get(urls[type]));
        }

        // Resolve all requests and send the images
        const responses = await Promise.all(promises);
        for (const response of responses) {
            const imageUrl = response.data.url;
            await conn.sendMessage(m.chat, { 
                image: { url: imageUrl },
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
            }, { quoted: m });
        }
    } catch (error) {
        reply('Error occurred while retrieving the data: ' + error.message);
    }
};

// Define hentai commands
['hwaifu', 'hneko', 'trap', 'blowjob'].forEach((command) => {
    cmd({
        pattern: command,
        desc: `Get ${command} hentai images.`,
        react: "🍑",
        category: "hentai",
        filename: __filename,
    }, async (conn, mek, m, { reply, isGroup }) => {
        await hentaiImageHandler(command, conn, mek, m, { reply, isGroup });
    });
});
