import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Helpimg from "./img/help.png";

// Estilos para el modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const CesarCipherModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        className="modal"
      >
        <Box sx={style}>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            align="center"
            gutterBottom
          >
            Cifrado César
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mt: 1, textAlign: "justify" }}
            
          >
            El método de cifrado César es un cifrado por sustitución simple, en
            el cual cada letra del texto original es reemplazada
            por otra letra de posiciones más adelante en el alfabeto.
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mt: 1, textAlign: "justify" }}
          >
            Este número fijo se conoce como el desplazamiento o clave. si el
            desplazamiento es 3, la letra "A" se reemplaza por "D", la letra "B"
            por "E", y así sucesivamente.
          </Typography>
          <Typography className="Guia" id="modal-description" sx={{ mt: 2 }}>
            <h4 style={{ textAlign: "center" }}>
              Pasos para Cifrar o Descifrar un Mensaje
            </h4>
            <ol style={{ marginLeft: "11px" }}>
              <li>Selecciona el método con el switch en azul.</li>
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

export default CesarCipherModal;
