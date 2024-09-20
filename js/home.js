document.getElementById('btn-add-money').addEventListener('click',function(event){
     event.preventDefault();
     const addMoneyInput=document.getElementById('input-add-money').value;
    
     const pinNumber=document.getElementById('input-pin').value;
     
     if (pinNumber==='1234') {
          let balance = document.getElementById('account-balance').innerText;

        let addBalance=parseFloat(addMoneyInput);
        let currentBalance= parseFloat(balance);
        let newBalance= addBalance+currentBalance;
        document.getElementById('account-balance').innerText=newBalance;

        
          
          
     }
     else{
          alert('Incorrect PIN')
     }

     
})
