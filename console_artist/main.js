//
// Read local storage
//

/* TODO: read and write settings to local storage
function load_settings()
{
	canvas_x = Number(localStorage.getItem("canvas_x")) || canvas_x;
	canvas_y = Number(localStorage.getItem("canvas_y")) || canvas_y;
	for(let i = 0; i < 16; ++i)
		color_16[i].color = "#" + (localStorage.getItem("c" + String(i)) || color_16[i].color);
	for(let i = 0; i < 256; ++i)
		color_256[i]      = "#" + (localStorage.getItem("C" + String(i)) || color_256[i]);
}

function save_settings()
{
	localStorage.setItem("canvas_x", String(canvas_x));
	localStorage.setItem("canvas_y", String(canvas_y));
	for(let i = 0; i < 16; ++i)
		localStorage.setItem("c" + String(i), color_16[i].color.substring(-6));
	for(let i = 0; i < 256; ++i)
		localStorage.setItem("C" + String(i), color_256[i].substring(-6));
}
*/
let num_colors = 256;

//
// Define canvas
//

// Define canvas, JS is stupid
let table = document.getElementById("canvas").getElementsByTagName("table")[0];
let canvas;
function create_canvas(num_rows, num_columns)
{
	// Define canvas as a 2D array of formatted_character, JS is stupid
	canvas = new Array(num_rows);
	for(let y = 0; y < canvas.length; ++y)
	{
		canvas[y] = new Array(num_columns);
		for(let x = 0; x < canvas[y].length; ++x)
			canvas[y][x] = new formatted_character();
	}
}
create_canvas(30, 60);  // TODO: use common numbers like 64 and 80

// Find, wipe, then recreate canvas
function create_table()
{
	// Clear table	
	// https://attacomsian.com/blog/javascript-dom-remove-all-children-of-an-element
	while(table.lastChild)
		table.removeChild(table.lastChild);
	
	// Fill table
	let i = 0;
	for(let y = 0; y < canvas.length; ++y)
	{
		const tr = document.createElement("tr");
		table.appendChild(tr);
		for(let x = 0; x < canvas[y].length; ++x)
			tr.appendChild(canvas[y][x].write_td());
	}
}
create_table();
fill_palette(256);

// Create HTML table from bash
function import_canvas()
{
	console.log("Starting input parsing");
	// TODO: 
	// - support and test 16-color scheme
	// - there's *definitely* a more efficient way to do this but just make *a* working version first
	// - taking data from prompt is awful
	
	// Get input to parse, if they give an input that crashes parsing, it's all client-side, and that's their fault
	let input = prompt("Please paste the contents of a previous bash file.");
	// The file will start with 'echo -e "' and end with '"', then each character's format string is ended with '\e[0m' 
	input = input.substr(9, input.length - 1).split('\n');
	// Split is annoying and will leave an empty entry after
	input.pop();
	for(let i = 0; i < input.length; ++i)
	{
		input[i] = input[i].split("\\e[0m");
		// Split is annoying and will leave an empty entry after
		input[i].pop();
	}
	
	// Calculate the number of rows and columns for the canvas based off of the input
	// - num_rows = number of newlines
	// - num_columns = longest line length (in printed characters)
	let num_rows = input.length;
	let num_columns = 0;
	for(let i = 0; i < input.length; ++i)
		if(num_columns < input[i].length) num_columns = input[i].length;
	console.log(`  Detected rows: ${num_rows}`);
	console.log(`  Detected columns: ${num_columns}`);
	
	// Wipe and create new canvas
	create_canvas(num_rows, num_columns);
	
	// Parse input into buffer
	for(let y = 0; y < num_rows; ++y)
	{
		for(let x = 0; x < num_columns; ++x)
		{
			// Don't go out of bounds if there is no right-padding on this line
			if(x >= input[y].length) continue;
			canvas[y][x].read_bash(input[y][x]);
		}
		console.log(`  Parsed row ${y}`);
	}
	
	// Overwrite current table
	create_table();
	console.log(`  Done`);
}

// Create bash from HTML table
function export_canvas()
{
	console.log("Starting output parsing");
	// TODO: 
	// - support 16-color scheme
	// - there's *definitely* a more efficient way to do this but just make *a* working version first
	
	for(let y = 0; y < canvas.length; ++y)
		for(let x = 0; x < canvas[y].length; ++x)
			canvas[y][x].read_td(table.children[y].children[x]);

	// Create string output from parsed buffer
	let output = "";
	for(let y = 0; y < canvas.length; ++y)
	{
		for(let x = 0; x < canvas[y].length; ++x)
			output += `${canvas[y][x].write_bash()}\\e[0m`;
		output += "\n";
		console.log(`  Parsed row ${y}`);
	}
	
	// Make download
	// Copied snippet from https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
	const t = new Date();
	const file_name = `${t.getFullYear()}_${t.getMonth()}_${t.getDate()}-${t.getHours()}_${t.getMinutes()}.bash`;
	const file_contents = encodeURIComponent(`echo -e "${output}"`);
	let download = document.createElement('a');
    download.setAttribute('download', file_name);
    download.setAttribute('href', `data:text/plain;charset=utf-8,${file_contents}`);
	download.style.display = 'none';
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
	console.log(`  Done`);
}