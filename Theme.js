const tehemeBtn = document.querySelector(".ThemeSwitch");
const root = document.querySelector(":root");

tehemeBtn.checked = true;

const darkTheme = {
	headerColor: "rgb(75, 75, 75)",
	textColor: "white",
	themeText: "rgba(53, 125, 173, 0.753)",
	backGround: "rgb(56, 56, 56)",
};

const lightTheme = {
	headerColor: "white",
	textColor: "black",
	themeText: "rgb(23, 10, 104)",
	backGround: "#b3b3b3",
};

let Theme = "dark";
//function

const changeTheme = (input) => {
	let actualTheme = {};

	if (input.checked) {
		Theme = "dark";
	} else {
		Theme = "light";
	}

	switch (Theme) {
		case "dark":
			actualTheme = darkTheme;
			break;

		case "light":
			actualTheme = lightTheme;
			break;
	}

	root.style.setProperty("--headerColor", actualTheme.headerColor);
	root.style.setProperty("--textColor", actualTheme.textColor);
	root.style.setProperty("--themeText", actualTheme.themeText);
	root.style.setProperty("--backGround", actualTheme.backGround);
};

export { changeTheme, tehemeBtn };
