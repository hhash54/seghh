import React, { useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import violin from '../images/violin.jpg';
import piano from '../images/piano.jpg';
import team from '../images/team.jpg';
import john from '../images/jone.jpg';
import jane from '../images/jane.jpg';

const styles = {
  hero: {
    fontFamily: 'Rock Salt, cursive',
    color:'white',
    backgroundImage: `url(${team})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  main: {
    fontFamily: 'Rock Salt, cursive',
    color: '#333',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0',
  },
  title: {
    fontSize: '2.5em',
    color: '#fff',
    textShadow: '2px 2px 4px #000000',
  },
  section: {
    width: '90%',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '50px',
  },
  sectionReverse: {
    flexDirection: 'row-reverse',
  },
  image: {
    width: '45%',
    borderRadius: '10px',
  },
  text: {
    width: '45%',
    fontSize: '18px',
    color: '#fff',
    textAlign: 'justify',
  },
  mentorList: {
    width: '90%',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
  },
  mentor: {
    width: '45%', // Adjust this to control the width of the mentor cards
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  mentorImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    objectPosition: 'top', // This will align the image to the top
    borderRadius: '10px',
  },
  
  mentorName: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#007BFF',
    textAlign: 'center',
  },
  mentorBio: {
    fontSize: '14px',
    color: '#333',
    textAlign: 'center',
  },
};

const mentors = [
  {
    name: 'John Doe',
    age: 35,
    teaches: 'Violin',
    bio: 'John is an experienced violin teacher with over 10 years of experience.',
    image: john,
  },
  {
    name: 'Jane Doe',
    age: 30,
    teaches: 'Piano',
    bio: 'Jane is a professional pianist with a passion for teaching.',
    image: jane,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutUsPage = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      aboutUs: 'About Us',
      atVirtuoso: 'At Virtuoso Music Learning, we firmly believe that every musical journey begins with finding the perfect note. Our dedicated team of expert musicians and educators is committed to providing you with the best learning experience, empowering you to achieve the musical excellence you\'ve always dreamed of. Whether you\'re a beginner taking your first steps into the world of music or an experienced musician seeking to refine your skills, Virtuoso is here to guide you every step of the way. Unleash your full musical potential and immerse yourself in the joy of music with us!',
      ourViolinClass: 'Our violin class is led by John Doe, an experienced violin teacher with over 10 years of experience. He will guide you through the basics and help you master the violin.',
      ourPianoClass: 'Our piano class is led by Jane Doe, a professional pianist with a passion for teaching. She will help you understand the fundamentals and improve your piano skills.',
      ourMentors: 'Our Mentors',
      age: 'Age',
      teaches: 'Teaches',
      johnBio: 'John is an experienced violin teacher with over 10 years of experience.',
      janeBio: 'Jane is a professional pianist with a passion for teaching.',
    },
    fr: {
      aboutUs: 'À propos de nous',
      atVirtuoso: 'Chez Virtuoso Music Learning, nous croyons fermement que chaque voyage musical commence par trouver la note parfaite. Notre équipe dédiée d\'experts musiciens et éducateurs s\'engage à vous fournir la meilleure expérience d\'apprentissage, vous permettant d\'atteindre l\'excellence musicale dont vous avez toujours rêvé. Que vous soyez un débutant faisant vos premiers pas dans le monde de la musique ou un musicien expérimenté cherchant à affiner vos compétences, Virtuoso est là pour vous guider à chaque étape. Libérez votre plein potentiel musical et immergez-vous dans la joie de la musique avec nous!',
      ourViolinClass: 'Notre cours de violon est dirigé par John Doe, un professeur de violon expérimenté avec plus de 10 ans d\'expérience. Il vous guidera à travers les bases et vous aidera à maîtriser le violon.',
      ourPianoClass: 'Notre cours de piano est dirigé par Jane Doe, une pianiste professionnelle avec une passion pour l\'enseignement. Elle vous aidera à comprendre les fondamentaux et à améliorer vos compétences au piano.',
      ourMentors: 'Nos mentors',
      age: 'Âge',
      teaches: 'Enseigne',
      johnBio: 'John est un professeur de violon expérimenté avec plus de 10 ans d\'expérience.',
      janeBio: 'Jane est une pianiste professionnelle avec une passion pour l\'enseignement.',
    },
  };

  const t = (key) => translations[language][key];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <ParallaxProvider>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Français' : 'English'}
      </button>
      <Parallax y={[-20, 20]} tagOuter="figure">
        <section style={styles.hero}>
          <h1 style={styles.title}>{t('aboutUs')}</h1>
          <p>{t('atVirtuoso')}</p>
        </section>
      </Parallax>

      <main style={styles.main}>
        <section style={styles.section}>
          <img src={violin} alt="Violin class" style={styles.image} />
          <p style={styles.text}>{t('ourViolinClass')}</p>
        </section>

        <section style={{ ...styles.section, ...styles.sectionReverse }}>
          <img src={piano} alt="Piano class" style={styles.image} />
          <p style={styles.text}>{t('ourPianoClass')}</p>
        </section>

        <h2 style={styles.title}>{t('ourMentors')}</h2>
        <div style={styles.mentorList}>
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              style={styles.mentor}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <img src={mentor.image} alt={`${mentor.name}, who teaches ${mentor.teaches}`} style={styles.mentorImage} />
              <h2 style={styles.mentorName}>{mentor.name}</h2>
              <p>{t('age')}: {mentor.age}</p>
              <p>{t('teaches')}: {mentor.teaches}</p>
              <p style={styles.mentorBio}>{t(mentor.name === 'John Doe' ? 'johnBio' : 'janeBio')}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </ParallaxProvider>
  );
};
export default AboutUsPage;
