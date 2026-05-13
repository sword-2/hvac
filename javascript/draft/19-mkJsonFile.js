//make a json file the operator could copy out

function mkJsonFile() {
	let formattedOut = JSON.stringify(tablesJson);
	return formattedOut;
}

/*
function mkJsonFile() {
	try {
		let formattedOut = '{<br>';
		for (let i = 0; i < tablesJson.length; i++) {
			let tmpOut = '<br>{';
			//tmpOut += '<br><br>{ "table": ' + cap + '},';
			//tmpOut += '<br><br>{ "thermostat": ' + thermostat + '},';
			tmpOut += '<br>' + JSON.stringify(tablesJson[i][0], null, 2);
			tmpOut += ',';
			for (let k = 1; k < tablesJson[i].length; k++) {
				if (k == tablesJson[i].length - 1) {
					tmpOut += JSON.stringify(tablesJson[i][k], null, 2);
				} else {
					tmpOut += '<br><br>' + JSON.stringify(tablesJson[i][k], null, 2) + ',';
				}
			}
			if (i == tablesJson.length - 1) {
				tmpOut += '<br><br>}';
			} else {
				tmpOut += '<br><br>},';
			}
			formattedOut += tmpOut;
		}
		formattedOut += '<br>}';
		return formattedOut;
	} catch (error) {
		alert("mkJsonFile() error: " + error.message);
	}
} //end function
*/
