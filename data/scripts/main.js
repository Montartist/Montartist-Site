var menuConcours = document.getElementById('concours')
var menuPortfolio = document.getElementById('portfolio')

menuConcours.addEventListener("mouseover", function (){
    menuConcours.innerHTML = 'CONCOURS<div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a href="Concours/Participants">Participants</a></li><li class="subItem"><a href="Concours/Selectionnes">Sélectionnés</a></li></ul></div>'
})

menuConcours.addEventListener("mouseout", function (){
    menuConcours.innerHTML = 'CONCOURS'
})