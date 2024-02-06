import styles from "./ShopOnLine.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import shot1 from "../../assets/imagesShop/shot1.png"
import shot2 from "../../assets/imagesShop/shot2.png"
import shot3 from "../../assets/imagesShop/shot3.png"
import shot4 from "../../assets/imagesShop/shot4.png"
import shot5 from "../../assets/imagesShop/shot5.png"
import shot6 from "../../assets/imagesShop/shot6.png"
import shot7 from "../../assets/imagesShop/shot7.png"
import shot8 from "../../assets/imagesShop/shot8.png"
import shot9 from "../../assets/imagesShop/shot9.png"
import shot10 from "../../assets/imagesShop/shot10.png"
import { useNavigate } from "react-router-dom";
import main from "../../assets/images/main.jpg";


function ShopOnLine(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

      const images = [
        shot1, shot2, shot3, shot4, shot5, shot6, shot7, shot8,shot9, shot10
      ]
      const navigate = useNavigate()

      const backgroundStyle = {
        backgroundImage: `url(${main})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
      const backendUrl = "https://github.com/callbackKid/telran_project_backend/tree/master/public"
    return(
        <div style={backgroundStyle} className={styles.shopDiv}>
            <div className={styles.btnTitle}>
           <button className={styles.btn} onClick={() => navigate("/projects")}>
        back
      </button>
      
      <h2 className={styles.title}>Online store</h2>
      </div>
      <p className={styles.text}>
        The "online store" project is a React-based application using Redux Toolkit. It includes forms for discounts and orders with validation, price filtering, and sorting on product pages. The shopping cart feature allows for reviewing, removing, and paying for products. A backend code link is provided for deeper integration.
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

export default ShopOnLine