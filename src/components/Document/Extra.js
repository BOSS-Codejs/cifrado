import React from "react";
import "./Doc.css";

const Extra = () => {
  return (
    <div className="table-container">
      <h2 style={{textAlign:'center',top:'10px',marginBottom:'10px'}}>Diferencia de los método de cifrado</h2>
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
            <td data-label="Aspecto">Diferencia técnica</td>
            <td data-label="Cifrado César">
              Sustitución simple de letras basada en un desplazamiento en el
              alfabeto.
            </td>
            <td data-label="Cifrado Escítala">
              Cifrado de transposición basado en enrollar el mensaje en una
              varilla.
            </td>
          </tr>
          <tr>
            <td data-label="Aspecto">Seguridad</td>
            <td data-label="Cifrado César">
              Débil, es vulnerable a ataques por fuerza bruta ya que hay solo 25
              posibles combinaciones.
            </td>
            <td data-label="Cifrado Escítala">
              Moderadamente seguro, pero vulnerable a análisis de longitud de
              palabra o ataques físicos.
            </td>
          </tr>
          <tr>
            <td data-label="Aspecto">Complejidad</td>
            <td data-label="Cifrado César">
              Fácil de implementar y descifrar.
            </td>
            <td data-label="Cifrado Escítala">
              Moderadamente complejo, depende del tamaño de la varilla y el
              patrón de transposición.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Extra;
