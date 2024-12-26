import React from 'react'


const Tarjeta = ({img, marca, clase}) => {
    return (
    <>
            <img id={"mainNuestrosProductosTarjetaImg"+marca} className={clase} src={img} alt={"logo de "+ marca} />  
    </>
    )
}

export default Tarjeta