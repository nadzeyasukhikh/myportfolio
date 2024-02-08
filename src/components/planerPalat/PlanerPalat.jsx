import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./PlanerPalat.module.css"
import main from "../../assets/images/main.jpg";
import planer1 from "../../assets/imagesPlanerPalat/planer1.png"
import planer2 from "../../assets/imagesPlanerPalat/planer2.png"
import planer3 from "../../assets/imagesPlanerPalat/planer3.png"
import planer4 from "../../assets/imagesPlanerPalat/planer4.png"
import planer5 from "../../assets/imagesPlanerPalat/planer5.png"
import planer6 from "../../assets/imagesPlanerPalat/planer6.png"
import planer7 from "../../assets/imagesPlanerPalat/planer7.png"
import planer8 from "../../assets/imagesPlanerPalat/planer8.png"
import { useNavigate } from "react-router-dom";
function PlanerPalat(){

    const navigate = useNavigate()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
      const images =[
        planer1, planer2, planer3, planer4, planer5, planer6, planer7, planer8
      ]

    const backgroundStyle = {
        backgroundImage: `url(${main})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };

      const backendUrl = "https://github.com/nadzeyasukhikh/planner-palat-backend"
    return (
        <div style={backgroundStyle} className={styles.shopDiv}>
            <div className={styles.btnTitle}>
           <button className={styles.btn} onClick={() => navigate("/projects")}>
        back
      </button>
      
      <h2 className={styles.title}>Online store</h2>
      </div>
      <p className={styles.text}>
      The "Todo and Recipes" project is created in React. It features a todo list and a recipe website. All background images change according to the season. Recipes can be added and removed. The todo list is saved using localStorage. Additionally, a backend for this project has been created, which is provided in the link.
        </p>
        
        <a className={styles.link} href={backendUrl} target="_blank" rel="noopener noreferrer">Backend code </a>
      <div className={styles.slider}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img className={styles.image} src={img} alt={`shot${idx + 1}`} />
          </div>
        ))}
      </Slider>
      </div>
        </div>
    )
}

export default PlanerPalat