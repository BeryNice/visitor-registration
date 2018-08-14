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

const templateVisitors = db.collection('newVisitor').onSnapshot((querySnapshot) => {
  printVisitorsTable.innerHTML = '';
  querySnapshot.forEach((doc) => {
    printVisitorsTable.innerHTML += `<tr>
    <td>${doc.data().clock}</td>
    <td>${doc.data().name}</td>
    <td>${doc.data().email}</td>
    <td>${doc.data().floor}</td>
    <td>${doc.data().company}</td>
    <td>${doc.data().host}</td>
  </tr>`;
  });
});

// funcion para filtrar libros
const searchVisitors = document.forms['search-visitor'].querySelector('input');

searchVisitors.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase();
  const visitors = printVisitorsTable.getElementsByTagName('tr');
  Array.from(visitors).forEach(function(visitor) {
    const certainVisitor = visitors.textContent;
    if (certainVisitor.toLowerCase().indexOf(term) != -1) {
      certainVisitor.style.display = 'block';
    } else {
      certainVisitor.style.display = 'none';
    }
  });
});

// const listeneres = (array) => {
//   search.addEventListener('keyup', () => {
//       if (search.value.trim().length > 0) {
//           const searching = search.value.toLowerCase();
//           const filteredVisitors = array.filter((doc) => {
//               return doc.name.toLowerCase().indexOf(searching) >= 0;
//           });

//           templateVisitors(filteredVisitors);
//       }
//   });
// }

