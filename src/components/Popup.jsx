import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Popup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="tertiary" onClick={handleClickOpen}>
                Open Popup
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle sx={{ p: 4, position: 'relative' }}>
                    <Typography variant='h6' textAlign='center'>
                        Congratulations!
                    </Typography>
                    <Typography variant='body2' textAlign='center'>
                        You earned a New Badge on 12 July, 2023
                    </Typography>
                    <IconButton
                        color='quaternary'
                        onClick={handleClose}
                        size='large'
                        sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                    >
                        <CloseIcon fontSize='inherit'/>
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15rem', width: '32rem' }}>
                    <Box
                        component='img'
                        src='/New_Badge_Earning_Popup.jpg'
                        height='90%'
                    />
                </DialogContent>
                <DialogContent dividers sx={{ p: 3 }}>
                    <Typography variant='h6' textAlign='center'>
                        Great Thread
                    </Typography>
                    <Typography variant='body2' textAlign='center'>
                        Create a popular thread
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}