function checkCookie()
{

var user = getCookie("username");
if(user!=""){
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




window.localStorage.setItem("tiss","bajs");

var value = window.localStorage.getItem("tiss");

var keyName = window.localStorage.key(0);

alert(value);

}