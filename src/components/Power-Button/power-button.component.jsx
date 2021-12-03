import React from 'react';
import { NavLink } from 'react-router-dom';

import { PowerBtn } from '../SVGs/allSVGs';
import { Power } from './power-button.styles'

const PowerButton = () => {
    return (
        <Power>
            <NavLink to='/'>
                <PowerBtn width={30} height={30} fill='currentColor' />
            </NavLink>
        </Power>
    )
}

export default PowerButton
