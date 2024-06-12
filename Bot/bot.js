const { Telegraf } = require("telegraf");

const TOKEN = "7249363758:AAHilIaSfqNAg4BtqZzE8uzW-Zh6GI6AJnI"; // جایگزین با توکن خود کنید
const bot = new Telegraf(TOKEN);

const web_link = "https://www.takkharidshop.ir/";

bot.start((ctx) => {
  ctx.reply("آیا دنبال رلی نمیتونی پیدا کنی \n داش کیا اینجاست که برای فایل های مخصوص نشونت بده روی بازی کلیک کن تا بهت کمک کنه ", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "بازی با داش کیا", web_app: { url: web_link } },
        ]
      ]
    },
  });
});

bot.launch();
