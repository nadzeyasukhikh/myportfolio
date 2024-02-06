import { useState } from "react";
import main from "../../assets/images/main.jpg"
import Modal from "../../components/modal/Modal";
import styles from "./Projects.module.css"
import gitHub from "../../assets/images/github.png"
import codeWars from "../../assets/images/codewars.jpg"
import JavaScriptRepositories from "../../utils/JavaScriptRepositories";
import OtherRepositories from "../../utils/OtherRepositories";
import ReactRepositories from "../../utils/ReactRepositories";
function Projects(){
    const [modalData, setModalData] = useState({ isOpen: false, links: [] });

    const backgroundStyle = {
        backgroundImage: `url(${main})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };

      const repositories = {
        JavaScript: JavaScriptRepositories,
        React: ReactRepositories,
        Other: OtherRepositories
    };
    

      const openModal = (repoType) => {
        const repoLinks = repositories[repoType] || [];
        setModalData({ isOpen: true, links: repoLinks });
    };

    const closeModal = () => {
        setModalData({ isOpen: false, links: [] });
    };
    const gitHubUrl = "https://github.com/nadzeyasukhikh"
    const codeWarsUrl = "https://www.codewars.com/users/nadzeyasukhikh"
    return(
        <div style={backgroundStyle} className={styles.projectsDiv}>
            <div className={styles.titleBtn}>
            <h2 className={styles.title}>MY PROJECTS</h2>
            <button className={styles.btn} onClick={() => openModal("JavaScript")}>JavaScript</button><br />
            <button className={styles.btn} onClick={() => openModal("React")}>React</button><br />
            <button className={styles.btn} onClick={() => openModal("Other")}>Other</button>
            </div>
            {modalData.isOpen && <Modal links={modalData.links} closeModal={closeModal} />}
            <div className={styles.gitCode}>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.link} src={gitHub} alt="github" />
            </a>
            <a href={codeWarsUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.link} src={codeWars} alt="codewars" />
            </a>
            </div>
        </div>
    )
}

export default Projects