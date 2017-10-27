function Save(){

window.localStorage['Events'] = document.getElementById('Events') .value;
document.getElementById('Events').value=null
window.localStorage['Month'] = document.getElementById('Month') .value;
document.getElementById('Month').value=null
	
window.localStorage['Day'] = document.getElementById('Day') .value;
document.getElementById('day').value=null

