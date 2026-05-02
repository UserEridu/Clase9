import { useCarrito } from "../context/CarritoContext";// 👈
import React from 'react'
import { Link } from 'react-router-dom'
import FiltroCategorias from './FiltroCategorias'
import { FaTable } from "react-icons/fa";
import CarritoModal from "./CarritoModal";

const Header = () => {

  const { carrito } = useCarrito();

  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="/public/logo/logo.png" alt="" width={250} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/inicio'} className="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to={'/laptop'} className="nav-link" href="#">Laptop</Link>
            </li>
            <li className="nav-item">
              <Link to={'/movil'} className="nav-link" href="#">Movil</Link>
            </li>
            <li className="nav-item">
              <Link to={'/tecno'} className="nav-link" href="#">Tecno</Link>
            </li>
            <li className="nav-item">
              <Link to={'/skin-care'} className="nav-link" href="#">Skincare</Link>
            </li>
            <li className="nav-item">
              <Link to={'/tablets'} className="nav-link" href="#">Tablets</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <FiltroCategorias />
              </ul>
            </li>
            <li className="nav-item">
              <Link to={'/contactos'} className="nav-link" href="#">Contactos</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>

       {carrito.length > 0 && (
                    <button 
                        type="button" 
                        className="btn btn-outline-warning me-2"
                        data-bs-toggle="modal"
                         data-bs-target="#carritoModal">
                            <div className="d-flex justify-content-between align-items-center gap-2">
                                <FaTable /><span className="badge bg-danger m-1">{carrito.length}</span>
                             </div>
                    </button>
                )}
   <CarritoModal /> 
   </nav>
    
  )
}

export default Header