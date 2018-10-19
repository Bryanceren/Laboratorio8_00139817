const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

let cont=1;
var bitacoras=[];
var formulario=document.getElementById('bitacora');
/* 3 Se guarda el formulario con sus campos fecha actividad,descripcion y cantidad horas*/
/* Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo. */
/* Contiene cada uno de los elementos tipo input del formulario */
/* tr contiene las filas y td las celdas de la tabla*/
/* content es el nodo de texto en el cual se guarda el contenido de item */
/* tbody contendra la nueva fila de datos llenada en el formulario*/
/* La funcion lo que hace es iterar el formulario para obtener los valores actuales de cada campo y crear filas que se escriben en la tabla*/
/* Propiedad que devuelve el primer hijo del nodo en el arbol o null en caso que el nodo no tenga hijos*/
/* En la tabla se eliminara la primera fila al ser el primer hijo de l nodo tabla */
/* Asignamos a los hijos del nodo item o dicho de otra forma cada celda por fila, los valores de los inputs */
/* Accedemos a todos los elementos con la clase .tabla-btc y a las tags tbody  */
/* No se muestran los datos ingresados en los input en la tabla */
/* Se muestran los datos ingresados en los input en la tabla que antes estaba vacia*/
formulario.addEventListener("submit", (evt) => {

});

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
 }); 

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
 }); 


formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    if (validarFormulario(formulario)){
        let bitacora = { 
            cant:cont, 
            fecha: formulario[1].value, 
            descripcion: formulario[2].value, 
            cantidad: formulario[3].value 
        } 
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    }
 }); 

const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     tr.setAttribute("class", "click"); 
     tr.appendChild(td); 
    }); 
   tbody.appendChild(tr); 
} 

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
}

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
      
     }); 
    }) 
} 

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
     bitacoras.forEach(item => { 
      crearElemento(item, document.querySelector(".tabla-btc tbody")); 
     }); 
     agregar(); 
 } 
 
 var validarFormulario = (formulario) => {
     var flag = true;
     for (let i= 1; i < formulario.length; i++){
         if (formulario[i].value == "" || formulario[i].value == null){
             formulario[i].style.borderColor = "red";
             flag = false;
         }else{
             formulario[i].style.borderColor = "green";
         }
     }
 
     return flag;
 }
 