import React from 'react';
import '../styles/EventForm.css'; // Import CSS file for event form styles

function EventForm(): JSX.Element {
  return (
    <div className="event-form">
      <h2>Add New Event</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />
        </div>

        <button type="submit" className="submit-btn">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;
