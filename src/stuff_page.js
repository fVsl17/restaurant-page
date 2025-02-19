export { loadStuffPageEvent };


function loadStuffPage() {
    if (document.getElementById("content").childNodes.length === 1){
        document.getElementById("content").removeChild(document.getElementById("contents"));
    }
    const contents = document.createElement("div");
    contents.id = "contents";
    const h1 = document.createElement("h1");
    h1.textContent = "Stuff";
    const p1 = document.createElement("p");
    p1.textContent = "Morbi sit amet pellentesque nisl. Maecenas venenatis ipsum placerat quam dignissim, ac viverra purus tristique. Pellentesque luctus ultricies dui, ut laoreet mauris malesuada nec. Maecenas ligula nisl, porttitor id egestas ut, egestas eu nisi. Cras quis diam id purus gravida rutrum. Maecenas sollicitudin mauris nec ex rutrum malesuada. Vestibulum iaculis imperdiet tortor, eu vulputate arcu elementum non. Donec fermentum facilisis felis. Curabitur eros diam, dictum et nisl non, porttitor condimentum diam.";
    const p2 = document.createElement("p");
    p2.textContent = "Etiam sed tristique eros. Sed imperdiet dui sit amet urna mattis, quis sodales metus ultrices. Vestibulum sit amet mattis dolor. Duis aliquam fringilla eros quis mattis. Vivamus odio diam, scelerisque nec dui quis, porttitor semper lectus. Ut bibendum tristique lectus, non pellentesque quam rhoncus quis. Vestibulum varius felis nibh, at gravida tortor porttitor sagittis. In non lectus sem. Nullam consequat luctus efficitur. Sed diam arcu, congue ut sagittis sodales, auctor eu augue. Praesent hendrerit justo neque, ac bibendum est tincidunt sit amet. Duis a felis laoreet, venenatis sapien et, efficitur metus. Praesent molestie fermentum purus, id imperdiet ex sodales ac. Duis non scelerisque ligula, eu venenatis lacus.";
    contents.appendChild(h1);
    contents.appendChild(p1);
    contents.appendChild(p2);
    document.getElementById("content").appendChild(contents);
}

function loadStuffPageEvent() {
    const stuff = document.querySelector(".stuff");
    stuff.addEventListener("click", loadStuffPage);
}