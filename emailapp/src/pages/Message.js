import React from "react";
import Trumbowyg from "react-trumbowyg";
import ImageUpload from './../components/ImageUpload/ImageUpload';

class Message extends React.Component {
  
  render() {
    return (
        <div>
            <ImageUpload/>
            <Trumbowyg
            buttons={ [
            //    'viewHTML',
                'copy',
                'undo', 
                'redo',
                'formatting',
                'strong', 
                'em', 
                'del',
                'superscript', 
                'subscript', 
                'link',
                'insertImage',
                'justifyLeft', 
                'justifyCenter', 
                'justifyRight', 
                'justifyFull',
                'unorderedList', 
                'orderedList',
                'removeformat'
                ]}
            resetCss
            removeformatPasted
            autogrow
            data={[]}
            placeholder='Type your text!'
            //  onChange={this.props.someCallback}
            //  ref="trumbowyg"
        />
     </div>
    )
  }
}



export default Message;