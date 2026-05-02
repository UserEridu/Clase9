import { useCarrito } from "../context/CarritoContext"; // 👈
import { Link } from "react-router-dom";

const CarProductos = ({item}) => {

   const { agregarAlCarrito, restarAlCarrito, carrito } = useCarrito();
   const enCarrito = carrito.find(producto => producto.id === item.id);

    return (
        <div className="col-md-3 mb-5">
            <div className="card h-100">
                <div className="card-header">
                   {enCarrito && (
                        <span className="position-absolute top-0 end-0 badge rounded-pill text-bg-warning fs-6 m-2">
                            {enCarrito.cantidad}
                        </span>
                    )}
                    <img src={item.thumbnail} alt="" className="img-fluid" />
                </div>
                <div className="card-body text-center">
                    <p>{item.title}</p>
                    <h2 className="text-success">{item.price}$</h2>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-outline-info btn-sm mx-3" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Modal</button>
                    <Link to={`/detalles/${item.id}/${item.title}`} className="btn btn-outline-danger btn-sm mx-3">Detalles</Link>
                
                    <div className="mt-2 pt-2 border-top">
                        <button 
                        className="btn btn-success btn-sm ms-3" 
                         onClick={() => agregarAlCarrito(item)}>
                            Agregar al carrito
                        </button>
                        {enCarrito && enCarrito.cantidad > 0 && (
                         <button 
                        className="btn btn-danger btn-sm ms-3 m-2" 
                         onClick={() => restarAlCarrito(item)}>
                            Eliminar
                        </button>)}
                       
                    </div>
                </div>


            </div>

            <div>
  {/* Modal */}
  <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel"> {item.title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-4">
                <img src={item.thumbnail} alt="" />
            </div>
            <div className="col-md-8">
                <p>Categoria: {item.category}</p>
                <p>Marca: {item.brand}</p>
                <p>Existencia: {item.stock}</p>
                <p className="text-danger">Precio: {item.price}$</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
    )
}

export default CarProductos