class Producto{
    constructor(identificador, nombre, precio, descripcion, estado) {
        this.identificador = identificador;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.estado = estado;
    }

}
/* Esta clase permite que el objeto producto se refleje en la interfaz.
Ya que la interfaz de usuario interactua con el HTML*/
class UI {
    addProduct(producto){
        const listaProducto = document.getElementById('product-list');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
            <div class="card text-left font-weight-bold newdiv mb-5">
                <div class="card-body">
                    <strong>Identificador</strong>: ${producto.identificador}
                    <strong>Nombre</strong>: ${producto.nombre}
                    <strong>Precio</strong>: ${producto.precio}
                    <strong>Descripción</strong>: ${producto.descripcion}
                    <strong>Estado</strong>: ${producto.estado}
                    <a href="" class= "btn btn-danger font-weight-bold" name "delete">eliminar</a>
                </div>
            </div>
        `;
        listaProducto.appendChild(elemento);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(elemento) {
        if(elemento.name === 'delete') {
            elemento.parentElement.parentElement.parentElement.remove();
             
        }
    }       
    
    ShowMessage(message, cssStyle) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssStyle} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Mensaje Registro exitoso
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        },3000);
    }

}

// Eventos DOM
document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const identificador = document.getElementById("identificador").value;
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const descripcion = document.getElementById("descripcion").value;
        const estado = document.getElementById("estado").value;         
        const producto = new Producto(identificador, nombre, precio, descripcion, estado);
        const ui = new UI();

        ui.addProduct(producto);
        ui.resetForm();
        ui.ShowMessage('Producto guardado satisfactoriamente', 'success');
        e.preventDefault();
    });

document.getElementById('product-list').addEventListener('click', function(e) {
  const ui = new UI();
  ui.deleteProduct(e.target)
});




 
    
    
    

