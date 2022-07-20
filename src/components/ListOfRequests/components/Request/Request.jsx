import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './Request.module.scss';

const Request = ({ parcel, removeParcel, editParcel }) => {

    const [fromCityEdit, setFromCityEdit] = useState(parcel.fromCity);
    const [toCityEdit, setToCityEdit] = useState(parcel.toCity);
    const [typeEdit, setTypeEdit] = useState(parcel.type);
    const [dateEdit, setDateEdit] = useState(parcel.date);
    const [descriptionEdit, setDescriptionEdit] = useState(parcel.description);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveChanges = () => {
        editParcel(parcel.id, fromCityEdit, toCityEdit, typeEdit, dateEdit, descriptionEdit);
        setOpen(false);
    }
    
    return (
        <div key={parcel.id} className={styles.request}>
            <div className={styles.request__content}>
                <div>
                    From: {parcel.fromCity}
                </div>
                <div>
                    To: {parcel.toCity}
                </div>
                <div>
                    Type: {parcel.type}
                </div>
                <div>
                    Date: {parcel.date}
                </div>
                <div>
                    Description: {parcel.description}
                </div>
                <div className={styles.request__edit}>
                    <Button
                        variant="outlined"
                        onClick={handleClickOpen}
                        sx={{ 
                            color: 'black', 
                            backgroundColor: 'rgb(240, 223, 223)', 
                            border: '1px solid gray', 
                            borderColor: 'gray', 
                            borderRadius: '5px', 
                            height: '30px' 
                        }}
                    >
                        Edit
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Enter the city from which the parcel is sent
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin='dense'
                                id='cityFrom'
                                label='City from'
                                value={fromCityEdit}
                                onChange={(e) => setFromCityEdit(e.currentTarget.value)}
                                type='text'
                                fullWidth
                                variant='standard'
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='cityTo'
                                value={toCityEdit}
                                onChange={(e) => setToCityEdit(e.currentTarget.value)}
                                type='text'
                                fullWidth
                                variant='standard'
                            />
                            <InputLabel id='type'>Type</InputLabel>
                            <Select
                                labelId='type'
                                id='type'
                                value={typeEdit}
                                onChange={(event: SelectChangeEvent) => setTypeEdit(event.currentTarget.value)}
                                label='Type'
                            >
                                <MenuItem value={'gadgets'}>gadgets</MenuItem>
                                <MenuItem value={'drinks'}>drinks</MenuItem>
                                <MenuItem value={'clothes'}>clothes</MenuItem>
                                <MenuItem value={'medicines'}>medicines</MenuItem>
                                <MenuItem value={'other'}>other</MenuItem>
                            </Select>
                            <TextField
                                autoFocus
                                margin='dense'
                                id='date'
                                type='date'
                                value={dateEdit}
                                onChange={(e) => setDateEdit(e.currentTarget.value)}
                                fullWidth
                                variant='standard'
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='description'
                                value={descriptionEdit}
                                onChange={(e) => setDescriptionEdit(e.currentTarget.value)}
                                type='text'
                                fullWidth
                                variant='standard'
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={() => { removeParcel(parcel.id)}}>Delete</Button>
                            <Button onClick={saveChanges}>Save</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default Request;
