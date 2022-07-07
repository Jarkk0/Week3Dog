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

  let wikiItem = document.createElement("div");
  wikiItem.setAttribute("class", "wiki-item");

  let wikiHeader = document.createElement("h1");
  wikiHeader.setAttribute("class", "wiki-header");
  wikiHeader.innerHTML = breed_X;

  let wikiContent = document.createElement("div");
  wikiContent.setAttribute("class", "wiki-content");

  let wikiText = document.createElement("p");
  wikiText.setAttribute("class", "wiki-text");

  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");

  let wikiImg = document.createElement("img");
  wikiImg.setAttribute("class", "wiki-image");

  let urlWiki = "https://en.wikipedia.org/api/rest_v1/page/summary/" + breed_X;

  fetch(urlWiki)
    .then((res) => res.json())
    .then((result) => {
      wikiText.innerHTML = result.extract;
    });

  let url = "https://dog.ceo/api/breed/" + breed_X + "/images/random";

  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      wikiImg.src = result.message;
    });

  //create elements

  imgContainer.appendChild(wikiImg);
  wikiContent.appendChild(imgContainer);
  wikiContent.appendChild(wikiText);
  wikiItem.appendChild(wikiHeader);
  wikiItem.appendChild(wikiContent);
  container.appendChild(wikiItem);
}
