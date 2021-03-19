import React, { useEffect, useState } from 'react';
import '../../assets/styles/components/Grupos.css';
import { getGroup, getGroupsFilterLanguage } from '../../firebase/client';

const Grupos = () => {
  const [groupList, setGroupList] = useState([]);
  // const [valueSelectLanguage, setValueSelectLanguaje] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [searchGroups, setSearchGroups] = useState([]);

  useEffect(() => {
    getGroup(setGroupList);
  }, []);

  const selectLanguage = (e) => {
    e.preventDefault();
    getGroupsFilterLanguage(e.target.value, setGroupList);
  };
  const functionSearch = (e) => {
    e.preventDefault();
    const searchFilter = e.target.value.toLowerCase();
    setValueSearch(searchFilter);

  };

  const searchName = (e) => {
    e.preventDefault();
    if (valueSearch !== '') {
      getGroup(setSearchGroups);
    }

    if (searchGroups.length >= 1) {
      setGroupList(searchGroups.filter((filterName) => filterName.name.toLowerCase().indexOf(valueSearch) >= 0));
    }

  };

  console.log(groupList, 'miedo');
  console.log(valueSearch, 'valueVerda');
  console.log(searchGroups, 'value');
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
              <select className='form-select' aria-label='Default select example' value='' onChange={selectLanguage}>
                <option selected>Selecciona un lenguaje de programación</option>
                <option value='Typescript'>Typescript</option>
                <option value='PHP'>PHP</option>
                <option value='Python'>Python</option>
                <option value='JavaScript'>JavaScript</option>
              </select>
              <form className='d-flex' onSubmit={searchName}>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  value={valueSearch}
                  onChange={functionSearch}
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
