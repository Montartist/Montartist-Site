async function requestJSON(url) {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

async function createHPageImageList(url) {
	const loadedData = await requestJSON(url)
	var imgList = []
	for (var participant of Object.keys(loadedData)) {
		if (loadedData[participant].oeuvres.length > 0) {
			imgList.push(loadedData[participant]["oeuvres"][Math.floor(Math.random() * loadedData[participant]["oeuvres"].length)].concat(loadedData[participant].name).concat(participant))
		}
	}
	return imgList
}

export {requestJSON, createHPageImageList}