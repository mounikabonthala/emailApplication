import React from 'react';
import PropTypes from 'prop-types';
import {castArray} from 'lodash';

import defaultTheme from '../themes/default';
import defaultAnimations from '../themes/animations';
import {Ul} from './common';
import defaultDecorators from './Decorators';
import TreeNode from './TreeNode';

const TreeBeard = ({animations, decorators, data, onToggle, style}) => (
    <Ul style={{...defaultTheme.tree.base, ...style.tree.base}}>
    {console.log('data', data)}
        {castArray(data).map(node => (
            <div>
            <TreeNode
                {...{decorators, node, onToggle, animations}}
                key={node.id}
                style={{...defaultTheme.tree.node, ...style.tree.node}}
            />
            </div>
        ))}
    </Ul>
);

TreeBeard.propTypes = {
    style: PropTypes.object,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    onToggle: PropTypes.func,
    decorators: PropTypes.object
};

TreeBeard.defaultProps = {
    style: defaultTheme,
    animations: defaultAnimations,
    decorators: defaultDecorators
};

export default TreeBeard;
