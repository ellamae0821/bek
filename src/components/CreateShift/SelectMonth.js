// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';


 
class SelectMonth extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }
 
  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }
 
  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    const month = [
    {
      month:"SELECT MONTH",
      value: "2017-11-"
    },{
      month:"November",
      value: "2017-11-"
    },
    {
      month:"December",
      value: "2017-12-"
    }]









    return (
      <div>
        <select className="select" name='month' onChange={this.changeValue}>
        {
          month.map((item,idx) => {
            return (
              <option key={idx} value={item.value || this.props.month} > {item.month} </option>
            );
          })
        }
       </select>

        <span>{errorMessage}</span>
      </div>
    );
  }
}
 
export default withFormsy(SelectMonth);