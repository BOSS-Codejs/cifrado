import React from "react";
import "./Doc.css";

const Extra = () => {
  return (
    <div className="container">
      <h1 style={{textAlign:'center',marginBottom:'10px'}}>Cifrado y Descifrado Escítala</h1>
      <section className="section">
        <h2 style={{textAlign:'center',marginBottom:'10px'}}>¿Qué es el cifrado Escítala?</h2>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>
          El cifrado escítala es un método antiguo de cifrado que consiste en
          escribir un mensaje en filas de un número fijo de columnas, para luego
          leer el mensaje en columnas. En el código siguiente, el número de
          columnas es la clave (<code>key</code>).
        </p>
      </section>

      <section className="section">
        <h2 style={{textAlign:'center',marginBottom:'10px'}}>Código de Cifrado</h2>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>El siguiente código implementa el cifrado de escítala en React:</p>
        <pre>
          <code>{`const key = parseInt(columns);
let cipherText = "";

for (let i = 0; i < key; i++) {
  for (let j = i; j < message.length; j += key) {
    cipherText += message[j];
  }
}`}</code>
        </pre>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>
          En este algoritmo, el número de columnas se toma como clave (
          <code>key</code>). Luego, se itera a través de cada columna para
          recolectar los caracteres correspondientes del mensaje original. Estos
          caracteres se concatenan en <code>cipherText</code> para obtener el
          mensaje cifrado.
        </p>
      </section>

      <section className="section">
        <h2 style={{textAlign:'center',marginBottom:'10px'}}>Código de Descifrado</h2>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>El siguiente código implementa el descifrado del texto cifrado:</p>
        <pre>
          <code>{`const key = parseInt(columns);
let plainText = Array(crypt.length).fill("");
let index = 0;

for (let i = 0; i < key; i++) {
  for (let j = i; j < crypt.length; j += key) {
    plainText[j] = crypt[index++];
  }                  
}
return plainText.join("");`}</code>
        </pre>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>
          En este caso, el texto cifrado se transforma de nuevo en su forma
          original. Se distribuyen los caracteres en la matriz de texto plano (
          <code>plainText</code>) basándose en la misma cantidad de columnas
          utilizada en el cifrado, y luego se reconstruye el mensaje original.
        </p>
      </section>
      <h1 style={{textAlign:'center',marginBottom:'10px'}}>Cifrado y Descifrado César</h1>

      <section className="section">
        <h2 style={{textAlign:'center',marginBottom:'10px'}}>¿Qué es el cifrado César?</h2>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>
          El cifrado César es un tipo de cifrado por sustitución en el que cada
          letra del mensaje es reemplazada por otra que se encuentra un número
          fijo de posiciones más adelante en el alfabeto, dependiendo de un
          desplazamiento (<code>columns</code>).
        </p>
      </section>

      <section className="section">
        <h2 style={{textAlign:'center',marginBottom:'10px'}}>Código de Cifrado</h2>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>El siguiente código implementa el cifrado César en React:</p>
        <pre>
          <code>{`let respuesta = ""; 
let cifrado = alfabeto.slice(-columns) + alfabeto.slice(0, alfabeto.length - columns);

for (let i = 0; i < message.length; i++) {
  let letra = message[i].toLowerCase();
  if (letra === " ") {
    respuesta += " ";
  } else {
    respuesta += cifrado[alfabeto.indexOf(letra)] || letra;
  }
}
return respuesta;`}</code>
        </pre>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>
          El código toma un mensaje y lo recorre letra por letra. Luego, ajusta
          el alfabeto basado en el número de posiciones (<code>columns</code>) y
          reemplaza cada letra con la que corresponde en el alfabeto cifrado. Si
          se encuentra un espacio, lo deja sin modificar.
        </p>
      </section>

      <section className="section">
        <h2 tyle={{textAlign:'center',marginBottom:'10px'}}>Código de Descifrado</h2>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>El siguiente código implementa el descifrado del texto cifrado:</p>
        <pre>
          <code>{`const texto = message.toUpperCase(); 

return texto.split("").map((caracter) => {
  const indice = alfabeto.indexOf(caracter);

  if (indice === -1) {
    return caracter;
  }

  let nuevoIndice = (indice - columns) % alfabeto.length;
  if (nuevoIndice < 0) nuevoIndice += alfabeto.length;

  return alfabeto[nuevoIndice];
}).join("");`}</code>
        </pre>
        <p style={{marginTop:'30px',marginBottom:'10px'}}>
          Este código toma el mensaje cifrado y lo transforma nuevamente al
          texto original recorriendo el alfabeto en sentido inverso, utilizando
          el mismo desplazamiento (<code>columns</code>).
        </p>
      </section>
    </div>
  );
};

export default Extra;
