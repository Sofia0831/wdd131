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


const projects = [
	{
		projectName: "Alina Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887202146881579/Alina.webp?ex=671b3279&is=6719e0f9&hm=bb68a4a85b0af7d112522ba8b7785a13388e8fceec65975941cba3db3d8ee7c6&"

	},
	{
		projectName: "Haven Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887202381496370/Haven.webp?ex=671b3279&is=6719e0f9&hm=f13e79c45d419d4e392b61e877a9101e66ac309d6be4c8d56500932640e1a2ad&"

	},
	{
		projectName: "Erato Sprite",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887202637615165/Erato.webp?ex=671b3279&is=6719e0f9&hm=df02f057eea5b2b0d208aa7f19ee1e9c2f4b4f5bf9352583467435799883e067&"

	},
	{
		projectName: "Haven Sketch",
		imageUrl:"https://cdn.discordapp.com/attachments/1237341719935193118/1298887202947862540/resize.webp?ex=671b3279&is=6719e0f9&hm=832fad2f35ee9061102f1dbc62ac38e9729bb402ed1977e2099aff3916768923&"

	},
	{
		projectName: "The Gals Sketch",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887150053490708/tumblr_59e03eb8671b072236138e2c1a258034_25799ed1_1280.webp?ex=671b326c&is=6719e0ec&hm=6e6e3ff4fb5eecf20fcac8c97ba67e24a618ed75871b6b9f5573f0c718889f0c&"
	
	},
	{
		projectName: "Alina Sketch",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887149365760010/462542697_895471092561697_7151148479145039673_n.webp?ex=671b326c&is=6719e0ec&hm=9f92ab7735a198665557ebc31f483eb17464ff8f42e2eac35ee6e423e178a19c&"

	},
	{
		projectName: "Birthday Collab 1",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887151341011016/miko_bday_icon.webp?ex=671b326d&is=6719e0ed&hm=367e28bf22ccc5b7337d4d47fd75bf061db35234899343108a73a2c225ff22b7&"

	},
	{
		projectName: "Birthday Collab 2",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887149768151071/sofya_bday_icon.webp?ex=671b326c&is=6719e0ec&hm=7acffc73c269db506f9ed5cf37a2caf038611e7d701287774f47f4e1adf5a3a9&"

	},
	{
		projectName: "Alina Illustration",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887149143457854/Alina_2.webp?ex=671b326c&is=6719e0ec&hm=b01dd75d9a52c50169cbb7b9a4aeb3a9e8b8b3c671171bfb84057b42f312b2d9&"

	},
	{
		projectName: "Haven and Alina Illustration",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887148891803668/bestie_portrait.webp?ex=671b326c&is=6719e0ec&hm=983151d0311360789821bf11689a2f16772c1bdc65a2aba7d090451f471d2bff&"

	},
	{
		projectName: "DTIYS Illustration 1",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887150619852830/received_3663632743852931.webp?ex=671b326c&is=6719e0ec&hm=f0f3497c176733ebed7c10219be3e0ebddf23925aa47d36360cca2852cf4f112&"

	},
	{
		projectName: "DTIYS Illustration 2",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1298887150837960754/modern_art_lol.webp?ex=671b326c&is=6719e0ec&hm=a8dbeccee058a8d4ce9ad25cbcae22f3c25fb015ae72392546c3f15566cf92c8&"

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
