import React, { useEffect, useState } from "react";

const Table = ()=>{
    const [data, setData] =useState([])
    
    const fetchData = async()=>{
        const response = await fetch('http://www.raydelto.org/agenda.php')
        if(response.ok){
            const data = await response.json();
            setData(data)
            console.log(data)
        }else{
            console.log(response.status)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    return(

        <>
        <table>
    <caption>Datos</caption>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>apellido</th>
        <th>edad</th>
      </tr>
    </thead>

    <tbody>
        {data.map((data, id)=>{
            return <tr key={id}>
            <td>{data.nombre}</td>
              <td>{data.apellido}</td>
              <td>{data.telefono}</td>
            </tr>
        })}
        </tbody>
         <tfoot>
      <tr>
        <td colspan="3">Pie de tabla</td>
      </tr>
    </tfoot>
  </table>
        </>
    )
}

export default Table