let clockCounter = document.getElementById('clicker__counter')
let cookie = document.getElementById('cookie')

cookie.onclick = function() {
    ++clockCounter.textContent 
    if (cookie.width == 200) {
        cookie.width = 250
    let interval = setInterval(() => {
                cookie.width = 200;
                clearInterval(interval)
            }, 150)
    } 
}