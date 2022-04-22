const themes: any = [
	{
		'--main-background': 'hsl(222, 26%, 31%)',
		'--toggle-background': 'hsl(223, 31%, 20%)',
		'--keypad-background': 'hsl(223, 31%, 20%)',
		'--screen-background': 'hsl(224, 36%, 15%)',
		'--key-background-1': 'hsl(225, 21%, 49%)',
		'--key-shadow-1': 'hsl(224, 28%, 35%)',
		'--key-background-2': 'hsl(6, 63%, 50%)',
		'--key-shadow-2': 'hsl(6, 70%, 34%)',
		'--key-background-3': 'hsl(30, 25%, 89%)',
		'--key-shadow-3': 'hsl(28, 16%, 65%)',
		'--text-color-1': 'hsl(0, 0%, 100%)',
		'--text-color-2': 'hsl(221, 14%, 31%)',
		'--key-text-1': 'hsl(221, 14%, 31%)',
		'--key-text-2': 'hsl(0, 0%, 100%)',
		'--key-text-3': 'hsl(0, 0%, 100%)',
	},
	{
		'--main-background': 'hsl(0, 0%, 90%)',
		'--toggle-background': 'hsl(0, 5%, 81%)',
		'--keypad-background': 'hsl(0, 5%, 81%)',
		'--screen-background': 'hsl(0, 0%, 93%)',
		'--key-background-1': 'hsl(185, 42%, 37%)',
		'--key-shadow-1': 'hsl(185, 58%, 25%)',
		'--key-background-2': 'hsl(25, 98%, 40%)',
		'--key-shadow-2': 'hsl(25, 99%, 27%)',
		'--key-background-3': 'hsl(45, 7%, 89%)',
		'--key-shadow-3': 'hsl(35, 11%, 61%)',
		'--text-color-1': 'hsl(0, 0, 100%)',
		'--text-color-2': 'hsl(60, 10%, 19%)',
		'--key-text-1': 'hsl(60, 10%, 19%)',
		'--key-text-2': 'hsl(0, 0%, 100%)',
		'--key-text-3': 'hsl(0, 0%, 100%)',
	},
	{
		'--main-background': 'hsl(268, 75%, 9%)',
		'--toggle-background': 'hsl(268, 71%, 12%)',
		'--keypad-background': 'hsl(268, 71%, 12%)',
		'--screen-background': 'hsl(268, 71%, 12%)',
		'--key-background-1': 'hsl(281, 89%, 26%)',
		'--key-shadow-1': 'hsl(285, 91%, 52%)',
		'--key-background-2': 'hsl(176, 100%, 44%)',
		'--key-shadow-2': 'hsl(177, 92%, 70%)',
		'--key-background-3': 'hsl(268, 47%, 21%)',
		'--key-shadow-3': 'hsl(290, 70%, 36%)',
		'--text-color-1': 'hsl(52, 100%, 62%)',
		'--text-color-2': 'hsl(52, 100%, 62%)',
		'--key-text-1': 'hsl(52, 100%, 62%)',
		'--key-text-2': 'hsl(0, 0%, 100%)',
		'--key-text-3': 'hsl(0, 0%, 0%)',
	},
];

const changeTheme = (themeId: number) => {
	for (let key in themes[themeId]) {
		console.log(key, themes[themeId][key]);
		document.documentElement.style.setProperty(key, themes[themeId][key]);
	}
};

export default changeTheme;
