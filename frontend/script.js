function loadMessage() {
  fetch("/message")
    .then((res) => res.text())
    .then((text) => (document.getElementById("result").innerText = text));
}
