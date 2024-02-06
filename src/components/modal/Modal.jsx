
import { Link } from 'react-router-dom';
import styles from "./Modal.module.css"

function Modal ({ links, closeModal }){
    return(
      <div className={styles.modal}>
      <button className={styles.close} onClick={closeModal}>Close</button>
      <div className={styles.modalInfo}>
          <div className={styles.modalCard}>
              {links.map((link) => (
                  <div className={styles.linksDiv} key={link.name}>
                      <a className={styles.link} href={link.codeUrl} target="_blank" rel="noopener noreferrer">{link.name} - Code</a><br />
                      {link.componentName ? (
                          <Link to={`/${link.componentName}`} className={styles.link} onClick={closeModal}>
                              {link.name} - screenshots
                          </Link>
                      ) : (
                          <a className={styles.link} href={link.siteUrl} target="_blank" rel="noopener noreferrer">{link.name} - Site</a>
                      )}
                  </div>
              ))}
          </div>
      </div>
  </div>
    )
}

export default Modal