//load data from tables to javascript
	window.addEventListener('load', function () {
		//readTables(tables, json1);
		readTables(tables);
			setSelect(); //load the select pick list with options.	
	});

//listener to make json file
	read1.addEventListener("click", function() { 
		//json1.innerHTML = mkJsonFile(); //save JSON output to div element
		rpt1.innerHTML = mkJsonFile(); //save JSON output to div element
	});


//listener for program report
	rpt1Btn.addEventListener('click', function() {
    	rptProgram();
	});


//listener for copy to clipboard
	copy1.addEventListener('click', function() {
		copyToClipboard();
	});



//listener for select
	/*
	sel1.addEventListener("change", function() {
    	handleSelection(this.value);
	});
	*/


/* if/when debugging becomes necessary
	//alert("debugging add listener on element ...");
	try {
		} catch (error) {
			alert("*.addEventListener() error:" + error.message);
		}
*/
