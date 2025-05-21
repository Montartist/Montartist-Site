async function carrousel(carrouselObj, imgList) {
  var imgId = 0
  var carrouselButtonsLeft = carrouselObj.firstChild
  var carrouselButtonsRight = carrouselObj.children[2]
  var carrouselCollection = carrouselObj.lastChild

  for (var i of imgList) {
    var img = document.createElement('img')
    carrouselCollection.appendChild(img)
  }

  await setImg(imgId, imgList, carrouselObj)

  
  for (i = 0; i < carrouselCollection.children.length; i++) {
    carrouselCollection.children[i].setAttribute('src', imgList[i])
  }

  carrouselButtonsRight.addEventListener('click', function () {
    if (imgId < imgList.length-1) {
        imgId +=1
    }
    else {
        imgId = 0
    }
    setImg(imgId, imgList, carrouselObj)
  })
  carrouselButtonsLeft.addEventListener('click', function () {
      if (imgId != 0) {
          imgId -=1
      }
      else {
          imgId = imgList.length-1
      }
      setImg(imgId, imgList, carrouselObj)
  })
}

async function setImg(imgId, imgList, carrousel) {
    var carrouselImg = carrousel.children[1]
    var imgAct = imgList[imgId]
    carrouselImg.setAttribute('src', imgAct)
    for (var img of carrousel.lastChild.children) {
        img.removeAttribute('class')
        img.setAttribute('class', 'collectionPartImg')
    }
    carrousel.lastChild.children[imgId].setAttribute('class', 'collectionPartImg displayedImg')
}

export {carrousel, setImg}