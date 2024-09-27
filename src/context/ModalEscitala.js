import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Helpimg from "./img/help.png";
import './Modal.css'

const EscitalaCipherModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Estilos para el modal que se centra y es responsivo
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "500px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
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
            Método de Encriptación Escítala
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            El método de la escítala es uno de los primeros sistemas de cifrado
            utilizados por los antiguos espartanos. Consiste en un mecanismo
            simple de transposición de letras, donde se utiliza un cilindro
            llamado escítala. 
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Supongamos que el mensaje original es "SALVAME". Si usamos una
            escítala con un diámetro que obliga a escribir en 3 columnas, el
            mensaje se escribe de la siguiente forma:
          </Typography>
          <Typography id="modal-description" sx={{ mt: 1 }}>
            S A L
          </Typography>
          <Typography id="modal-description" sx={{ mt: 1 }}>
            V A M
          </Typography>
          <Typography id="modal-description" sx={{ mt: 1 }}>
            E
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Al desenrollar, el mensaje codificado sería: SALVAME
          </Typography>
          <Box sx={{ display:'flex', mt: 3 }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                mt: 2,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Cerrar
            </Button>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                mt: 2,
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
