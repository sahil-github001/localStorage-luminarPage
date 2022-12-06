
let uname = localStorage.getItem("sentvalue");
uname = uname.replace(/['"]+/g, '')
uname = uname.toUpperCase();
document.getElementById("head1").innerHTML = `Welcome ${uname}`;
