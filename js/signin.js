var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var password = document.getElementById('password');
var btnSignup = document.getElementById('btnSignup');
var incorect = document.getElementById('incorect')
var corect = document.getElementById('corect')
var btnLogin = document.getElementById('btnLogin')


var allinformation = [];
if(localStorage.getItem('allinformation') !=null){
     allinformation =JSON.parse(localStorage.getItem('allinformation'))
}
// for check email is exist
function isEmailExiist(){
    for(var i = 0 ; i<allinformation.length ; i++){   
    if(allinformation[i].userEmail == userEmail.value){
        return false;
    }
}
}

// to sign up 
btnSignup.onclick = ()=>{

      if(userName.value =='' || userEmail.value == ''   || password.value ==''){
            incorect.innerHTML = 'All inputs is required'
            corect.innerHTML = ''
      }else{

        var newData = {
            userName:userName.value,
            userEmail:userEmail.value,
            password:password.value,
            
        }
        if(isEmailExiist() == false){
            incorect.innerHTML = `email already exists`
            corect.innerHTML = ''
        }else{
                allinformation.push(newData)
                localStorage.setItem('allinformation',JSON.stringify(allinformation))
                console.log(newData)
                corect.innerHTML = 'success'
                incorect.innerHTML = ''
            }

        }

      }






