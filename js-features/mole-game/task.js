let dead = document.getElementById('dead');
let lost = document.getElementById('lost')

function getHole(index) {
    return document.getElementById(`hole${index}`)
}

for (let index = 1; index <= 9; index ++) {
    getHole(index).onclick = function() {
        if (getHole(index).className.includes('hole_has-mole') == true ) {
            ++dead.textContent;
            check()
        } else {
            ++lost.textContent;
            check()
        }
    }
}

function check () {
    if( dead.textContent == 10 ) {
        alert('win')
        dead.textContent = 0;
        lost.textContent = 0;
    } else if ( lost.textContent == 5) {
        alert('lose')
        dead.textContent = 0;
        lost.textContent = 0;
    }
}