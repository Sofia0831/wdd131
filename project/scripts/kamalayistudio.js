const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;


document.addEventListener('DOMContentLoaded', () => {
	const fadingElement = document.querySelector('.socials');
	fadingElement.classList.add('visible');
});


const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[0].textContent = `Copyright ©️ ${currentYear} KAMALAYI STUDIOS. Philippines`;
footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;


const projects = [
	{
		projectName: "Alina Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298714298671169681/Alina.png?ex=671a9171&is=67193ff1&hm=0aef646ca223f4a57e7498781fdaef1ca9adb2250272286501578a282593be05&"
	},
	{
		projectName: "Haven Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298714298226315285/Haven.png?ex=671a9171&is=67193ff1&hm=7f0ac0295946e76da5dd4d8c6642d35da8e57d522ea3b17ad1a11eb37c9838c3&"
	},
	{
		projectName: "Erato Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298714297807143002/Erato.png?ex=671a9171&is=67193ff1&hm=766fb4a733b7bb888a10ff4ac43726b34ae7f1c586b7e79366cb6acd190f48ff&"
	},
	{
		projectName: "Alina Portrait",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1237341915339423764/Alina_2.png?ex=671ac235&is=671970b5&hm=060b0eb1e8d4c65ac2b6206477860a416be71f407163b34aa788a38715243419&"
	}
];

document.addEventListener('DOMContentLoaded', () => {
	createArtCard();
  });

function createArtCard() {
	projects.forEach(project => {
		let card = document.createElement("section");
		card.className = "art-card";
		let name = document.createElement("h3");
		let img = document.createElement("img");

		name.textContent = project.projectName;
		img.setAttribute("src", project.imageUrl);
		img.setAttribute("alt", `${project.projectName}`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "100%")
		img.setAttribute("height", "100%")

		card.appendChild(name);
		card.appendChild(img);

		document.querySelector(".projectsdiv").appendChild(card);
	})
}
