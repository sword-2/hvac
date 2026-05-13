

function copyToClipboard() {
	const content = rpt1.textContent; // Get the text content
	navigator.clipboard.writeText(content) // Use Clipboard API to copy
	.then(() => alert("Copied to clipboard!"))
	.catch(err => alert("Failed to copy: " + err));
}
