import React from "react";
import Product from "../productComponent/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg"
        alt=""
        className="home__image"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The Fault in our Stars"
          price={251}
          rating={5}
          image="https://m.media-amazon.com/images/I/817tHNcyAgL._AC_UY218_.jpg"
        />
        <Product
          id="49538094"
          title="Philips HR3705/10 300-Watt Hand Mixer"
          price={2222}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41tDUmnDITL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking"
          price={2499}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SX522_.jpg"
        />
        <Product
          id="23445930"
          title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (Blue)"
          price={5099}
          rating={5}
          image="https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg"
        />
        <Product
          id="3254354345"
          title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
          price={139900}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="Asus ROG Zephyrus S Ultra Slim Gaming Laptop, 15.6 144Hz IPS Type FHD, GeForce RTX 2070, Intel Core i7-8750H, 16GB DDR4, 512GB PCIe NVMe SSD, Aura Sync RGB, Windows 10, GX531GW-AS76"
          price={343099}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81rs2YCE4IL._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
