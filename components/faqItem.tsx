// faqItem.tsx
import React, { useState } from 'react';
import styles from '@/styles/faqStyle.module.css';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles['faq-item']} ${isOpen ? styles.open : ''}`}>
      <div className={styles['faq-question']} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={styles.arrow}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div className={styles['faq-answer']}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;