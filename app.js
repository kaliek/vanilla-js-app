const app = document.getElementById("app");
window.run = () => app.innerText = "Hello World!";
app.innerHTML = '<button onclick="run()">Greet</button>';