//report on selection from pick list
function rptProgram() {
	try {

		let val = sel1.options[sel1.selectedIndex].value;
		//alert('rptProgram val=' + val);
		//if (val == 'none') { //unique name made for blank.
		//	val = '';
		//}

		// another option was - let val2 = sel1.options[sel1.selectedIndex].text;
		//var text = e.options[e.selectedIndex].text;
		let out1 = 'search for program=' + val;
		for (let i = 0; i < tablesJson.length; i++) {
			const capTmp =  tablesJson[i][0]?.caption;
			for (let j = 1; j < tablesJson[i].length; j++) { //j=1 to skip first object which is caption
				const pn = tablesJson[i][j]?.programNm;
				let pnl = '';
				if (pn === null || pn === undefined || pn === '' ) {
					pnl = 'none';
				} else {
					const pd = tablesJson[i][j]?.programDet;
					if (pd !== null && pd !== undefined && pd !== '' ) {
						pnl = pn.toLowerCase() + '-' + pd.toLowerCase(); //program name lowercase (pnl);
					} else {
						pnl = pn.toLowerCase(); //program name lowercase (pnl);
					}
				}

				if (pnl == val ) {
					//pn, day, start time, end time
					const day = tablesJson[i][j]?.day;
					const sTS = tablesJson[i][j]?.sTimeStart;
					const sTE = tablesJson[i][j]?.sTimeEnd;
					const wTS = tablesJson[i][j]?.wTimeStart;
					const wTE = tablesJson[i][j]?.wTimeEnd;
					const tR = j.toString(); //table row to debug

					//debugging attempts ...
						//const wR2 = tablesJson[i][j].toString();
						//const wR21 = JSON.stringify(tablesJson[i][0]);
						//const wR3 = JSON.stringify(tablesJson[i][j]);
					
						//let dbg = 'j: ' + j.toString() + ', ';
						//for (var p in tablesJson[i][j]) { //p = property
							//dbg += p + ': ' + tablesJson[i][j][p] + ', ';
							//}

					out1 += '<br>' + day + ', thermostat=' + capTmp + ', summer start=' + sTS + ', summer end=' + sTE + ', winter start=' + wTS + ', winter end=' + wTE; //+ ', table row=' + tR + ', table row length=' + tablesJson[i][j].length + ', wR2=' + wR2 + ', wR21=' + wR21 + ', wR3=' + wR3 + ', dbg=' + dbg;

						//how to print whole line: JSON.stringify(tablesJson[i][j])
				}  //else { //try to identify strange data in a row
					//out1 += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unexpected record: , day=' + tablesJson[i][j]?.day + ', table row No.=' + j.toString() + ', val=' + val + ', caption=' + capTmp + ', pnl=' + pnl;
					//}
			}
		}
		rpt1.innerHTML = out1; //alert(out1);
	} catch (error) {
		alert("rptProgram() error:" + error.message);
	}
}
