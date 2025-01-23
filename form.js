function handleLogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const errorMsg=document.getElementById('error');

    const LoginData=[
        {username:"Nivetha E",password:"123"},
        {username:"Nivi",password:"456"},
    ]


const isValid=LoginData.some((user)=>user.username===username && user.password===password);

if(isValid){
    window.location.href="flexbox.html"
    errorMsg.innerText="Login Successful!"
}
else{
    errorMsg.innerText="Invalid Credentials!"
}
}