import { bot } from "../index.js";


function onCourses(chatId) {
      bot.sendMessage(
          chatId,
          `🎓 Bizning o‘quv markazimizdagi kurslar:
    
    1️⃣ Ingliz tili  
    2️⃣ Rus tili  
    3️⃣ Turk tili  
    4️⃣ Dasturlash  
    5️⃣ Grafik dizayn  
    
    👇 Birini tanlang:
          `,
          {
            reply_markup: {
              inline_keyboard: [
                [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
                [{ text: "🇷🇺 Rus tili", callback_data: "course_rus" }],
                [{ text: "🇹🇷 Turk tili", callback_data: "course_turk" }],
                [{ text: "💻 Dasturlash", callback_data: "course_dasturlash" }],
                [{ text: "🎨 Grafik dizayn", callback_data: "course_dizayn" }],
              ],
            },
          }
        );
      }
    


