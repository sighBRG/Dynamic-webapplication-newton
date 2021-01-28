
function getRandomQuote() {
    const randomNum = Math.floor(Math.random() * 4);
    const arrayQuotes = [
        "The best preparation for tomorrow is doing your best today.",
        "Do not hire a man who does your work for money, but him who does it for love of it.",
        "Hire for passion and intensity; there is training for everything else.",
        "I've always been a tech-head.",
        "I'm not perfect; I make mistakes all the time. All I can do is to try my best to learn from my mistakes, take responsibility for them, and do a better job tomorrow." ];
    return arrayQuotes[randomNum];
}

function getDate() {
    var date = new Date();
    date.setDate(date.getDate());
    return date;
}