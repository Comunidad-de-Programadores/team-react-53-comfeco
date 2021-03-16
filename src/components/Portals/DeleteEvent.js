import React from 'react';
import { db } from '../../firebase/client';

const DeleteEvent = ({ id, onClose }) => {

  const handleDelete = async (e) => {
    await db.collection('eventos').doc(e).delete();
    onClose();
  };

  return (
    <div>
      <div className='modal-header'>
        <h5 className='modal-title' id='staticBackdropLabel'>¿Quieres eliminar este evento?</h5>
        <h6 className='card-subtitle mb-2 text-muted'>Esta acción será irreversible</h6>
      </div>
      <div className='modal-body'>
        Como creador puedes eliminar el evento en caso de que sea absolutamente necesario o así lo prefieras, esto eliminará a todos los registrados y la información del evento.
      </div>
      <div className='modal-footer'>
        <button type='button' onClick={onClose} className='btn btn-secondary mr-3'>Volver</button>
        <button type='button' onClick={() => handleDelete(id)} className='btn btn-danger'>Eliminar evento</button>
      </div>
    </div>
  );
};

export default DeleteEvent;
