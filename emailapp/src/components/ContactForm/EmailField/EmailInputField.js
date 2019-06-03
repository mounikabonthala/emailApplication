import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, prepareStyles } from '@material-ui/core/styles';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EmailInputField from '@mitchallen/react-email-input-field';

const EmailInputField1 = () => (
  <MuiThemeProvider>
        <div className="App">
          <EmailInputField />
        </div>
      </MuiThemeProvider>
);

EmailInputField1.propTypes = {
  floatingLabelText: PropTypes.string,
  hintText: PropTypes.string,
  showPasswordOption: PropTypes.bool,
  fieldStyle: PropTypes.object
};

export default EmailInputField1;