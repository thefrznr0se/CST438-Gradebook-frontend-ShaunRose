import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ListAssignment from './components/ListAssignment';
import GradeAssignment from './components/GradeAssignment';
import EditAssignment from './components/EditAssignment'; // Import EditAssignment component
import AddAssignment from './components/AddAssignment'; // Import AddAssignment component
import DeleteAssignment from './components/DeleteAssignment'; // Import DeleteAssignment component

function App() {
  return (
    <div className="App">
      <h2>Gradebook</h2>
      <BrowserRouter>
        <div>
          {/* Navigation buttons */}
          <Link to="/">List Assignments</Link>
          <Link to="/GradeAssignment">Grade Assignments</Link>
          <Link to="/EditAssignment">Edit Assignments</Link>
          <Link to="/AddAssignment">Add Assignments</Link>
          <Link to="/DeleteAssignment">Delete Assignments</Link>

          <Switch>
            <Route exact path="/" component={ListAssignment} />
            <Route path="/GradeAssignment" component={GradeAssignment} />
            <Route path="/EditAssignment" component={EditAssignment} />
            <Route path="/AddAssignment" component={AddAssignment} />
            {/* New route for deleting an assignment */}
            <Route path="/deleteAssignment" component={DeleteAssignment} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
