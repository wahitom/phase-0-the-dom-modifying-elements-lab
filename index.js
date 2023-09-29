// Write your code here!
const main = document.querySelector('main') //select & remove element
main.remove();

const newHeader = document.createElement('h1');//create new Element
newHeader.id = 'victory';                       //add id
newHeader.innerHTML = "Miriam is the champion"; //add text

