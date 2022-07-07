import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  //document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  let breed_X = ["affenpinscher", "african", "airedale", "whippet", "tervuren"];
  breed_X.forEach(createWikiDiv);
}

async function createWikiDiv(breed_X) {
  const container = document.getElementById("container");

  let createDiv = document.createElement("div");
  createDiv.setAttribute("class", "wiki-item");

  let createHeader = document.createElement("h1");
  createHeader.setAttribute("class", "wiki-header");
  createHeader.innerHTML = breed_X;

  let createContent = document.createElement("div");
  createContent.setAttribute("class", "wiki-text");

  let createText = document.createElement("p");
  createText.setAttribute("class", "wiki-text");

  let createImageDiv = document.createElement("div");
  createImageDiv.setAttribute("class", "img.container");

  let createImage = document.createElement("img");
  createImage.setAttribute("class", "wiki-image");

  let urlWiki = "https://en.wikipedia.org/api/rest_v1/page/summary/" + breed_X;

  fetch(urlWiki)
    .then((res) => res.json())
    .then((result) => {
      createText.innerHTML = result.extract;
    });

  let url = "https://dog.ceo/api/breed/" + breed_X + "/images/random";

  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      createImage.src = result.message;
    });

  //create elements
  container.appendChild(createDiv);
  createDiv.appendChild(createContent);
  createDiv.appendChild(createHeader);
  createContent.appendChild(createText);
  createContent.appendChild(createImageDiv);
  createImageDiv.appendChild(createImage);
}
