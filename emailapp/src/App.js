import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import {  Treebeard, decorators } from './TreeStructure/app';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { simpleAction } from './actions/simpleAction'
import folderStructureData from './folderStructureData';
import './App.css';
/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends PureComponent {
    constructor(props){
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            text:'',
            data:folderStructureData
        }
    }
     components = {
        ComponentA: ComponentA,
        ComponentB: ComponentB,
        ComponentC: ComponentC,
    }
    
    onToggle(node, toggled){
        const {cursor, data} = this.state;
        if (cursor) {
            this.setState(() => ({cursor, active: false}));
        }
        node.active = true;
        if (node.children) { 
            node.toggled = toggled; 
        }
        this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    }

    simpleAction = (event) => {
        this.props.simpleAction();
      }

      handleChange = (value) => {
        this.setState({ text: value })
      }


    render(){
        const {data, cursor} = this.state;
        console.log('cursor', cursor && cursor.componentName);
        const TagName = this.components[(cursor && cursor.componentName && cursor.componentName) || 'ComponentA'];
    return(
        <div id="container">
            <div id="sidebar">
                <Treebeard
                        data={data}
                        onToggle={this.onToggle}
                        decorators={decorators}
                    />
            </div>

                {TagName && <TagName/>}
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);