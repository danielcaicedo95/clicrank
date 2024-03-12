import React from 'react';
import styles from "@/styles/techComponent.module.css"

interface ImageProps {
  image: string;
  text: string;
  alt: string;
}

interface TechComponentProps {
  mainText: string;
  images: ImageProps[];
}

const TechComponent: React.FC<TechComponentProps> = ({ mainText, images }) => {
    return (
      <div className={styles['gb-grid-wrapper']}>
        {images.map((image, i) => (
          <figure key={i} className={styles['gb-grid-column']}>
            <img
              decoding="async"
              loading="lazy"
              src={image.image}
              alt={image.alt} 
            />
             <div className={styles['arrow-up']}></div> {/* Agrega el elemento de flecha aquí */}
            <figcaption>
              <a href={"#"}>{image.text}</a>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  };

export default TechComponent;