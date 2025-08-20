
async function carrousel(carrouselObj, imgList, useCase) {
	let carrouselHTML = carrouselObj.innerHTML
	carrouselObj.innerHTML = ''
	carrouselObj.innerHTML = carrouselHTML

	let imgId = 0
	let carrouselButtonsLeft = carrouselObj.querySelector('.carrouselL')
	let carrouselButtonsRight = carrouselObj.querySelector('.carrouselR')
	let carrouselCollection = carrouselObj.querySelector('.carrouselCollection')
	
	carrouselCollection.innerHTML = ''
	for (let i = 0; i<imgList.length; i++) {
		let div = document.createElement('div')
		div.setAttribute("class", "collection-img-container")
		carrouselCollection.appendChild(div)
		let img = document.createElement('img')
		img.setAttribute("alt", "")
		div.appendChild(img)
	}

	setImg(imgId, imgList, carrouselObj,useCase)
	
	for (let i = 0; i < carrouselCollection.children.length; i++) {
		if (useCase == 'concours') {
			carrouselCollection.children[i].setAttribute('src', imgList[i].file)
		} else if (useCase === 'portfolio') {
			if (document.URL[document.URL.length-1] == '/') {
				let artist = document.URL.slice(document.URL.search(/Portfolio\//)+10, document.URL.length-1)
			} else {
				let artist = document.URL.slice(document.URL.search(/Portfolio\//)+10)
			}
			carrouselCollection.children[i].setAttribute('src', `./files/assets/images/oeuvres/portfolios/${artist}/oeuvres/${imgList[i][1]}`)
		} else if (useCase == "hpage") {
			carrouselCollection.children[i].children[0].setAttribute('src', `./files/assets/images/oeuvres/portfolios/${imgList[i][3]}/oeuvres/${imgList[i][1]}`)
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
	let carInfo = carrousel.children[0]
	let carrouselImg = carrousel.querySelector('.carrousel-img-container').children[0]
	let imgAct = imgList[imgId]
	if (useCase == "hpage") {
		carInfo.innerHTML = `<li>Nom : ${imgAct[0]}</li><li>Artiste : ${imgAct[2]}</li>`
		carrouselImg.setAttribute('src', `./files/assets/images/oeuvres/portfolios/${imgAct[3]}/oeuvres/${imgAct[1]}`)
	}
	for (let img of carrousel.querySelector('.carrouselCollection').children) {
		img.removeAttribute('class')
		img.setAttribute('class', 'collectionImg')
	}
	carrousel.querySelector('.carrouselCollection').children[imgId].setAttribute('class', 'collectionImg displayedImg')
}

export {carrousel, setImg}