import React, { useContext } from 'react';

import '../assets/styles/components/Avatar.css';
import AuthContext from '../auth/AuthContext';

const Avatar = () => {
  const { usuario } = useContext(AuthContext);

  const nombre = usuario.name;

  const nickName = () => {
    return nombre
      .toUpperCase()
      .split(' ')
      .map((item) => item.charAt(0))
      .slice(0, 2)
      .join('');
  };

  return (
    <div className='avatar'>
      <span>{nickName()}</span>
    </div>
  );
};

export default Avatar;
