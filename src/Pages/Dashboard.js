import React, { Component } from 'react';
import firebase from 'firebase/compat/app'; // Import the Firebase App module
import 'firebase/compat/database'; // Import the Firebase Realtime Database module

class Dashboard extends Component {
  state = {
    source: '',
    destination: '',
    date: '',
    time: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { source, destination, date, time } = this.state;

    // Get a reference to the database service
    const database = firebase.database();

    // Push data to the database under the 'trips' node
    const newTripRef = database.ref('trips').push();
    newTripRef.set({
      source: source,
      destination: destination,
      date: date,
      time: time
    });

    // Clear form
    this.setState({
      source: '',
      destination: '',
      date: '',
      time: ''
    });
  };

  render() {
    return (
      <div style={{
        backgroundColor: ' #440000',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '30px',
      }}>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
        }} onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="source" style={{ fontWeight: 'bold' }}>Enter Source:</label>
            <input type="text" id="source" name="source" value={this.state.source} onChange={this.handleChange} placeholder="Enter Source" style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="destination" style={{ fontWeight: 'bold' }}>Enter Destination:</label>
            <input type="text" id="destination" name="destination" value={this.state.destination} onChange={this.handleChange} placeholder="Enter Destination" style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="date" style={{ fontWeight: 'bold' }}>Select Date:</label>
            <input type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange} style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="time" style={{ fontWeight: 'bold' }}>Select Time:</label>
            <input type="time" id="time" name="time" value={this.state.time} onChange={this.handleChange} style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 10px', borderRadius: '7px', border: 'solid', cursor: 'pointer', fontSize: '20px' }}>Upload</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Dashboard;
