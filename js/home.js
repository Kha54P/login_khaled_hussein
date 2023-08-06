// to say welcome in home page
var value = localStorage.getItem('sessionUsername')
if (value) {
    document.getElementById('goWelcome').innerHTML =   `<h1> Welcome ${value}</h1>`
}





