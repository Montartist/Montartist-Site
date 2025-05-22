import * as dataLoad from 'http://localhost/files/scripts/dataLoad.js'
async function createMenuBar(menuBarObj) {
	var body = document.querySelector('body')
	var menuConcours = menuBarObj.children[0].children[2]
	var menuPortfolio = menuBarObj.children[0].children[3]
	var portfolioParticipants  = await dataLoad.requestJSON('http://localhost/files/data/portfolio.json')
	function menuEventHandler(e,menu,expr) {
    	if (menu.innerHTML != expr) {
        	var subMenu = menu.firstChild
        	if (e.target != menu && e.target != subMenu) {
            	menu.innerHTML = expr
        	}
    	}
	}

	menuConcours.addEventListener("focus", function () {menuConcours.innerHTML = 'CONCOURS <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a href="http://localhost/Concours/Participants">Participants</a></li><li class="subItem"><a href="http://localhost/Concours/Selectionnes">Sélectionnés</a></li></ul></div>'; })
	menuPortfolio.addEventListener("focus", function () {
		menuPortfolio.innerHTML = 'PORTFOLIO <div id="subPortfolio" class="subMenu"><ul class="subMenu"></ul></div>'
		for (var participant of portfolioParticipants) {
			var li = document.createElement('li')
			li.setAttribute('class', 'subItem')
			document.querySelectorAll('.subMenu')[1].appendChild(li)
			var a = document.createElement('a')
			a.setAttribute('href', `http://localhost/Portfolio/${participant.fName}`)
			li.appendChild(a)
			a.innerHTML = participant.name
		}
	})

	body.addEventListener("click", function (e) {menuEventHandler(e,menuConcours,'CONCOURS');})
	body.addEventListener('click', function (e) {menuEventHandler(e,menuPortfolio,'PORTFOLIO');})
}

export {createMenuBar}