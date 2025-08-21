let startX = 0;
let endX = 0;
let imgId = 0

async function carrousel(carrouselObj, imgList) {
	let carrouselHTML = carrouselObj.innerHTML
	carrouselObj.innerHTML = ''
	carrouselObj.innerHTML = carrouselHTML

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

	setImg(imgId, imgList, carrouselObj)
	
	for (let i = 0; i < carrouselCollection.children.length; i++) {
		carrouselCollection.children[i].children[0].setAttribute('src', `./files/assets/images/oeuvres/portfolios/${imgList[i][3]}/oeuvres/${imgList[i][1]}`)
		

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
	
	const carrouselImgContainer = document.querySelector('.carrousel-img-container');

	carrouselImgContainer.addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});

	carrouselImgContainer.addEventListener('touchend', (e) => {
		endX = e.changedTouches[0].clientX;
		handleSwipe(imgList, carrouselObj);
	});
}

function handleSwipe(imgList, carrouselObj) {
	const diff = endX - startX;
	if (Math.abs(diff) > 150) {
		if (diff > 0) {
			imgId == 0 ? imgId = imgList.length-1 : imgId -= 1;
			setImg(imgId, imgList, carrouselObj);
		} else {
			imgId == imgList.length-1 ? imgId = 0 : imgId = imgId+1;
			setImg(imgId, imgList, carrouselObj);
		}
	}
}


function setImg(imgId, imgList, carrousel) {
	let carInfo = carrousel.children[0]
	let carrouselImg = carrousel.querySelector('.carrousel-img-container').children[0]
	let imgAct = imgList[imgId]
	carInfo.innerHTML = `<li>Nom : ${imgAct[0]}</li><li>Artiste : ${imgAct[2]}</li>`
	carrouselImg.setAttribute('src', `./files/assets/images/oeuvres/portfolios/${imgAct[3]}/oeuvres/${imgAct[1]}`)
	
	for (let img of carrousel.querySelector('.carrouselCollection').children) {
		img.removeAttribute('class')
		img.setAttribute('class', 'collectionImg')
	}
	carrousel.querySelector('.carrouselCollection').children[imgId].setAttribute('class', 'collectionImg displayedImg')
}

export {carrousel, setImg}