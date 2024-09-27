import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Helpimg from "./img/help.png";
import "./Modal.css";

const EscitalaCipherModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Estilos para el modal que se centra y es responsivo
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    bgcolor: "background.paper",
    
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  const goToDocument = () => {
    navigate("/Document");
  };

  return (
    <div>
      <img
        src={Helpimg}
        style={{ width: "30px", height: "30px", marginLeft: "50px" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Cifrado Escítala
          </Typography>
          <Typography id="modal-description" sx={{ mt: 1 }}>
            El método de la escítala es uno de los primeros sistemas de cifrado
            que consiste en un mecanismo simple de transposición de letras,
            donde se utiliza un cilindro llamado escítala.
          </Typography>
          <Typography id="modal-description" sx={{ mt: 1 }}>
            Ejemplo: la palabra SALVAME con la clave 3 codificado SVEAALM El
            mensaje codificado sería: SALVAME
          </Typography>
          <Typography className="Guia" id="modal-description" sx={{ mt: 1 }}>
            <h4 style={{ textAlign: "center" }}>
              Pasos para Cifrar o Descifrar un Mensaje
            </h4>
            <ol style={{ marginLeft: "11px" }}>
              <li>Selecciona el método con el switch en rojo.</li>
              <li>Ingresa el mensaje a cifrar o descifrar.</li>
              <li>Introduce la clave de desplazamiento.</li>
              <li>Presiona "Cifrar" o "Descifrar".</li>
              <li>Puedes copiar el resultado con el botón "Copiar Texto".</li>
            </ol>
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                mt: 1,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Cerrar
            </Button>
            <Button
              onClick={goToDocument}
              variant="outlined"
              sx={{
                mt: 1,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Ver mas
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EscitalaCipherModal;
