import React, { Component } from "react";
import {
  Form,
  Text,
  TextArea,
  Radio,
  RadioGroup,
  Select,
  Checkbox
} from "react-form";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    opacity: 0
  },
  textArea: {
    right: 20,
    left: 20,
    width: "125px",
    fontSize: "10px"
  }
};

const style = {
  padding: 20,
  width: "800px"
};

class KKEditForm extends Component {
  constructor() {
    super();
    this.state = {
      submittedValues: []
    };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Paper style={style} zDepth={2}>
            <form onSubmit={this.handleSubmit}>
              <div className="poInfoDiv">
                <TextField
                  name="poStatus"
                  hintText="Enter PO Status"
                  floatingLabelText="PO Status"
                  style={styles.textArea}
                />
                <TextField
                  name="poShipDate"
                  hintText="Enter PO Ship Date"
                  floatingLabelText="PO Ship Date"
                  style={styles.textArea}
                />
              </div>
              <div className="ibsInfoDiv">
                <TextField
                  name="bookingDate"
                  hintText="Enter Booking Date"
                  floatingLabelText="Booking Date"
                  style={styles.textArea}
                />
                <TextField
                  name="ibsStatus"
                  hintText="Enter IB Shipping Status"
                  floatingLabelText="IB Shipping Status"
                  style={styles.textArea}
                />
                <TextField
                  name="qtyExpected"
                  hintText="Enter Qty Expected"
                  floatingLabelText="Quantity Expected"
                  style={styles.textArea}
                />
                <TextField
                  name="expShipDate"
                  hintText="Enter Expected Ship Date"
                  floatingLabelText="Expected Ship Date"
                  style={styles.textArea}
                />
                <TextField
                  name="expDelpDate"
                  hintText="Enter Expected Delivery Date"
                  floatingLabelText="Expected Delivery Date"
                  style={styles.textArea}
                />
                <TextField
                  name="vesselNumber"
                  hintText="Enter Vessel Number"
                  floatingLabelText="Vessel Number"
                  style={styles.textArea}
                />
                <TextField
                  name="containerNumber"
                  hintText="Enter Container Number"
                  floatingLabelText="Container Number"
                  style={styles.textArea}
                />
                <TextField
                  name="actShippingDate"
                  hintText="Enter Actual Shipping Date"
                  floatingLabelText="Actual Shipping Date"
                  style={styles.textArea}
                />
                <TextField
                  name="bol"
                  hintText="Enter BOL"
                  floatingLabelText="BOL"
                  style={styles.textArea}
                />
                <TextField
                  name="mmsiNumber"
                  hintText="Enter MMSI Number"
                  floatingLabelText="MMSI Number"
                  style={styles.textArea}
                />
                <TextField
                  name="carrierForwarder"
                  hintText="Enter Carrier/Forwarder"
                  floatingLabelText="Carrier/Forwarder"
                  style={styles.textArea}
                />
                <TextField
                  name="containerSize"
                  hintText="Enter Container Size"
                  floatingLabelText="Container Size"
                  style={styles.textArea}
                />

                <br />
                <div className="buttonWrapper">
                  <MuiThemeProvider>
                    <RaisedButton
                      label="Submit"
                      labelPosition="before"
                      containerElement="label"
                      primary={true}
                    >
                      <input type="submit" style={styles.exampleImageInput} />
                    </RaisedButton>
                  </MuiThemeProvider>
                </div>
              </div>
            </form>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default KKEditForm;
