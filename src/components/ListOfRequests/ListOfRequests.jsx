import React, { useState, useEffect } from 'react';
import CreationForm from './components/CreationForm/CreationForm';
import Request from './components/Request/Request';
import styles from './ListOfRequests.module.scss';

const getLocalParcels = () => {
    
    let list = localStorage.getItem('list');

    if (list) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
};

const ListOfRequests = () => {

    const [parcels, setParcels] = useState(getLocalParcels());

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(parcels));
    }, [parcels]);

    const addParcel = (fromCity, toCity, type, date, description) => {
        const newParcel = {
            id: Math.random().toString(20).substring(1,10),
            fromCity: fromCity, 
            toCity: toCity,
            type: type,
            date: date,
            description: description
        }
        setParcels([...parcels, newParcel]); 
    }

    const removeParcel = (id) => {
        setParcels([...parcels.filter((parcel) => parcel.id !== id)])
    }

    const editParcel = (id, fCity, tCity, t, d, des) => {
        setParcels([...parcels.map(parcel => 
            parcel.id === id ?
            {...parcel, 
                fromCity: fCity, 
                toCity: tCity, 
                type: t, 
                date: d, 
                description: des
            } 
                : { ...parcel })])
    } 

    return (
        <div className={styles.list}>
            <CreationForm addParcel={addParcel} />
            <div className={styles.list__title}>
                List of requests
            </div>
            {parcels.map((parcel) => {
                return (
                    <Request
                        parcel={parcel}
                        key={parcel.id}
                        removeParcel={removeParcel}
                        editParcel={editParcel}
                    />
                )
            })}
        </div>
    );
}

export default ListOfRequests;
