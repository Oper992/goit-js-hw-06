const ulEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulEl.length}`)
ulEl.forEach(ul => {
console.log(`Category: ${ul.querySelector("h2").textContent}`);
console.log(`Elements: ${ul.querySelectorAll('li').length}`);
})