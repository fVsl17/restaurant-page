export { aboutPageLoadEvent };


function aboutPageLoad() {
    if (document.getElementById("content").childNodes.length === 1)
        document.getElementById("content").removeChild(document.getElementById("contents"));
    const contents = document.createElement("div");
    contents.id = "contents";
    const h1 = document.createElement("h1");
    h1.textContent = "About";
    const p1 = document.createElement("p");
    p1.textContent = `"Thou shouldst see here some text other than 'lorem ipsum'; the other pages should be like unto this, yet the author of this page was too lazy to think upon text and images for this page."
`;
    contents.appendChild(h1);
    contents.appendChild(p1);
    document.getElementById("content").appendChild(contents);
}

function aboutPageLoadEvent() {
    const about = document.querySelector(".about");
    about.addEventListener("click", aboutPageLoad);
}