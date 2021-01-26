document.body.style.border = "5px solid red";
console.log("Colab timeout watchdog activated");

// Timings
var minutes = 10;
var seconds = minutes * 60 + 10;

setInterval(qwe, seconds * 1000);
//setInterval(undoAction, seconds * 1000);

function addCodeCell() {
	try {
		var add_cell_button = document.getElementById("toolbar-add-code");
		add_cell_button.click();
		console.log("new code cell added");
	} catch(error) {
		console.log(error);
	}
	
}

function removeCodeCell(cell)
{
	try {
		console.log("trying to remove cell " + cell.id);
		cell.children[0].children[0].children[7].click();
		console.log("code cell removed");
	} catch(error) {
		console.log(error);
	}
}

function qwe() {
	const cells = document.getElementsByClassName("cell code icon-scrolling");
	//create a deep copy
	var cells1 = {};
	cells1 = Object.assign(cells1, cells);
	cells1.length = cells.length;

	addCodeCell();

	const cells2 = document.getElementsByClassName("cell code icon-scrolling");

	var found_diff = false;

	//console.log(cells1.length);
	//console.log(cells2.length);
	var iters = Math.min(cells1.length, cells2.length);
	//console.log(iters);
	for(var i = 0; i < iters; ++i)
	{
		//console.log(cells1[i].id);
		//console.log(cells2[i].id);
		if(cells1[i].id != cells2[i].id)
		{
			removeCodeCell(cells2[i]);
			found_diff = true;
		}
	}

	if(!found_diff)
		removeCodeCell(cells2[cells2.length - 1]);
}

/*
function doAction() {
	try {
		var cells = document.getElementsByClassName("cell code icon-scrolling");
		var cell = cells[0];
		cell.children[2].children[0].children[0].shadowRoot.children[1].click();
		console.log("do action");
	} catch(error) {
		console.log(error);
	}
}

function undoAction() {
	try {
		var cells = document.getElementsByClassName("cell code icon-scrolling");
		var cell = cells[1];
		cell.children[0].children[0].children[7].click();
		console.log("undo action");
	} catch(error) {
		console.log(error);
	}
}

function doAction() {
	try {
		var connect_button = document.getElementsByTagName("colab-connect-button")[0];
		connect_button.click();
		console.log("Click toolbar button");
	} catch(error) {
		console.log(error);
	}
}

function undoAction() {
	try {
		var dismiss_button = document.getElementsByTagName("colab-dialog")[0].children[0].children[0].shadowRoot.getElementById("footer").getElementsByClassName("dismiss")[0];
		dismiss_button.click();
		console.log("Dismiss colab session dialog");
	} catch(error) {
		console.log(error);
	}
}
*/