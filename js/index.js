var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var password = document.getElementById('password');
var incorect = document.getElementById('incorect')
var corect = document.getElementById('corect')
var btnLogin = document.getElementById('btnLogin')

var allinformation = [];
if(localStorage.getItem('allinformation') !=null){
     allinformation =JSON.parse(localStorage.getItem('allinformation'))
}

//for check inputs is empty or not
function isLoginEmpty() {

      if (password.value == "" || userEmail.value == "") {
          return false
      } else {
          return true
      }
  }
  // ============= for login================
  function login() {
      
      if (isLoginEmpty() == false) {
          incorect.innerHTML = 'All inputs is required'
          return false
      }
      var userPass = password.value
      var email = userEmail.value  
      for (var i = 0; i < allinformation.length; i++) {
        console.log(allinformation[i]);
          if (allinformation[i].userEmail === email && allinformation[i].password === userPass)

       {
              localStorage.setItem('sessionUsername', allinformation[i].userName)
             
              btnLogin.setAttribute('href' ,"./home.html")
          } else {
            incorect.innerHTML='incorrect email or password'
          }
      }
  
  }



