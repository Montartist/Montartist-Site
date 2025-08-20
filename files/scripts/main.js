import * as dataLoad from './dataLoad.js'
import * as carrousel from './carrousel.js'
import * as portfolioBuilder from './portfolioBuilder.js'
import * as concoursBuilder from './concoursBuilder.js'

//Carrousel for Home Page
if (window.location.pathname === "/") {
    carrousel.carrousel(document.querySelector(".carrousel"), await dataLoad.createHPageImageList(`/files/data/portfolio.json`), "hpage")
}

//The portfolio
if (window.location.pathname === "/Portfolio/") {
    portfolioBuilder.build();
};

if (window.location.pathname === "/Concours/") {
    concoursBuilder.build();
};