import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../constants';
import { Link, useHistory } from 'react-router-dom';
import './EditAssignment.css';

function EditAssignment(props) {
  const [assignmentData, setAssignmentData] = useState({
    name: '',
    dueDate: '',
  });

  const [message, setMessage] = useState('');

  const assignmentId = props.match.params.assignmentId;
  const history = useHistory(); 

  useEffect(() => {
    fetchAssignment();
  }, [assignmentId]);

  const fetchAssignment = () => {
    setMessage('');
    fetch(`${SERVER_URL}/assignments/${assignmentId}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignmentData(data);
      })
      .catch((err) => {
        setMessage('Exception. ' + err);
        console.error('Fetch assignment error ' + err);
      });
  };

  const saveAssignment = () => {
    setMessage('');
    console.log('EditAssignment.save');
    fetch(`${SERVER_URL}/assignments/${assignmentId}`, {
      method: 'PUT', // Use 'PUT' to update the assignment
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => {
        if (res.ok) {
          setMessage('Assignment saved.');
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
      <h3>Edit Assignment</h3>
      <div className="form-container">
        <h4 id="emessage">{message}&nbsp;</h4>
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

export default EditAssignment;
