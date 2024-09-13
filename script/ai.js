const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Men',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`℘༒𝐈𝐘𝐀𝐒-𝐁𝐎𝐓༒℘:\n· · • • • ✤ • • • · ·\n\n 𝐕𝐞𝐮𝐱 𝐭𝐮 𝐦𝐞 𝐝𝐞𝐦𝐚𝐧𝐝𝐞𝐫 𝐪𝐮𝐨𝐢.🥰`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(``, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get('https://deku-rest-api.gleeze.com/blackbox?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage('℘༒𝐈𝐘𝐀𝐒 𝐁𝐎𝐓༒℘:\n· · • • • ✤ • • • · ·\n\n' + response + '\n══════◄••❀••►══════\n', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};￼Enter
