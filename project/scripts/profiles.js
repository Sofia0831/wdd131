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


const profiles = [
	{
		profileName: "MikoCappuccino",
		titleName: "Artist Corner",
		imageUrl: "images/mikosprite.png",
		webLink: "https://mikocappuccino.carrd.co/"
	},
	{
		profileName: "Puddinheadart",
		titleName:"Computer Room",
		imageUrl: "images/puddinsprite.png",
		webLink: "https://sofiapantas.carrd.co/"
	},
	{
		profileName: "Yui",
		titleName: "Writing Desk",
		imageUrl: "images/yuisprite.png"
	}
];


createProfileCard();


const puddinimg = document.querySelector("#Puddinheadart")
puddinimg.addEventListener('click', () => {
	originalProfileCards = document.querySelectorAll('.profiles-card');

	document.querySelector(".projectsdiv").innerHTML = "";


})

function createProfileCard(){
	profiles.forEach(profile => {
		let card = document.createElement("section");
		card.className = "profiles-card";
		let title = document.createElement("h3");
		let name = document.createElement("h4");
		let link = document.createElement("a");
		let img = document.createElement("img");

		title.textContent = profile.titleName;
		name.textContent = profile.profileName;
		img.setAttribute("src", profile.imageUrl);
		img.setAttribute("alt", `a pixelated sprite of ${profile.profileName}`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "320");
		img.setAttribute("height", "217");

		link.setAttribute("href", "#");
		link.setAttribute("id",`${profile.profileName}`);
		link.setAttribute("title", `${profile.profileName}`);

		if (profile.titleName === "Artist Corner")
		{
			title.classList.add("miko");
		}
		else if (profile.titleName === "Computer Room")
		{
			title.classList.add("puddin");
		}
		else if (profile.titleName === "Writing Desk") 
		{
			title.classList.add("yui");
		}

		link.appendChild(img);

		card.appendChild(title);
		card.appendChild(name);
		card.appendChild(link);

		document.querySelector(".projectsdiv").appendChild(card);
	})
}

const puddinhead = [
	{

	}
]


