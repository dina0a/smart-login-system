var nameInput = document.getElementById('nameForm')
var emailInput = document.getElementById('emailForm')
var passInput = document.getElementById('passForm')
var notvalid = document.getElementById('validation')
var valid = document.getElementById('successValid')
var validEmailInput = document.getElementById('emailValid')
var emailexistInput = document.getElementById('emailexist')
var rejexEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
var signUp = []
if(localStorage.getItem('userList') != null){
    signUp = JSON.parse(localStorage.getItem('userList'))
}

//====================================
var emailInputSignin = document.getElementById('emailSignin')
var passInputSignin = document.getElementById('passSignin')

function sign_up(){
    if(nameInput.value=='' || emailInput.value == "" || passInput.value==''){
        notvalid.classList.remove('d-none')
        valid.classList.add('d-none')
    }else if( validEmail() == false){
        validEmailInput.classList.remove('d-none')
        valid.classList.add('d-none')
        notvalid.classList.add('d-none')
        emailexistInput.classList.add('d-none')
    }else if(exists() == true){
        emailexistInput.classList.remove('d-none')
        validEmailInput.classList.add('d-none')
        valid.classList.add('d-none')
        notvalid.classList.add('d-none')
    }
    
    else{
        emailexistInput.classList.add('d-none')
        notvalid.classList.add('d-none')
        valid.classList.remove('d-none')
        validEmailInput.classList.add('d-none')
        let user = {
            name:nameInput.value,
            eamil:emailInput.value,
            pass:passInput.value,
        }
        signUp.push(user)
        console.log(signUp)
        localStorage.setItem('userList' , JSON.stringify(signUp))
        window.location.href = './login.html';
    }
}

function validEmail(){
    if(rejexEmail.test(emailInput.value) == false){
        return false
    }
}

function exists(){
 for(var i=0 ; i<signUp.length; i++){

    if(signUp[i].eamil == emailInput.value){
        return true
    }
 }
}


//================== log in ====================


function login(){
    if(logintrue() == true){
        console.log('ok');
        document.getElementById('emailValidSignin').classList.add('d-none')
        document.getElementById('emptyInput').classList.add('d-none')
        // document.getElementById('hello-box').innerHTML = `<h2 class="text-center text-info">welcome ${nameInput.value}</h2>`
        window.location.href = './heloo.html';

    }else if(emailInputSignin.value =='' || passInputSignin.value ==''){
        console.log('All inputs is required');
        document.getElementById('emptyInput').classList.remove('d-none')
        document.getElementById('emailValidSignin').classList.add('d-none')
    }
    else if(logintrue()!=true){
        console.log('incorrect email or password');
        document.getElementById('emailValidSignin').classList.remove('d-none')
        document.getElementById('emptyInput').classList.add('d-none')
    }
}

function logintrue(){
    for(var i=0 ; i<signUp.length; i++){
       if(signUp[i].eamil == emailInputSignin.value && signUp[i].pass == passInputSignin.value){
           return true
       }
    }
   }

function displayName(){
    for(var i=0 ; i<signUp.length; i++){
        var temp = signUp[i].name
    }
    // console.log(temp);
    document.getElementById('hellobox').innerHTML = "welcome " +  temp

   }
   displayName()

function logout(){
    // localStorage.removeItem('userList')
    window.location.href = './login.html';
}