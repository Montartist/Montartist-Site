//Menubar
var menuConcours = document.querySelector('#concours')
var menuPortfolio = document.querySelector('#portfolio')
var body = document.querySelector('body')

function menuEventHandler(e,menu,expr) {
    if (menu.innerHTML != expr) {
        var subMenu = menu.firstChild
        if (e.target != menu && e.target != subMenu) {
            menu.innerHTML = expr
        }
    }
}

menuConcours.addEventListener("focus", function () {menuConcours.innerHTML = 'CONCOURS <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a id="subMenuParticipants" href="http://localhost/Concours/Participants">Participants</a></li><li class="subItem"><a id="subMenuSelectionnes" href="http://localhost/Concours/Selectionnes">Sélectionnés</a></li></ul></div>'; })
menuPortfolio.addEventListener("focus", function () {menuPortfolio.innerHTML = 'PORTFOLIO <div id="subConcours" class="subMenu"><ul class="subMenu"><li class="subItem"><a id="subMenuParticipants" href="http://localhost/Concours/Participants">Participants</a></li><li class="subItem"><a id="subMenuSelectionnes" href="http://localhost/Concours/Selectionnes">Sélectionnés</a></li></ul></div>'; })

body.addEventListener("click", function (e) {menuEventHandler(e,menuConcours,'CONCOURS');})
body.addEventListener('click', function (e) {menuEventHandler(e,menuPortfolio,'PORTFOLIO');})

//Carrousel
var carrouselPart = document.querySelector('.carrouselPart')
var carrouselPartButtonsLeft = document.querySelector('.carrouselPartL')
var carrouselPartButtonsRight = document.querySelector('.carrouselPartR')
var imgPartList = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
var imgId = 0
var carrouselPartCollection = document.querySelector('.carrouselPartCollection')

function setImg(imgId, imgList, carrousel) {
    var carrouselImg = carrousel.children[1]
    var imgAct = imgList[imgId]
    carrouselImg.setAttribute('src', `http://localhost/files/assets/images/test/${imgAct}`)
    for (img of carrousel.lastChild.children) {
        img.removeAttribute('class')
        img.setAttribute('class', 'collectionPartImg')
    }
    carrousel.lastChild.children[imgId].setAttribute('class', 'collectionPartImg displayedImg')
}
for (i of imgPartList) {
    var img = document.createElement('img')
    carrouselPartCollection.appendChild(img)
}

setImg(imgId,imgPartList, carrouselPart)

var collectionPartImgs = []
for (i = 0; i < carrouselPartCollection.children.length; i++) {
    carrouselPartCollection.children[i].setAttribute('src', `http://localhost/files/assets/images/test/${i+1}.jpg`)
}

carrouselPartButtonsRight.addEventListener('click', function () {
    if (imgId < imgPartList.length-1) {
        imgId +=1
    }
    else {
        imgId = 0
    }
    setImg(imgId, imgPartList, carrouselPart)
})
carrouselPartButtonsLeft.addEventListener('click', function () {
    if (imgId != 0) {
        imgId -=1
    }
    else {
        imgId = imgPartList.length-1
    }
    setImg(imgId, imgPartList, carrouselPart)
})