const userinput = document.getElementById("userinput");
const userpassword = document.getElementById("userpassword");

const checkuser = document.getElementById("checkuser");
const checkpassword = document.getElementById("checkpassword");



// function signup() {
//     const userVal = userinput.value;
//     const passwordVal = userpassword.value;
//     let webtask = localStorage.getItem("username");
//     let passtask = localStorage.getItem("password");
//     if (webtask == null) {
//         taskObj = [];
//         passObj = [];

//     }
//     else {
//         taskObj = JSON.parse(webtask);
//         passObj = JSON.parse(passtask);

//     }

//     taskObj.push(userVal);
//     passObj.push(passwordVal);
//     localStorage.setItem("username", JSON.stringify(taskObj));
//     localStorage.setItem("password", JSON.stringify(passObj));

// }

function loginbtn() {

    if (checkuser.value !== "" && checkpassword.value !== "" ) {
        
        const checkuserVal = checkuser.value;
        const checkuserPassword = checkpassword.value;
        let saver = document.getElementById("indexsaver");
        const index = localStorage.getItem("index");
        let webtask = JSON.parse(localStorage.getItem("username"));
        let passtask = JSON.parse(localStorage.getItem("password"));
        localStorage.setItem("showmodal" , "show");
        for (var i = 0; i < webtask.length; i++) {
            if (checkuser.value == webtask[i] && checkpassword.value == (passtask[i])) {
                localStorage.setItem("index", i);
                location.href = "./homepage.html";






            }
            else{
                alert("wrong login detais");
            }



        }

    }
    else{
        alert("invalid input");
    }
   




}










