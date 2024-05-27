import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/cynthia.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/CV-CynthiaLujánMedinaDíaz.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Cynthia Medina" />
                <img className={styles.colorMode} src={themeIcon} alt="color mode icon" 
                onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Cynthia
                    <br />
                    Medina
                </h1>
                <h2>Full Stack Developer</h2>
                <span>
                    <a href="https://es.linkedin.com/in/cynthia-medina-full-stack-developer/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://github.com/luli91" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                </span>
                <p className={styles.description}>
                Especialista en el diseño y desarrollo integral de aplicaciones web, priorizando la escalabilidad y eficiencia del frontend y backend. Enfocada en la innovación y funcionalidad para la creación de soluciones web.
                </p>
                <a href={CV} download>
                    <button className="hover">
                        Curriculum vitae
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;

