// Llamando inputs y trayendo data
const inputFloor = document.getElementById('inputFloor');
const inputCompany = document.getElementById('inputCompany');
const inputHost = document.getElementById('inputHost');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');

// generando funcion para enviar datos a base de datos(Firestore)

// llamando boton y asignando evento
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', sendData = () =>{

  let floor = inputFloor.value;
  let company = inputCompany.value;
  let host = inputHost.value;
  let name = inputName.value;
  let email = inputEmail.value;

  // Add a new document with a generated id.
db.collection("newVisitor").add({
  floor,
  company,
  host,
  name,
  email
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

});


