//VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const contenidoCarrito = document.querySelector('#lista-carrito tbody');

//LISTENERS

eventos();

function eventos(){
    //se ejecuta cuando damos click en el curso
    cursos.addEventListener('click', comprarCurso);
    //se ejecuta cuando damos click en X (eliminar)
    carrito.addEventListener('click', borrarElementoCarro);
}
//FUNCIONES
//funcion que añade el curso al carrito
function comprarCurso(e){
   e.preventDefault();

   /*si hace click en "agregar al carrito", entonces creamos una constante
    que acceda a toda la informacion del producto que se encuentra en el carrito*/
   if(e.target.classList.contains('agregar-carrito')){
       const curso = e.target.parentElement.parentElement;
        // se ejecuta otra funcion y mandamos los parametros de la constante creada.
       leerDatosCurso(curso);
   }
}
function leerDatosCurso(cursoDatos){
    //creamos un objeto con los datos obtenidos en la funcion anterior y accedemos a ellos
    const informacionCurso = {
        imagen: cursoDatos.getElementsByTagName('img')[0].src,
        titulo: cursoDatos.getElementsByTagName('h4')[0].textContent,
        precio: cursoDatos.querySelector('span').textContent,
        id: cursoDatos.querySelector('a').getAttribute('data-id'),
    }
    insertarAlCarrito(informacionCurso);
}
function insertarAlCarrito(datos){
    /*una vez obtenidos los datoscreamos un elemnto donde se insertaran
    en el carrito*/
    const seAgrega = document.createElement('tr');
    //a traves de templates literals agregamos los elementos en el html
    seAgrega.innerHTML = `
        <td>
        <img src="${datos.imagen}">
        </td>
        <td>${datos.titulo}</td>
        <td>${datos.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id"${datos.id}">x</a>
        </td>
    `;
    contenidoCarrito.appendChild(seAgrega);
}
function borrarElementoCarro(e){
    e.preventDefault();
    //aplicamos delegation, y si el elemento selecionado contiene la clase "borrar-curso", se elimina.
  if(e.target.classList.contains('borrar-curso')){

      const borrarCurso = e.target.parentElement.parentElement.remove(); 
    }
}