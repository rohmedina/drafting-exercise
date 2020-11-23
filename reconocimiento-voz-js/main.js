let rec;
if (!("webkitSpeechRecognition" in window)) {
  alert("Disculpas, no puedes usar la API");
} else {
  rec = new webkitSpeechRecognition();
  rec.lang = "es-ES";
  rec.continuous = true;
  rec.interim = true;
  rec.addEventListener("result", iniciar);
}

function iniciar(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    document.getElementById("textoInput").innerHTML = event.results[i][0].transcript;
  }
}

rec.start();

//Script para reproducir

document.getElementById("hablar").addEventListener("click", () => {
  decir(document.getElementById("texto").value);
});

function decir(texto) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
