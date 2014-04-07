function checkCookie()
{

var user = getCookie("username");
if(user!="" && user!=null){
	alert("Velkommen igjen " + user);
}
else{
	user = prompt("Vennligst skriv inn ditt navn:","");
	if(user!="" && user!=null){
		setCookie("username",user);
	}
}

function getCookie(cname){
	var username = window.localStorage.getItem(cname);
	return username;
}

function setCookie(cname,cvalue){
	window.localStorage.setItem(cname,cvalue);
}
}