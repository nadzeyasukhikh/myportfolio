import { useState } from "react";
import main from "../../assets/images/main.jpg"
import Modal from "../../components/modal/Modal";

function Projects(){
    const [modalData, setModalData] = useState({ isOpen: false, links: [] });

    const backgroundStyle = {
        backgroundImage: `url(${main})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };

      const repositories = {
        JavaScript: [
            {name: "ClassSlider", url: "https://github.com/nadzeyasukhikh/projectFigmaSlider"},
            {name: "DarkLight", url: "https://github.com/nadzeyasukhikh/DarkLight.project.fe"},
            {name: "Game", url: "https://github.com/nadzeyasukhikh/MyProjects/tree/main/gameFE1"},
            {name: "Site", url: "https://github.com/nadzeyasukhikh/FEPro_Project_1"},
            {name: "projectJSDom", url: "https://github.com/nadzeyasukhikh/projectJSDomTR"},
            {name: "project.ath.ts", url: "https://github.com/nadzeyasukhikh/project.ath.ts"}

        ],
        React: [
            {name: "telrunproject", url: "https://github.com/nadzeyasukhikh/telrunproject"},
            {name: "plannerpalatFE", url: "https://github.com/nadzeyasukhikh/plannerpalat"},
            {name: "plannerpalatBE", url: "https://github.com/nadzeyasukhikh/planner-palat-backend"}
        ],
        Other: [
            {name: "calc", url: "https://github.com/nadzeyasukhikh/MyProjects/tree/main/calc"}
        ]
      }

      const openModal = (repoType) => {
        const repoLinks = repositories[repoType] || [];
        setModalData({ isOpen: true, links: repoLinks });
    };

    const closeModal = () => {
        setModalData({ isOpen: false, links: [] });
    };
    return(
        <div style={backgroundStyle}>
            <h2>MY PROJECTS</h2>
            <button onClick={() => openModal("JavaScript")}>JavaScript</button>
            <button onClick={() => openModal("React")}>React</button>
            <button onClick={() => openModal("Other")}>Other</button>
            {modalData.isOpen && <Modal links={modalData.links} closeModal={closeModal} />}
        </div>
    )
}

export default Projects