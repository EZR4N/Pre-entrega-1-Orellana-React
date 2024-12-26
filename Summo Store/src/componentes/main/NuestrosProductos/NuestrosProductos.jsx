import React from 'react'
import "./NuestrosProductos.scss"
import NuestrosProductosTarjeta from '../Tarjeta/Tarjeta'
const NuestrosProductos = () => {
  return (
    <>
    <div className='mainDivNuestrosProductosTitulo'>
        <h2>
            Nuestros Productos
        </h2>

    </div>
        <div className='mainDivNuestrosProductosTarjetas'>
            <NuestrosProductosTarjeta marca="Knorr" img="\public\imagenes\Knorr.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Axe" img="\public\imagenes\Axe.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Cif" img="\public\imagenes\Cif.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Dove" img="\public\imagenes\Dove.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Hellmans" img="\public\imagenes\Hellmans.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Lux" img="\public\imagenes\Lux.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Rexona" img="\public\imagenes\Rexona.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Sedal" img="\public\imagenes\Sedal.png" clase="mainNuestrosProductosTarjetaImg"/>
            <NuestrosProductosTarjeta marca="Skip" img="\public\imagenes\Skip.png" clase="mainNuestrosProductosTarjetaImg"/>
        </div>

        <div className='mainDivNuestrosProductosVerTodasLasCategorias'>
            <h3>Ver todas las categorías</h3>
            <img src="\public\imagenes\chevron-forward-sharp.png" alt="" />
        </div>
    </>
  )
}

export default NuestrosProductos