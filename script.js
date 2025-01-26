document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Replace these credentials with dynamic validation logic if needed
    const validStudentId = '12345';
    const validPassword = 'password123';

    if (studentId === validStudentId && password === validPassword) {
        errorMessage.textContent = ''; // Clear error message
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        errorMessage.textContent = 'Invalid Student ID or Password. Please try again.';
    }
});
