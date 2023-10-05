import React, { useState } from 'react';
import { SERVER_URL } from '../constants';
import { useHistory } from 'react-router-dom'; // Import useHistory to redirect after saving

function AddAssignment() {
  const [assignmentData, setAssignmentData] = useState({
    name: '',
    dueDate: '', 
  });

  const [message, setMessage] = useState('');

  const history = useHistory(); // Initialize history for redirection

  const saveAssignment = () => {
    setMessage('');
    console.log('AddAssignment.save');
    fetch(`${SERVER_URL}/assignments`, {
      method: 'POST', // Use 'POST' to create a new assignment
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => {
        if (res.ok) {
          setMessage('Assignment saved.');
          // Redirect to a different page after saving (e.g., assignments list)
          history.push('/assignments');
        } else {
          setMessage('Save error. ' + res.status);
          console.error('Save assignment error =' + res.status);
        }
      })
      .catch((err) => {
        setMessage('Exception. ' + err);
        console.error('Save assignment exception =' + err);
      });
  };

  const handleInputChange = (e) => {
    setMessage('');
    const { name, value } = e.target;
    setAssignmentData({
      ...assignmentData,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Add Assignment</h3>
      <div margin="auto">
        <h4 id="amessage">{message}&nbsp;</h4>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={assignmentData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={assignmentData.dueDate}
          onChange={handleInputChange}
        />
        
        <button type="button" onClick={saveAssignment}>
          Save Assignment
        </button>
      </div>
    </div>
  );
}

export default AddAssignment;
