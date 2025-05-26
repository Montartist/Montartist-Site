import * as dataLoad from 'http://localhost/files/scripts/dataLoad.js'
import * as carrousel from 'http://localhost/files/scripts/carrousel.js'

async function build(container, artist) {
  var artists = await dataLoad.requestJSON('http://localhost/files/data/portfolio.json')
  var artistObj = artists[artist]
  var portfolioElementList = {}

  portfolioElementList.title = document.createElement('h1')
  portfolioElementList.title.innerHTML = artistObj.name
  portfolioElementList.title.setAttribute('class', 'portfolioTitle')

  portfolioElementList.carrousel = document.createElement('div')
  portfolioElementList.carrousel.innerHTML = `<ul class="carInfo"></ul><button class="carrouselL carrouselButton"><img src="../../files/assets/images/utils/left.svg" alt="Left"></button><img fetchpriority="high" class="carrouselImg" src="" alt=""/><button class="carrouselR carrouselButton"><img src="../../files/assets/images/utils/right.svg" alt="right"></button><div class="carrouselCollection"></div>`
  portfolioElementList.carrousel.setAttribute('class', "portfolioCarrousel")

  portfolioElementList.intent = document.createElement('p')
  portfolioElementList.intent.innerHTML = artistObj.intention + '<br/><br/>Mail : <a class="portfolioMail" href="mailto:' + artistObj.mail+'">'+ artistObj.mail + '</a>'
  portfolioElementList.intent.setAttribute('class', 'portfolioIntent')

  if (artistObj.xArts.length > 0) {
    portfolioElementList.xArts = document.createElement('div')
  }
  portfolioElementList.autoportrait = document.createElement('img')
  portfolioElementList.autoportrait.setAttribute('src', `http://localhost/files/assets/images/oeuvres/portfolios/${artist}/${artistObj.autoportrait}`)
  portfolioElementList.autoportrait.setAttribute('class', 'portfolioAutoportrait')

  for (var element of Object.keys(portfolioElementList)) {
    container.appendChild(portfolioElementList[element])
  }
  console.log(portfolioElementList.carrousel)
  carrousel.carrousel(portfolioElementList.carrousel, artistObj.oeuvres, 'portfolio')
}

export {build}