
async function carrousel(carrouselObj, imgList, useCase) {
	var carrouselHTML = carrouselObj.innerHTML
	carrouselObj.innerHTML = ''
	carrouselObj.innerHTML = carrouselHTML

	var imgId = 0
	var carrouselButtonsLeft = carrouselObj.querySelector('.carrouselL')
	var carrouselButtonsRight = carrouselObj.querySelector('.carrouselR')
	var carrouselCollection = carrouselObj.querySelector('.carrouselCollection')
	
	carrouselCollection.innerHTML = ''
	for (let i = 0; i<imgList.length; i++) {
		var div = document.createElement('div')
		div.setAttribute("class", "collection-img-container")
		carrouselCollection.appendChild(div)
		var img = document.createElement('img')
		img.setAttribute("alt", "")
		div.appendChild(img)
	}

	setImg(imgId, imgList, carrouselObj,useCase)
	
	for (var i = 0; i < carrouselCollection.children.length; i++) {
		if (useCase == 'concours') {
			carrouselCollection.children[i].setAttribute('src', imgList[i].file)
		} else if (useCase === 'portfolio') {
			if (document.URL[document.URL.length-1] == '/') {
				var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10, document.URL.length-1)
			} else {
				var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10)
			}
			carrouselCollection.children[i].setAttribute('src', `file:///home/lilguy/code/Montartist-Site${location.hostname}/files/assets/images/oeuvres/portfolios/${artist}/oeuvres/${imgList[i][1]}`)
		} else if (useCase == "hpage") {
			carrouselCollection.children[i].children[0].setAttribute('src', `file:///home/lilguy/code/Montartist-Site${location.hostname}/files/assets/images/oeuvres/portfolios/${imgList[i][3]}/oeuvres/${imgList[i][1]}`)
		}

		carrouselCollection.children[i].addEventListener('click', function () {
			imgId = 0
			while (carrouselCollection.children[imgId] != this) {
				imgId ++
			}
			setImg(imgId, imgList, carrouselObj,useCase)
		})
	}

	carrouselButtonsRight.addEventListener('click', function () {
		if (imgId == imgList.length-1) {
			imgId = 0
		}
		else {
			imgId += 1
		}
		setImg(imgId, imgList, carrouselObj,useCase)

	})
	carrouselButtonsLeft.addEventListener('click', function () {
		if (imgId == 0) {
			imgId = imgList.length-1
		}
		else {
			imgId -=1
		}
		setImg(imgId, imgList, carrouselObj,useCase)
	})
}

function setImg(imgId, imgList, carrousel, useCase) {
	var carInfo = carrousel.children[0]
	var carrouselImg = carrousel.querySelector('.carrousel-img-container').children[0]
	var imgAct = imgList[imgId]
	if (useCase == "concours") {
		carInfo.innerHTML = `<li>Nom : ${imgAct.name}</li><li>Artiste : ${imgAct.artiste}</li><li>Sélectionnée : ${{false : "non", true : "oui"}[imgAct['sélectionné']]}</li>`
		carrouselImg.setAttribute('src', imgAct.file)
	} else if (useCase == 'portfolio') {
		if (document.URL[document.URL.length-1] == '/') {
			var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10, document.URL.length-1)
		} else {
			var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10)
		}
		carInfo.innerHTML = `<li>${imgAct[0]}</li>`
		carrouselImg.setAttribute('src', `file:///home/lilguy/code/Montartist-Site${location.hostname}/files/assets/images/oeuvres/portfolios/${artist}/oeuvres/${imgAct[1]}`)
	} else if (useCase == "hpage") {
		carInfo.innerHTML = `<li>Nom : ${imgAct[0]}</li><li>Artiste : ${imgAct[2]}</li>`
		carrouselImg.setAttribute('src', `file:///home/lilguy/code/Montartist-Site${location.hostname}/files/assets/images/oeuvres/portfolios/${imgAct[3]}/oeuvres/${imgAct[1]}`)
	}
	for (var img of carrousel.querySelector('.carrouselCollection').children) {
		img.removeAttribute('class')
		img.setAttribute('class', 'collectionImg')
	}
	carrousel.querySelector('.carrouselCollection').children[imgId].setAttribute('class', 'collectionImg displayedImg')
}

export {carrousel, setImg}