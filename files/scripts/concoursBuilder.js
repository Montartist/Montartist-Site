import * as dataLoad from './dataLoad.js'

async function build() {
    let data = await dataLoad.requestJSON(`/files/data/concours.json`);
    console.log(data);

    
};

function getSelectedRadio() {
    const radio = document.querySelector('input[name="option1"]:checked');
    return radio ? radio.nextElementSibling.textContent.trim() : null;
}
function getCheckedCategories() {
    const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    return checked.map(cb => cb.nextElementSibling.textContent.trim());
}

function loadConcours(oeuvresList) {
    const carrouselCollection = document.querySelector('.carrouselCollection');
    const carrouselButtonsLeft = document.querySelector('.carrouselL')
    const carrouselButtonsRight = document.querySelector('.carrouselR')
    console.log(artist);
    
    // TITLE
    document.title = `Portfolio de ${artist["name"]}`
    portfolioName.textContent = artist["name"];

    // CARROUSEL
    let imgId = 0
    carrouselCollection.innerHTML = "";
    for (let i = 0; i<oeuvresList.length; i++) {
        let div = document.createElement('div');
        div.setAttribute("class", "collectionImg");
        carrouselCollection.appendChild(div);

        let img = document.createElement('img');
        img.setAttribute('src', `/files/assets/images/oeuvres/portfolios/${artist["folderName"]}/oeuvres/${artist["oeuvres"][i][1]}`);
        div.appendChild(img);

    div.addEventListener('click', () => {
        setImgPortfolio(i, artist);
    });
    };

    carrouselButtonsLeft.addEventListener('click', () => {
    imgId == 0 ? imgId = artist["oeuvres"].length-1 : imgId -= 1;
    setImgPortfolio(imgId, artist);
    });

    carrouselButtonsRight.addEventListener('click', () => {
    imgId == artist["oeuvres"].length-1 ? imgId = 0 : imgId += 1;
    setImgPortfolio(imgId, artist);
    });

    setImgPortfolio(0, artist)
};

export {build, loadConcours};