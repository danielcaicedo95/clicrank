import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/LogoCarousel.module.css';

interface Logo {
  src: string;
  alt: string;
  url: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.arrow}`}
        style={{ ...style, display: "block", right: "20px", zIndex: "1" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.arrow}`}
        style={{ ...style, display: "block", left: "20px", zIndex: "1" }}
        onClick={onClick}
      />
    );
  }

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const settings = {
    className: styles.center,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {logos.map((logo: Logo, index: number) => (
          <div key={index} className={styles.logoContainer}>
              <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;

{/* 
<a href={logo.url} target="_blank" rel="noopener noreferrer">
  <img src={logo.src} alt={logo.alt} />
</a> 
*/}