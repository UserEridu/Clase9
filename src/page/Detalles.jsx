import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import CarProductos from "../components/CarProductos";

const Detalles = () => {
  const params = useParams()
  const navigate = useNavigate();
  const API=`https:dummyjson.com/products/${params.id}`
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
             
              setDatos(data);
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
    <>
    <div className="container">
            {/* Botón Volver */}
            <div className="text-end my-3">
                <button onClick={() => navigate(-1)} className="btn btn-secondary">
                    ← Volver
                </button>
            </div>
    <h4 className='text-center py-4'>{params.id} {params.title}</h4>
    <div className='row'>
      <div className='col-md-4 bg-info'>
        <img src={datos.thumbnail} alt="" className='img-fluid'/>
      </div>
      <div className='col-md-8'>
        <p>Descripcion: {datos.description}</p>
        <p>Categoria: {datos.category}</p>
        <p>Precio: ${datos.price}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <div>{datos.reviews.map((item)=>
    
    <p className='card'>
    <b>Comentarios</b>: {item.comment} <br />
    <b>Calificacion</b>: {item.rating} <br />
    <b>Fecha</b>b: {item.date} <br />
    <b>Usuario</b>: {item.reviewername} <br />
    </p>
    )}</div>

    </div>
    </>
  )
}

export default Detalles