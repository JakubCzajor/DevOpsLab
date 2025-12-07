function loadMessage() {
  fetch("http://backend:3000/message")
    .then((res) => res.text())
    .then((text) => (document.getElementById("result").innerText = text));
}
