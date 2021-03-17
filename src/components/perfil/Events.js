import React from 'react';
import Event from './Event';

const Events = ({ events }) => {
  return (
    <div className='Events m-5'>
      <div className='container '>
        <div className='row'>
          {events.map((e) => (
            <div key={e.id} className='col'>
              <Event eventInfo={e} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
