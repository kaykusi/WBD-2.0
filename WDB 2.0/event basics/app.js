const btn = document.querySelector('#v2');

btn.onclick = function(){
	console.log('you clicked me');
}
const btn2 = document.querySelector('#v3');

btn2.addEventListener('click', ()=>{
	console.log('you clicked me');
})