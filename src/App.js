import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';





class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      hour : '00',
      minute : '00',
      second : '00',
      title : ''

    }
    this.updateClock = this.updateClock.bind(this)

  }

componentDidMount(){

  var me = this;
  setInterval(function () {
    var d = new Date();
    me.updateClock(d)
  }, 1000);
}

updateClock(props) {
    console.log(props);
    this.setState({
      hour : props.getHours(),
      minute : props.getMinutes(),
      second : props.getSeconds()
    })
    if(this.state.second === 0){
      this.setState({
        title : ''
      })
    }
    else if(this.state.second % 5 === 0 && this.state.second % 3 === 0){
      this.setState({
        title : 'FizzBuzz'
      })
    }
    else if(this.state.second % 3 === 0){
      this.setState({
        title : 'Fizz'
      })
    }
    else if(this.state.second % 5 === 0 ){
      this.setState({
        title : 'Buzz'
      })
    }
    else {
      this.setState({
        title: ''
      })
    }
}


  render() {
    return (
      <div class="App-header">
        <h1>Hello, world!</h1>
        <h2>Time: {this.state.hour} : {this.state.minute} : {this.state.second}</h2>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
