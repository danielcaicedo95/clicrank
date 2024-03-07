import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from 'tinacms/dist/react';
import styles from '@/styles/cardLeft.module.css';

interface CardLeftProps {
  image: string;
  text: any; // Asume que 'text' es el contenido de Markdown
  fieldName: string;
}

const CardLeft: React.FC<CardLeftProps> = ({ image, text, fieldName }) => {
    return (
      <div className={styles.styledCard}>
        <div className={`${styles.textContainer}`} data-tina-field={tinaField(text, fieldName)}>
          <TinaMarkdown content={text} />
        </div>
        <div className={`${styles.imageContainer}`}>
          <img src={image} alt="Card image" />
        </div>
      </div>
    );
};

export default CardLeft;