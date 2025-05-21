async function requestJSON(url) {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

async function createImageList(url, set) {
	const loadedData = await requestJSON(url)
	console.log(loadedData)
	var imgList = []
	if (set == 'Tous') {
		for (var oeuvre of loadedData['Numériques']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
		for (var oeuvre of loadedData['Traditionnels']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
	}
	if (set == 'Numériques') {
		for (var oeuvre of loadedData['Numériques']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
	}
	if (set == 'Traditionnels') {
		for (var oeuvre of loadedData['Traditionnels']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
	}
	return imgList
}

export {requestJSON, createImageList}