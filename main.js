
$('.btn-default').click(function () {
	var firstName=$("fname").val()
	var lastName=$("lname").val();
	var pass=$("pass").val();
	var cpass=$("cpass").val();
	var email=$("email").val();

	if (firstName ===undefined || lastName ===undefined || pass ===undefined  || cpass ===undefined || email ===undefined) {
		alert("PLEASE FILL ALL REQUIRED FIELDS")
	}
})

