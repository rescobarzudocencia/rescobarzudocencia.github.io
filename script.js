const x=getRandomInt(10);
const y=getRandomInt(10);
const coordenada = x.toString()+y.toString();
console.log(coordenada);
let intentos_usuario=10;
let fin = true;
document.addEventListener("DOMContentLoaded", () => {
    const filas = 10;
    const columnas = 10;
    const contenedor = document.getElementById('contenedor-tabla');
    const tabla = document.createElement('table');
    tabla.id = 'miTabla';
    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');
        
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');
            
            // --- ASIGNACIÓN DE ID ÚNICO ---
            // Formato: celda-fila-columna (ej: celda-2-5)
            celda.id = `${i}${j}`;
            
           // celda.textContent = `${i},${j}`; 
           celda.textContent = '   ';
            fila.appendChild(celda);
        }
        
        tabla.appendChild(fila);
    }
    
    contenedor.appendChild(tabla);
    celdas();
});


function celdas(){
     const tabla = document.getElementById('miTabla');
     const inento = document.getElementById('intentos');
     const rosa_vientos = document.getElementById('imagen');

  tabla.addEventListener('click', function(e) {
   if(fin){
      if (e.target.tagName === 'TD') {
          if(coordenada===e.target.id){
            e.target.classList.add('victoria');
             fin=false;
              inento.textContent= 'Enhorabuena ha encontrado el tesoro ';
          }else{
            e.target.classList.add('fallo');
            intentos_usuario = intentos_usuario -1;
            inento.textContent= 'Numero de Intentos: ' + intentos_usuario.toString();
            let x_buscador=e.target.id[0];
            let y_buscador=e.target.id[1];
            if (parseInt(x_buscador)<parseInt(x) && parseInt(y_buscador) === parseInt(y) ){
              rosa_vientos.src='sur.png';
            }else if(parseInt(x_buscador)>parseInt(x) && parseInt(y_buscador) === parseInt(y)){
              rosa_vientos.src='norte.png';
            }else if(parseInt(x_buscador)===parseInt(x) && parseInt(y_buscador) < parseInt(y)){
              rosa_vientos.src='este.png';
            }else if(parseInt(x_buscador)==parseInt(x) && parseInt(y_buscador) > parseInt(y)){
              rosa_vientos.src='oeste.png';
            }else if(parseInt(x_buscador)>parseInt(x) && parseInt(y_buscador) > parseInt(y)){
              rosa_vientos.src='noroeste.png';
            }else if(parseInt(x_buscador)<parseInt(x) && parseInt(y_buscador) < parseInt(y)){
              rosa_vientos.src='sureste.png';
            }else if(parseInt(x_buscador)<parseInt(x) && parseInt(y_buscador) > parseInt(y)){
              rosa_vientos.src='suroeste.png';
            }else{
              rosa_vientos.src='nordeste.png';
            }
            if(intentos_usuario===0){
              inento.textContent= 'Ha llegado al limite de intentos ';
              fin=false;
            }

          }
         
      }
   }
  });
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

