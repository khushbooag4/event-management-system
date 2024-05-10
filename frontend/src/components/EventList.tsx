import React from 'react';
import EventCard from './EventCard.tsx';

function EventList(): JSX.Element {
  // Sample data (replace with actual data from API)
  const events: Array<any> = [
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2024-05-10', location: 'Location 1' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2024-05-12', location: 'Location 2' },
    { id: 3, title: 'Event 3', description: 'Description 3', date: '2024-05-15', location: 'Location 3' },
  ];

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
