import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Helpimg from "./img/help.png";

// Estilos para el modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const CesarCipherModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            sx={{ mt: 2, textAlign: "justify" }}
          >
            El método de cifrado César es un cifrado por sustitución simple, en
            el cual cada letra del texto original (texto plano) es reemplazada
            por otra letra que se encuentra un número fijo de posiciones más
            adelante en el alfabeto.
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mt: 2, textAlign: "justify" }}
          >
            Este número fijo se conoce como el desplazamiento o clave. si el
            desplazamiento es 3, la letra "A" se reemplaza por "D", la letra "B"
            por "E", y así sucesivamente.
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mt: 2, textAlign: "justify" }}
          >
            Al llegar al final del alfabeto, el conteo continúa desde el
            principio. Si tenemos el texto "HOLA" y aplicamos un desplazamiento
            de 3, el resultado sería: H - K O - R L - O A - D Por lo tanto, el
            texto cifrado sería "KROD".
          </Typography>
          <Box sx={{ display: "flex", mt: 3 }}>
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

export default CesarCipherModal;
