import * as dataLoad from './dataLoad.js'
import * as carrousel from './carrousel.js'

async function build(container, artist) {
  let artists = await dataLoad.requestJSON(`../files/data/portfolio.json`);
  let artistObj = artists[artist];
  let artistContainer = document.querySelector(".portfolio-list");

  artists.array.forEach(artist => {
    const artistButton = document.createElement("button");
    artistButton.textContent = artist;
    artistButton.dataset.artist = artist;
    artistContainer.appendChild(artistButton);
    
  });

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
}

export {build}