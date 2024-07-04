function toggleSubmitButton() {
    const termsCheckbox = document.getElementById('termsCheckbox');
    const submitButton = document.getElementById('login_Button');
    submitButton.disabled = !termsCheckbox.checked;
}

document.addEventListener('DOMContentLoaded', () => {
    const termsCheckbox = document.getElementById('termsCheckbox');
    const submitButton = document.getElementById('login_Button');
    submitButton.disabled = true;
    termsCheckbox.addEventListener('change', toggleSubmitButton);
});