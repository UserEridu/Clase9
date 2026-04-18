import { useEffect, useState } from "react";
import CarProductos from "../components/CarProductos";

const API='https://dummyjson.com/products/category/skin-care';

const SkinCare = () => {
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
      <h4 className='text-center py-4'>Tenemos {datos.length} Productos</h4>
      <div className="row justify-content-center">
      {datos.map((item)=>(
        <CarProductos item={item}/>
      ))}
      </div>
    </div>
  )
}

export default SkinCare