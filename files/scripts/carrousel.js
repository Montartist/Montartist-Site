
async function carrousel(carrouselObj, imgList, useCase) {
	var carrouselHTML = carrouselObj.innerHTML
	carrouselObj.innerHTML = ''
	carrouselObj.innerHTML = carrouselHTML

	var imgId = 0
	var carrouselButtonsLeft = carrouselObj.children[1]
	var carrouselButtonsRight = carrouselObj.children[3]
	var carrouselCollection = carrouselObj.lastChild
	
	carrouselCollection.innerHTML = ''
	for (var i of imgList) {
		var img = document.createElement('img')
		carrouselCollection.appendChild(img)
	}

	setImg(imgId, imgList, carrouselObj,useCase)

	function bigPicture(img,existingClass) {
		img.setAttribute('class', ' bigPicture')
		img.removeEventListener('click', bigPicture)
		img.addEventListener('click', function () {noBigPicture(img, existingClass); })
	}
	function noBigPicture(img, existingClass) {
		img.setAttribute('class', existingClass)
		img.removeEventListener('click', noBigPicture)
		img.addEventListener('click', function () {bigPicture(img, existingClass); })
	}

	var carImg = carrouselObj.children[2]
	carImg.addEventListener('click', function () {bigPicture(carImg, carImg.className); })	
	
	for (var i = 0; i < carrouselCollection.children.length; i++) {
		if (useCase == 'concours') {
			carrouselCollection.children[i].setAttribute('src', imgList[i].file)
		} else if (useCase === 'portfolio') {
			if (document.URL[document.URL.length-1] == '/') {
				var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10, document.URL.length-1)
			} else {
				var artist = document.URL.slice(document.URL.search(/Portfolio\//)+10)
			}
			carrouselCollection.children[i].setAttribute('src', `http://localhost/files/assets/images/oeuvres/portfolios/${artist}/oeuvres/${imgList[i][1]}`)
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
	var carrouselImg = carrousel.children[2]
	var imgAct = imgAct = imgList[imgId]
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
		carrouselImg.setAttribute('src', `http://localhost/files/assets/images/oeuvres/portfolios/${artist}/oeuvres/${imgAct[1]}`)
	}
	for (var img of carrousel.lastChild.children) {
		img.removeAttribute('class')
		img.setAttribute('class', 'collectionImg')
	}
	carrousel.lastChild.children[imgId].setAttribute('class', 'collectionImg displayedImg')
}

export {carrousel, setImg}