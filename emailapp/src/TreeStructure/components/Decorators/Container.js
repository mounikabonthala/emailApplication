import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {VelocityComponent} from 'velocity-react';
import {Div} from '../common';

class Container extends PureComponent {
    renderToggle() {
        const {animations} = this.props;

        if (!animations) {
            return this.renderToggleDecorator();
        }

        return (
            <VelocityComponent
                animation={animations.toggle.animation}
                duration={animations.toggle.duration}
            >
                {this.renderToggleDecorator()}
            </VelocityComponent>
        );
    }

    renderToggleDecorator() {
        const {style, decorators, node} = this.props;
        return <decorators.Toggle style={style.toggle}/>;
    }

    renderFaviconDecorator(){
        const {style, decorators, node} = this.props;
        return <decorators.Favicon style={style.toggle} node={node}/>; 
    }

    render() {
        const {style, decorators, terminal, onClick, node} = this.props;
        return (
            <div
                onClick={onClick}
                style={node.active ? {...style.container} : {...style.link}}
            >
                {!terminal ? this.renderToggle() : null}
                {this.renderFaviconDecorator()}
                <decorators.Header node={node} style={style.header}/>
            </div>
        );
    }
}

Container.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    terminal: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired
};

export default Container;
