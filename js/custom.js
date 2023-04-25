/*Definir funcion addcarrito*/
function addCarrito(e) {
    /*obtener el elemento donde se hizo click*/
    let elementoBoton = e.target;
    /*obtener el elemento padre del boton*/
    let elementoArticulo = elementoBoton.parentElement;
    /*Array del articulo*/
    let objetoArticulo = new Array();
    /*Llenar los datos del Articulo*/
    objetoArticulo.push(elementoArticulo.querySelector("h4").innerHTML);
    objetoArticulo.push(elementoArticulo.querySelector(".precioOriginal").innerHTML);
    objetoArticulo.push(elementoArticulo.querySelector(".precioDescuento").innerHTML);
    objetoArticulo.push(elementoArticulo.querySelector(".precioFinal").innerHTML);
    /*Obtener elemento cuerpo de Modal*/
    let cuerpoModal = document.querySelector("#ventanaCarrito > div > div > div.modal-body");
    /*Vaciar cuerpo de Modal si no tiene items*/
    if (cuerpoModal.querySelector("table") == null) {
        cuerpoModal.innerHTML = "";
    }

    /*Crear nuevo elemento con el contenido del articulo */
    let itemModal = document.createElement("div");
    itemModal.innerHTML = `
        <table class="table">
            <tr>
              <td>
                <h5> ${objetoArticulo[0]}</h5>
                <p>precio original: <span class="precioOriginal ">${objetoArticulo[1]}</span>
              </td>
              <td style="min-width:120px;">
                <p class="precioDescuento">${objetoArticulo[2]}</p>
                <p class="precioFinal">${objetoArticulo[3]} </p>
              </td>
            </tr> 
        </table>




    `;
    /*Insertar el elemento en el cuerpo de Modal*/
    cuerpoModal.append(itemModal);
    /*Mensaje informando que se agregó el producto*/
    alert("Se agregó el producto al carrito");
}

/*Definir función limpiarCarrito*/
function limpiarCarrito(){
    /*Solicitar confirmación*/
    let estado=confirm("¿Estás seguro de limpiar el carrito?")
    if(estado){
        /*Obtener elemento cuerpo Modal*/
        let cuerpoModal = document.querySelector("#ventanaCarrito > div > div > div.modal-body")
       /*Reemplazar contenido*/
       cuerpoModal.innerHTML = `
       <picture>
            <img id="imageCarritoVacio" class="img-fluid mx-auto d-block" src="image/recursos/carrito vacio.png" alt="carrito vacio">
       </picture>
       <p class="text-center">Actualmente usted no cuenta con ningún producto.</p>
       `;
    }
   
}