async function requestJSON(url) {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

async function createPartImageList(url, set) {
	const loadedData = await requestJSON(url)
	var imgList = []
	if (set == 'Tous') {
		for (var oeuvre of loadedData['Numériques']) {
			oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
			imgList.push(oeuvre)
		}
		for (var oeuvre of loadedData['Traditionnels']) {
			oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
			imgList.push(oeuvre)
		}
	}
	if (set == 'Numériques') {
		for (var oeuvre of loadedData['Numériques']) {
			oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
			imgList.push(oeuvre)
		}
	}
	if (set == 'Traditionnels') {
		for (var oeuvre of loadedData['Traditionnels']) {
			oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
			imgList.push(oeuvre)
		}
	}
	return imgList
}

async function createSelImageList(url, set) {
	const loadedData = await requestJSON(url)
	var imgList = []
	if (set == 'Tous') {
		for (var oeuvre of loadedData['Numériques']) {
			if (oeuvre['sélectionné']) {
				oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
				imgList.push(oeuvre)
			}
		}
		for (var oeuvre of loadedData['Traditionnels']) {
			if (oeuvre['sélectionné']) {
				oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
				imgList.push(oeuvre)
			}
		}
	}
	if (set == 'Numériques') {
		for (var oeuvre of loadedData['Numériques']) {
			if (oeuvre['sélectionné']) {
				oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
				imgList.push(oeuvre)
			}
		}
	}
	if (set == 'Traditionnels') {
		for (var oeuvre of loadedData['Traditionnels']) {
			if (oeuvre['sélectionné']) {
				oeuvre.file = `https://${location.hostname}/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
				imgList.push(oeuvre)
			}
		}
	}
	return imgList
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

export {requestJSON, createPartImageList, createSelImageList, createHPageImageList}