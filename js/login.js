let userList = JSON.parse(localStorage.getItem("userList"))
console.log(userList)


const email = document.getElementById("email")
const password = document.getElementById("password")
const btn  = document.getElementById("btn")

btn.addEventListener("click",(e)=>
{
    e.preventDefault();
    let inputEmail = email.value
    let inputPassword = password.value
    for(let i=0 ; i<userList.length ; ++i)
    {
        if(userList[i].userEmail==inputEmail)
        {
            if(userList[i].userPassword==inputPassword)
            {
                window.location.href = "index.html"
                console.log("succes")
                break;
            }
        }
    }
    

})

