import * as dataLoad from 'http://localhost/files/scripts/dataLoad.js'
import * as carrousel from 'http://localhost/files/scripts/carrousel.js'

//Menubar
var menuConcours = document.querySelector('#concours')
var menuPortfolio = document.querySelector('#portfolio')
var body = document.querySelector('body')

function menuEventHandler(e,menu,expr) {
    if (menu.innerHTML != expr) {
        var subMenu = menu.firstChild
        if (e.target != menu && e.target != subMenu) {
            menu.innerHTML = expr
        }
    }
}

menuConcours.addEventListener("focus", function () {menuConcours.innerHTML = 'CONCOURS <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a id="subMenuParticipants" href="http://localhost/Concours/Participants">Participants</a></li><li class="subItem"><a id="subMenuSelectionnes" href="http://localhost/Concours/Selectionnes">Sélectionnés</a></li></ul></div>'; })
menuPortfolio.addEventListener("focus", function () {menuPortfolio.innerHTML = 'PORTFOLIO <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a id="subMenuParticipants" href="http://localhost/Concours/Participants">Participants</a></li><li class="subItem"><a id="subMenuSelectionnes" href="http://localhost/Concours/Selectionnes">Sélectionnés</a></li></ul></div>'; })

body.addEventListener("click", function (e) {menuEventHandler(e,menuConcours,'CONCOURS');})
body.addEventListener('click', function (e) {menuEventHandler(e,menuPortfolio,'PORTFOLIO');})


//Carrousel for participants page
if (document.URL == 'http://localhost/Concours/Participants') {
    carrousel.carrousel(document.querySelector('.carrouselPart'), await dataLoad.createImageList('http://localhost/files/data/concours.json', 'Tous'))
}

var filter = document.querySelector('#filterInput')

async function refreshCarrousel(filter) {
    var carrouselPart = document.querySelector('.carrouselPart')
    carrousel.carrousel(carrouselPart, await dataLoad.createImageList('http://localhost/files/data/concours.json', filter.value))
}
filter.addEventListener('change', function () {
    console.log(filter.value)
    refreshCarrousel(filter)
})

