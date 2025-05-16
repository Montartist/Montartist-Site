var menuConcours = document.getElementById('concours')
var menuPortfolio = document.getElementById('portfolio')
var body = document.getElementsByTagName('body')[0]

menuConcours.addEventListener("focus", function (){
    menuConcours.innerHTML = 'CONCOURS <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a id="subMenuParticipants" href="/Concours/Participants">Participants</a></li><li class="subItem"><a id="subMenuSelectionnes" href="Concours/Selectionnes">Sélectionnés</a></li></ul></div>'
})
body.addEventListener("click", function (e,menuConcours){
    if (e.clientX < document.getElementById('subConcours').getBoundingClientRect.left && menuConcours.innerHTML != 'CONCOURS') {
        menuConcours.innerHTML = 'CONCOURS'
    }
    console.log(e.clientX)
    console.log(document.getElementById('subConcours').getBoundingClientRect.left)
    
})

