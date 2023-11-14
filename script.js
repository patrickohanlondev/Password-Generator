const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let randomCharacter = Math.floor(Math.random() * 90)
let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")

const generatePasswords = () => {
  let random1 = Math.floor(Math.random() * 90)
  result1.textContent += (characters[random1])
  let random2 = Math.floor(Math.random() * 90)
  result2.textContent += (characters[random2])
}

const callFunction = (func, n) => {
  result1.textContent=("")
  result2.textContent=("")
  for (let i = 1; i <= n; i++) {
      func()
  }
}