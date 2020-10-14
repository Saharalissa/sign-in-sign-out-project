
function check() {
	var firstName=document.getElementById("fname");
	var lastName=document.getElementById("lname");
	var pass=document.getElementById("pass");
	var cpass=document.getElementById("cpass");
	var email=document.getElementById("email");

	
	if (firstName.value==="" || lastName.value==="" || pass.value==="" || cpass.value==="" email.value==="") {
		alert("PLEASE SELECT GENDER")
	}
}
