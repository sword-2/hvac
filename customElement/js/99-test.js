<script>
	try {
		let data = '02-front: ';
		data += loadJson('https://raw.githubusercontent.com/sword-2/hvac/refs/heads/main/data/programs/table.office1.json');
		alert(data);
		} catch(error) {
			let err = '02-front ' + error;
			alert(err);
		}
</script>
