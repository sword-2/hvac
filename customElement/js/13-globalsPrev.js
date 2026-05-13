//unused
		//const body  = document.getElementById("body");

//variables for individual tables
		const o1Tbl = document.getElementById("office1");
		const o2Tbl = document.getElementById("office2");
		const r1Tbl = document.getElementById("room1");
		const r4Tbl = document.getElementById("room4");
		const nuTbl = document.getElementById("nursery");
		const w12Tbl = document.getElementById("worship1"); //two nests combines
		const maTbl = document.getElementById("modA");
		const mbTbl = document.getElementById("modB");
		const mcTbl = document.getElementById("modC");

//variables to merge tables
		const tables = [o1Tbl, o2Tbl, r1Tbl, r4Tbl, nuTbl, w12Tbl, maTbl, mbTbl, mcTbl];
		let tablesJson = []; //combine the json for all tables


		const read1 = document.getElementById("read1");
		//const json1 = document.getElementById("json1");
		const sel1 = document.getElementById("sel1");
		const rpt1 = document.getElementById("rpt1");
		const rpt1Btn = document.getElementById("rpt1Btn");
		const copy1 = document.getElementById("copy1");	
