import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { Redirect } from 'react-router-dom';
import AdminRecalc from './AdminRecalc';
import AdminScoreContainer from './AdminScoreContainer';

function Admin() {
    const { isAdmin } = useContext(AppContext);

    return isAdmin ? (
        <>
            <AdminRecalc />
            <hr />
            <AdminScoreContainer />
            <hr />
        </>
    ) : (
        <Redirect to='/notauthorized' />
    );
}

export default Admin;
