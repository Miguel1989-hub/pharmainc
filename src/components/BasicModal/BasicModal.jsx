import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid blue',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal({ name, picture, email, gender, birth, phone, nationality, address, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            alt="image client"
            src={picture}
            sx={{ width: 100, height: 100, position: "relative", marginTop: "-85px", border: "1px solid blue", marginLeft: "110px" }}
          />
          <Typography id="modal-modal-title"  sx={{ mt: 2 }} variant="h6" component="h2">
            Pacient: {name}
          </Typography>
          <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
            Email: {email}
          </Typography>
          <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
            Gender: {gender}
          </Typography>
          <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
            Birth: {birth}
          </Typography>
          <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
            Phone: {phone}
          </Typography>
          <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
            Nationality: {nationality}
          </Typography>
          <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
            Address: {address}
          </Typography>
          <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
            ID-Client: {id}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
