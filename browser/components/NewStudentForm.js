import React, { Component } from 'react';
import axios from 'axios';

export default class NewStudentForm extends Component {
    constructor(props) {
        super(props);
        console.log('props ', props)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        return this.setState({
            [event.target.name]: event.target.value
        })
    }

    async  handleSubmit (event) {
        event.preventDefault();
        try {
            const { data } = await axios.post('/student');
            console.log('data ', data)
            this.props.addStudent(data)
        } catch (error) {
            console.error(error)
        }
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.LastName} onChange={this.handleChange}/>
        </label>

        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
