const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');


function addGoal(){
    const goal = inputEl.value;
    const newListItem = document.createElement('li');
    newListItem.textContent = goal;
    listEl.append(newListItem);
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);