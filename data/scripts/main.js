var menuConcours = document.getElementById('concours')
var menuPortfolio = document.getElementById('portfolio')
var body = document.getElementsByTagName('body')[0]

function menuEventHandler(e,menu,expr) {
    if (menu.innerHTML != expr) {
        var subMenu = menu.firstChild
        if (e.target != menu && e.target != subMenu) {
            menu.innerHTML = expr
        }
    }
}

//Event Listeners
menuConcours.addEventListener("focus", function () {menuConcours.innerHTML = 'CONCOURS <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a id="subMenuParticipants" href="/Concours/Participants">Participants</a></li><li class="subItem"><a id="subMenuSelectionnes" href="Concours/Selectionnes">Sélectionnés</a></li></ul></div>'; })
menuPortfolio.addEventListener("focus", function () {menuPortfolio.innerHTML = 'PORTFOLIO <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a id="subMenuParticipants" href="/Concours/Participants">Participants</a></li><li class="subItem"><a id="subMenuSelectionnes" href="Concours/Selectionnes">Sélectionnés</a></li></ul></div>'; })

body.addEventListener("click", function (e) {menuEventHandler(e,menuConcours,'CONCOURS');})
body.addEventListener('click', function (e) {menuEventHandler(e,menuPortfolio,'PORTFOLIO');})

