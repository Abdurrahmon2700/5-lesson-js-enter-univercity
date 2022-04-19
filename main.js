let userInput = document.querySelector("#overall");
let elBtn = document.querySelector("#done");
let selectWraper = document.querySelector(".wrapper")
let enterPoint = 70;
let contract = 90;
let newSelect = document.querySelector("select");
let elconfetti = document.querySelector("#my-canvas")
let elOutput = document.querySelector("#output");
let elModal = document.querySelector("#modal");
let elcontainer = document.querySelector(".container")
let closeBtn = document.querySelector("#close")

closeBtn.addEventListener("click", (e) => {
  elModal.style.display = "none";
  elconfetti.style.display = "none"
})


let nameOfUnevercity = ["O’zbekiston milliy universiteti", "Toshkent davlat texnika universiteti","Toshkent davlat iqtisodiyot universiteti", "O’zbekiston davlat jahon tillari universiteti", "Toshkent davlat sharqshunoslik instituti", "Toshkent arxitektura-qurilish instituti", "Toshkent to’qimachilik va engil sanoat istituti", "Toshkent avtomobil-yo’llari instituti"];


for (let univer = 0; univer < nameOfUnevercity.length; univer++){
  let newOption = document.createElement("option");
  newOption.text = nameOfUnevercity[univer];
  newOption.value = nameOfUnevercity[univer];
  newSelect.appendChild(newOption)
} 


elBtn.addEventListener('click', (e) => {
  e.preventDefault(         )
  let userBall = userInput.value;
  userBall = Number(userBall)
  let univeName = newSelect.value;
  if(isNaN(userBall)) {
    userInput.style.borderColor = 'red'
    userInput.value = "";
    return
  }

  else if (userInput.value = ""){
    userInput.style.borderColor = "red";
    return;
  }

  else if (userBall < enterPoint) {
    elModal.style.display = "block"
    elOutput.textContent =`Afsus ${userBall} ball bilan ${univeName} ga kira olmadingiz. Keyingi yil harakat qilib ko'ring.`
    selectWraper.addEventListener('click' ,(e) => {
    })
  }

  else if (userBall >= enterPoint && userBall <= contract) {
    elOutput.textContent =` ${userBall} ball bilan ${univeName} ga Kontrakt asosida o'qishga qabul qilindizgiz.`
    elModal.style.display = "block"
  }

  else if (userBall > contract) {
    elModal.style.display = "block"
    elOutput.textContent =`Tabriklaymiz ${userBall} ball bilan ${univeName} ga Grand asosida o'qishga qabul qilindizngiz`
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    elconfetti.style.display = "block"
  }

  elconfetti.addEventListener('click', (e) => {
      elconfetti.style.display = "none"
      elModal.style.display = "none"
      userInput.value = ""
  })
})

