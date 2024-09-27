import React, { useState } from "react";
import "./Encrypt.css";
import SwitchComponent from "./SwitchComponent";
import ColorDisplay from "./ColorDisplay";
import CesarCipherModal from "../../context/ModalCesar";
import EscitalaCipherModal from "../../context/ModalEscitala";

const FomrEncrypt = () => {
  const [isRed, setIsRed] = useState(true);
  const [message, setMessage] = useState("");
  const [columns, setColumns] = useState(2);
  const [result, setResult] = useState("");
  const [crypt, setCrypt] = useState("");
  const [error, setError] = useState("");

  const alfabeto = "abcdefghijklmnopqrstuvwxyz";

  const encrypt = () => {
    if (!message || columns <= 1) {
      alert("Por favor, introduce un mensaje y un número de columnas válido.");
      return;
    }
    if (isRed) {
      const key = parseInt(columns);
      let cipherText = "";

      for (let i = 0; i < key; i++) {
        for (let j = i; j < message.length; j += key) {
          cipherText += message[j];
        }
      }
      setCrypt(cipherText);
      return cipherText.toUpperCase();
    } else {
      if (containsNumber(message)) {
        alert("Por favor, introduce solo texto");
        return;
      } else {
        let respuesta = "";
        let cifrado =
          alfabeto.slice(-columns) +
          alfabeto.slice(0, alfabeto.length - columns);

        for (let i = 0; i < message.length; i++) {
          let letra = message[i].toLowerCase();
          if (letra === " ") {
            respuesta += " ";
          } else {
            respuesta += cifrado[alfabeto.indexOf(letra)] || letra;
          }
        }
        return respuesta;
      }
    }
  };

  const decrypt = () => {
    if (!message || columns <= 1) {
      alert("Por favor, introduce un mensaje y un número de columnas válido.");
      return;
    }

    if (isRed) {
      const key = parseInt(columns);
      let plainText = Array(crypt.length).fill("");
      let index = 0;

      for (let i = 0; i < key; i++) {
        for (let j = i; j < crypt.length; j += key) {
          plainText[j] = crypt[index++];
        }
      }
      return plainText.join("");
    } else {
      if (containsNumber(message)) {
        alert("Por favor, introduce solo texto");
        return;
      } else {
        const texto = message.toUpperCase();

        return texto
          .split("")
          .map((caracter) => {
            const indice = alfabeto.indexOf(caracter);

            if (indice === -1) {
              return caracter;
            }

            let nuevoIndice = (indice - columns) % alfabeto.length;
            if (nuevoIndice < 0) nuevoIndice += alfabeto.length;

            return alfabeto[nuevoIndice];
          })
          .join("");
      }
    }
  };

  const containsNumber = (str) => {
    return str.match(/\d+/) !== null;
  };

  const handleCifrar = () => {
    const columnas = parseInt(columns, 10);
    if (isNaN(columnas) || columnas <= 0) {
      setError("Por favor, ingresa una clave válida (número de columnas).");
      return;
    }
    const cipherText = encrypt();
    setResult(cipherText);
  };

  const handleDescifrar = () => {
    const columnas = parseInt(columns, 10);
    if (isNaN(columnas) || columnas <= 0) {
      setError("Por favor, ingresa una clave válida (número de columnas).");
      return;
    }
    setError("");
    const plainText = decrypt().toUpperCase();
    setResult(plainText);
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => alert("Texto copiado al portapapeles!"))
      .catch((err) => console.error("Error al copiar: ", err));
  };

  const handleToggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <>
      <div className="cipher-container">
        <div className="id-help">
          <h2>{isRed ? "Cifrado Escítala" : "Cifrado César"}</h2>
          {isRed?<EscitalaCipherModal/>:<CesarCipherModal/>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe el mensaje"
          />
        </div>

        <div className="form-group">
          <label htmlFor="columns">
            {isRed ? "Número de columnas:" : "Número de desplazaminetoo:"}
          </label>
          <input
            type="number"
            id="columns"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            min="2"
            placeholder="Introduce el número de columnas"
          />
        </div>

        <div className="button-group">
          <button onClick={handleCifrar} className="encrypt-btn">
            Cifrar
          </button>
          <button onClick={handleDescifrar} className="decrypt-btn">
            Descifrar
          </button>
        </div>

        <div className="result">
          <h3>Resultado:</h3>
          <div className="form-group-copy">
            <div>
              <input
                className="input-result"
                type="text"
                id="columns"
                value={result}
              />
            </div>
            <div>
              <button
                className="decrypt-btn-copy "
                onClick={copiarAlPortapapeles}
              >
                copiar
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="color-display">Selecciona el Método de Cifrado</h1>
          <SwitchComponent isRed={isRed} toggleColor={handleToggleColor} />
          <ColorDisplay isRed={isRed} />
        </div>
      </div>
    </>
  );
};

export default FomrEncrypt;
