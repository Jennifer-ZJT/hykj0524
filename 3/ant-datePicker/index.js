/*
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
        </div>
    );
}
}
ReactDOM.render(<App />, document.getElementById('root'));*/

/**
 * Created by nihao on 2017/5/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

function disabledDate(current) {
  var stringTime = "2017-09-01 00:00:00";
  var timestamp = Date.parse(new Date(stringTime));
  // can not select days before today and today and after "2017-08-31"
  return current && (current.valueOf() < (Date.now()-86400000) || current.valueOf() > timestamp);
}

class App extends React.Component{
  render(){
    return(
        <div>
        <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
        <RangePicker disabledDate={disabledDate} showTime={{ hideDisabledOptions: true }}/>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


