import * as dataLoad from 'http://localhost/files/scripts/dataLoad.js'
import * as carrousel from 'http://localhost/files/scripts/carrousel.js'
import * as menubar from 'http://localhost/files/scripts/menubar.js'

//Menubar
var menuBar = document.querySelector('.HEADER')
menubar.createMenuBar(menuBar)


//Carrousel for participants page
if (document.URL == 'http://localhost/Concours/Participants') {
    var carrouselPart = document.querySelector('.carrousel')
    carrousel.carrousel(carrouselPart, await dataLoad.createPartImageList('http://localhost/files/data/concours.json', 'Tous'))
    filter.addEventListener('change', function () {
        console.log(filter.value)
        refreshPartCarrousel(filter)
    })
}

var filter = document.querySelector('#filterInput')

async function refreshPartCarrousel(filter) {
    carrousel.carrousel(carrousel, await dataLoad.createPartImageList('http://localhost/files/data/concours.json', filter.value))
}

//Carrousel for selected page
if (document.URL == 'http://localhost/Concours/Selectionnes') {
    var carrouselSel = document.querySelector('.carrousel')
    carrousel.carrousel(carrouselSel, await dataLoad.createSelImageList('http://localhost/files/data/concours.json', 'Tous'))
    filter.addEventListener('change', function () {
        console.log(filter.value)
        refreshSelCarrousel(filter)
    })
}
async function refreshSelCarrousel(filter) {
    carrousel.carrousel(carrouselSel, await dataLoad.createSelImageList('http://localhost/files/data/concours.json', filter.value))
}