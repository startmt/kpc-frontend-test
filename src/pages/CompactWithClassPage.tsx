import React, { Component } from "react";
import { FormHook } from "../components/FormHook";

class CompactWithClassPage extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      form: undefined,
      form1: undefined
    };
  }
  handleForm = (form: any) => {
    this.setState({ form });
  };
  handleSubmitForm = (values: any) => {
    console.log(values);
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <FormHook
          handleForm={this.handleForm}
          handleSubmit={this.handleSubmitForm}
        />
      </div>
    );
  }
}

export default CompactWithClassPage;
