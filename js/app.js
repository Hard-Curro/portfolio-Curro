console.log("NO HACER NADA AÚN")

document.getElementById('blue-button').addEventListener('click', cambiarColoresAzul);
document.getElementById('green-button').addEventListener('click', cambiarColoresVerde);
document.getElementById('reset-button').addEventListener('click', cambiarColoresOriginales);
  
  function cambiarColoresAzul() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'lightblue';
  }
  
  function cambiarColoresVerde() {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'lightgreen';
  }
  
  function cambiarColoresOriginales() {
    document.body.style.backgroundColor = '#3d3d3d';
    document.body.style.color = 'black';
  }
