import * as dataLoad from 'https://montartist.net/files/scripts/dataLoad.js'
import * as carrousel from 'https://montartist.net/files/scripts/carrousel.js'
import * as menubar from 'https://montartist.net/files/scripts/menubar.js'
import * as portfolioBuilder from 'https://montartist.net/files/scripts/portfolioBuilder.js'

//Menubar
var menuBar = document.querySelector('.HEADER')
menubar.createMenuBar(menuBar)

//Carrousel for Home Page
if (document.URL == 'https://montartist.net/' || document.URL ==  'https://127.0.0.1/') {
    carrousel.carrousel(document.querySelector(".carrousel"), await dataLoad.createHPageImageList('https://montartist.net/files/data/portfolio.json'), "hpage")
}

//Carrousel for participants page
var filter = document.querySelector('#filterInput')

if (document.URL == 'https://montartist.net/Concours/Participants') {
    var carrouselPart = document.querySelector('.carrousel')
    carrousel.carrousel(carrouselPart, await dataLoad.createPartImageList('https://montartist.net/files/data/concours.json', 'Tous'), 'concours')
    filter.addEventListener('change', function () {
        refreshPartCarrousel(filter)
    })
    async function refreshPartCarrousel(filter) {
        carrousel.carrousel(carrouselPart, await dataLoad.createPartImageList('https://montartist.net/files/data/concours.json', filter.value), 'concours')
    }
}


//Carrousel for selected page
if (document.URL == 'https://montartist.net/Concours/Selectionnes') {
    var carrouselSel = document.querySelector('.carrousel')
    carrousel.carrousel(carrouselSel, await dataLoad.createSelImageList('https://montartist.net/files/data/concours.json', 'Tous'), 'concours')
    filter.addEventListener('change', function () {
        refreshSelCarrousel(filter)
    })
    async function refreshSelCarrousel(filter) {
        carrousel.carrousel(carrouselSel, await dataLoad.createSelImageList('https://montartist.net/files/data/concours.json', filter.value), 'concours')
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