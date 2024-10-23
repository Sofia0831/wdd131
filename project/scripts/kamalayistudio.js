const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[0].textContent = `Copyright ©️ ${currentYear} KAMALAYI STUDIOS. Philippines`;
footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;


const image = document.querySelector('.socials');
image.addEventListener('animationend', () => {
image.classList.add('slide-in');
});

const projects = [
	{
		projectName: "Alina Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298714298671169681/Alina.png?ex=671a9171&is=67193ff1&hm=0aef646ca223f4a57e7498781fdaef1ca9adb2250272286501578a282593be05&"
	},
	{
		projectName: "Alina Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298714298671169681/Alina.png?ex=671a9171&is=67193ff1&hm=0aef646ca223f4a57e7498781fdaef1ca9adb2250272286501578a282593be05&"
	}
];

createArtCard(projects);


function createArtCard() {
	document.querySelector(".projects-container").innerHTML = "";
	projects.forEach(project => {
		let card = document.createElement("section");
		card.className = "art-card";
		let name = document.createElement("h3");
		let img = document.createElement("img");

		name.textContent = project.projectName;
		img.setAttribute("src", project.imageUrl);
		img.setAttribute("alt", `${project.projectName}`);
		img.setAttribute("loading", "lazy");	

		card.appendChild(name);
		card.appendChild(img);

		document.querySelector(".projects-container").appendChild(card);
	});
}