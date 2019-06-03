import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import {  Treebeard } from './TreeStructure/app';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const data = {
    name: 'root',
    toggled: true,
    id:'rootParent0',
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1', componentName: "ComponentB" },
                { name: 'child2', componentName: "ComponentA" }
            ],
            id:'rootParent1'
        },
        {
            name: 'loading parent',
            loading: true,
            children: [],
            id:'rootParent2'
        },
        {
            name: 'parent',
            id:'rootParent3',
            children: [
                {
                    name: 'nested parent',
                    id:'rootParent4',
                    children: [
                        { name: 'nested child 1', id:'ComponentA'},
                        { name: 'nested child 2',  id:'ComponentB' }
                    ]
                }
            ]
        }
    ]
};

class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }
     components = {
        foo: ComponentA,
        bar: ComponentB,
        ComponentA: ComponentA,
        ComponentB: ComponentB,
    }
    
    onToggle(node, toggled){
        debugger;
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

    render(){
        const {data, cursor} = this.state;
        console.log('', cursor && cursor.componentName);
        const TagName = this.components[(cursor && cursor.componentName) || 'foo'];
        return (
            <div>
                <Treebeard
                    data={data}
                    onToggle={this.onToggle}
                />
               <TagName />
            </div>
        );
    }
}

export default App;