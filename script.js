document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or simply by removing the event.preventDefault()
        // this.submit(); // Uncomment this line to allow the form to submit normally
    }
});
