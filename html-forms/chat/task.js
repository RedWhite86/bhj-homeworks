let activeWidget = document.querySelector('.chat-widget');

activeWidget.addEventListener('click', () => {
    activeWidget.classList.add("chat-widget_active")
})

let time,
    date,
    hours,
    minutes,
    second

function getTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    time = `${hours}:${minutes}:${seconds}`;

    return time;
}

let inputWidget = document.getElementById('chat-widget__input');
let messagesWidget = document.getElementById('chat-widget__messages')

function botSay () {
    let answers = ['Чо надо - то?', 'Чьих холоп будешь?', 'Притормози коней', 'Чо такой дерзкий?', 'Тебе заняться нечем???', 'Ты явно попутал!!!'];

    index = Math.floor(Math.random() * answers.length);

    return answers[index];
}

inputWidget.addEventListener('keypress', (e) => {
    if(e.key.toLocaleLowerCase() == 'enter') {
        if(inputWidget.value.length > 0) {
            messagesWidget.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${getTime()}</div>
                    <div class="message__text">${inputWidget.value}</div>
                </div>
            `;
        } else {
            return false;
        }

        inputWidget.value = '';

        messagesWidget.innerHTML += `
        <div class="message">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">${botSay()}</div>
        </div>
    `;
    }
})