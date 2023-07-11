async function eventOnMultiplyPress(e) {
  console.log("BUTTON IS PRESSED");
  // Check if right button is pressed
  if (e.code !== "NumpadMultiply") return;

  // Click the voicemail button
  //TODO: do not rely on a list where you have to choose the 2nd option

  if (
    document.getElementsByClassName("title")[0].innerHTML ===
    "Selecteer resultaatcode"
  ) {
    let ls = [];
    for (const a of document.querySelectorAll("div"))
      if (a.textContent === "Voicemail") ls.push(a);
    ls[1].click();
  }

  // Change middle text
  document.getElementsByClassName("boxLabel")[0].innerHTML =
    "<h1><center><b> Op naar de volgende 🥰 </b></center></h1><br><br><h2>U hebt op * gedrukt!</h2";

  // Go to the next client
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  document.getElementsByClassName("btn-save-record-bg")[0].click();
}

document.removeEventListener("keyup", eventOnMultiplyPress);
document.addEventListener("keyup", eventOnMultiplyPress);
