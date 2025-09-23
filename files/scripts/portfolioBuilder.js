import * as dataLoad from './dataLoad.js'

let artistsArray = []
let startX = 0;
let endX = 0;
let imgId = 0;
let currentArtist = null;

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

  const carrouselButtonsLeft = document.querySelector('.carrouselL');
  const carrouselButtonsRight = document.querySelector('.carrouselR');
  const carrouselImgContainer = document.querySelector('.carrousel-img-container');

  carrouselButtonsLeft.addEventListener('click', () => {
    imgId == 0 ? imgId = currentArtist["oeuvres"].length - 1 : imgId -= 1;
    setImgPortfolio(currentArtist);
  });

  carrouselButtonsRight.addEventListener('click', () => {
    imgId == currentArtist["oeuvres"].length - 1 ? imgId = 0 : imgId += 1;
    setImgPortfolio(currentArtist);
  });

  carrouselImgContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carrouselImgContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe(currentArtist);
  });

  // Store current artist in a global variable
  currentArtist = artistsArray[0];
  loadArtist(currentArtist);
};

function loadArtist(artist) {
  currentArtist = artist;
  imgId = 0;

  const portfolioName = document.querySelector('#portfolio-name');
  const portfolioDescAutoportrait = document.querySelector('.portfolio-desc-autoportrait').children[0];
  const portfolioDescText = document.querySelector('.portfolio-desc-text').children[0];
  const portfolioDescTextContact = document.querySelector('.portfolio-desc-text-contact');

  const carrouselCollection = document.querySelector('.carrouselCollection');
  const carrouselButtonsLeft = document.querySelector('.carrouselL')
	const carrouselButtonsRight = document.querySelector('.carrouselR')
  
  // TITLE
  document.title = `Portfolio de ${artist["name"]}`
  portfolioName.textContent = artist["name"];

  // CARROUSEL
  carrouselCollection.innerHTML = "";
  for (let i = 0; i<artist["oeuvres"].length; i++) {
		let div = document.createElement('div');
		div.setAttribute("class", "collectionImg");
		carrouselCollection.appendChild(div);

		let img = document.createElement('img');
		img.setAttribute('src', `/files/assets/images/oeuvres/portfolios/${artist["folderName"]}/oeuvres/${artist["oeuvres"][i][1]}`);
		div.appendChild(img);

    div.addEventListener('click', () => {
      imgId = i;
      setImgPortfolio(artist);
    });
	};

  setImgPortfolio(artist)

  // INFOS
  portfolioDescText.innerHTML = artist["intention"];
  portfolioDescTextContact.innerHTML = `Me contacter : ${artist["mail"]}`;
  portfolioDescAutoportrait.setAttribute('src', `/files/assets/images/oeuvres/portfolios/${artist["folderName"]}/${artist["autoportrait"]}`);

  const carrouselImgContainer = document.querySelector('.carrousel-img-container');
};

function handleSwipe() {
  const diff = endX - startX;
  if (Math.abs(diff) > 150) {
    if (diff > 0) {
      imgId == 0 ? imgId = currentArtist["oeuvres"].length-1 : imgId -= 1;
      setImgPortfolio(currentArtist);
    } else {
      imgId == currentArtist["oeuvres"].length-1 ? imgId = 0 : imgId += 1;
      setImgPortfolio(currentArtist);
    }
  }
}

function setImgPortfolio(artist) {
  const carrouselImgPortfolioTitle = document.querySelector('.carrousel-title').children[0];
  const carrouselImgPortfolio = document.querySelector('.carrousel-img-container').children[0];
  const previous = document.querySelector('.displayedImg');

  carrouselImgPortfolioTitle.innerHTML = artist["oeuvres"][imgId][0];
  carrouselImgPortfolio.setAttribute('src', `/files/assets/images/oeuvres/portfolios/${artist["folderName"]}/oeuvres/${artist["oeuvres"][imgId][1]}`);
  
  if (previous) previous.classList.remove('displayedImg')
	
  document.querySelector('.carrouselCollection').children[imgId].setAttribute('class', 'collectionImg displayedImg');
};

export {build, loadArtist, setImgPortfolio}
