import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import Form from './components/form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerified: false,
      firstname: "",
      lastname: "",
      email: "",
      id: "",
      password: ""
    }
  }

  recaptchaLoaded = () => {
    console.log("__recaptcha__7896654123123");
  }

  verifyCallback = (response) => {
    if (response) {
      this.setState({
        isVerified: true,
      })
    } else {
      if(this.state.isVerified != true) {
        window.location.reload();
      }
    }
    console.log('verifyed');
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <>
      <Form handleChange={this.handleChange} firstname={this.state.firstname} lastname={this.state.lastname} email={this.state.email} id={this.state.id} password={this.state.password} />
          <Recaptcha
            sitekey="6Lc3hNEaAAAAAIuZ4UCTIGb2Cj1Dx_rdSyivJSgV"
            render="explicit"
            verifyCallback={this.verifyCallback}
            onloadCallback={this.recaptchaLoaded}
          />
          <br/>
          <button onClick={() => {
            if(this.state.isVerified == true) {
              console.log(this.state.firstname + " " + this.state.lastname + " " + this.state.email + " " + this.state.id + " " + this.state.password);
            }
          }}>submit</button>
          </>
    );
  }
}

export default App;