export { loadHomePage, eventedButton };

function loadHomePage() {
    if (document.getElementById("content").childNodes.length === 1)
        document.getElementById("content").removeChild(document.getElementById("contents"));
    const contents = document.createElement("div");
    contents.id = "contents";
    const h1 = document.createElement("h1");
    h1.textContent = "Home";
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor odio et metus porttitor, vel feugiat dui dapibus. Sed eleifend metus ac lectus malesuada tincidunt. Quisque consectetur turpis et orci ullamcorper, a porta leo porttitor. Donec rutrum sodales turpis, ac porttitor arcu vulputate ut. Etiam tempus lectus eget odio venenatis gravida. Nam ut quam lacinia, tristique velit ac, tristique massa. Quisque et urna turpis. Nullam finibus, tellus vel auctor ultricies, enim ex congue turpis, tincidunt dignissim nulla tellus placerat quam. Sed sit amet tortor ultricies, tincidunt mi non, facilisis erat. Suspendisse auctor elit fringilla diam commodo, vel condimentum massa cursus. Praesent faucibus, quam ac molestie ullamcorper, nulla eros pretium justo, a pharetra ipsum dui vel risus. Proin purus enim, finibus quis lobortis in, posuere porttitor lacus. Nulla facilisi. Sed lacus justo, varius in diam vel, pretium viverra nunc.";
    contents.appendChild(h1);
    contents.appendChild(p);
    document.getElementById("content").appendChild(contents);
}

function eventedButton() {
    const home = document.querySelector(".home");
    home.addEventListener("click", loadHomePage);
}