import React, { useState } from 'react';
import Navigation from './components/Navigation.tsx';
import EventForm from './components/EventForm.tsx';
import EventList from './components/EventList.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
 // const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Router>
        <nav>
          <Navigation />
        </nav>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/add" element={<EventForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
