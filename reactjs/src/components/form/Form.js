import React from "react";

class Form extends React.Component {
    render() {
    return(
        <>
            <input type="text" placeholder="firstname" value={this.props.firstname} name="firstname" onChange={this.props.handleChange} /><br/><br/>
            <input type="text" placeholder="lastname" value={this.props.lastname} name="lastname" onChange={this.props.handleChange} /><br/><br/>
            <input type="text" placeholder="email" value={this.props.email} name="email" onChange={this.props.handleChange} /><br/><br/>
            <input type="text" placeholder="id" value={this.props.id} name="id" onChange={this.props.handleChange} /><br/><br/>
            <input type="password" placeholder="password" value={this.props.password} name="password" onChange={this.props.handleChange} /><br/><br/>
        </>
    )
    }
}

export default Form;