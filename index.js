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
// test
//1) "before all" hook:
// Error: Timeout of 5000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
// at Object.done (node_modules/mocha-jsdom/index.js:70:7)
// at /home/valefuri/phase-0-the-dom-modifying-elements-lab/node_modules/jsdom/lib/jsdom.js:312:18
// at processTicksAndRejections (node:internal/process/task_queues:78:11)
//I can't fix this problem.