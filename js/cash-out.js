document.getElementById('btn-cash-out').addEventListener('click',function(event){
     event.preventDefault();
     const cashMoneyInput=document.getElementById('input-cash-out').value;
    
     const pinNumber=document.getElementById('input-cash-out-pin').value;
     
     if (pinNumber==='1234') {
          let balance = document.getElementById('account-balance').innerText;

        let cashBalance=parseFloat(cashMoneyInput);
        let currentBalance= parseFloat(balance);
        let newBalance= currentBalance-cashBalance;
        document.getElementById('account-balance').innerText=newBalance;
                    
     }
     else{
          alert('Incorrect PIN')
     }

     
})
