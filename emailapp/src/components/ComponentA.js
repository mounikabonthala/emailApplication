import React, { Component } from 'react'
import "react-trumbowyg/dist/trumbowyg.min.css";
import { FaCreditCard } from 'react-icons/fa';
import ContactForm from './../components/ContactForm/Contact';
import './ComponentA.css';
import AppRouter from './../Router';


export default class componentA extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="middleContent">
        <FaCreditCard style={{fontSize: 100, color: 'black'}}/>
          <ContactForm/>
      </div>
      <div id="rightContent">
        <AppRouter/>
      </div> 
      </React.Fragment>
    )
  }
}
