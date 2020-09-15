
 let color = ['red', 'green', 'blue', 'pink', 'violet', 'orange', 
'peach', 'lemon', 'apricot']

let btn = document.getElementById('btn');
let display = document.getElementById('span');

btn.addEventListener('click', function(){
	let randomColor = colors();
	document.body.style.backgroundColor = color[randomColor];
	display.innerHTML = color[randomColor]
})
         

function colors(){
	
	return Math.floor(Math.random()*color.length)
}                         

