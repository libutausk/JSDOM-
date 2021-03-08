//I dalis
const mainByQuery = document.querySelector('main');
console.log(mainByQuery);
mainByQuery.classList.add('body');
//arba document.querySelector('main').classList.add('body');
//Jei butu ne po viena, tada taip lengvai nepasiimtume. Reiketu klases id ir t.t.

const h1ByQuery = document.querySelector('h1');
h1ByQuery.classList.add('heading');
console.log(h1ByQuery);
//arba document.querySelector('h1').classList.add('heading');

const formByQuery = document.querySelector('form');
formByQuery.classList.add('form');
console.log(formByQuery);

const ul = document.getElementById('todo');
const li = document.createElement('li');
li.classList.add('list-item');
li.innerText='blablabla';
ul.appendChild(li);


//II dalis
li.addEventListener('click', function(){
    li.classList.toggle('done');
});

//III dalis
const input = document.getElementById('input');
const button = document.getElementById('button');
button.addEventListener('click', function(){
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText=input.value;
    ul.appendChild(li);
});

li.addEventListener('dblclick', function(){
    ul.removeChild(li);
}); //Ištrina tik patį pirmąjį elementą


