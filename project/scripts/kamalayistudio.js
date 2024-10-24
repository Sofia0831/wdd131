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
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878843213582417/Alina.png?ex=671b2ab0&is=6719d930&hm=5de295261897b5fa1fc2a0c307c55a4cb01ece7b652ee84169fb5be8a5ae10c9&"

	},
	{
		projectName: "Haven Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878842714193972/Haven.png?ex=671b2ab0&is=6719d930&hm=7c3b9b4b638c8c260b5c1552103669f2459b5cbcfb70f9cb0f95f3e85ea1af85&"
	
	},
	{
		projectName: "Erato Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878841946902528/Erato.png?ex=671b2aaf&is=6719d92f&hm=ea4bf772415941282e76ae64eab97f216c4d796d49c669d127de525ee22556c4&"
		
	},
	{
		projectName: "Haven Sketch",
		imageUrl:"https://cdn.discordapp.com/attachments/1237341719935193118/1298878813043953797/resize.jpg?ex=671b2aa9&is=6719d929&hm=3514a078efa3ffb6759d3523c2da5a8d4ee10d534b970b44f3996990cbd385f1&"

	},
	{
		projectName: "The Gals Sketch",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878811407913051/tumblr_59e03eb8671b072236138e2c1a258034_25799ed1_1280.jpg?ex=671b2aa8&is=6719d928&hm=b51e33ed1bf22598d76e5bbcbf1759364a7c118c4936752dec4fb98dda66bb55&"

	},
	{
		projectName: "Alina Sketch",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878812217409567/462542697_895471092561697_7151148479145039673_n.jpg?ex=671b2aa8&is=6719d928&hm=ab0778e5811eb26f37d73bb6d0abe4203d394408e0651b6ad9f59cfc5b0cfbdb&"

	},
	{
		projectName: "Birthday Collab 1",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298881827674652692/miko_bday_icon.jpg?ex=671b2d77&is=6719dbf7&hm=9edf6efeaf4806ce55841c728a7fd225a087311cd6ce58b8b40b9dfb2a542a60&"

	},
	{
		projectName: "Birthday Collab 2",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878811961823252/sofya_bday_icon.jpg?ex=671b2aa8&is=6719d928&hm=1e5f2fa7229889ce3747bb384641fd6f0be29406423c03de73ce84f29fdfa0b1&"
	},
	{
		projectName: "Alina Illustration",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878812456751124/Alina_2.jpg?ex=671b2aa8&is=6719d928&hm=2c063037b260fcafe1e60103d844bf7c9c24518ce24de3151be7365e208c08d0&"

	},
	{
		projectName: "Haven and Alina Illustration",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298878812674850869/bestie_portrait.jpg?ex=671b2aa8&is=6719d928&hm=02a79a2d4e8eb01d17f47ea98282d3079aed59c45dda3c90e19dbda1a5e9307e&"

	},
	{
		projectName: "DTIYS Illustration 1",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298880626283380736/received_3663632743852931.jpg?ex=671b2c59&is=6719dad9&hm=25410bed1522223acf76cc9a815b88dbced5c44852d7bd4dd893ff57b366e26a&"

	},
	{
		projectName: "DTIYS Illustration 2",
		imageUrl:"https://cdn.discordapp.com/attachments/1237341719935193118/1298881091687550986/modern_art_lol.jpg?ex=671b2cc8&is=6719db48&hm=6db4a8a143c626f7010e27127ee93ee737c02ccc23321b3bbfdfc1c1053eec05&"

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
		img.setAttribute("width", "100%");
		img.setAttribute("height", "100%");


		card.appendChild(name);
		card.appendChild(img);

		document.querySelector(".projectsdiv").appendChild(card);
	})
}
