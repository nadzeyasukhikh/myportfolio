import linkedin from "../../assets/images/LinkedIn_Logo.svg.png"
import styles from "./Footer.module.css"
function Footer(){
    const linkedinUrl = "https://www.linkedin.com/in/nadzeya-sukhikh-a6a87729a";
    return(
        <footer className={styles.footer}>
            <div>
            <p className={styles.title}>MY CONTACTS:</p>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.link} src={linkedin} alt="LinkedIn" />
            </a>
          
            <p className={styles.info}>Email: vitserresvit@gmail.com</p>
            <p className={styles.info}>Phone number: +306986397429</p>
            </div>
            <div>
                <p className={styles.info}>made by:</p>
                <p className={styles.info}>Nadzeya Sukhikh</p>
            </div>
        </footer>
    )
}

export default Footer