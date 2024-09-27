import React from 'react';
import './Doc.css';

const Documentation = () => {
  return (
    <div className="documentation-container">
      <h1 className="title">Métodos de Cifrado</h1>

      <section className="method-section">
        <h2>Cifrado César</h2>
        <p>
          El cifrado César es una técnica de cifrado clásica en la que cada letra
          del texto original es desplazada un número fijo de posiciones en el alfabeto.
        </p>
        <h3>¿Cómo funciona?</h3>
        <p>
          Se elige un número de desplazamiento y cada letra se reemplaza por otra que
          está ese número de posiciones adelante en el alfabeto. Para descifrar, se
          realiza el proceso inverso.
        </p>
        <h3>Ventajas</h3>
        <ul>
          <li>Simplicidad</li>
          <li>Fácil de implementar</li>
        </ul>
        <h3>Desventajas</h3>
        <ul>
          <li>Falta de seguridad</li>
          <li>Vulnerable a ataques de fuerza bruta</li>
        </ul>
        <h3>Ejemplo</h3>
        <p>Con un desplazamiento de 3, el mensaje "HOLA" se convierte en "KROD".</p>
      </section>

      <section className="method-section">
        <h2>Cifrado Escítala</h2>
        <p>
          El cifrado Escítala es una técnica de transposición utilizada en la antigua Grecia, donde
          un mensaje se cifra enrollando una tira alrededor de un cilindro.
        </p>
        <h3>¿Cómo funciona?</h3>
        <p>
          El texto se escribe en espiral alrededor del cilindro. Una vez desenrollado, el texto parece desordenado,
          y solo se puede descifrar con un cilindro del mismo diámetro.
        </p>
        <h3>Ventajas</h3>
        <ul>
          <li>Simplicidad</li>
          <li>Valor histórico</li>
        </ul>
        <h3>Desventajas</h3>
        <ul>
          <li>Dependencia física del cilindro</li>
          <li>Fácil de descifrar con herramientas modernas</li>
        </ul>
        <h3>Ejemplo</h3>
        <p>Con un cilindro de 4 letras por vuelta, el mensaje "VEN A LAS TRES" podría cifrarse como "VENA LAS TRES".</p>
      </section>
    </div>
  );
};

export default Documentation;
