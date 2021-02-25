import React, { useEffect, useState } from 'react';
import '../../assets/styles/components/workshops.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import {
  getWorkshopsToday,
  getWorkshopsFilterArea,
} from '../../firebase/client';

const Workshops = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [listWorkshops, setListWorkshops] = useState([]);
  const options = [
    {
      value: 'frontend',
      label: 'frontend',
    },
    {
      value: 'backend',
      label: 'backend',
    },
    {
      value: 'DevOps',
      label: 'DevOps',
    },
    {
      value: 'Video Game',
      label: 'Video Game',
    },
    {
      value: 'Developers',
      label: 'Developers',
    },
    {
      value: 'UI/UX',
      label: 'UI/UX',
    },
    {
      value: 'Database Developer',
      label: 'Database Developer',
    },
    {
      value: 'Cloud Computing',
      label: 'Cloud Computing',
    },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption.value);
  };
  // const hora = (hora) => {
  //   const date = new Date(hora);
  //   console.log(date);
  //   const dia = date.getDate();
  //   const mes = date.getMonth() + 1;
  //   const yyy = date.getFullYear();
  //   // console.log(new Date(hora), 'juliana');
  //   return (
  //     <p>
  //       {dia}
  //       -
  //       {mes}
  //       -
  //       {yyy}
  //     </p>
  //   );
  // };
  useEffect(() => {
    getWorkshopsToday()
      .then((res) => {
        console.log(res, 'ojitos');
        setListWorkshops(res);
      })
      .catch((error) => {
        console.log(error, 'error :)');
      });

  }, []);

  useEffect(() => {
    if (selectedOption !== '') {
      return getWorkshopsFilterArea(selectedOption.value)
        .then((res) => {
          setListWorkshops(res);
        })
        .catch((error) => {
          console.log(error, 'error :) del filtro');
        });
    }

  }, [selectedOption]);

  return (
    <aside className='workshops'>
      <div className='workshops__header'>
        <h5>Talleres</h5>
        <Link to='/'>Ver más</Link>
      </div>
      <div className='workshops__filter'>
        <Select
          value={selectedOption}
          onChange={handleChange}
          name='area'
          options={options}
          className='select-marca'
          placeholder='Selecciona una marca'
          noOptionsMessage={() => 'Cargando marcas'}
          required
        />
      </div>
      <div className='workshops__list'>
        {selectedOption === '' && (
          <div className='list__header'>
            <span>HOY</span>
          </div>
        ) }

        <div className='list__body'>
          {listWorkshops.map((workshop) => (
            <div className='list__body--group'>
              <img src='' alt='icono de taller' />
              <div>
                <h5>{workshop.titulo}</h5>

                <h6>{workshop.hora}</h6>
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
