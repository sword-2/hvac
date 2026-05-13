//set options in the select element or pick list
//reads thru JSON data to do this
function setSelect() {
	try {
		//remove any existing elements
		while (sel1.options.length > 0) {
			sel1.remove(0);
		}

		let opts = []; //store program names first

		for (let i = 0; i < tablesJson.length; i++) {
			//const capTmp =  tablesJson[i][0]?.caption;
			let pnl = ''; //program name list
			for (let j = 1; j < tablesJson[i].length; j++) {
				//pnl = 'dummy' + j.toString();
				
				const pn = tablesJson[i][j]?.programNm; //program name
				if (pn === null || pn === undefined || pn === '') {
					pnl = 'none';
				} else {
					pnl = pn.toLowerCase(); //program name lowercase (pnl);
				}
				

				
				//add second column when applicable with program details.
				const pd = tablesJson[i][j]?.programDet;
				if (pd !== null && pd !== undefined && pd !== '' ) {
					pnl += '-' + pd.toLowerCase(); //program name lowercase (pnl);
				}
				
				opts.push(pnl);
			} //end for
		} //end for

		opts.sort(); //alert('setSelect() debug after sort=' + opts.toString());

		//remove duplicates ...
		let done = false;
		while (done == false) {
			done = true;
			for (let i=0; i < opts.length - 1; i++) {
				if (opts[i] == opts[i+1]) {
					opts.splice(i, 1);
					done = false;
					i--;
				}
			}
		} //alert('setSelect() debug after duplicate removal=' + opts.toString());

		//add the options to the input element
		for (i=0; i< opts.length; i++) {
			// Create a new option
			let newOption = document.createElement("option");
			newOption.value = opts[i]; // Set the value
			newOption.text = opts[i]; // Set the text

			// Add the new option to the dropdown
			sel1.add(newOption);
		}

	} catch (error) {
		alert("setSelect() error:" + error.message);
	}
}
