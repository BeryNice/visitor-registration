// Con esto se inicializa firestore a través de Firebase
var db = firebase.firestore();

const btnLogin = document.getElementById('btnLogin');
const divLogin = document.getElementById('divLogin');
const containerTable = document.getElementById('container');

btnLogin.addEventListener('click', event => {
  let admin = document.getElementById('inputAdmin').value;
  let password = document.getElementById('inputPassword').value;
  if (admin === admin && password === admin) {
    divLogin.classList.add('d-none');
    containerTable.classList.remove('d-none');
  } else {
    alert('¡Verifica los datos ingresados!');
  }
});

const printVisitorsTable = document.getElementById('table');

db.collection('newVisitor').onSnapshot((querySnapshot) => {
  printVisitorsTable.innerHTML = '';
  querySnapshot.forEach((doc) => {
    printVisitorsTable.innerHTML += `
    <td>${doc.data().clock}</td>
    <td>${doc.data().name}</td>
    <td>${doc.data().email}</td>
    <td>${doc.data().floor}</td>
    <td>${doc.data().company}</td>
    <td>${doc.data().host}</td>
  </tr>`;
  });
});