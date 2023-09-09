function validateForm() {
    // Get the values from the form
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

    // Simple validation example (you can add more complex validation as needed)
    if (name === "" || email === "") {
      alert("Name and Email are required fields.");
      return false;
    }

    if (contactMethod === "call") {
      var phoneNumber = document.forms["form"]["ph-no"].value;
      if (phoneNumber === "") {
        alert("Phone number is required when choosing 'Call' as the contact method.");
        return false;
      }
    }

    return true;
}