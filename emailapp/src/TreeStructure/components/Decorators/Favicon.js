import React from 'react';
import PropTypes from 'prop-types';

import {Div} from '../common';

const Favicon = ({style, node}) => {
    const ComponentName = node.icon;
    if(!ComponentName){
        return null
    }
    return (
        <Div style={style.base}>
            <Div style={style.wrapper}>
              <ComponentName style={{'color': 'yellow'}}/>
            </Div>
        </Div>
    );
};

Favicon.propTypes = {
    style: PropTypes.object
};

export default Favicon;
