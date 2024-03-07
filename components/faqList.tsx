// faqList.tsx
import React from 'react';
import FAQItem from '@/components/faqItem';
import styles from  '@/styles/faqStyle.module.css';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQListProps {
  faqs: FAQ[];
}

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  return (
    <div className={styles['faq-container']}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;