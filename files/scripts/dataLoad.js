async function requestJSON(url) {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

async function createImageList(url, set='Tous') {
	const loadedData = await requestJSON(url)
	console.log(loadedData)
	var imgList = []
	if (set == 'Tous') {
		for (var oeuvre of loadedData['Numérique']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numerique/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
		for (var oeuvre of loadedData['Traditionnel']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnel/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
	}
	if (set == 'Numérique') {
		for (var oeuvre of loadedData['Numérique']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numerique/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
	}
	if (set == 'Traditionnels') {
		for (var oeuvre of loadedData['Traditionnel']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnel/${oeuvre.file}`
			imgList.push(oeuvre.file)
		}
	}
	return imgList
}

export {requestJSON, createImageList}