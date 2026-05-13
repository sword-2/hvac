/* last time a custom element was tried, the code was at /home/greg/hvac/hvacFaith/customEl */

class Thermostat extends HTMLElement {
  constructor() {
    super();
    this._room = null;
  }

  static observedAttributes = ["room"];

  attributeChangedCallback(name, oldValue, newValue) {
  	//a lifecycle method in Web Components that is triggered whenever one of the observed attributes of a custom element is added, removed, or changed. It allows you to respond to changes in the element's attributes dynamically.
    // name will always be "country" due to observedAttributes
    this._room = newValue;
    //this._updateRendering(); //the one in connectedCallback() is sufficient.
  }
  connectedCallback() { //called when element added to DOM
    //this._updateRendering(); //did this once to draw
	// Optional to add text, but looks like table caption.
        /*
			if (!this.innerText.trim()) {
        	this.innerText = "Custom element had no text, so some text is now added.";
			} else {
        	this.innerText += " Custom element already had some text, appending more.";
			}
		*/

		/*
		try {
			const data = loadJson('https://raw.githubusercontent.com/sword-2/hvac/refs/heads/main/data/programs/table.office1.json');
			alert(data);
		} catch(error) {
			alert(error);
		}
		*/

	// Create table and table body elements
		let table = document.createElement('table');
		let caption = table.createCaption();
		caption.textContent = "room tbd2";
		let thead = table.createTHead();
		let tbody = document.createElement('tbody');


	// Insert header row, cells
		let row = thead.insertRow(0);
		let cell1 = row.insertCell(0);
		cell1.outerHTML = "<th>Header 1</th>";

		let cell2 = row.insertCell(1);
		cell2.outerHTML = "<th>Header 2</th>";

		let cell3 = row.insertCell(2);
		cell3.outerHTML = "<th>Header 3</th>";


	// Add rows and cells
		for (let i = 0; i < 3; i++) {
			let row = document.createElement('tr');
			for (let j = 0; j < 3; j++) {
				let cell = document.createElement('td');
				cell.textContent = `Row ${i}, Cell ${j}`;
				row.appendChild(cell);
			}
				tbody.appendChild(row);
		}

	// Append tbody to table and table to body
		table.appendChild(caption);
		table.appendChild(thead);
		table.appendChild(tbody);
		this.appendChild(table);
  }

  get room() {
    return this._room;
  }
  set room(v) {
    this.setAttribute("room", v);
  }

  _updateRendering() {
  	try {
		//let link = document.getElementById("exampleLink");
		let c = this.getAttribute("room");
		//this.innerHTML = 'some text';
		//this.innerHTML += ', ' + c;
		alert('_updateRendering ran for custom element');
		//get own dimensions to guide svg to same
		//const parentElement = document.getElementById('parent');
		/*
			const h = 100; //can't use or error: this.offsetHeight = h; //height
			const w = 100; //can't use or error: this.offsetWidth = w; //width
		*/
		// Create an SVG element
		//  Had <svg id="svgIcon" width="100" height="100" viewBox="0 0 100 100"></svg>
		/*
			const svgNS = "http://www.w3.org/2000/svg";
			const svg1 = document.createElementNS(svgNS, "svg");
			svg1.setAttribute("height", h.toString());
			svg1.setAttribute("width", w.toString());
		*/
		//svg1.setAttribute("viewBox", "0 0 100 100");

		/*
			addCir(svg1, w/2, h/2, 48);
			addPolyl(svg1, w/2, h/2, 50); //polylines. args 1) element, 2) center x, 3) center y, 4) radius
			addText(svg1, w/2, h);
			this.appendChild(svg1);
		*/
    	// Left as an exercise for the reader. But, you'll probably want to
    	// check this.ownerDocument.defaultView to see if we've been
    	// inserted into a document with a browsing context, and avoid
    	// doing any work if not.
  		} catch (error) {
    	// Handle the error 
    	alert("Thermostat's _updateRendering() caught an error: " + error.message);
		}
  		}
}


customElements.define("thermostat-data", Thermostat);
export default Thermostat;

/* Previous MDN example
function create(id, parent, width, height) {
  let divWrapper = document.createElement('div');
  let canvasElem = document.createElement('canvas');
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);

  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;

  let ctx = canvasElem.getContext('2d');

  return {
    ctx: ctx,
    id: id
  };
}

function createReportList(wrapperId) {
  let list = document.createElement('ul');
  list.id = wrapperId + '-reporter';

  let canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(list);

  return list.id;
}

export { create, createReportList };
*/
