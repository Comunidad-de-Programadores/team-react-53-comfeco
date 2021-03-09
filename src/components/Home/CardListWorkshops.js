import React from 'react';
import '../../assets/styles/components/workshops.css';
import iconCheck from '../../assets/img/icon/check_circular.svg';
// import iconPoints from '../../assets/img/icon/points_circular.svg';
const CardListWorkshops = ({ workshop }) => {
  return (
    <div className='list__body--group'>
      <img src={iconCheck} alt='icono de taller' />
      {/* <img src={iconPoints} alt='icono de taller' /> */}
      <div>
        <h5>{workshop.titulo}</h5>

        <h6>{workshop.hora}</h6>
        <p>
          <span>By </span>
          <a href={workshop.redSocial}>{workshop.profesor}</a>
        </p>
      </div>
    </div>
  );
};

export default CardListWorkshops;
