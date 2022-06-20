const pers = document.getElementById('persInfoAll')
const friends = document.getElementById('friendsInfoAll')
const extra = document.getElementById('extraInfoAll')

const persText = document.getElementById('persInfoText')
const friendsText = document.getElementById('friendsInfoText')
const extraText = document.getElementById('extraInfoText')


const persBar = document.getElementById('userInfoBarLeft')
const friendsBar = document.getElementById('userInfoBarMiddle')
const extraBar = document.getElementById('userInfoBarRight')

console.log("oi")

//como dar display none de algo
//ta tudo show neste momento...



// pers.style.display = "none";

getPers()

function getPers(){
    friends.style.display = "none"
    extra.style.display = "none"
    pers.style.display = "initial"
    persBar.classList.add("selected")
    friendsBar.classList.remove("selected")
    extraBar.classList.remove("selected")
}

function getFriends(){
    pers.style.display = "none"
    extra.style.display = "none"
    friends.style.display = "initial"
    friendsBar.classList.add("selected")
    persBar.classList.remove("selected")
    extraBar.classList.remove("selected")
}

function getExtra(){
    friends.style.display = "none"
    pers.style.display = "none"
    extra.style.display = "initial"
    extraBar.classList.add("selected")
    persBar.classList.remove("selected")
    friendsBar.classList.remove("selected")
}