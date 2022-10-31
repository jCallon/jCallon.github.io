// Onclick function
function maybe_draw(e)
{
    if(brush.active == false) return;
    draw(e);
}

// Onclick function
function draw(e)
{
    // Make shorthand for e.target
    e = e.target;

    // Change the background color only if the brush mode is background color
    if(brush.fill_mode == "background_color")
    {
        e.bg_color_code = brush.bg_color_code;
        e.style.backgroundColor = brush.bg_color;
        return;
    }
    
    // Change the foreground color only if the brush mode is background color
    if(brush.fill_mode == "foreground_color")
    {
        e.fg_color_code = brush.fg_color_code;
        e.style.color = brush.fg_color;
        return;
    }
    
    // Make shorthand for e.target.innerHTML
    e = e.innerHTML;
    
    // Change the text only if the brush mode is text
    if(brush.fill_mode == "text")
    {
        e = brush.character;
        return;
    }
    
    // TODO: Inverting might not be the most intuitive?
    
    // Change the text decoration only if the brush mode is text decoration    
    if(brush.fill_mode == "bold" || brush.fill_mode == "dim" || brush.fill_mode == "underlined")
    {
        let tag;
        if(brush.mode == "bold")       tag = "b";
        if(brush.mode == "dim")        tag = "d"; // custom tag
        if(brush.mode == "underlined") tag = "u";
        
        let start_tag = `<${tag}>`;
        let end_tag = `</${tag}>`;
        let start_tag_index = e.search(start_tag);
        let end_tag_index = e.search(end_tag);
        
        // If not already bold, bold
        if(start_tag_index == -1 && end_tag_index == -1)
        {
            e = `${start_tag}${e}${end_tag}`;
            return;
        }
        // If already bold, unbold
        else
        {
            e = e.substr(0, start_tag_index - 1) + 
                e.substr(start_tag_index + start_tag.length, end_tag_index - 1) +
                e.substr(end_tag_index + end_tag.length, e.length - 1);
            return;
        }
    }
}

// Onlick function
function update_brush(e)
{
    // TODO: support other fill modes besides background color
    
    let selected_palette_element = e.target;

    brush.bg_color_code = selected_palette_element.bg_color_code;
    brush.bg_color = selected_palette_element.style.backgroundColor;
    console.log(brush);
}

// Function to create and fill palette
function fill_palette(num_colors)
{
    // TODO: wipe previous palette if applicable
    
    let i = 0;
    let table = document.getElementById("palette").getElementsByTagName("table")[0];
    let data, num_rows, num_columns;
    
    // Decide the best way to show the palette based on it number of colors 
    if(num_colors == 16)
    {
        data = color_16;
        columns = 4;
        rows = 4;
    }
    else if(num_colors == 256)
    {
        data = color_256;
        columns = 6;
        rows = 43;
    }
    else
    {
        console.log("Unsupported number of colors.");
        return;
    }
    
    // Fill palette, it's just a table with a td for each color
    for(let x = 0; x < rows; ++x)
    {
        // Create table row
        const tr = document.createElement("tr");
        table.appendChild(tr);
        
        // 16 colorschemes have codes all over the place instead of in order like 256,
        // so pull code out of earlier class array that has them all memeorized
        if(data == color_16)
        {
            for(let y = 0; y < columns; ++y)
            {
                // Create table data
                const td = document.createElement("td");
                // TODO: is there a more efficient way to do this?
                td.onclick = update_brush;
                
                // Fill table data
                td.bg_color_code = color_16[i].code;
                td.style.backgroundColor = color_16[i].color;
                
                // Add table data to table row
                tr.appendChild(td);
                ++i;
            }
        }
        
        // 256 colorschemes have consistently incrementing codes, but the best way to
        // to display them in a way that visually makes sense is a row of 4, then rows of all 6
        if(data == color_256)
        {
            for(let y = 0; y < columns; ++y)
            {
                // Create table data
                const td = document.createElement("td");
                // TODO is there a more efficient way to do this?
                td.onclick = update_brush;
                
                // Fill table data
                if(i < 4)
                {
                    td.bg_color_code = String(i);
                    td.style.backgroundColor = color_256[i];
                }
                else if(i == 4 || i == 5)
                {
                    td.code = "N/A";
                    td.style.backgroundColor = "var(--bg-color)";
                    td.style.cursor = "default";
                    td.onclick = "";
                }
                else
                {
                    td.bg_color_code = String(i - 2);
                    td.style.backgroundColor = color_256[i - 2];
                }
                
                // Add table data to table row
                tr.appendChild(td);
                ++i;
            }
        }
    }
    
    // Create onclick event on table instead of per td to reduce number of events
/*
    table.onclick = function(e)
    {
        // https://www.w3schools.com/jsref/obj_mouseevent.asp
        let x = e.offsetX;
        let y = e.offsetY;
    }
*/
}

class brush_settings
{
    constructor()
    {
        this.fg_color_code = "0";
        this.fg_color      = "#000000";
        this.bg_color_code = "15";
        this.bg_color      = "#FFFFFF";
        this.character     = " ";
        this.fill_mode     = "background_color"; 
        this.is_bold       = false;
        this.is_dim        = false;
        this.is_underlined = false;
        
        this.active = false;
    }
}

let brush = new brush_settings();
document.onmousedown = function(e){ brush.active = true; }
document.onmouseup = function(e){ brush.active = false; }
