import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
                    <span>From:</span> {parcel.fromCity}
                </div>
                <div>
                    <span>To:</span> {parcel.toCity}
                </div>
                <div>
                    <span>Type:</span> {parcel.type}
                </div>
                <div>
                    <span>Date:</span> {parcel.date}
                </div>
                <div>
                    <span>Description:</span> {parcel.description}
                </div>
                <div className={styles.request__edit}>
                    <Button
                        variant='outlined'
                        onClick={handleClickOpen}
                        sx={{ 
                            backgroundColor: 'rgb(240, 223, 223)', 
                            border: '1px solid gray', 
                            borderColor: 'gray', 
                            borderRadius: '5px', 
                            height: '30px',
                            color: 'black'
                        }}
                    >
                        Edit
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit information about parcel</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='dense'
                                id='cityFrom'
                                label='From'
                                value={fromCityEdit}
                                onChange={(e) => setFromCityEdit(e.target.value)}
                                type='text'
                                fullWidth
                                variant='standard'
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='cityTo'
                                label='To'
                                value={toCityEdit}
                                onChange={(e) => setToCityEdit(e.target.value)}
                                type='text'
                                fullWidth
                                variant='standard'
                            />
                            <InputLabel id='type' sx={{ fontSize:'12px' }}>Type</InputLabel>
                            <Select
                                labelId='type'
                                id='typeField'
                                label='Type'
                                value={typeEdit}
                                onChange={(e) => setTypeEdit(e.target.value)}
                                sx={{ 
                                    color: 'black',  
                                    borderColor: 'gray', 
                                    borderRadius: '5px', 
                                    height: '30px' 
                                }}
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
                                label='Date'
                                value={dateEdit}
                                onChange={(e) => setDateEdit(e.target.value)}
                                fullWidth
                                variant='standard'
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='description'
                                label='Description'
                                value={descriptionEdit}
                                onChange={(e) => setDescriptionEdit(e.target.value)}
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
