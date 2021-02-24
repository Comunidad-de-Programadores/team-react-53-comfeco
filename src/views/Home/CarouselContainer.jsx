import React from 'react';
import Carousel from '../../components/Carousel';

const CarouselContainer = () => {
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
      img: '../assets/images/sponsors/huawei.png',
    },
    {
      id: 2,
      name: 'Tekki',
      img: '../assets/images/sponsors/tekki.png',
    },
    {
      id: 3,
      name: 'CodelyTV',
      img: '../assets/images/sponsors/CodelyTV.png',
    },
    {
      id: 4,
      name: 'codigofacilito',
      img: '../assets/images/sponsors/codigofacilito.webp',
    },
    {
      id: 5,
      name: 'Domini Code',
      img: '../assets/images/sponsors/Domini Code.jpg',
    },
    {
      id: 6,
      name: 'Egghead',
      img: '../assets/images/sponsors/Egghead.jpg',
    },
    {
      id: 7,
      name: 'Fernando Herrera',
      img: '../assets/images/sponsors/Fernando Herrera.jpg',
    },
    {
      id: 8,
      name: 'José Dimas Luján',
      img: '../assets/images/sponsors/José Dimas Luján.jpg',
    },
    {
      id: 9,
      name: 'Latam Dev',
      img: '../assets/images/sponsors/Latam Dev.jpg',
    },
    {
      id: 10,
      name: 'Leonidas Esteban',
      img: '../assets/images/sponsors/Leónidas Esteban.jpg',
    },
    {
      id: 11,
      name: 'Stackly Code',
      img: '../assets/images/sponsors/Stackly Code.png',
    },
  ];

  return (
    <div className="home">
      <button type="button">Logout</button>

      <h1>Home</h1>
      <Carousel items={creadores} auto />
      <Carousel items={sponsors} auto={false} />
    </div>
  );
};

export default CarouselContainer;
