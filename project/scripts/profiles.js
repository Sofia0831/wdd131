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
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1299051416316411925/mikosprite.png?ex=671bcb68&is=671a79e8&hm=3c1d71688f4792f433ef110b2272b3ecdd60d363af1b0e5f6ce3ea75672b11ec&"
	},
	{
		profileName: "Puddinheadart",
		titleName:"Computer Room",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1299051416555618325/puddinsprite.png?ex=671bcb68&is=671a79e8&hm=9e670a18d459aa643a64113bb604da755d1d105eb86a3c7a294d7889da5ba93d&"
	},
	{
		profileName: "Yui",
		titleName: "Writing Desk",
		imageUrl: "https://cdn.discordapp.com/attachments/1237341719935193118/1299051416085856346/yuisprite.png?ex=671bcb68&is=671a79e8&hm=f30b9e0aff0086818363c49a755756b5521b2d72fc544c533c24dac337f42f56&"
	}
];

createProfileCard();

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

