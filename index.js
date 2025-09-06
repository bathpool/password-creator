const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswElOne = document.getElementById("psw1")
let pswElTwo = document.getElementById("psw2")

function createPsw() {
    let psw = ""
    for (let i = 1; i < 15; i++) {
        let randomNb = Math.floor( Math.random() * characters.length)
        psw += characters[randomNb]
    }
    return psw
}

myBtn.addEventListener("click", function() {
    pswElOne.textContent = createPsw()
    pswElTwo.textContent = createPsw()    
})
