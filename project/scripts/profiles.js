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
		imageUrl: "images/mikosprite.png"
	},
	{
		profileName: "Puddinheadart",
		titleName:"Computer Room",
		imageUrl: "images/puddinsprite.png"
	},
	{
		profileName: "Yui",
		titleName: "Writing Desk",
		imageUrl: "images/yuisprite.png"
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

const puddinheadArts = [
	{
		artTitle: "Birthday Collab 1",
		imageUrl: "images/gallery/abday.webp"
	},
    {
		artTitle: "Birthday Collab 2",
		imageUrl: "images/gallery/hbday.webp"
	},
	{
		artTitle: "Baybay Friends",
		imageUrl: "images/puddinhead/baybay.webp"
	},
	{
		artTitle: "DTIYS Illustration 2",
		imageUrl: "images/gallery/dtiys2.webp"
	},
	{
		artTitle: "Haven Sketch",
		imageUrl: "images/gallery/havensketch.webp"
	},
	{
		artTitle: "Ameri Azazel",
		imageUrl: "images/puddinhead/ameriazazel.webp"
	},
	{
		artTitle: "Rapacity-Commission",
		imageUrl: "images/puddinhead/commission.webp"
	},
	{
		artTitle: "One Palette Challenge",
		imageUrl: "images/puddinhead/onepalette.webp"
	},
	{
		artTitle: "Golden Hour",
		imageUrl: "images/puddinhead/goldenhour.webp"
	},
	{
		artTitle: "Lucas-Commission",
		imageUrl: "images/puddinhead/lucas.webp"
	},
	{
		artTitle: "UP Lente Arts Week",
		imageUrl: "images/puddinhead/uplenteartsweek.webp"
	},
	{
		artTitle: "Pokemon Girls",
		imageUrl: "images/puddinhead/pokemongirls.webp"
	},
	{
		artTitle: "The Lovers DTIYS",
		imageUrl: "images/puddinhead/theloversdtiys.webp"
	},
	{
		artTitle: "VC Collab",
		imageUrl: "images/puddinhead/vccollab.webp"
	},
	{
		artTitle: "Patolini-Commission",
		imageUrl: "images/puddinhead/commission3.webp"
	},
];

let puddinInfoDisplayed = false;
const puddinImg = document.querySelector("#Puddinheadart");
puddinImg.addEventListener('click', () => {
	if (!puddinInfoDisplayed)
	{
		puddinInfoDisplayed = true;

		const puddinInfo = document.createElement("div");
		puddinInfo.className = "profile-info";

		const name = document.createElement("h1");
		name.textContent = "Puddinheadart";
		puddinInfo.appendChild(name);

		const info = document.createElement("p");
		info.className = "info-paragraph";
		info.textContent = "Self-taught digital artist from the Philippines with a love for all things geeky and artsy. Sofia Pantas was born in the small province of Biliran. Growing up, they became fascinated with anime and manga and this interest led them to begin a hobby in drawing and eventually a dream in becoming an artist.";
		puddinInfo.appendChild(info);

		const galleryTitle = document.createElement("h2");
		galleryTitle.textContent = "ArtWork Gallery";
		puddinInfo.appendChild(galleryTitle);

		const gallery = document.createElement("div");
		gallery.className = "profile-gallery";
		puddinInfo.appendChild(gallery);

		puddinheadArts.forEach(art => {
			let puddincard = document.createElement("section");
			puddincard.className = "profile-art-card";
			let artName = document.createElement("h3");
			let artImg = document.createElement("img");
			artName.textContent = art.artTitle;
			artImg.setAttribute("src", art.imageUrl);
			artImg.setAttribute("alt", `${art.artTitle}`);
			artImg.setAttribute("loading", "lazy");
			artImg.setAttribute("width", "100%");
			artImg.setAttribute("height", "100%");
			puddincard.appendChild(artName);
			puddincard.appendChild(artImg);

			gallery.appendChild(puddincard);
		});

		document.querySelector("main").appendChild(puddinInfo);

		const closeButton = document.createElement("button");
		closeButton.className = "profile-button"
        closeButton.textContent = "Close";
        closeButton.addEventListener('click', () => {
            puddinInfo.remove();
            puddinInfoDisplayed = false;
        });
        puddinInfo.appendChild(closeButton);
	}

});





