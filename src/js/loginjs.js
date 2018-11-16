import '../css/stylesheet.css';
import '../../assets/Card1.jpg';

function validation() {
            let usrname = document.login.usrnm.value;
            let passWord = document.login.psw.value;

            if (usrname == "" || passWord == "") {
                alert("Field should not be empty!!");
                return;
            }

            if (usrname == "admin" && passWord == "admin"){
                document.getElementById("form").action = "home.html"
            }

    
        }
