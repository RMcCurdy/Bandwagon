import React from 'react';
import axios from 'axios';

const AdminRecalcPayouts = () => {
    const reCalculatePayoutsHandler = () => {
        // axios.get('http://localhost:5000/api/RecalcPayouts').then((resp) => {
        //     console.log('recalc response is: ', resp.data);
        // });
    };

    return (
        <div
            style={{
                marginTop: '3rem',
                marginBottom: '2rem',
                borderRadius: '1.5rem',
                padding: '1em',
            }}>
            <button
                onClick={reCalculatePayoutsHandler}
                className='login btn'
                style={{
                    fontFamily: 'inherit',
                    border: '2px solid #FFCB99',
                    boxShadow: '2px 4px 5px grey',
                }}>
                Calculate And Pay Out Vote Winners
            </button>
        </div>
    );
};

export default AdminRecalcPayouts;
