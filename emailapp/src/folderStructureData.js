
import { FaHome, FaFolder } from 'react-icons/fa';
// const data = {
//     name: 'root',
//     toggled: true,
//     id:'rootParent0',
//     children: [
//         {
//             name: 'parent',
//             children: [
//                 { name: 'child1', componentName: "ComponentB" },
//                 { name: 'child2', componentName: "ComponentA" }
//             ],
//             id:'rootParent1'
//         },
//         {
//             name: 'loading parent',
//             loading: true,
//             children: [],
//             id:'rootParent2'
//         },
//         {
//             name: 'parent',
//             id:'rootParent3',
//             children: [
//                 {
//                     name: 'nested parent',
//                     id:'rootParent4',
//                     children: [
//                         { name: 'nested child 1', id:'ComponentA'},
//                         { name: 'nested child 2',  id:'ComponentB' }
//                     ]
//                 }
//             ]
//         }
//     ]
// };

const folderStructureData = {
        name: 'Configuration',
        toggled: true,
        id:'rootParent0',
        icon: null,
        children: [
            {
            name: 'Administration Start Page',
            icon: FaHome,
            componentName: 'ComponentB'
        },
        {
        name: 'Staff Management',
        toggled: true,
        icon: FaFolder,
        children: [
            {
                name: 'Staff Accounts by Group',
                icon: FaHome,
                componentName: 'ComponentA'
            },
            {
                name: 'Staff Accounts by Manager',
                loading: true,
                icon: FaFolder,
                componentName: 'ComponentB'
            },
            {
                name: 'Staff accounts by Profile',
                icon: FaFolder,
                componentName: 'ComponentC'
            }
        ]}]
};

export default folderStructureData;