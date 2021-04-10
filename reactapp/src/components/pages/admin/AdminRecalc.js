import React from 'react';
import axios from 'axios';

const AdminRecalc = () => {
    const reCalculateHandler = () => {
        axios.get('http://localhost:5000/api/Recalc').then((resp) => {
            console.log('recalc response is: ', resp.data);
        });
    };

    return (
        <div style={{ margin: '2rem' }}>
            <button
                onClick={reCalculateHandler}
                className='login btn'
                style={{ fontFamily: 'inherit' }}>
                Re-calculate Game Win Percentage
            </button>
        </div>
    );
};

export default AdminRecalc;
