import * as dataLoad from './dataLoad.js'

async function build() {
    let data = await dataLoad.requestJSON(`/files/data/concours.json`);
    console.log(data);
};

function loadConcours() {
    
};

export {build, loadConcours};