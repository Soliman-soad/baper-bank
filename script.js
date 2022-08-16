
// Navigation of pages start here 

document.getElementById('submit').addEventListener('click',()=>{
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    if(userEmail.value === 'mdsolimansoad@gmail.com' && userPassword.value === '12345'){
        window.location.href ='./bank.html'
    }else{
        alert('Wrong information')
    }
})