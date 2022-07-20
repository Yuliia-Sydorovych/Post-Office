import React, { useState } from 'react';
import styles from './CreationForm.module.scss';

const CreationForm = ({ addParcel }) => {

    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [type, setType] = useState('other');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const submitChanges = (e) => {
        e.preventDefault();
        addParcel(fromCity, toCity, type, date, description);
        setFromCity('');
        setToCity('');
        setType('other');
        setDate('');
        setDescription('');
    }

    return (
        <form onSubmit={submitChanges} className={styles.form}>
            <div className={styles.form__cities}>
                <input 
                    value={fromCity}
                    type='text' 
                    name='fromCity'
                    onChange={(e)=>setFromCity(e.currentTarget.value)}
                    placeholder='Enter the city from which the parcel is sent'
                    required
                />
                <input 
                    value={toCity}
                    type='text' 
                    name='toCity'
                    onChange={(e)=>setToCity(e.currentTarget.value)}
                    placeholder='Enter the city to which the parcel is sent'
                    required
                />
            </div>
            <div className={styles.form__typeAndDate}>
                <select
                    value={type}
                    onChange={(e)=>setType(e.currentTarget.value)}
                    required
                >
                    <option>gadgets</option>
                    <option>drinks</option>
                    <option>clothes</option>
                    <option>medicines</option>
                    <option>other</option>
                </select>
                <input
                    type='date'
                    value={date}
                    onChange={(e)=>setDate(e.currentTarget.value)}
                    required
                />
            </div>
            <div className={styles.form__description}>
                <textarea 
                    type='text'
                    value={description}
                    name='description'
                    onChange={(e)=>setDescription(e.currentTarget.value)}
                    placeholder='Enter description'
                    required
                />
            </div>
            <div className={styles.form__create}>
                <button type='submit'>Create</button>
            </div>
        </form>
    );
}

export default CreationForm;
