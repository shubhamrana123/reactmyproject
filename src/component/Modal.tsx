import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IModal } from '../types/common.types';

export default function FormDialog(props: IModal) {
  const [open, setOpen] = React.useState(true);
  //console.log(props.buttonName);
  const onCloseHandler = () => {
    props.onClose(false);
  }

  return (
    <div>
      <Dialog open={open} >
        <div className=' align-items-end'>
        <button type="button" className="btn-close" aria-label="Close" onClick={onCloseHandler}></button>
        </div>
       
        <DialogTitle>{props.Title}</DialogTitle>

        {props.component}
        <DialogActions>

          {/* <button className='btn btn-primary' onClick={onCloseHandler}>Close</button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
