"use client"

import { PageAndNavQuery, PageQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import styles from '@/styles/faqStyle.module.css';

import { FeaturedReading } from "@/components/blog-list"
import { FeatureList } from "@/components/features"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"
import  LogoCarousel  from "@/components/logoCarousel"
import FormClient from "@/components/form-client"
import FAQList from "@/components/faqList"
import Card from "@/components/card";
import CardLeft from "@/components/cardLeft";
import TechComponent from "@/components/techComponent"


interface ImageProps {
  __typename: string;
  image?: string | null;
  text?: string | null;
}

interface TechComponentBlock {
  __typename: "PageBlocksTechComponent";
  mainText?: string | null;
  images?: ImageProps[];
}

interface CardBlock {
  __typename: "PageBlocksCard";
  image: string;
  text: string;
}

interface CardLeftBlock {
  __typename: "PageBlocksPageBlocksCard_left";
  image: string;
  text: string;
}


interface Logo {
  src: string;
  alt: string;
  url: string; 
}

interface PageComponentProps {
  data: PageAndNavQuery;
  variables: { relativePath: string };
  query: string;
  logos: Logo[];
}
interface Block {
  __typename: "PageBlocksPageBlocksLogoCarousel";
  logos?: Logo[] | null;
}

const faqs = [
  { question: '¿Cómo ClicRank puede mejorar mi visibilidad en línea?', answer: 'ClicRank utiliza estrategias de SEO avanzadas, incorporando inteligencia artificial para analizar tendencias y asegurar que tu sitio destaque en los motores de búsqueda. Nos enfocamos en palabras clave específicas y optimización técnica para asegurar un posicionamiento sólido y duradero.' },
  { question: '¿Cómo influye el diseño web de ClicRank en la experiencia de usuario?', answer: 'En ClicRank, creemos que un diseño web impactante es crucial para retener visitantes. Nos especializamos en interfaces de usuario modernas, que no solo son visualmente atractivas sino también intuitivas, mejorando la experiencia del usuario y aumentando la retención.' },
  { question: '¿Qué significan los KPIs y por qué son vitales para mi negocio?', answer: 'Los Key Performance Indicators (KPIs) son métricas esenciales que miden el rendimiento de tu presencia digital. En ClicRank, utilizamos KPIs para personalizar estrategias, comprender el comportamiento del usuario y optimizar tus campañas digitales, asegurando un camino claro hacia tus objetivos comerciales.' },
  { question: '¿Cómo puede ClicRank impulsar mis ventas en línea?', answer: 'A través de técnicas de growth hacking, ClicRank trabaja en la optimización continua de tu embudo de ventas digital. Analizamos los datos del usuario, implementamos mejoras basadas en resultados y maximizamos las conversiones, asegurando un crecimiento sostenible de tus ventas en línea.' },
  { question: '¿Qué diferencia a ClicRank de otras agencias digitales?', answer: 'ClicRank se destaca por mantenerse a la vanguardia de la tecnología digital. Estamos comprometidos con la actualización constante en los últimos algoritmos de búsqueda, tendencias de diseño y herramientas emergentes. Nuestra atención personalizada y enfoque estratégico nos diferencia, asegurando que cada cliente reciba soluciones adaptadas a sus necesidades específicas.' },
  //{ question: 'Pregunta 2', answer: 'Respuesta 2' },
  // Agrega aquí más preguntas y respuestas
];

export default function PageComponent(props: PageComponentProps) {
  const { data } = useTina(props)

  return (
    <>
      <SiteHeader {...data.nav} />
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return <WelcomeHero key={i} {...block} />
          }
          case "PageBlocksFeatureList": {
            return <FeatureList key={i} {...block} />
            
          }
          case "PageBlocksFeaturedReading": {
            return <FeaturedReading key={i} {...block} />
          }
          case "PageBlocksPageBlocksLogoCarousel": {
            return block.logos ? <LogoCarousel key={i} logos={block.logos.map(logo => logo ? { src: logo.src || '', alt: logo.alt || '', url: '' /* proporciona el valor correcto aquí */ } : { src: '', alt: '', url: '' })} /> : null;
          }
          case "PageBlocksCard": {
            const cardBlock = block as CardBlock;
            return <Card key={i} image={cardBlock.image} text={cardBlock.text} fieldName="text" />;
          }
          case "PageBlocksPageBlocksCard_left": { // Cambia esto a "PageBlocksCard_Left"
            const cardLeftBlock = block as CardLeftBlock;
            return <CardLeft key={i} text={cardLeftBlock.text} image={cardLeftBlock.image}  fieldName={`data.page.blocks[${i}].text`} />;
          }
          case "PageBlocksTechComponent": {
            const techComponentBlock = block as TechComponentBlock;
            const validImages = techComponentBlock.images?.filter(image => image.image !== null && image.image !== undefined).map(image => ({ image: image.image || '', alt: image.text || '', text: image.text || '' })) || [];
            return <TechComponent key={i} mainText={techComponentBlock.mainText || ''} images={validImages} />;
          }

          
        }
      })}
      <div>
      <h2 className={styles['faqs']}>Preguntas frecuentes</h2>
      <FAQList faqs={faqs} />
      </div>
      
      <Footer />
    </>
  )
}