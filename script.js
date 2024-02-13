function register(){
    
    
    const regDetails ={
        name: uname.value,
        bankid:bankid.value,
        email : email.value,
        phone : phone.value,
        password : password.value
    }
    if(regDetails.name =='' || regDetails.bankid =='' || regDetails.email =='' || regDetails.phone =='' || regDetails.password =='') {
        alert("Fields cannot be empty");
    
   }else{
    if( regDetails.bankid in localStorage){
        alert("BankId already exists")
        regform.reset();
    }else{



    localStorage.setItem(regDetails.bankid,JSON.stringify(regDetails));
    alert("Registration Successfull")
    window.location = './login.html'
    
   

}
}
}

function login(){
   const logDetails ={
    bankid : bankid.value,
    password: password.value
   }
if(logDetails.bankid =='' || logDetails.password==''){
    alert("Please enter the Bankid and Password ")
}else{
    if(logDetails.bankid in localStorage){
        const baankid =logDetails.bankid;
        const storedDetails = JSON.parse(localStorage.getItem(baankid));
        // console.log(storedDetails); Object
        if (storedDetails.password === logDetails.password){
               alert('Login Successfull')
               localStorage.setItem('loggedkey',JSON.stringify(logDetails))
               window.location ='./bank.html'
         }else{
            alert("Password doesnot match")
         }
    }else{
        alert(`Bankid doesn't exist`)
    }
}

}


function deposit() {
    event.preventDefault();
    
    const deposit = {
        amount: parseFloat(damount.value),
        password: dpassword.value
    };

    if (deposit.amount === '' || deposit.password === '') {
        alert('Please enter all the fields');
    } else {
        if (isNaN(deposit.amount) || deposit.amount <= 0) {
            alert("Please enter a valid value for amount");
        } else {
            const loggedKeyJSON = localStorage.getItem('loggedkey');
            if (loggedKeyJSON) {
                const loggedKey = JSON.parse(loggedKeyJSON);
                if (loggedKey.password === deposit.password) {
                    // Proceed with deposit logic
                    let addedAmount = deposit.amount;
                    let totalAmount = parseFloat(localStorage.getItem('totalamount') || 0); // Adjust key to 'totalamount'
                    totalAmount += addedAmount;
                    localStorage.setItem('totalamount', totalAmount); // Adjust key to 'totalamount'
                    
                    head.innerHTML = `Current Balance: ${totalAmount}`
                } else {
                    alert('Incorrect password.');
                }
            } else {
                alert('No user is logged in.'); // Handle if no user is logged in
            }
        }
    }
}
function withdraw(){
    event.preventDefault();
  const withdraw =
  {
    amount: wamount.value,
    password: wpassword.value
  }   
 if(withdraw.amount==''||withdraw.wpassword==''){
  alert('Please enter both amount and password')
 }
else{
    if(isNaN(withdraw.amount) ||withdraw.amount<0){
        alert('Enter a valid value for amount')
    }else{





  let totalamount = parseFloat(localStorage.getItem('totalamount'))
  console.log(totalamount);
if(withdraw.amount>totalamount || totalamount <= 0 ){ 
    alert('Insufficient Balance')
}else{
  let withdrawAmount = withdraw.amount;
  totalamount -= withdrawAmount;

  localStorage.setItem('totalamount',JSON.stringify(totalamount))
  head1.innerHTML = `Current Balance: ${totalamount}`
  alert(`Rs.${withdrawAmount} has been withdrawn from you account.Current Balance:${totalamount}`)
 
}}
}


}

function logOut(){
    localStorage.clear();
    window.location ='./login.html'
}

function Login(){
    window.location ='./login.html'
}
function Register(){
    window.location ='./register.html'
}