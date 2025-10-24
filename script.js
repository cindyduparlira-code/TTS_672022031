// ===== FILE: script.js =====
function speakText() {
  const input = document.getElementById("textInput").value;
  const output = document.getElementById("outputText");
  if (input.trim() === "") {
    output.textContent = "⚠️ Silakan masukkan teks terlebih dahulu!";
    return;
  }
  output.textContent = `Mengucapkan: "${input}"`;
  const speech = new SpeechSynthesisUtterance(input);
  speech.lang = "id-ID";
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
function stopSpeech() {
  window.speechSynthesis.cancel();
  document.getElementById("outputText").textContent = "🔇 Suara dihentikan.";
}
