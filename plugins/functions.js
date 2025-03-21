const fs = require('fs');
const {cmd , commands} = require('../command')
 
const { fetchJson } = require('../lib/functions');

const forwardCommand = {
    pattern: "forward",
    desc: "Forward messages",
    alias: ['fo'],
    category: "owner",
    use: ".forward <Jid address(es)> (comma-separated for multiple JIDs)",
    filename: __filename
};

cmd(forwardCommand, async (
    conn, // Represents the connection
    mek, // Message object
    store, // Store for additional information
    {
        from, // Origin of the message
        quoted, // Quoted message object
        q, // Query parameter (target JID(s))
        isOwner, // If the sender is the bot owner
        reply // Function to reply to the sender
    }
) => {
    // Ensure the command is executed by the owner
    if (!isOwner) {
        return await reply("Owner Only ❌");
    }

    // Validate the input
    if (!q) {
        return await reply("Please provide one or more target JID addresses ❌");
    }

    if (!quoted) {
        return await reply("Please reply to a message you want to forward ❌");
    }

    // Split the JIDs by commas and trim any extra whitespace
    const targetJIDs = q.split(",").map(jid => jid.trim());

    // Extract the quoted message object
    const forwardMessage = quoted.fakeObj ? quoted.fakeObj : quoted;

    // Track the status of each forwarding attempt
    let successCount = 0;
    let failureCount = 0;

    for (const jid of targetJIDs) {
        try {
            // Forward the message to each target JID
            await conn.sendMessage(jid, { forward: forwardMessage }, { quoted: mek });
            successCount++;
        } catch (error) {
            console.error(`Error forwarding message to ${jid}:`, error);
            failureCount++;
        }
    }

    // Send a summary of the operation to the owner
    const summary = `*Forwarding completed:*\n\n✅ Success: ${successCount}\n❌ Failed: ${failureCount}`;
    return await reply(summary);
});



  cmd({
    pattern: "pair",
    alias: ["register", "link"],
    react: "🔢",
    desc: "Link a number for pairing",
    category: "utility",
    use: '.pair <number>',
    filename: __filename
}, 
async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
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

        if (!q) {
            return await reply("Example: .pair +94742274855");
        }

        // Fetch pairing code from the API
        const pair = await fetchJson(`https://anju-pair.onrender.com/code?number=${q}`);
        const done = `_*Your Number Paired Successfully...✅*_\n\nPairing Code: *${pair.code}*`;

        // Send the pairing response as a document
        await conn.sendMessage(
            m.chat,
            {
                document: fs.readFileSync("./package.json"),
                fileName: "©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚",
                mimetype: "application/pdf",
                fileLength: 99999999999999,
                pageCount: 2024,
                caption: `${pair.code}`,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: '© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚',
                        newsletterJid: "120363232588171807@newsletter"
                    },
                    externalAdReply: {
                        title: "> * © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚  ",
                        body: '',
                        thumbnailUrl: 'https://i.ibb.co/b2WCR4q/Anju-Ofc-X.jpg',
                        sourceUrl: "https://mr-Anju-official-web.vercel.app/",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: mnu }
        );

        // Reply with the success message
        await reply(done);
    } catch (e) {
        console.error(e);
        await reply(`An error occurred: ${e.message}`);
    }
});


