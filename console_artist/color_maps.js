//https://misc.flogisoft.com/bash/tip_colors_and_formatting
class c_16
{
	constructor(code, name, color)
	{
		this.code  = code; 
		this.name  = name;
		this.color = color;
	}
}

// bg = fg + 0x10, these are fg color
const color_16 = 
[
	new c_16(30, 'Black',         '#000000'),
	new c_16(31, 'Red',           '#CC0000'),
	new c_16(32, 'Green',         '#00CC00'),
	new c_16(33, 'Yellow',        '#CCCC00'),
	
	new c_16(34, 'Blue',          '#0000CC'),
	new c_16(35, 'Magenta',       '#CC00CC'),
	new c_16(36, 'Cyan',          '#00CCCC'),
	new c_16(37, 'Light gray',    '#CCCCCC'),
	
	new c_16(90, 'Dark gray',     '#777777'),
	new c_16(91, 'Light red',     '#FF0000'),
	new c_16(92, 'Light green',   '#00FF00'),	
	new c_16(93, 'Light yellow',  '#FFFF00'),
	
	new c_16(94, 'Light blue',    '#0000FF'),
	new c_16(95, 'Light magenta', '#FF00FF'),
	new c_16(96, 'Light Cyan',    '#00FFFF'),
	new c_16(97, 'White',         '#FFFFFF')
];

const color_256 = 
[
	/*   0 */ '#000000', '#CD0000', '#00CD00', '#CDCD00', '#1E90FF', '#CD00CD',
	/*   6 */ '#00CDCD', '#E5E5E5', '#4C4C4C', '#FF0000', '#00FF00', '#FFFF00',
	/*  12 */ '#4682B4', '#FF00FF', '#00FFFF', '#FFFFFF', '#000000', '#00005F',
	/*  18 */ '#000087', '#0000AF', '#0000D7', '#0000FF', '#005F00', '#005F5F',

	/*  24 */ '#005F87', '#005FAF', '#005FD7', '#005FFF', '#008700', '#00875F',
	/*  30 */ '#008787', '#0087AF', '#0087D7', '#0087FF', '#00AF00', '#00AF5F',
	/*  36 */ '#00AF87', '#00AFAF', '#00AFD7', '#00AFFF', '#00D700', '#00D75F',
	/*  42 */ '#00D787', '#00D7AF', '#00D7D7', '#00D7FF', '#00FF00', '#00FF5F',

	/*  48 */ '#00FF87', '#00FFAF', '#00FFD7', '#00FFFF', '#5F0000', '#5F005F',
	/*  54 */ '#5F0087', '#5F00AF', '#5F00D7', '#5F00FF', '#5F5F00', '#5F5F5F',
	/*  60 */ '#5F5F87', '#5F5FAF', '#5F5FD7', '#5F5FFF', '#5F8700', '#5F875F',
	/*  66 */ '#5F8787', '#5F87AF', '#5F87D7', '#5F87FF', '#5FAF00', '#5FAF5F',

	/*  72 */ '#5FAF87', '#5FAFAF', '#5FAFD7', '#5FAFFF', '#5FD700', '#5FD75F',
	/*  78 */ '#5FD787', '#5FD787', '#5FD7D7', '#5FD7FF', '#5FFF00', '#5FFF5F',
	/*  84 */ '#5FFF87', '#5FFFAF', '#5FFFD7', '#5FFFFF', '#870000', '#87005F',
	/*  90 */ '#870087', '#8700AF', '#8700D7', '#8700FF', '#875F00', '#875F5F',

	/*  96 */ '#875F87', '#875FAF', '#875FD7', '#875FFF', '#878700', '#87875F',
	/* 102 */ '#878787', '#8787AF', '#8787D7', '#8787FF', '#87AF00', '#87AF5F',
	/* 108 */ '#87AF87', '#87AFAF', '#87AFD7', '#87AFFF', '#87D700', '#87D75F',
	/* 114 */ '#87D787', '#87D7AF', '#87D7D7', '#87D7FF', '#87FF00', '#87FF5F',

	/* 120 */ '#87FF87', '#87FFAF', '#87FFD7', '#87FFFF', '#AF0000', '#AF005F',
	/* 126 */ '#AF0087', '#AF00AF', '#AF00D7', '#AF00FF', '#AF5F00', '#AF5F5F',
	/* 132 */ '#AF5F87', '#AF5FAF', '#AF5FD7', '#AF5FFF', '#AF8700', '#AF875F',
	/* 138 */ '#AF8787', '#AF87AF', '#AF87D7', '#AF87FF', '#AFAF00', '#AFAF5F',

	/* 144 */ '#AFAF87', '#AFAFAF', '#AFAFD7', '#AFAFFF', '#AFD700', '#AFD75F',
	/* 150 */ '#AFD787', '#AFD7AF', '#AFD7D7', '#AFD7FF', '#AFFF00', '#AFFF5F',
	/* 156 */ '#AFFF87', '#AFFFAF', '#AFFFD7', '#AFFFFF', '#D70000', '#D7005F',
	/* 162 */ '#D70087', '#D700AF', '#D700D7', '#D700FF', '#D75F00', '#D75F5F',

	/* 168 */ '#D75F87', '#D75FAF', '#D75FD7', '#D75FFF', '#D78700', '#D7875F',
	/* 172 */ '#D78787', '#D787AF', '#D787D7', '#D787FF', '#D7AF00', '#D7AF5F',
	/* 180 */ '#D7AF87', '#D7AFAF', '#D7AFD7', '#D7AFFF', '#D7D700', '#D7D75F',
	/* 186 */ '#D7D787', '#D7D7AF', '#D7D7D7', '#D7D7FF', '#D7FF00', '#D7FF5F',

	/* 192 */ '#D7FF87', '#D7FFAF', '#D7FFD7', '#D7FFFF', '#FF0000', '#FF005F',
	/* 198 */ '#FF0087', '#FF00AF', '#FF00D7', '#FF00FF', '#FF5F00', '#FF5F5F',
	/* 204 */ '#FF5F87', '#FF5FAF', '#FF5FD7', '#FF5FFF', '#FF8700', '#FF875F',
	/* 210 */ '#FF8787', '#FF87AF', '#FF87D7', '#FF87FF', '#FFAF00', '#FFAF5F',
	
	/* 216 */ '#FFAF87', '#FFAFAF', '#FFAFD7', '#FFAFFF', '#FFD700', '#FFD75F',
	/* 222 */ '#FFD787', '#FFD7AF', '#FFD7D7', '#FFD7FF', '#FFFF00', '#FFFF5F',
	/* 228 */ '#FFFF5F', '#FFFFAF', '#FFFFD7', '#FFFFFF', '#080808', '#121212',
	/* 234 */ '#1C1C1C', '#262626', '#303030', '#3A3A3A', '#444444', '#4E4E4E',

	/* 240 */ '#626262', '#626262', '#6C6C6C', '#767676', '#808080', '#8A8A8A',
	/* 246 */ '#949494', '#9E9E9E', '#A8A8A8', '#B2B2B2', '#BCBCBC', '#C6C6C6',
	/* 252 */ '#D0D0D0', '#DADADA', '#E4E4E4', '#EEEEEE', '#FFFFFF'
];