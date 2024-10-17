const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector("#list");

// const li = document.createElement("li");

// const deleteButton = document.createElement("button")

// li.textContent = input.value;

// deleteButton.textContent = "X";

// li.append(deleteButton);

// list.append(li);

button.addEventListener("click",
    function() {
     const inputValue = input.value.trim();
   
     if (inputValue !== '') {
       const li = document.createElement("li");
       li.textContent = inputValue;
   
       const deleteButton = document.createElement("button");
       deleteButton.textContent = "❌";
   
       deleteButton.addEventListener("click", function() {
         li.remove();
         input.focus();
       });
   
       li.appendChild(deleteButton);
       list.appendChild(li);
   
       input.value = '';
     } else {
       alert("Please enter a chapter name.");
       input.focus();
     }
   });

   const input = document.querySelector('#favchap');
   const button = document.querySelector('button');
   const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => displayList(chapter));


button.addEventListener('click', () => {
  if (input.value != '') { 
    displayList(input.value);tted 
    chaptersArray.push(input.value);  
    setChapterList(); 
    input.value = ''; 
    input.focus(); 
  }
});


function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; 
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); 
    input.focus();
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1);

chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}