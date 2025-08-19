import * as dataLoad from './dataLoad.js'
import * as carrousel from './carrousel.js'
import * as portfolioBuilder from './portfolioBuilder.js'

//Carrousel for Home Page
if (window.location.pathname === "/") {
    carrousel.carrousel(document.querySelector(".carrousel"), await dataLoad.createHPageImageList(`/files/data/portfolio.json`), "hpage")
}

//Carrousel for participants page
var filter = document.querySelector('#filterInput')

if (/Participants/.test(document.URL)) {
    console.log('coucou il se passe un truc par ici')
    var carrouselPart = document.querySelector('.carrousel')
    carrousel.carrousel(carrouselPart, await dataLoad.createPartImageList(`https://${location.hostname}/files/data/concours.json`, 'Tous'), 'concours')
    filter.addEventListener('change', function () {
        refreshPartCarrousel(filter)
    })
    async function refreshPartCarrousel(filter) {
        carrousel.carrousel(carrouselPart, await dataLoad.createPartImageList(`https://${location.hostname}/files/data/concours.json`, filter.value), 'concours')
    }
}


//Carrousel for selected page
if (/Selectionnes/.test(document.URL)) {
    console.log('coucou il se passe un truc par ici')
    var carrouselSel = document.querySelector('.carrousel')
    carrousel.carrousel(carrouselSel, await dataLoad.createSelImageList(`https://${location.hostname}/files/data/concours.json`, 'Tous'), 'concours')
    filter.addEventListener('change', function () {
        refreshSelCarrousel(filter)
    })
    async function refreshSelCarrousel(filter) {
        carrousel.carrousel(carrouselSel, await dataLoad.createSelImageList(`https://${location.hostname}/files/data/concours.json`, filter.value), 'concours')
    }
}

//The portfolio
if (window.location.pathname === "/Portfolio/") {
    portfolioBuilder.build()
}