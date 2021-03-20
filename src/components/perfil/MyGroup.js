import React, { useState } from 'react';
import { db } from '../../firebase/client';
import Modal from '../Portals/Modal';
import Unsubscribe from '../Portals/Unsubscribe';

const MyGroup = (id) => {

  const [group, setGroup] = useState(false);
  const [unsubscribe, setUnsubscribe] = useState(false);

  if (id.id !== '' && !group) {
    const docRef = db.collection('grupos').doc(id.id);
    docRef.get().then((doc) => {
      if (doc.exists) {
        setGroup(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('Qué haces bucando cosas que no existen!?');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }

  const handleUnsubscribe = () => {
    setUnsubscribe(true);
  };

  const onClose = () => {
    setUnsubscribe(false);
  };

  if (group !== false && id !== '') {
    return (
      <>
        <div className='my-group'>
          <div className='My-group-title'>
            <h5>Mi Equipo</h5>
            <a className='btn btn-outline-primary btn-sm'>ver grupo</a>
          </div>
          <div className='row'>
            <div className='box-integrant-photo col-4'>
              <img src={group.image} alt='' />
            </div>
            <div className='col-8'>
              <h3 className='my-group-name'>{group.name}</h3>
              <span className='text-muted'>{group.programmingLanguage}</span>
            </div>
          </div>
          <div className='box-all-integrants'>
            <div className='box-one-integrants'>
              <div>
                <p>{group.description}</p>
              </div>
              <div>
                <button className='btn d-inline-block btn-outline-secondary btn-evento' onClick={handleUnsubscribe}>Salir del grupo</button>
                <Modal isOpen={unsubscribe} onClose={onClose}>
                  <Unsubscribe onClose={onClose} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='Nogroup'>
      <i className='far fa-frown-open fa-5x' />
      <h4 className='text-muted'>
        Parece que no tienes grupo 😥
        <br />
        <br />
        <br />
        ¿Qué tal si buscas algún grupo interesante?
      </h4>
    </div>
  );
};

export default MyGroup;
