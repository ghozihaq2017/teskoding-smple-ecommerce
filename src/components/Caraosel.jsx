import React from 'react';

function Caraosel() {
  return (
    <div className="carousel w-full h-full xl:h-72 md:w-10/12 mt-10  rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/3/21/de0c8663-cfee-4808-a4e2-2fc01ced7f84.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/3/21/a10251c5-de63-4f3f-a6a6-194b1ce71b3d.png.webp"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/3/7/ecb56665-c2cf-4dbb-9251-f8f89af85bd9.jpg.webp"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Caraosel;
