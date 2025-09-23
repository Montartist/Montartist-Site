import * as dataLoad from './dataLoad.js'

let imgId = 0
let startX = 0;
let endX = 0;
let gCurrentOeuvresList = [];

async function build() {
    let data = await dataLoad.requestJSON(`/files/data/concours.json`);
    let dataArray = Object.values(data);
    loadConcours(dataArray);    

    const numeriques = document.querySelector('#numeriques');
    const traditionnelles = document.querySelector('#traditionnelles');

    document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            loadConcours(dataArray)
        });
    });

    numeriques.addEventListener('change', (e) => {
        if (!numeriques.checked && !traditionnelles.checked) {
            e.target.checked = true;
        }
    });
    traditionnelles.addEventListener('change', (e) => {
        if (!numeriques.checked && !traditionnelles.checked) {
            e.target.checked = true;
        }
    });

    const carrouselButtonsLeft = document.querySelector('.carrouselL');
    const carrouselButtonsRight = document.querySelector('.carrouselR');
    const carrouselImgContainer = document.querySelector('.carrousel-img-container');

    carrouselButtonsLeft.addEventListener('click', () => {
        imgId == 0 ? imgId = gCurrentOeuvresList.length - 1 : imgId -= 1;
        setImgConcours();
    });

    carrouselButtonsRight.addEventListener('click', () => {
        imgId == gCurrentOeuvresList.length - 1 ? imgId = 0 : imgId += 1;
        setImgConcours();
    });

    carrouselImgContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carrouselImgContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
};

function loadConcours(oeuvresList) {
    const radio = document.querySelector('#participants').checked;
    const numeriques = document.querySelector('#numeriques').checked;
    const traditionnelles = document.querySelector('#traditionnelles').checked;

    let currentOeuvresList = [];

    if (numeriques) {
        oeuvresList[0].forEach(oeuvre => {
            if (radio) {
                currentOeuvresList.push(oeuvre);
            } else if (oeuvre["sélectionné"] === true) {
                currentOeuvresList.push(oeuvre);
            };
        });
    };
    if (traditionnelles) {
        oeuvresList[1].forEach(oeuvre => {
            if (radio) {
                currentOeuvresList.push(oeuvre);
            } else if (oeuvre["sélectionné"] === true) {
                currentOeuvresList.push(oeuvre);
            };
        });
    };

    gCurrentOeuvresList = currentOeuvresList;
    
    // CARROUSEL
    const carrouselCollection = document.querySelector('.carrouselCollection');


    carrouselCollection.innerHTML = "";
    for (let i = 0; i<gCurrentOeuvresList.length; i++) {
        let div = document.createElement('div');
        div.setAttribute("class", "collectionImg");
        carrouselCollection.appendChild(div);

        let img = document.createElement('img');
        img.setAttribute('src', `/files/assets/images/oeuvres/concours/${gCurrentOeuvresList[i]["file"]}`);
        div.appendChild(img);

        div.addEventListener('click', () => {
            imgId = i;
            setImgConcours();
        });
    };

    imgId = 0;
    setImgConcours();

    const carrouselImgContainer = document.querySelector('.carrousel-img-container');
};

function handleSwipe() {
    const diff = endX - startX;
    if (Math.abs(diff) > 150) {
    if (diff > 0) {
        imgId == 0 ? imgId = gCurrentOeuvresList.length-1 : imgId -= 1;
        setImgConcours(gCurrentOeuvresList);
    } else {
        imgId == gCurrentOeuvresList.length-1 ? imgId = 0 : imgId += 1;
        setImgConcours(gCurrentOeuvresList);
    }
    }
}

function setImgConcours() {
    const carrouselImgConcours = document.querySelector('.carrouselImg');
    const carrouselConcoursInfo = document.querySelector('.carInfo');
    const previous = document.querySelector('.displayedImg');
    
    let selectionnee = ""
    gCurrentOeuvresList[imgId]["sélectionné"] ? selectionnee = "Oui" : selectionnee = "Non"

    carrouselConcoursInfo.children[0].innerHTML = `Nom : ${gCurrentOeuvresList[imgId]["name"]}`;
    carrouselConcoursInfo.children[1].innerHTML = `Artiste : ${gCurrentOeuvresList[imgId]["artiste"]}`;
    carrouselConcoursInfo.children[2].innerHTML = `Sélectionnée : ${selectionnee}`;

    carrouselImgConcours.setAttribute('src', `/files/assets/images/oeuvres/concours/${gCurrentOeuvresList[imgId]["file"]}`);
    
    if (previous) previous.classList.remove('displayedImg')
        
    document.querySelector('.carrouselCollection').children[imgId].setAttribute('class', 'collectionImg displayedImg');
};

export {build, loadConcours, setImgConcours};