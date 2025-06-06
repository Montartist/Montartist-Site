
import * as dataLoad from 'dataLoad.js'
import * as carrousel from 'carrousel.js'
import * as menubar from 'menubar.js'
import * as portfolioBuilder from 'portfolioBuilder.js'

//Menubar
var menuBar = document.querySelector('.HEADER')
menubar.createMenuBar(menuBar)

//Carrousel for Home Page
if (document.URL == `https://${location.hostname}/` || document.URL ==  'https://127.0.0.1/') {
    carrousel.carrousel(document.querySelector(".carrousel"), await dataLoad.createHPageImageList(`https://${location.hostname}/files/data/portfolio.json`), "hpage")
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
if (/Portfolio/.test(document.URL)) {
    var portfolioContainer = document.querySelector('.portfolioContainer')
    if (document.URL[document.URL.length-1] == '/') {
        var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10, document.URL.length-1)
    } else {
        var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10)
    }
    portfolioBuilder.build(portfolioContainer,artist)
}