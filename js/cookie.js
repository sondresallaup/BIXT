function checkCookie(){
	var user = getCookie("brukernavn");
	if(isLoggedIn(user)){
		window.location.href = 'main.html';
	}
	else{
		/*user = prompt("Brukernavn:","");
		if(user=="sondre"){
			password = prompt("Passord:","");
			if(password == "heihei"){
				setCookie("brukernavn",user);
			}
		}*/
}

function getCookie(cname){
	var username = window.localStorage.getItem(cname);
	return username;
}

function setCookie(cname,cvalue){
	window.localStorage.setItem(cname,cvalue);
}

function isLoggedIn(user){
	return (user!="" && user!=null);
}


}