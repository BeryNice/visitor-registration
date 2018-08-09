// Llamando inputs y trayendo data
const inputFloor = document.getElementById('inputFloor');
const inputCompany = document.getElementById('inputCompany');
const inputHost = document.getElementById('inputHost');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const clock = document.getElementById('date');
const date = new Date();

clock.innerHTML = date.toUTCString();

// Captura de fotografia

var streaming = false,
  video = document.querySelector('#video'),
  canvas = document.querySelector('#canvas'),
  photo = document.querySelector('#photo'),
  startbutton = document.querySelector('#startbutton'),
  width = 320,
  height = 0;

navigator.getMedia = (navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);

navigator.getMedia(
  {
    video: true,
    audio: false
  },
  function(stream) {
    if (navigator.mozGetUserMedia) {
      video.mozSrcObject = stream;
    } else {
      var vendorURL = window.URL || window.webkitURL;
      video.src = vendorURL.createObjectURL(stream);
    }
    video.play();
  },
  function(err) {
    console.log('An error occured! ' + err);
  }
);

video.addEventListener('canplay', function(ev) {
  if (!streaming) {
    height = video.videoHeight / (video.videoWidth / width);
    video.setAttribute('width', width);
    video.setAttribute('height', height);
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    streaming = true;
  }
}, false);

function takepicture() {
  canvas.width = width;
  canvas.height = height;
  canvas.getContext('2d').drawImage(video, 0, 0, width, height);
  var data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
}

startbutton.addEventListener('click', function(ev) {
  takepicture();
  ev.preventDefault();
}, false);


// llamando boton y asignando evento
const registerBtn = document.getElementById('registerBtn');

// generando funcion para enviar datos a base de datos(Firestore)
registerBtn.addEventListener('click', sendData = () =>{
  let floor = inputFloor.value;
  let company = inputCompany.value;
  let host = inputHost.value;
  let name = inputName.value;
  let email = inputEmail.value;
  
  
  // Add a new document with a generated id.
  db.collection('newVisitor').add({
    floor,
    company,
    host,
    name,
    email,
  })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
});


