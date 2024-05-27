import styles from './FooterStyles.module.css'
import logoCynMedina from '../../../public/logoCynMedina.png';

function Footer() {
    return (
        <section id="footer" className={styles.container}>
            <img src={logoCynMedina} alt="logo full satck developer Cynthia Medina" />
            <p>&copy; 2024 Cynthia Medina
                <br />
                Todos los derechos reservados
            </p>
        </section>
        
    )
}

export default Footer
