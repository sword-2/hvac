<script type="module">
	import { loadJson } from "./whatwg/fetch.js";
	try {
		stat.innerHTML += "99-test.js running ....";
		let data = loadJson('https://raw.githubusercontent.com/sword-2/hvac/refs/heads/main/data/programs/table.office1.json');
		stat.innerHTML += "<br>data=<br>" + data;
		} catch(error) {
			stat.innerHTML += "<br>error=<br>" + error;
		}
</script>
