
async function carrousel(carrouselObj, imgList) {
	var carrouselHTML = carrouselObj.innerHTML
	carrouselObj.innerHTML = ''
	carrouselObj.innerHTML = carrouselHTML

	var imgId = 0
	var carrouselButtonsLeft = carrouselObj.firstChild
	var carrouselButtonsRight = carrouselObj.children[2]
	var carrouselCollection = carrouselObj.lastChild
	
	carrouselCollection.innerHTML = ''
	for (var i of imgList) {
		var img = document.createElement('img')
		carrouselCollection.appendChild(img)
	}

	setImg(imgId, imgList, carrouselObj)

	
	for (var i = 0; i < carrouselCollection.children.length; i++) {
		carrouselCollection.children[i].setAttribute('src', imgList[i].file)
		carrouselCollection.children[i].addEventListener('click', function () {
			imgId = 0
			while (carrouselCollection.children[imgId] != this) {
				imgId ++
			}
			setImg(imgId, imgList, carrouselObj)
		})
	}

	carrouselButtonsRight.addEventListener('click', function () {
		if (imgId == imgList.length-1) {
			imgId = 0
		}
		else {
			imgId += 1
		}
		setImg(imgId, imgList, carrouselObj)

	})
	carrouselButtonsLeft.addEventListener('click', function () {
		if (imgId == 0) {
			imgId = imgList.length-1
		}
		else {
			imgId -=1
		}
		setImg(imgId, imgList, carrouselObj)
	})
}

function setImg(imgId, imgList, carrousel) {
	var carrouselImg = carrousel.children[1]
	var imgAct = imgList[imgId]
	carrouselImg.setAttribute('src', imgAct.file)
	for (var img of carrousel.lastChild.children) {
		img.removeAttribute('class')
		img.setAttribute('class', 'collectionImg')
	}
	carrousel.lastChild.children[imgId].setAttribute('class', 'collectionImg displayedImg')
}

export {carrousel, setImg}