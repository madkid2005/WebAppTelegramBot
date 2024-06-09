const { Telegraf } = require("telegraf");

const TOKEN = "7096004155:AAEjJe1oBwHdFxsnT8iAXfAJoJiJGsNNSsM";
const bot = new Telegraf(TOKEN);

const web_link = "https://www.takkharidshop.ir/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
