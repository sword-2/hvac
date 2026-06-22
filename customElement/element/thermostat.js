<script>
/* Adapt code to experiment with a thermostat 
 * Reference(s) VA HVAC Design Manual, Chapter 5 HVAC Control Systems, 5.5.11 Software
 * */

function addCir(el, cx, cy, r) {
// Create a circle dynamically
	try {
		//alert('addCir() started');
		//circle parameters
		//const cx = 50; const cy = 50; const r = 50;

    	const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    	circle1.setAttribute('cx', cx.toString()); // x-coordinate
    	circle1.setAttribute('cy', cy.toString()); // y-coordinate
    	circle1.setAttribute('r', r.toString());  // radius
    	circle1.setAttribute('fill', 'none');
    	circle1.setAttribute('stroke', 'white');
    	circle1.setAttribute('stroke-width', '2');
    	circle1.setAttribute('opacity', '0.9');

    	// Append the circle to the SVG
    	el.appendChild(circle1);


	} catch (error) {
	// Handle the error 
    alert("addCir() caught an error: " + error.message);
	}
}


function addPolyl(el, cx, cy, r) {
// Create a circle dynamically
	try {
		//left arm on cross ....
    		const poly1 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
				let pt11x = cx + cx/10 - r/3;
				let pt11y = cy;
				let pt12x = cx + cx/10 - 2*r/3;
				let pt12y = cy;
				let pt13x = pt12x;
				let pt13y = cy - r/3;
				let pt14x = pt13x + 2*r/3;
				let pt14y = pt13y;
			let points1 = pt11x.toString() + ',' + pt11y.toString() + ' ' + pt12x.toString() + ',' + pt12y.toString() + ' ' + pt13x.toString() + ',' + pt13y.toString() + ' ' + pt14x.toString() + ',' + pt14y.toString();
			poly1.setAttribute('points', points1);
			poly1.setAttribute('fill', 'none');
			poly1.setAttribute('stroke', 'white');
			poly1.setAttribute('stroke-width', '1');
			el.appendChild(poly1);	// Append the polygon to the SVG

		//right arm of cross
			const poly2 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
				let pt21x = pt14x + r / 10;
				let pt21y = pt14y;
		 		let pt22x = pt14x + 1.3 * r / 3;
		 		let pt22y = pt21y;
		 		let pt23x = pt22x;
		 		let pt23y = pt22y + r / 3;
		 		let pt24x = pt22x - 2*r/3; // + r/10;
		 		let pt24y = pt23y;
				let points2 = pt21x.toString() + ',' + pt21y.toString() + ' ' + pt22x.toString() + ',' + pt22y.toString() + ' ' + pt23x.toString() + ',' + pt23y.toString() + ' ' + pt24x.toString() + ',' + pt24y.toString();
				poly2.setAttribute('points', points2);
				poly2.setAttribute('fill', 'none');
				poly2.setAttribute('stroke', 'white');
				poly2.setAttribute('stroke-width', '1');
				el.appendChild(poly2);

		//vertical cross member - top
			const poly3 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
				let pt31x = pt21x - r/20;
				let pt31y = cy - r/10; //r/10
		 		let pt32x = pt31x;
		 		let pt32y = pt31y - r/2;
		 		let pt33x = pt32x - r/3;
		 		let pt33y = pt32y;
		 		let pt34x = pt33x;
		 		let pt34y = pt33y + r/4.5; //was pt33y + r/4.2;
				let points3 = pt31x.toString() + ',' + pt31y.toString() + ' ' + pt32x.toString() + ',' + pt32y.toString() + ' ' + pt33x.toString() + ',' + pt33y.toString() + ' ' + pt34x.toString() + ',' + pt34y.toString();
				poly3.setAttribute('points', points3);
				poly3.setAttribute('fill', 'none');
				poly3.setAttribute('stroke', 'white');
				poly3.setAttribute('stroke-width', '1');
				el.appendChild(poly3);

		//vertical cross member - bottom
			const poly4 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
				let pt41x = pt34x;
				let pt41y = pt34y + r/10; //was r/9
		 		let pt42x = pt41x;
		 		let pt42y = pt41y + r;
		 		let pt43x = pt42x + r/3;
		 		let pt43y = pt42y;
		 		let pt44x = pt43x;
		 		let pt44y = pt43y - 3.3 * r / 5; //was pt43y - 3 * r / 5;
				let points4 = pt41x.toString() + ',' + pt41y.toString() + ' ' + pt42x.toString() + ',' + pt42y.toString() + ' ' + pt43x.toString() + ',' + pt43y.toString() + ' ' + pt44x.toString() + ',' + pt44y.toString();
				poly4.setAttribute('points', points4);
				poly4.setAttribute('fill', 'none');
				poly4.setAttribute('stroke', 'white');
				poly4.setAttribute('stroke-width', '1');
				el.appendChild(poly4);
	} catch (error) {
	// Handle the error 
    alert("addPolyl() caught an error: " + error.message);
	}
}

function addText(el, x, y) {
try {
	// Define the SVG namespace URI
	const svgNS = "http://www.w3.org/2000/svg";

	// 2. Create the new <text> element using the correct namespace
	const newText = document.createElementNS(svgNS, "text");

	// 3. Set attributes for position and style
		newText.setAttribute("x", x.toString()); // X coordinate
		newText.setAttribute("y", y.toString()); // Y coordinate (baseline of the text)
		newText.setAttribute("font-size", "6");
		newText.setAttribute("fill", "blue");
		newText.setAttribute("text-anchor", "middle"); // Center the text at the x,y coordinates

	// 4. Add the text content
    	// The simplest way is using textContent
        newText.textContent = "Faith Community Church of Palmdale";
	
	// 5. Append the new <text> element to the SVG container
        el.appendChild(newText)
	} catch (error) {
	// Handle the error 
    alert("addText() caught an error: " + error.message);
	}
}

/*
	*/

class FlagIcon extends HTMLElement {
  constructor() {
    super();
    this._countryCode = null;
  }

  static observedAttributes = ["country"];

  attributeChangedCallback(name, oldValue, newValue) {
  	//a lifecycle method in Web Components that is triggered whenever one of the observed attributes of a custom element is added, removed, or changed. It allows you to respond to changes in the element's attributes dynamically.
    // name will always be "country" due to observedAttributes
    this._countryCode = newValue;
    //this._updateRendering(); //the one in connectedCallback() is sufficient.
  }
  connectedCallback() { //called when element added to DOM
    this._updateRendering();
  }

  get country() {
    return this._countryCode;
  }
  set country(v) {
    this.setAttribute("country", v);
  }

  _updateRendering() {
  	try {
		//let link = document.getElementById("exampleLink");
		let c = this.getAttribute("country");
		//this.innerHTML = 'some text';
		//this.innerHTML += ', ' + c;

		//get own dimensions to guide svg to same
		//const parentElement = document.getElementById('parent');
		const h = 100; //can't use or error: this.offsetHeight = h; //height
		const w = 100; //can't use or error: this.offsetWidth = w; //width
		// Create an SVG element
		//  Had <svg id="svgIcon" width="100" height="100" viewBox="0 0 100 100"></svg>
		const svgNS = "http://www.w3.org/2000/svg";
		const svg1 = document.createElementNS(svgNS, "svg");
		svg1.setAttribute("height", h.toString());
		svg1.setAttribute("width", w.toString());
		//svg1.setAttribute("viewBox", "0 0 100 100");

		addCir(svg1, w/2, h/2, 48);
		addPolyl(svg1, w/2, h/2, 50); //polylines. args 1) element, 2) center x, 3) center y, 4) radius
		addText(svg1, w/2, h);
		this.appendChild(svg1);
    	// Left as an exercise for the reader. But, you'll probably want to
    	// check this.ownerDocument.defaultView to see if we've been
    	// inserted into a document with a browsing context, and avoid
    	// doing any work if not.
  	} catch (error) {
    	// Handle the error 
    	alert("_updateRendering() caught an error: " + error.message);
		}
  }
}


customElements.define("flag-icon", FlagIcon);


 </script>
