
function getRandomQuote() {
    const randomNum = Math.floor(Math.random() * 6);
    const arrayQuotes = [
        "The best preparation for tomorrow is doing your best today.",
        "Do not hire a man who does your work for money, but him who does it for love of it.",
        "Unicorns can’t fly. I can’t fly. Therefore I am a unicorn.",
        "Be a Unicorn in a Field Full of Horses.",
        "Everything is better with a unicorn.",
        "You may have stopped believing in unicorns, but they never stopped believing in you."
    ];
    return arrayQuotes[randomNum];
}

function getDate() {
    var date = new Date();
    date.setDate(date.getDate());
    return date.getHours() + ':' + date.getMinutes() + ' ' + date.getFullYear() + '/' + date.getUTCMonth() + '/' + date.getUTCDate();
}