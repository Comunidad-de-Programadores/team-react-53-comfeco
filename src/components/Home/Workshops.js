import React, { useEffect, useState } from 'react';
import '../../assets/styles/components/workshops.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { getWorkshops } from '../../firebase/client';

const Workshops = () => {
  const options = [
    {
      value: 'area_1',
      label: 'frontend',
    },
    {
      value: 'area_2',
      label: 'backend',
    },
    {
      value: 'area_3',
      label: 'DevOps',
    },
    {
      value: 'area_4',
      label: 'Video Game',
    },
    {
      value: 'area_5',
      label: 'Developers',
    },
    {
      value: 'area_6',
      label: 'UI/UX',
    },
    {
      value: 'area_7',
      label: 'Database Developer',
    },
    {
      value: 'area_8',
      label: 'Cloud Computing',
    },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [listWorkshops, setListWorkshops] = useState([]);

  useEffect(() => {
    getWorkshops()
      .then((res) => {
        console.log(res, 'ojitos');
        setListWorkshops(res)
          .catch((error) => {
            console.log(error, 'error');
          });
      });
  }, []);

  return (
    <aside className='workshops'>
      <div className='workshops__header'>
        <h5>Talleres</h5>
        <Link to='/'>Ver más</Link>
      </div>
      <div className='workshops__filter'>
        <Select
          // value={selectedOption}
          // onChange={handleChange}
          // name="marca"
          options={options}
          className='select-marca'
          placeholder='Selecciona una marca'
          noOptionsMessage={() => 'Cargando marcas'}
          required
        />
      </div>
      <div className='workshops__list'>
        <div className='list__header'>
          <span>HOY</span>
        </div>
        <div className='list__body'>
          {listWorkshops.map((workshop) => (
            <div className='list__body--group'>
              <img src='' alt='icono de taller' />
              <div>
                <h5>{workshop.titulo}</h5>
                <h6>{workshop.hora.seconds}</h6>
                <p>
                  <span>By </span>
                  <a href={workshop.redSocial}>{workshop.profesor}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
export default Workshops;
