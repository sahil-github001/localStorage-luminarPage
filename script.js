function login() {
    const mail = loginEmail.value;
    const pswd = loginPswd.value;
    const studentDetails = JSON.parse(localStorage.getItem(mail));

    if (mail in localStorage) {
        if (pswd == studentDetails.pswd) {
            alert('login successfully');
            window.location.href = "./home.html";

            const uname = studentDetails.uname;
            localStorage.setItem('sentvalue', JSON.stringify(uname));
        } else {
            alert('incorrect password');
        }

    } else {
        alert("No account found");
    }

}