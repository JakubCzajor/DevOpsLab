function loadMessage() {
  fetch("http://localhost:3000/message")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("result").innerText = data.message;
    });
}
