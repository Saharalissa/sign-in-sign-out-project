var contact = [];

	
// alert message in the registration page
$('#button').click(function() {
	var data = {};
	var firstName=$("#fname").val();
	var lastName=$("#lname").val();
	var pass=$("#pass").val();
	var cpass=$("#cpass").val();
	var email=$("#email").val();

	if (firstName ==="" && lastName ==="" && pass ===""  && cpass ==="" && email ==="") {
		alert("PLEASE FILL ALL REQUIRED FIELDS")
	} else if (firstName !=="" && lastName !=="" && pass === cpass && email !=="" ) {
		// alert("YOU HAVE SUCCESSFULLY SIGNED IN");
		data.Firstname = firstName;
        data.Lastname = lastName;
        data.Pass = pass;
        data.Email = email;

        contact.push(data);
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


