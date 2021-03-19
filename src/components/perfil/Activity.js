import React from 'react';
import '../../assets/styles/components/Activity.css';

const Activity = ({ type, message, color, title, time }) => {

  const endTime = new Date();
  const startTime = new Date(time);
  const timeDiff = endTime.getTime() - startTime.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return (
    <div className='activity'>
      <div className='row'>
        <div className='col-3'>
          <div className='badge-type'>
            <img src={`../../assets/img/icon/${type}`} alt='' />
          </div>
        </div>
        <div className='col-9'>
          <h3 className={`titulo-actividad ${color}`}>
            {title}
            {' '}
            -
            {' '}
            <span className='text-muted'>{days > 0 ? `Hace ${days} días` : hours > 0 ? `Hace ${hours} horas` : minutes > 0 ? `Hace ${minutes} minutos` : `Hace ${seconds} segundos`}</span>
          </h3>
          <small className='text-muted'>{message}</small>

        </div>
      </div>
    </div>
  );
};

export default Activity;
