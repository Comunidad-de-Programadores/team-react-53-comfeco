import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

const CarouselItem = ({ item, size }) => {
  const { name, img } = item;

  return (
    <div className="carrousel__item">
      <img
        style={{ width: `${size}`, height: `${size}` }}
        alt={name}
        src={img}
      />
    </div>
  );
};

const Carousel = ({
  items,
  auto: autoCycle,
  visiblePorcent,
  sizeImg,
  slidesToShow,
}) => {
  console.log(sizeImg, "tamaño");
  if (items.length === 0) {
    return <></>;
  }

  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots
      showSides
      sidesOpacity={0.5}
      sideSize={Number(visiblePorcent)}
      slidesToScroll={4}
      slidesToShow={Number(slidesToShow)}
      scrollOnDevice
      autoCycle={autoCycle}
    >
      {items.map((item) => (
        <>
          <CarouselItem key={item.id} item={item} size={sizeImg} />
          <div className="item-name">{item.name}</div>
        </>
      ))}
    </InfiniteCarousel>
  );
};

export default Carousel;
