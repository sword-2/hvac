//Try and learn about the fetch living standard. How to get data with it?

export async function loadJson(url) {
  try {
    //const response = await fetch('./data.json'); // Replace with your file path
    const response = await fetch(url); // Replace with your file path
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
	return(data);
    //console.log(data);
} catch (error) {
  	let err = 'Could not load JSON:' + error;
	throw new Error(err);
    //console.error('Could not load JSON:', error);
  }
}

//export default loadJson;
