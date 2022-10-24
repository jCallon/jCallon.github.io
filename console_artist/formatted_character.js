class formatted_character
{
	constructor(){ this.init(); }
	
	init()
	{
		this.fg_color_code = "15";
        this.bg_color_code = "0";
		this.character     = " ";
		this.is_bold       = false;
		this.is_dim        = false;
		this.is_underlined = false;
		//this.is_blink      = false;
		//this.is_reverse   = false;
		//this.is_hidden    = false;
	}
	
	// Expects format like "\e[1;4;48;5;220m "
	// -> 1; means bold
	// -> 4; means underlined
	// -> 48;5;220#m means it's got a background with color code 220
	read_bash(str)
	{
		this.init();
		// TODO:
		// - support foreground color and formatting
		// - support 16-bit color-scheme
		
		// Find the color codes for foreground and background if available, they will need to be parsed
		//let fg_clr_code = str.match(/38;5;\d*m/)[0];
		let bg_clr_code = str.match(/48;5;\d*m/)[0];
		
		// Set default if there was no fore/background color code string to parse,
		// otherwise the code to parse out will start with '#8;5;' and end with 'm'
		//if(fg_clr_code == null) fg_clr_code = "255";
		//else       	 	      fg_clr_code = fg_clr_code.substr(5, fg_clr_code.length - 3);
		if(bg_clr_code == null) bg_clr_code = "0";
		else       			    bg_clr_code = bg_clr_code.substr(5, bg_clr_code.length - 3);
		
		//this.fg_color_code = fg_clr_code;
		this.bg_color_code = bg_clr_code;
		this.character     = str[str.length - 1];
		//this.is_bold       = c.includes("1;");
		//this.is_dim        = c.includes("2;");
		//this.is_underlined = c.includes("3;");
	}
	
	// Writes format like "\e[1;4;48;5;220m ", see read_string comment for explanation
	write_bash()
	{
		// TODO:
		// - support foreground color and formatting
		// - support 16-bit color-scheme
		
		return `\\e[48;5;${this.bg_color_code}m `;
	}
	
	// Reads td from canvas into its own fields, so they can then be written to bash
	read_td(td)
	{
		this.init();
		
		if(td.bg_color_code != undefined) this.bg_color_code = td.bg_color_code;
		if(td.fg_color_code != undefined) this.fg_color_code = td.fg_color_code;
		if(td.innerHTML.length > 0)
		{
			this.character = " "; // TODO: detect dynamically
			this.is_bold =       (td.innerHTML.search("<b>") != -1);
			this.is_dim =        (td.innerHTML.search("<d>") != -1); // custom tag
			this.is_underlined = (td.innerHTML.search("<u>") != -1);
		}
	}
	
	// Creates a td to insert into canvas, so they can be viewed in web from bash
	write_td()
	{
		// Create td to populate
		let td = document.createElement("td");
		
		// Customize color and fields of new td to match class fields
		td.style.backgroundColor = color_256[parseInt(this.bg_color_code)];
		td.fg_color_code = this.fg_color_code;
		td.bg_color_code = this.bg_color_code;
		td.innerHTML = this.character;
		if(this.is_bold)       td.innerHTML = `<b>${td.innerHTML}</b>`;
		if(this.is_dim)        td.innerHTML = `<d>${td.innerHTML}</d>`; // custom tag
		if(this.is_underlined) td.innerHTML = `<u>${td.innerHTML}</u>`;
		
		// TODO: Is there a more efficient way to do this?
		td.onmouseenter = maybe_draw;
		td.onclick = draw;

		return td;
	}
}