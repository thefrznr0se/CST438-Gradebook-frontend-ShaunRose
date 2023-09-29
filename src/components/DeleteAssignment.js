import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../constants';
import { Link, useHistory } from 'react-router-dom';

function DeleteAssignment(props) {
  const assignmentId = props.match.params.assignmentId;
  const history = useHistory(); // Initialize history for redirection
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch assignment details or perform any initialization if needed
  }, []);

  const deleteAssignment = () => {
    setMessage('');
    console.log('DeleteAssignment.delete');
    // Send a DELETE request to the server to delete the assignment
    fetch(`${SERVER_URL}/assignments/${assignmentId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setMessage('Assignment deleted.');
          history.push('/assignments');
        } else {
          setMessage('Delete error. ' + res.status);
          console.error('Delete assignment error =' + res.status);
        }
      })
      .catch((err) => {
        setMessage('Exception. ' + err);
        console.error('Delete assignment exception =' + err);
      });
  };

  return (
    <div>
      <h3>Delete Assignment</h3>
      <div className="delete-message">
        <p>{message}</p>
      </div>
      <div className="delete-button">
        <button type="button" onClick={deleteAssignment}>
          Delete Assignment
        </button>
        <Link to="/assignments">Cancel</Link>
      </div>
    </div>
  );
}

export default DeleteAssignment;
