const imgCnt = document.querySelector(".imgCnt");

import { changeTheme, tehemeBtn } from "./Theme.js";

const image = {
	width: 200,
	height: 200,
};

let pagination = 1;

const getUrls = async (params) => {
	const question = await fetch(
		`https://picsum.photos/v2/list?page=${pagination}&limit=9`
	);
	pagination++;
	const res = await question.json();
	const links = res.map((key) => key.download_url);
	return links;
};

const renderImages = async (params) => {
	const links = await getUrls();

	links.forEach((el) => {
		const img = new Image(image.width, image.height);
		img.src = el;

		imgCnt.append(img);
	});
};
//scroll event

const scrollEvent = (params) => {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		renderImages();
	}
};

//nasluchiwanie
renderImages();

window.addEventListener("scroll", scrollEvent);

tehemeBtn.addEventListener("click", () => changeTheme(tehemeBtn));
