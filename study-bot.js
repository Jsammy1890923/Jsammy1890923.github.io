// 🚀 Ultimate Study Bot - Helps with studying & reminders
class StudyBot {
    constructor() {
        this.messages = [
            "Time to review your notes! 📚",
            "Take a short break and drink some water! 💧",
            "Have you completed your practice questions? ✅",
            "Don't forget to summarize what you've learned today! 📝"
        ];
    }

    getReminder() {
        const randomIndex = Math.floor(Math.random() * this.messages.length);
        return this.messages[randomIndex];
    }

    displayReminder() {
        alert(this.getReminder());
    }
}

// Initialize the bot and give a reminder every 30 minutes
const myStudyBot = new StudyBot();
setInterval(() => myStudyBot.displayReminder(), 1800000); // 30 minutes
