import * as dataLoad from './dataLoad.js'
import * as carrousel from './carrousel.js'
import * as portfolioBuilder from './portfolioBuilder.js'
import * as concoursBuilder from './concoursBuilder.js'

//Carrousel for Home Page
if (window.location.pathname === "/") {
    carrousel.carrousel(document.querySelector(".carrousel"), await dataLoad.createHPageImageList(`/files/data/portfolio.json`))
}

//The portfolio
if (window.location.pathname === "/Portfolio/") {
    portfolioBuilder.build();
};

if (window.location.pathname === "/Concours/") {
    concoursBuilder.build();
};


// Sidebar closing on phone
let startX = 0;
let endX = 0;

const inputSidebar = document.querySelector("#sidebar-active");
const sidebar = document.querySelector(".links-container");

sidebar.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sidebar.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (inputSidebar.checked) {
        const diff = endX - startX;
        if (Math.abs(diff) > 150) {
            if (diff > 0) {
                inputSidebar.click();
            };
        };
    };
});