//loop thru each table
function readTables(tables) { 
	//args - tables - an array of tables available to loop over
	//alert('debugging - readTables() started');
	try {
		for (var i = 0; i < tables.length; i++) {
		
			readTable2(tables[i]);  //read each table 1 at a time, store to global variable

			//when debugging, can make the loop shorter for one table ...
			/*
				if (i > 0) {
					return;
					} //end if
			*/
		}

	} catch (error) {
		alert("readTables() - error:" + error.message);
	}
} //end function


//The data starts out in the table instead of a separate data file.
function readTable2(tbl) {
	try {
		let cap = '';
		if (tbl.caption) {
			cap = tbl.caption.innerHTML;
		} else {
			cap = 'no caption available';
		}
		//alert("readTable2() debugging: processing table: " + cap);

		let headers = [];

		// Manually add headers. Automated extracting deactivated
			//for (let i = 0; i < rows[0].cells.length; i++) {
			//	headers.push(rows[0].cells[i].innerText);
			//}
			headers.push('day');
			headers.push('programNm');
			headers.push('programDet');
			headers.push('fan');

			//s - summer
			headers.push('sMode');
			headers.push('sTimeStart');
			headers.push('sTimeEnd');
			headers.push('sTempMin');
			headers.push('sTempMax');
			headers.push('sHumMin');
			headers.push('sHumMax');

			//w - winter
			headers.push('wMode');
			headers.push('wTimeStart');
			headers.push('wTimeEnd');
			headers.push('wTempMin');
			headers.push('wTempMax');
			headers.push('wHumMin');
			headers.push('wHumMax');

			//sa - spring autumn
			headers.push('saMode');
			headers.push('saTimeStart');
			headers.push('saTimeEnd');
			headers.push('saTempMin');
			headers.push('saTempMax');
			headers.push('saHumMin');
			headers.push('saHumMax');
			headers.push('comments');

		const thermostat = tbl.dataset.thermostat; //read an embedded value
		//alert("readTable2() thermostat:" + thermostat);

		const rows = tbl.rows;
		let jsonData = [];

		//Table caption
			let capHdr = {
    			"caption": cap
			};
			
			jsonData.push(capHdr);

		//Copy data in the rows to JSON variable.  Skip header rows by starting at row 3.
			for (let i = 3; i < rows.length; i++) {
				const rowObject = {};
				const cells = rows[i].cells;
				for (let j = 0; j < cells.length; j++) {
					rowObject[headers[j]] = cells[j].innerText;
					}
				jsonData.push(rowObject);
				}
		tablesJson.push(jsonData);
		return;

	} catch (error) {
		// Code to handle the error
		alert("readTable2() An error occurred:" + error.message);
	}
} //end function
