async function requestJSON(url) {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

async function createPartImageList(url, set) {
	const loadedData = await requestJSON(url)
	console.log(loadedData)
	var imgList = []
	if (set == 'Tous') {
		for (var oeuvre of loadedData['Numériques']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
			imgList.push(oeuvre)
		}
		for (var oeuvre of loadedData['Traditionnels']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
			imgList.push(oeuvre)
		}
	}
	if (set == 'Numériques') {
		for (var oeuvre of loadedData['Numériques']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
			imgList.push(oeuvre)
		}
	}
	if (set == 'Traditionnels') {
		for (var oeuvre of loadedData['Traditionnels']) {
			oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
			imgList.push(oeuvre)
		}
	}
	return imgList
}

async function createSelImageList(url, set) {
	const loadedData = await requestJSON(url)
	console.log(loadedData)
	var imgList = []
	if (set == 'Tous') {
		for (var oeuvre of loadedData['Numériques']) {
			if (oeuvre['selectionné']) {
				oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
				imgList.push(oeuvr)
			}
		}
		for (var oeuvre of loadedData['Traditionnels']) {
			if (oeuvre['selectionné']) {
				oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
				imgList.push(oeuvre)
			}
		}
	}
	if (set == 'Numériques') {
		for (var oeuvre of loadedData['Numériques']) {
			if (oeuvre['selectionné']) {
				oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/numeriques/${oeuvre.file}`
				imgList.push(oeuvre)
			}
		}
	}
	if (set == 'Traditionnels') {
		for (var oeuvre of loadedData['Traditionnels']) {
			if (oeuvre['selectionné']) {
				oeuvre.file = `http://localhost/files/assets/images/oeuvres/concours/traditionnels/${oeuvre.file}`
				imgList.push(oeuvre)
			}
		}
	}
	return imgList
}

export {requestJSON, createPartImageList, createSelImageList}