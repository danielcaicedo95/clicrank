import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from 'tinacms/dist/react';
import styles from '@/styles/card.module.css';


interface CardProps {
  image: string;
  text: any; // Asume que 'text' es el contenido de Markdown
  fieldName: string;
}

const Card: React.FC<CardProps> = ({ image, text, fieldName }) => {
    return (
      <div className={styles.styledCard}>
        <div className={`${styles.imageContainer}`}>
          <img src={image} alt="Card image" />
        </div>
        <div className={`${styles.textContainer}`} data-tina-field={tinaField(text, fieldName)}>
          <TinaMarkdown content={text} />
        </div>
      </div>
    );
};

export default Card;