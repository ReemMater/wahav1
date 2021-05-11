import React, { useContext } from 'react';
import { Redirect } from 'react-router';

import '../../App.css';
import AuthContext from '../../context/auth/authContext';

import AdminSideNavInbox from './AdminSideNavInbox';

const Admin = (props) => {
    const authContext = useContext(AuthContext);
    if (!authContext.token) {
        return (
            <Redirect to="admin/login"></Redirect>
        )
    }
    else {

        return (
            <React.Fragment>
                <AdminSideNavInbox />
            </React.Fragment >
        );
    }
}



export default Admin;

