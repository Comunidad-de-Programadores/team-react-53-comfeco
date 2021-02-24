import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import Carousel from '../../components/Carousel';
import { onAuthStateChanged, auth } from '../../firebase/client';

const Home = () => {
  // Extraer la información de autentificación
  const { authContext, autenticado, cerrarSesion } = useContext(AuthContext);
  // const {
  //   // usuario,
  //   cerrarSesion,
  // } = authContext;

  const history = useHistory();

  const handleLogout = () => {
    // cerrarSesion();
    // history.replace('/login');
  };

  // useEffect(() => {
  //   usuarioAutenticado();
  // }, []);

  if (!autenticado) {
    // return <Redirect to="/login" />;
  }
  const creadores = [
    {
      id: 0,
      name: 'Nicolas Schurmann',
      img:
        'https://pbs.twimg.com/profile_images/2949429844/d85382733475e1c444bf48c47ef86690_400x400.jpeg',
      url: 'https://twitter.com/_nasch_',
    },
    {
      id: 1,
      name: 'Guillermo Rodas',
      img:
        'https://pbs.twimg.com/profile_images/1363066378303979524/8pLRmvui_400x400.jpg',
      url: 'https://twitter.com/glrodasz',
    },
    {
      id: 2,
      name: 'Fernando Herrera',
      img:
        'https://pbs.twimg.com/profile_images/796737477759221760/1s-3xb4V_400x400.jpg',
      url: 'https://twitter.com/Fernando_Her85',
    },
    {
      id: 3,
      name: 'Miguel Angel "Midudev" Duran',
      img:
        'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_400x400.jpg',
      url: 'https://twitter.com/midudev',
    },
    {
      id: 4,
      name: 'Leonidas Esteban',
      img:
        'https://pbs.twimg.com/profile_images/1324801908851298314/IAhTiaPE_400x400.jpg',
      url: 'https://twitter.com/LeonidasEsteban',
    },
    {
      id: 5,
      name: 'Oscar Barajas',
      img:
        'https://pbs.twimg.com/profile_images/1183824475172868098/AT8yXHDq_400x400.jpg',
      url: 'https://twitter.com/gndx',
    },
    {
      id: 6,
      name: 'Carlos Azaustre',
      img:
        'https://pbs.twimg.com/profile_images/1347163287352438786/AWpMVA_8_400x400.jpg',
      url: 'https://twitter.com/carlosazaustre',
    },
    {
      id: 7,
      name: 'Samuel Burbano',
      img:
        'https://pbs.twimg.com/profile_images/1329156207580475392/ohKt-3Y9_400x400.jpg',
      url: 'https://twitter.com/iosamuel',
    },
  ];

  const sponsors = [
    {
      id: 1,
      name: 'Huawei',
      img: 'https://i.ibb.co/3C6GQ5B/huawei.png',
    },
    {
      id: 2,
      name: 'Tekki',
      img: 'https://i.ibb.co/5rrGtFz/tekki.png',
    },
    {
      id: 3,
      name: 'CodelyTV',
      img: 'https://i.ibb.co/vVxZJKn/CodelyTV.png',
    },
    {
      id: 4,
      name: 'codigofacilito',
      img: 'https://i.ibb.co/BTtcBd4/c-digofacilito.png',
    },
    {
      id: 5,
      name: 'Domini Code',
      img: 'https://i.ibb.co/d6nVmvY/Domini-Code.jpg',
    },
    {
      id: 6,
      name: 'Egghead',
      img: 'https://i.ibb.co/5Tv1cV2/Egghead.jpg',
    },
    {
      id: 7,
      name: 'Fernando Herrera',
      img: 'https://i.ibb.co/DrHm0nJ/Fernando-Herrera.jpg',
    },
    {
      id: 8,
      name: 'José Dimas Luján',
      img: 'https://i.ibb.co/cvnwZy7/Jos-Dimas-Luj-n.jpg',
    },
    {
      id: 9,
      name: 'Latam Dev',
      img: 'https://i.ibb.co/VYv37Nh/Latam-Dev.jpg',
    },
    {
      id: 10,
      name: 'Leonidas Esteban',
      img: 'https://i.ibb.co/B64HzTq/Le-nidas-Esteban.jpg',
    },
    {
      id: 11,
      name: 'Stackly Code',
      img: 'https://i.ibb.co/wJJv3Jw/Stackly-Code.png',
    },
  ];
  return (
    <div>
      <p>
        Bienvenido :
        {/* {usuario ? (
          <span>
          {usuario.email}
          </span>
        ) : ''} */}
      </p>
      <button type="button" onClick={handleLogout} className="btn">
        Cerrar Sesión
      </button>
      <div className="creadores__content">
        <Carousel
          slidesToShow="4"
          sizeImg="80%"
          visiblePorcent="0.4"
          items={creadores}
          auto
        />
      </div>
      <div className="sponsors__content">
        <Carousel
          slidesToShow="5"
          sizeImg="80%"
          visiblePorcent="0.2"
          items={sponsors}
          auto={false}
        />
      </div>
    </div>
  );
};

export default Home;
