import styles from './FooterStyles.module.css'

function Footer() {
    return (
        <section id="footer" className={styles.container}>
            <img src="../../../public/logoCynMedina.png" alt="" />
            <p>&copy; 2024 Cynthia Medina
                <br />
                Todos los derechos reservados
            </p>
        </section>
        
    )
}

export default Footer
