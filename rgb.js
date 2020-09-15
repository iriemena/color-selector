
 let color = ['rgb(250,250,250)','rgb(150,150,150)','rgb(50,20,25)',]

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

