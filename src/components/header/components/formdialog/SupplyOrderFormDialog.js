import React from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

export function SupplyOrderFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button fullWidth onClick={handleClickOpen}>
        {' '}
        Supply Orders
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Order Supplies</DialogTitle>
        <DialogContent>
          <DialogContentText> Please use the button below to send an inquiry to receive supplies </DialogContentText>
          <TextField margin="normal" size="small" fullWidth id="outlined-basic" label="Fist Name" variant="outlined" />
          <TextField margin="normal" size="small" fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField
            margin="normal"
            size="small"
            fullWidth
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            margin="normal"
            size="small"
            fullWidth
            id="outlined-basic"
            label="Faculty or Client Number"
            type="number"
            variant="outlined"
          />
          <TextField
            margin="normal"
            size="small"
            fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField
            margin="normal"
            size="small"
            fullWidth
            multiline
            id="outlined-basic"
            label="Please List The Supplies Below"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {' '}
            Cancel{' '}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
