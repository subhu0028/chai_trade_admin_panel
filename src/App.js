
/*


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationHeader from './Components/NavigationHeader';';
// import Home from './Home'; // Replace with your actual components
// import Users from './Users'; // Replace with your actual components
// import Mentors from './Mentors'; // Replace with your actual components
import BlogList from './Components/Pages/BlogList'; // Replace with your actual components
import ApplicationList from './Components/Pages/ApplicationList';
import BlogForm from './Components/Pages/BlogFrom';
import ChartList from './Components/Pages/ChartList';
import ContactList from './Components/Pages/ContactList';
// Import other route components as needed

function App() {
  return (
    <Router>
      <div>
        <NavigationHeader />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={ApplicationList} />
          <Route path="/mentors" component={Mentors} />
          <Route path="/blogs" component={Blogs} />
          {/* Add more routes for your other pages }
        </Switch>
      </div>
    </Router>
  );
}

export default App;

*/

import React from 'react';
import FeatureList from './Components/Pages/FeatureList';

const App = () => {
  // Replace this with your actual feature data
  const features = [
    // Sample feature data
    {
      _id: 1,
      mentorName: 'Mentor Name 1',
      mentorImage: 'mentor-image-1.jpg',
      title: 'Feature Title 1',
      content: 'Feature Content 1',
    },
    // Add more feature entries as needed
  ];

  return (
    <div>
      {/* Other components or content */}
      <FeatureList features={features} />
    </div>
  );
};

export default App;
