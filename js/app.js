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
  
  function filtrarProyectos() {
    var tecnologiaSeleccionada = document.getElementById("filtro").value;
    var proyectos = document.getElementById("proyectos").children;
    for (var i = 0; i < proyectos.length; i++) {
      var proyecto = proyectos[i];
      var tecnologias = proyecto.getAttribute("data-tecnologia");
      if (tecnologiaSeleccionada === "todas" || tecnologias.indexOf(tecnologiaSeleccionada) !== -1) {
        proyecto.style.display = "block";
      } else {
        proyecto.style.display = "none";
      }
    }
  }