import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <nav className='container'>
        {props.routes.map(route =>
            <NavLink exact={route.isExact} className activeClassName='active' key={route.path} to={route.path}>{route.name}</NavLink>
        )}
    </nav>
);

export default Nav;

Nav.propTypes = {
    routes: PropTypes.array,
};