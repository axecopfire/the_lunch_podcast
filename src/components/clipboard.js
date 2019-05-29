import React from "react";

export default class Clipboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    handleSubmit (event) {
        console.log(this.state.value);
        event.preventDefault();

        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }
    render () {
        return (  
        <form onSubmit={ this.handleSubmit }>
            <input type="text" value={ this.state.value } onChange={ this.handleChange } />
            <input type="submit" value="Copy Text" />
        </form>          

        )
    }
}
