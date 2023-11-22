const login =()=>{
    const uname = username.value
    const pswd = password.value
    if(!uname || !pswd){
        alert("Please fill the form")
    }else{
        console.log(`Usename: ${uname}, Password: ${pswd}`);
        localStorage.setItem("username",uname)
        alert("login successfull !!")
        window.location = "dashboard.html"
    }
}