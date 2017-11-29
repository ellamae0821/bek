import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import { addShift } from '../../actions/shifts';
//import { QRCode } from 'react-qr-svg';
//import Formsy from 'formsy-react';
//import MyInput from '../../components/CreateShift/MyInput';
//import SelectMonth from '../../components/CreateShift/SelectMonth';
//import SelectDay from '../../components/CreateShift/SelectDay';
//import PopPop from 'react-poppop';
import Popup from '../../components/CreateShift/Popup';
import ShiftLength from '../../components/CreateShift/ShiftLength';
import { notifySms } from '../../actions/sms';

class NewShift extends Component {
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.quickSubmit = this.quickSubmit.bind(this);
    this.state = { canSubmit: false, show: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    this.setState({show:false})
    console.log(model);
    if(model.start !== undefined){
      this.setState({canSubmit:true})
      this.props.addShift(model)

    }
  }

  quickSubmit(model) {
    this.setState({show:false})
    console.log(model);
    if(model._4!== undefined){
      this.setState({canSubmit:true})
      this.props.addShift(model)

    }
  }

  render(){
    return (
        <div id="main-shift-button-container">
        <Popup
          submit={this.submit.bind(this)}
          canSubmit={this.state.canSubmit}/>
        <ShiftLength
          submit={this.quickSubmit.bind(this)}
          canSubmit={this.state.canSubmit}/>
        </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedNewShift = connect(
  mapStateToProps,
  {loadUsers,addShift,notifySms}
)(NewShift)

export default ConnectedNewShift;