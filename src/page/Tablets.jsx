import { useEffect, useState } from "react";

const API='https://dummyjson.com/products/category/tablets';

const Tablets = () => {
      const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
  
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            const data = await response.json();
           
            setDatos(data.products);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDatos();
    }, []);

     if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Productos...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Productos</h4>
                <p>{error}</p>
            </div>
        );
    }

  return (
    <div className="container">
      <h4 className='text-center py-4'>Tenemos {datos.length} Tablets</h4>
      <div className="row justify-content-center">
      {datos.map((item)=>(
        <div className="col-md-3 mb-5">
        <div className="card h-100">
          <div className="card-header">
            <img src={item.thumbnail} alt="" className="img-fluid"/>
            </div>
          <div className="card-body text-center">
            <p>{item.title}</p>
        <h2 className="text-success">{item.price}$</h2>
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-outline-info btn-sm mx-3">Modal</button>
            <button className="btn btn-outline-danger btn-sm mx-3">Detalles</button>
          </div>
          
        
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Tablets