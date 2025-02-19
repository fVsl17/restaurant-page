export { loadMainPage };

function loadMainPage() {
    const body = document.querySelector("body");
    body.style = "margin:0; background-color:burlywood; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:20px;";
    const nav = document.createElement("nav");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    button1.textContent = "Home";
    button1.classList.add("home");
    button2.textContent = "Stuff";
    button2.classList.add("stuff");
    button3.textContent = "About";
    button3.classList.add("about");
    button1.style = button2.style = button3.style = "height:46px; width:80px; border:3px solid #be7c3b; border-radius:10px; background-color: bisque;";
    const header = document.createElement("header");
    const upperBar = document.createElement("div");
    upperBar.style = "width:100%; height:30px; background-color:#be7c3b;";
    nav.style = "background-color: #c2c2c6; display:flex; align-items:center; justify-content:center; gap:45px; height:100px; width:400px; box-shadow:0 0 0 3px rgba(0, 0, 0, 0.2);;";
    nav.appendChild(button1);
    nav.appendChild(button2);
    nav.appendChild(button3);
    header.appendChild(nav);
    body.appendChild(upperBar);
    body.appendChild(header);
    const content = document.createElement("div");
    content.id = "content";
    content.style = "display:flex; align-items:center; justify-content:flex-start; flex-direction:column; flex-basis:auto; min-height:100px; width:600px; flex-wrap:wrap; overflow:hidden; background-color:bisque; border:6px solid #be7c3b; border-radius:20px; padding-left:10px; padding-right:10px; text-align:left;";
    body.appendChild(content);
}