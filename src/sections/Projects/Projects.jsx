import styles from './ProyectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import maxParts from '../../assets/autopartes.png';
import maxiDetailing from '../../assets/logoMaxidetailing.png';
import serena from '../../assets/LogoSerenaShoes.png';
import trapArgento from '../../assets/Trap-Logo.png';
import claireLibrary from '../../assets/logo-library.png';

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard 
                src={maxParts} 
                link="https://github.com/luli91/Max-parts"
                h3="Max Parts"
                p="Ecommerce App"
                />
                <ProjectCard 
                src={maxiDetailing} 
                link="https://github.com/luli91/Max-detailing-desarrollo-web"
                h3="Maxi Detailing"
                p="Ecommerce App"
                />
                <ProjectCard 
                src={serena} 
                link="https://github.com/luli91/Serena"
                h3="Serena shoes"
                p="Ecommerce App"
                />
                <ProjectCard 
                src={trapArgento} 
                link="https://github.com/luli91/TrapArgento"
                h3="Trap Argento"
                p="Streaming App"
                />
                <ProjectCard 
                src={claireLibrary} 
                link="https://github.com/luli91/ProyectoFinalBackend"
                h3="Claire library"
                p="Ecommerce App"
                />
            </div>
        </section>
    )
}

export default Projects
