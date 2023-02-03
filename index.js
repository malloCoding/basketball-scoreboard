let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let totalHome = 0
let totalGuest = 0

function add1Home() {
    totalHome += 1
    homeEl.textContent = totalHome
    scoreColor()
}

function add1Guest() {
    totalGuest += 1
    guestEl.textContent = totalGuest
    scoreColor()
}

function add2Home() {
    totalHome += 2
    homeEl.textContent = totalHome
    scoreColor()
}

function add2Guest() {
    totalGuest += 2
    guestEl.textContent = totalGuest
    scoreColor()
}

function add3Home() {
    totalHome += 3
    homeEl.textContent = totalHome
    scoreColor()
}

function add3Guest() {
    totalGuest += 3
    guestEl.textContent = totalGuest
    scoreColor()
}

function newGame() {
    totalHome = 0
    totalGuest = 0
    homeEl.textContent = totalHome
    guestEl.textContent = totalGuest
    homeEl.style.color = "#F94F6D"
    guestEl.style.color ="#F94F6D"
}

function scoreColor() {
    if (totalHome > totalGuest) {
        homeEl.style.color = "green"
        guestEl.style.color = "#F94F6D"
    } else if (totalHome < totalGuest) {
        guestEl.style.color = "green"
        homeEl.style.color = "#F94F6D"
    } else {
        homeEl.style.color = "#F94F6D"
        guestEl.style.color ="#F94F6D"
    }
}
