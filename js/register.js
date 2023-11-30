function register() {

	var name = document.getElementById("name").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("msg").value;
	
	var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if(name == '' || lname =='' || email == '' || msg == '') {							
		alert("Potrebno je ispuniti sva polja");
	}
	else if (!email_val.test(email)) {
		alert("Unesite ispravnu e-mail adresu");
	}
	else {
		alert("Uspješno ste poslali prijavu za posao.\nJavit ćemo Vam se u najkraćem mogućem roku.");
		window.location.href;
	}
}