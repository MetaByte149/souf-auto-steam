async function eventOnMultiplyPress(e) {
  console.log("BUTTON IS PRESSED");
  // Check if right button is pressed
  if (e.code !== "NumpadMultiply") return;

  // Click the voicemail button
  //TODO: only click voicemail when no other button has been pressed already
  //TODO: do not rely on a list where you have to choose the 2nd option
  let ls = [];
  for (const a of document.querySelectorAll("div"))
    if (a.textContent === "Voicemail") ls.push(a);
  ls[1].click();

  // Go to the next client
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  document.getElementsByClassName("btn-save-record-bg")[0].click();
}

document.removeEventListener("keyup", eventOnMultiplyPress);
document.addEventListener("keyup", eventOnMultiplyPress);
