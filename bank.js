document.getElementById('deposit-btn').addEventListener('click',()=>{
    const totalAmount = document.getElementById('total-amount');
    const totalDeposit = document.getElementById('total-deposit');
    const currentDeposit = document.getElementById('current-deposit');
    const depositAmount = document.getElementById('deposit-amount');

    if( isNaN(parseInt(depositAmount.value)) === false && parseInt(depositAmount.value) >= 0 ){
        currentDeposit.innerText = depositAmount.value;
        totalDeposit.innerText = parseInt(totalDeposit.innerText) + parseInt(depositAmount.value);
        totalAmount.innerText = parseInt(totalAmount.innerText) + parseInt(depositAmount.value);
        depositAmount.value = ''
    }else if(parseInt(depositAmount.value)<0){
        alert('Please enter positive value');
    }else{
        alert('Enter numbers');
    }
})
document.getElementById('withdraw-btn').addEventListener('click',()=>{
    const totalAmount = document.getElementById('total-amount');
    const totalWithdraw = document.getElementById('total-withdraw');
    const currentWithdraw = document.getElementById('current-withdraw');
    const withdrawAmount = document.getElementById('withdraw-amount');

    if( isNaN(parseInt(withdrawAmount.value)) === false && parseInt(withdrawAmount.value) >= 0 && parseInt(withdrawAmount.value)<= parseInt(totalAmount.innerText)){
        currentWithdraw.innerText = withdrawAmount.value;
        totalWithdraw.innerText = parseInt(totalWithdraw.innerText) + parseInt(withdrawAmount.value);
        totalAmount.innerText = parseInt(totalAmount.innerText) - parseInt(withdrawAmount.value);
        withdrawAmount.value=""
    }else if(parseInt(withdrawAmount.value)<0){
        alert('Please enter positive value');
    }else if(parseInt(withdrawAmount.value)>parseInt(totalAmount.innerText)){
        alert('No sufficient balance');
    }else{
        alert('Enter number');
    }
})