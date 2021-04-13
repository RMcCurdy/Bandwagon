import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { Redirect } from 'react-router-dom';
import AdminRecalcPredictions from './AdminRecalcPredictions';
import AdminScoreContainer from './AdminScoreContainer';

function Admin() {
    const { isAdmin } = useContext(AppContext);

    return isAdmin ? (
        <>
            <AdminRecalcPredictions />
            <hr />
            <AdminScoreContainer />
            <hr />
            
        </>
    ) : (
        <Redirect to='/notauthorized' />
    );
}

export default Admin;
