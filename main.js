function makeData(firstName, lastName, pass, cpass, email){
return {
	firstname : firstName,
    lastname : lastName,
    pass : pass,
    cpass : cpass,
    email : email
}
}
//declaring a variable for database
var contact = [];
	
// alert message in the registration page
// adding new registered contact to contacts array
$('#button').click(function() {
	
	var firstName=$("#fname").val();
	var lastName=$("#lname").val();
	var pass=$("#pass").val();
	var cpass=$("#cpass").val();
	var email=$("#email").val();

	if (firstName ==="" && lastName ==="" && pass ===""  && cpass ==="" && email ==="") {
		alert("PLEASE FILL ALL REQUIRED FIELDS")
	} else if (firstName !=="" && lastName !=="" && pass === cpass && email !=="" ) {
		alert("YOU HAVE SUCCESSFULLY SIGNED IN");
		var data = makeData(firstName, lastName, pass, cpass, email)
		contact.push(data)
		console.log(contact);
	}
		})

// alert message in the sign-in page
$('#button2').click(function() {
	var userName=$("#user").val();
	var password=$("#password").val();
	if (userName ==="" && password ==="") {
		alert("PLEASE FILL ALL REQUIRED FIELDS")
	} else {
		alert("YOU HAVE SUCCESSFULLY SIGNED IN")
		}	
	})





