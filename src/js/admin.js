const btnLogin = document.getElementById('btnLogin');
const divLogin = document.getElementById('divLogin');

btnLogin.addEventListener('click', event =>{
  let admin = document.getElementById('inputAdmin').value;
  let password = document.getElementById('inputPassword').value;
  if(admin === admin && password === admin){
    divLogin.style.display = 'none';
  }else{
    alert('¡Verifica los datos ingresados!');
  }
})
