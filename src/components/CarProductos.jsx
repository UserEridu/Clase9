import { Link } from "react-router-dom";

const CarProductos = ({item}) => {
    return (
        <div className="col-md-3 mb-5">
            <div className="card h-100">
                <div className="card-header">
                    <img src={item.thumbnail} alt="" className="img-fluid" />
                </div>
                <div className="card-body text-center">
                    <p>{item.title}</p>
                    <h2 className="text-success">{item.price}$</h2>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-outline-info btn-sm mx-3">Modal</button>
                    <Link to={`/detalles/${item.id}/${item.title}`} className="btn btn-outline-danger btn-sm mx-3">Detalles</Link>
                </div>


            </div>
        </div>
    )
}

export default CarProductos