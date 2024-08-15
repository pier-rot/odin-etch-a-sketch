const body = document.querySelector("body");
function generateRows(numberOfRows) {
	const rows = [];
	for (let i = 0; i < numberOfRows; i++) {
		const row = document.createElement("div");
		rows[i] = row;
		body.appendChild(row);
		const name = document.createAttribute("id");
		name.value = `row-${i}`;
		row.style.display = "flex";
		row.style.width = `100vw`;
		row.setAttributeNode(name);
		row.setAttribute("class", "row");
	}
}

function getRows() {
	return document.querySelectorAll(".row");
}

function getNumberOfRows() {
	return getRows().length;
}

function handleMouseLeave(event) {
	event.target.style.backgroundColor = "lightgrey";
}

function generateGrid(numberOfColumns) {
	const rows = getRows();
	const numberOfRows = getNumberOfRows();
	for (let i = 0; i < numberOfRows; i++) {
		const currentRow = rows[i];
		for (let j = 0; j < numberOfColumns; j++) {
			const div = document.createElement("div");
			div.setAttribute("row-pos", `${i}`);
			div.setAttribute("col-pos", `${j}`);
			div.setAttribute("class", "grid-square");

			div.style.height = `${100 / numberOfColumns}vw`;
			div.style.flex = 1;
			div.style.backgroundColor = "lightgrey";

			div.addEventListener("mouseenter", () => {
				div.style.backgroundColor = "black";
			});
			div.addEventListener("mouseleave", handleMouseLeave, true);
			div.addEventListener("click", () => {
                div.style.backgroundClip = "black";
                div.removeEventListener("mouseleave", handleMouseLeave, true);
				
			});
			currentRow.appendChild(div);
		}
	}
}

const generateGridButton = document.querySelector("#generate-button");

generateGridButton.addEventListener("click", () => {
	while (getRows().length != 0) {
		body.removeChild(body.querySelector(".row"));
	}

	const rowInput = document.querySelector("#row-input");
	const colInput = document.querySelector("#col-input");
	const numberOfRows = rowInput.value;
	const numberOfColumns = colInput.value;

	generateRows(numberOfRows);
	generateGrid(numberOfColumns);
});
