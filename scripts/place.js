const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[0].textContent = `©️ ${currentYear} ⭐ Sofia Florylle S. Pantas ⭐ Philippines`;
footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;