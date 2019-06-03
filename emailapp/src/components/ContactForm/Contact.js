import React, { Component } from 'react';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';
import 'react-phone-input-2/dist/style.css';
import InputTextField from './InputTextField';
import Dropdown from './Dropdown';
import Search from './ContactSuggestion/Search';
import './Contact.css';

var options = {
    templateName: 'hello',
    context: {
      tempalateVariableName: 'Variable Value',
      name: 'Joe Bloggs'
    },
    subject: 'Welcome to Email',
    senderEmailAddress: 'From Name <from@gmail.com>',
    toAddresses: ['recipient1@gmail.com', 'recipient2@gmail.com'],
    ccAddresses: ['ccRecipient1@gmail.com', 'ccRecipient2@gmail.com'],
    bccAddresses: ['bccRecipient1@gmail.com', 'bccRecipient2@gmail.com'],
    htmlCharset: 'utf16',
    textCharset: 'utf16',
    subjectCharset: 'utf8'
  }

export default class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        phone : 'N/A',
        bccEmails: [],
        ccEmails: [],
        emailAddress:'',
        firstName: '',
        lastName: '',
        subject: '',
        pnrLocator: '',
        referenceNo: 43243243,
        mailbox:'',
        status:''
    }
  }
  handleOnChange = (value) => {
        this.setState({ phone: value })
  }
  render() {
    const { 
        bccEmails, 
        ccEmails, 
        emailAddress, 
        firstName, 
        lastName, 
        subject,
        pnrLocator,
        referenceNo,
        mailbox,
        status 
    } = this.state;
    return (
      <div>
        <h3 className="contactFormTitle"> Contact Information </h3>
        <div className="formWrapper">
            
            <div className="formFieldRow">
                <div className="formInputName" style={{'color': 'red'}}>
                    Contact*
                </div>
                <div className="formInputField">
                    <Search/>
                </div>
            </div>

            <div className="formFieldRow emailAddressField">
                <div className="formInputName">
                    Email Address:
                </div>
                <div className="formInputField">
                    <InputTextField 
                        type={"email"}
                        name={"email"}
                        value={emailAddress} 
                        textChange={(e) => {
                            this.setState({ emailAddress: e.target.value });
                    }}/>
                </div>
            </div>

            <div className="formFieldRow emailAddressField">
                <div className="formInputName">
                    CC:
                </div>
                <div className="formInputField">
                <ReactMultiEmail
                 placeholder=""
                 emails={ccEmails}
                  onChange={(_emails) => {
                        this.setState({ emails: _emails });
                  }}
                validateEmail={email => {
                    return isEmail(email); // return boolean
                }}
                getLabel={(
                    email,
                    index,
                    removeEmail
                ) => {
                    return (
                    <div data-tag key={index}>
                        {email}
                        <span data-tag-handle onClick={() => removeEmail(index)}>
                        ×
                        </span>
                    </div>
                    );
                    }}
                />
                </div>
            </div>

            <div className="formFieldRow emailAddressField">
                <div className="formInputName">
                    BCC:
                </div>
                <div className="formInputField">
                <ReactMultiEmail
                 placeholder=""
                 emails={bccEmails}
                  onChange={(_emails) => {
                        this.setState({ emails: _emails });
                  }}
                validateEmail={email => {
                    return isEmail(email); // return boolean
                }}
                getLabel={(
                    email,
                    index,
                    removeEmail
                ) => {
                    return (
                    <div data-tag key={index}>
                        {email}
                        <span data-tag-handle onClick={() => removeEmail(index)}>×</span>
                    </div>);
                    }}
                />
                </div>
            </div>

            <div className="formFieldRow emailAddressField">
                <div className="formInputName">
                    Customer First Name:
                </div>
                <div className="formInputField">
                    <InputTextField 
                        type={"text"}
                        name={"firstName"}
                        value={firstName} 
                        textChange={(e) => {
                            this.setState({ firstName: e.target.value });
                    }}/>
                </div>
            </div>

            <div className="formFieldRow emailAddressField">
                <div className="formInputName">
                    Customer Last Name:
                </div>
                <div className="formInputField">
                <InputTextField 
                        type={"text"}
                        name={"lastName"}
                        value={lastName} 
                        textChange={(e) => {
                            this.setState({ lastName: e.target.value });
                    }}/>
                </div>
            </div>

        </div>

        <h3 className="contactFormTitle"> Incident Information </h3>
        <div className="formWrapper">
            <div className="formFieldRow emailAddressField">
                    <div className="formInputName">
                        Subject
                    </div>
                    <div className="formInputField">
                    <InputTextField 
                        type={"text"}
                        name={"subject"}
                        value={subject} 
                        textChange={(e) => {
                            this.setState({ subject: e.target.value });
                         }}/>
                    </div>
            </div>
            <div className="formFieldRow emailAddressField">
                    <div className="formInputName">
                        PNR Locator
                    </div>
                    <div className="formInputField">
                        <InputTextField 
                            type={"text"}
                            name={"subject"}
                            value={pnrLocator}
                            textChange={(e) => {
                                this.setState({ pnrLocator: e.target.value });
                            }}
                        />
                    </div>
            </div>
            <div className="formFieldRow emailAddressField">
                    <div className="formInputName">
                        Reference #
                    </div>
                    <div className="formInputField">
                        <InputTextField 
                            type={"number"}
                            name={"referenceNo"}
                            value={referenceNo}
                            backgroundColor={'#8080803d'}
                            textChange={(e) => {
                            this.setState({ referenceNo: e.target.value });
                         }}
                        />
                    </div>
            </div>
            <div className="formFieldRow emailAddressField" style={{'color': 'red'}}>
                <div className="formInputName">
                    Status*
                </div>
                <div className="formInputField">
                    <Dropdown 
                        list={[
                            {value: 1, label: 'New'}, 
                            {value: 2, label:'Old'}
                        ]}
                        textChange={(status) => {
                            this.setState({ status });
                        }}
                     />

                </div>
            </div>
            <div className="formFieldRow mailBoxFiled">
                <div className="formInputName">
                    Mailbox
                </div>
                <div className="formInputField">
                    <Dropdown 
                        list={[
                            {value: 1, label: 'Centurion Support'}, 
                            {value: 2, label:'Extensive Support'}
                        ]}
                        textChange={(mailbox) => {
                            this.setState({ mailbox });
                        }}
                     />

                </div>
            </div>
            <div className="jsonData" style={{'width': "100px"}}> {JSON.stringify(this.state)}</div>
        </div>
      </div>
    )
  }
}
