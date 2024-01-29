import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
function Nav (){
    return(
        <nav className={styles.nav}>
            <div>
                <h2 className={styles.title}>PORTFOLIO</h2>
            </div>
            <div className={styles.allLinks}>
                <Link className={styles.link} to="/">ABOUT ME</Link>
                 <Link className={styles.link} to="/projects">MY PROJECTS</Link>
                
            </div>
        </nav>
    )
}

export default Nav