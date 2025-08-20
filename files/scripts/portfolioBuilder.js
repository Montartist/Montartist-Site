import * as dataLoad from './dataLoad.js'

let artistsArray = []

async function build() {
  let artists = await dataLoad.requestJSON(`/files/data/portfolio.json`);
  artistsArray = Object.values(artists);
  const portfolioList = document.querySelector('.portfolio-list');

  artistsArray.forEach(artist => {
    const artistButton = document.createElement("button");
    artistButton.textContent = artist["name"];
    artistButton.dataset.artist = artist["name"];
    artistButton.addEventListener("click", () => {
      loadArtist(artist);
    });
    portfolioList.appendChild(artistButton);
    
  });

  loadArtist(artistsArray[0]);

  // let portfolioElementList = {}

  // portfolioElementList.title = document.createElement('h1')
  // portfolioElementList.title.innerHTML = artistObj.name
  // portfolioElementList.title.setAttribute('class', 'portfolioTitle')

  // portfolioElementList.carrousel = document.createElement('div')
  // portfolioElementList.carrousel.innerHTML = `<ul class="carInfo"></ul><button class="carrouselL carrouselButton"><img src="../../files/assets/images/utils/left.svg" alt="Bouton gauche"></button><img fetchpriority="high" class="carrouselImg" src="" alt="Image du carrousel"/><button class="carrouselR carrouselButton"><img src="../../files/assets/images/utils/right.svg" alt="Bouton droite"></button><div class="carrouselCollection"></div>`
  // portfolioElementList.carrousel.setAttribute('class', "portfolioCarrousel")

  // portfolioElementList.intent = document.createElement('p')
  // portfolioElementList.intent.innerHTML = artistObj.intention + '<br/><br/>Contact : <a class="portfolioMail" href="mailto:' + artistObj.mail+'">'+ artistObj.mail + '</a>'
  // portfolioElementList.intent.setAttribute('class', 'portfolioIntent')

  // if (artistObj.xArts.length > 0 && artist == 'Sybille_C') {
  //   portfolioElementList.xArts = document.createElement('figure')
  //   portfolioElementList.xArts.setAttribute('class', "portfolioXArts")
  //   portfolioElementList.xArts.innerHTML = `<img class="xArtsImg" alt='Oeuvre "À la croisée des arts" de Sybille C' src="https://${location.hostname}/files/assets/images/oeuvres/portfolios/Sybille_C/xArts/${artistObj.xArts[2]}"><figcaption class="xArtsCaption"><span class="xArtsTitle">${artistObj.xArts[1]}</span>, photographie par ${artistObj.xArts[0]}</figcaption>`
  // } else if (artistObj.xArts.length > 0 && artist != 'Sybille_C') {
  //   portfolioElementList.xArts = document.createElement('figure')
  //   portfolioElementList.xArts.setAttribute('class', "portfolioXArts")
  //   portfolioElementList.xArts.innerHTML = `<img class="xArtsImg" alt='Oeuvre "À la croisée des arts" de ${artistObj.name}' src="https://${location.hostname}/files/assets/images/oeuvres/portfolios/${artist}/xArts/${artistObj.xArts[1]}"><figcaption class="xArtsCaption"><span class="xArtsTitle">${artistObj.xArts[0]}</span></figcaption>`
  // }
  // portfolioElementList.autoportrait = document.createElement('img')
  // portfolioElementList.autoportrait.setAttribute('src', `https://${location.hostname}/files/assets/images/oeuvres/portfolios/${artist}/${artistObj.autoportrait}`)
  // portfolioElementList.autoportrait.setAttribute('class', 'portfolioAutoportrait')
  // portfolioElementList.autoportrait.setAttribute('alt', `Autoportrait de ${artistObj.name}`)

  // for (let element of Object.keys(portfolioElementList)) {
  //   container.appendChild(portfolioElementList[element])
  // }
  // carrousel.carrousel(portfolioElementList.carrousel, artistObj.oeuvres, 'portfolio')
};

function loadArtist(artist) {
  const portfolioName = document.querySelector('#portfolio-name');
  const carrouselCollection = document.querySelector('.carrouselCollection');
  const carrouselButtonsLeft = document.querySelector('.carrouselL')
	const carrouselButtonsRight = document.querySelector('.carrouselR')
  console.log(artist);
  
  // INFOS
  portfolioName.textContent = artist["name"];

  //CARROUSEL
  let imgId = 0
  carrouselCollection.innerHTML = "";
  for (let i = 0; i<artist["oeuvres"].length; i++) {
		let div = document.createElement('div');
		div.setAttribute("class", "collectionImg");
		carrouselCollection.appendChild(div);

		let img = document.createElement('img');
		img.setAttribute('src', `/files/assets/images/oeuvres/portfolios/${artist["folderName"]}/oeuvres/${artist["oeuvres"][i][1]}`);
		div.appendChild(img);

    div.addEventListener('click', () => {
      setImgPortfolio(i, artist);
    });
	};

  carrouselButtonsLeft.addEventListener('click', () => {
  imgId == 0 ? imgId = artist["oeuvres"].length-1 : imgId -= 1;
    setImgPortfolio(imgId, artist);
  });

  carrouselButtonsRight.addEventListener('click', () => {
    imgId == artist["oeuvres"].length-1 ? imgId = 0 : imgId += 1;
    setImgPortfolio(imgId, artist);
  });

  setImgPortfolio(0, artist)

};
function setImgPortfolio(imgId, artist) {
  const carrouselImgPortfolioTitle = document.querySelector('.carrousel-title').children[0];
  const carrouselImgPortfolio = document.querySelector('.carrousel-img-container').children[0];
  const previous = document.querySelector('.displayedImg');

  carrouselImgPortfolioTitle.innerHTML = artist["oeuvres"][imgId][0];
  carrouselImgPortfolio.setAttribute('src', `/files/assets/images/oeuvres/portfolios/${artist["folderName"]}/oeuvres/${artist["oeuvres"][imgId][1]}`);
  
  if (previous) previous.classList.remove('displayedImg')
	
  document.querySelector('.carrouselCollection').children[imgId].setAttribute('class', 'collectionImg displayedImg');
};

export {build, loadArtist, setImgPortfolio}