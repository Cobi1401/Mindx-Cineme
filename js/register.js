let userName=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let submit = document.getElementById("submit");
let check=true;
let strLow = /[a-z]/;
let strUp = /[A-Z]/;
let userList=JSON.parse(localStorage.getItem("userList")) || []
console.log(userList);


function checkNum (str)
{
    for(let i=0 ; i<str.length ; ++i)
    {
        if (!isNaN(str[i]))
        {
            return true;
        } 
    }
    return false;
}



submit.addEventListener("click", ()=>
{
    if(password.value.length < 6 || password.value.length > 20)
    {
        check=false;
        console.log("length")
    }
    if(checkNum(password.value)==false)
    {
        check=false;
        console.log("num")
    }
    if(!strLow.test(password.value))
    {
        check=false;
        console.log("Low")
    }
    if(!strUp.test(password.value))
    {
        check=false;
        console.log("Up")
    }
    if(check)
    {
        let newUser = 
        {
            userName: userName.value,
            userEmail: email.value,
            userPassword: password.value,
        }  
        for(let i=0 ; i<userList.length; ++i)
        {
            if(userList[i].userName == newUser.userName )
            {
                console.log("ACC EXISTED");
                alert("Account already exists. Please try again with a different username or email.");
                check = false;
            }
            if(userList[i].userEmail == newUser.userEmail)
            {
                console.log("EMAIL EXISTED");
                alert("Email already exists. Please try again with a different email.");
                check = false;
            }
        }
        if(check)
        {
            userList.push(newUser);
            localStorage.setItem("userList", JSON.stringify(userList));
            alert("Registration successful! You can now log in with your new account.");
            setTimeout(()=>
            {
                 window.location.href= "login.html";
            },2000)
        }
        else check=true;
    }
    else
    {
        alert("Too Week PassWorld or Too Long ")
        check=true;
    }
});

