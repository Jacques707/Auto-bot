const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['Ai', 'iyas','honore'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'an',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`℘༒𝐂𝐡𝐚𝐭𝐠𝐩𝐭4𝐨 𝐡𝐧𝐫༒℘:\n━━━━━━━━━━━\n\n salut vous êtes sur gpt4o, 𝖯𝗈𝗌𝖾𝗋 𝗆𝗈𝗂 𝗏𝗈𝗍𝗋𝖾 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇.💭`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(``, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://nash-rest-api-production.up.railway.app/gpt-3.5_turbo?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage('℘༒𝐂𝐡𝐚𝐭𝐠𝐩𝐭4𝐨༒℘:\n━━━━━━━━━━━\n\n' + response + '\n━━━━━━━━━━━\n💨download the AXEL-COPILOT application: https://www.apkfiles.com/apk-615471/axel-copilot-1-0', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
￼Enter
