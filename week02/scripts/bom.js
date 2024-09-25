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

