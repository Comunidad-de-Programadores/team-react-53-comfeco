import React, { useEffect, useState } from 'react';

import '../../assets/styles/components/Grupos.css';
import imgGroup from '../../assets/img/group1.png';
import { getGroup } from '../../firebase/client';

const Grupos = () => {
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    getGroup(setGroupList);
  }, []);
  return (
    <div className='container__badge'>
      <h2 className='container__badge-title'>Grupos</h2>
      <div className='box-group'>
        <div className='box-1'>
          <div className='box-my-group'>
            <div className='my-group'>
              <div className='My-group-title'>
                <h5>Mi Grupo</h5>
                <a>Ir al grupo</a>
              </div>
              <div className='my-group-name'>Crazy Techs</div>
            </div>
            <div className='box-all-integrants'>
              <div className='box-one-integrants'>
                <div className='box-integrant-photo'>foto</div>
                <div className='box-integrant-name'>
                  Juan Secu
                  <br />
                  {' '}
                  <b>novato</b>
                </div>
                <div>
                  <b>integrante</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='box-2'>
          <div className='box-all-group'>
            <div className='box-filter'>
              <select className='form-select' aria-label='Default select example'>
                <option selected>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
              <form className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button
                  className='btn btn-outline-success btn-evento'
                  type='submit'
                >
                  Search
                </button>
              </form>
            </div>
            <div>
              <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-5  g-4'>
                {
                  groupList.map((group) => (
                    <div className='col'>
                      <div className='card h-100'>
                        <img src={group.image} />
                        <div className='card-body'>
                          <div className='box-lenguaje'>{group.programmingLanguage}</div>
                          <h5 className='card-title text-start'>{group.name}</h5>
                          <p className='card-text text-start'>
                            {group.description}
                          </p>
                        </div>
                        <div className='card-footer text-center'>
                          <button
                            type='button'
                            className='btn d-inline-block btn-outline-secondary btn-evento '
                          >
                            Unirse
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grupos;
