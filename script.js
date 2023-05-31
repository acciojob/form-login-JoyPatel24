function getFormvalue() {
  // Get the input values from the form
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;

  // Display the first and last name using alert()
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
