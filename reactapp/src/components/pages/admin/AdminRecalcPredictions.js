import React from 'react';
import axios from 'axios';

const AdminRecalcPredictions = () => {
    const handleRecalculatePredictions = () => {
        axios
            .get('http://localhost:5000/api/Recalc/predictions')
            .then((resp) => {
                console.log('recalc predictions resp: ', resp.data);
            });
    };

    return (
        <div style={{ margin: '2rem' }}>
            <button
                onClick={handleRecalculatePredictions}
                className='login btn'
                style={{ fontFamily: 'inherit' }}>
                Re-calculate Game Win Percentage
            </button>
        </div>
    );
};

export default AdminRecalcPredictions;
