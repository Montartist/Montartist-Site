import * as dataLoad from 'http://localhost/files/scripts/dataLoad.js'
import * as carrousel from 'http://localhost/files/scripts/carrousel.js'

async function build(container, artist) {
  var artists = await dataLoad.requestJSON('http://localhost/files/data/portfolio.json')
  var artistObj = artists[artist]
  var elementList = {}

  elementList.portfolioTitle = document.createElement('h1')
  elementList.portfolioTitle.innerHTML = artistObj.name

  elementList.portfolioCarrousel = document.createElement('div')
  elementList.portfolioCarrousel.innerHTML = `<ul class="carInfo"></ul><button class="carrouselL carrouselButton"><img src="../../files/assets/images/utils/left.svg" alt="Left"></button><img fetchpriority="high" class="carrouselImg" src="" alt=""/><button class="carrouselR carrouselButton"><img src="../../files/assets/images/utils/right.svg" alt="right"></button><div class="carrouselCollection"></div>`
  elementList.portfolioCarrousel.setAttribute('class', "carrousel")

  elementList.portfolioIntent = document.createElement('p')
  elementList.portfolioIntent.innerHTML = artistObj.intention + '<br/> Mail : <a class="portfolioMail" href="mailto:' + artistObj.mail+'">'+ artistObj.mail + '</a>'

  if (artistObj.xArts.length > 0) {
    elementList.portfolioXArts = document.createElement('div')
  }
  elementList.portfolioAutoportrait = document.createElement('img')
  elementList.portfolioAutoportrait.setAttribute('src', `http://localhost/files/assets/images/oeuvres/portfolios/${artist}/${artistObj.autoportrait}`)
  elementList.portfolioAutoportrait.setAttribute('class', 'portfolioAutoportrait')

  for (var element of Object.keys(elementList)) {
    container.appendChild(elementList[element])
  }
  console.log(elementList.portfolioCarrousel)
  carrousel.carrousel(elementList.portfolioCarrousel, artistObj.oeuvres, 'portfolio')
}

export {build}