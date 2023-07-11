async function eventOnMultiplyPress(e) {
  console.log("BUTTON IS PRESSED");
  const options = [
    "NumpadMultiply",
    "NumpadDivide",
    "NumpadSubtract",
    "NumpadAdd",
  ];
  if (!options.includes(e.code)) return;

  if (
    document.getElementsByClassName("title")[0].innerHTML ===
    "Selecteer resultaatcode"
  ) {
    let _ls = [];
    switch (e.code) {
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
  document.getElementsByClassName("boxLabel")[0].innerHTML =
    "<h1><center><b> Op naar de volgende 🥰 </b></center></h1><br><br><h2>U hebt op * gedrukt!</h2";

  // Go to the next client
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  document.getElementsByClassName("btn-save-record-bg")[0].click();
}

document.removeEventListener("keyup", eventOnMultiplyPress);
document.addEventListener("keyup", eventOnMultiplyPress);
