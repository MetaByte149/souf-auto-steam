let disappearingPopup = false;

console.log("LOADED SOUF");
const popupDiv = document.createElement("div");
popupDiv.style.position = "fixed";
popupDiv.style.bottom = "10px";
popupDiv.style.left = "10px";
popupDiv.style.width = "300px";
popupDiv.style.height = "max-content";
popupDiv.style.border = "5px solid #177A8E";
// popupDiv.style.backgroundColor = "#10bbc4";
popupDiv.style.background =
  "linear-gradient(to top right, #177A8E, #10bbc4, #D0D0ff)";
popupDiv.style.opacity = 0.95;
popupDiv.style.color = "#FF0000";
popupDiv.style.padding = "2px";

const p = document.createElement("p");
p.style.position = "relative";
p.style.height = "100%";
p.style.fontSize = "20px";
p.style.whiteSpace = "pre-line";
p.style.textAlign = "center";
p.style.opacity = 1;
p.style.fontWeight = "bold";
p.textContent =
  "/ Geen interesse\n* Voicemail\n- Reeds zonnepanelen\n+ Huurder\n\n. verberg dit";
popupDiv.appendChild(p);

document.body.appendChild(popupDiv);

function eventOnKeyUp(e) {
  console.log(`${e.code} has been pressed!`);

  if (
    ["NumpadMultiply", "NumpadDivide", "NumpadSubtract", "NumpadAdd"].includes(
      e.code
    )
  )
    markCustomerAndGoNext(e.code, e.key);
  if (e.code === "NumpadDecimal") togglePopupDiv();
}

async function markCustomerAndGoNext(keyCode, key) {
  if (
    document.getElementsByClassName("title")[0].innerHTML ===
    "Selecteer resultaatcode"
  ) {
    let _ls = [];
    switch (keyCode) {
      case "NumpadMultiply":
        for (const a of document.querySelectorAll("div"))
          if (a.textContent === "Voicemail") _ls.push(a);
        break;

      case "NumpadDivide":
        for (const a of document.querySelectorAll("div"))
          if (a.textContent === "Geen Interesse") _ls.push(a);
        break;

      case "NumpadSubtract":
        for (const a of document.querySelectorAll("div"))
          if (a.textContent === "Reeds Zonnepanelen") _ls.push(a);
        break;

      case "NumpadAdd":
        for (const a of document.querySelectorAll("div"))
          if (a.textContent === "Huurder") _ls.push(a);
        break;
    }
    _ls[1].click();
  }

  // Change middle text
  document.querySelector(
    ".boxLabel"
  ).innerHTML = `<h1><center><b> Op naar de volgende 🥰 </b></center></h1><br><br><h2>U hebt op ${key} gedrukt!</h2`;

  // Go to the next client
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  document.getElementsByClassName("btn-save-record-bg")[0].click();
}

function togglePopupDiv() {
  // console.log(popupDiv.style.visibility);
  // if (popupDiv.style.visibility === "visible")
  //   popupDiv.style.visibility = "hidden";
  // else popupDiv.style.visibility = "visible";
  if (popupDiv.style.visibility === "visible")
    popupDiv.style.visibility = "hidden";
  else popupDiv.style.visibility = "visible";
}

document.removeEventListener("keyup", eventOnKeyUp);
document.addEventListener("keyup", eventOnKeyUp);

let interval = setInterval(loop, 1000 / 30);

function loop() {}
