let redact = document.querySelector('#redact')
let save = document.querySelector('#save')
let cancel = document.querySelector('#cancel')
let myP = document.querySelector('#myP')

myP.innerHTML = localStorage.getItem(myP)

function clickRedact() {
    if (myP.contentEditable === 'true') {
        myP.contentEditable = false
    } else {
        myP.contentEditable = true
        redact.disabled = true
        save.disabled = false
        cancel.disabled = false
    }
}

function clickSave() {
    localStorage.setItem(myP, myP.innerHTML)
    myP.contentEditable = false
    redact.disabled = false
    save.disabled = true
    cancel.disabled = true
}

function clickCancel() {
    myP.innerHTML = localStorage.getItem(myP)
    myP.contentEditable = false
    redact.disabled = false
    save.disabled = true
    cancel.disabled = true
}

redact.addEventListener('click', clickRedact)
save.addEventListener('click', clickSave)
cancel.addEventListener('click', clickCancel)