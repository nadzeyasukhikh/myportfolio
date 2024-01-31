import styles from "./Modal.module.css"

function Modal ({ links, closeModal }){
    return(
        <div className={styles.modal}>
            <div className={styles.modalInfo}>
            <button className={styles.close} onClick={closeModal}>Close</button>
            <div className={styles.modalCard}>
              {links.map((link, index) => (
                <div key={index}>
                    <a className={styles.link} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                </div>
              ))}
            </div>
            </div>
        </div>
    )
}

export default Modal