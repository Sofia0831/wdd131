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
		projectName: "Alina Illustration",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1237341915339423764/Alina_2.png?ex=671ac235&is=671970b5&hm=060b0eb1e8d4c65ac2b6206477860a416be71f407163b34aa788a38715243419&"
	},
	{
		projectName: "Haven and Alina Illustration",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298853337726189588/bestie_portrait.png?ex=671b12ef&is=6719c16f&hm=386c3cc1c52ae1e782faa72c80cd162ab3a094c3006888e3c14d0f8fb4389493&"

	},
	{
		projectName: "Haven Sketch",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298859003886960692/resize.jpg?ex=671b1836&is=6719c6b6&hm=0a1ff97b79bd256d22b5eeff29623493253b48570e5fc7e2f1bbaaffca9dc2e3&"

	},
	{
		projectName: "The Gals Sketch",
		imageUrl: "https://64.media.tumblr.com/59e03eb8671b072236138e2c1a258034/154f875dc89a93e7-ff/s2048x3072/cfc7a0d3e73d3132695dff88bc039250d3f41c41.jpg"

	},
	{
		projectName: "DTIYS Illustration 1",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298861500206940160/received_3663632743852931.jpg?ex=671b1a89&is=6719c909&hm=5963cd047d516ced47453ee52e6aa44a73450783608f6c6b14b040c004bc2de9&"

	},
	{
		projectName: "DTIYS Illustration 2",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298861572696834099/modern_art_lol.png?ex=671b1a9a&is=6719c91a&hm=2c03b89854303666e4aac216da70dba5651aa30d70352809b03a4af18ab5f540&"

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
		img.setAttribute("height", "auto")

		card.appendChild(name);
		card.appendChild(img);

		document.querySelector(".projectsdiv").appendChild(card);
	})
}
