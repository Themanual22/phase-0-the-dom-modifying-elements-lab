main.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute("id","victory");

newHeader.innerHTML = "YOUR-NAME is the champion";

element.append('h1');
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);