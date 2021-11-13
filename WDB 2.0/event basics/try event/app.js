const btn = document.querySelector('#btn1');
const h1 = document.querySelector('h1');

btn.addEventListener('click', ()=>{
	const newcolor = makeRandColor();
	document.body.style.backgroundColor = newcolor;
	h1.innerText = newcolor;
})

const makeRandColor = () =>{
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
}