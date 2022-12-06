function register() {
    const email = registerEmail.value;
    const phone = registerPhone.value;
    const uname = registerName.value;
    const pswd = registerPswd.value;

    const studentDetails = {
        email,
        phone,
        uname,
        pswd
    }
    if (email in localStorage) {
        alert('Account already registered with this email');
        window.location.href = "sign-up.html";
    } else {
        localStorage.setItem(email, JSON.stringify(studentDetails));
        alert('Account registration success');
        window.location.href = "./index.html"
    }
}