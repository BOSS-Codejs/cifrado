import React from 'react';
import './Doc.css';

const Extra = () =>{
  return (
    <div className="App">
      <h1 className='tex'>Comparativa de Métodos de Cifrado: César vs Escítala</h1>
      <div className="table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Cifrado César</th>
              <th>Cifrado Escítala</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nivel de Complejidad</td>
              <td>Bajo</td>
              <td>Bajo-Medio</td>
            </tr>
            <tr>
              <td>Principio de Operación</td>
              <td>Desplazamiento de letras</td>
              <td>Uso de una vara y cinta</td>
            </tr>
            <tr>
              <td>Seguridad</td>
              <td>Baja</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Facilidad de Implementación</td>
              <td>Muy Fácil</td>
              <td>Fácil</td>
            </tr>
            <tr>
              <td>Usado Históricamente</td>
              <td>Por Julio César</td>
              <td>Por los Espartanos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Extra;
