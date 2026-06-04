import React, { useEffect, useState } from "react";
import banner from "../../Assets/ListingPage/banner.png";
import "./ListingPage.css";
import axios from "axios";
// import DetailModal from "../IFP/DetailModal";
import FilterSideBar from "../../component/FilterSideBar/FilterSideBar";
import ProductCard from "../../component/ProductCard/ProductCard";


const BASE_URL = process.env.REACT_APP_BASE_URL;         


const ListingPage = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = () => {};

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/products`, {
      timeout: 10000,
    });
        setProducts(response.data);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

 

  return (


  
    <div className="listing-container">
      <div className="listing-banner">
        <img src={banner} alt="Listing Page" />
      </div>

      <div className="listing-banner-text">
        <h1>The Smart Classroom. Reimagined.</h1>
        <p>Qonevo Interactive Flat Panel  |   Limitless Interactive</p>
      </div>

    <div className="listing-content">

  <div className="listing-layout">

    <div className="listing-sidebar">
      <FilterSideBar onFilterChange={handleFilterChange} />
    </div>

    <div className="right-listing-content">

      {loading ? (
        <div className="products-loader">
          <div className="loader"></div>
        </div>
      ) : products.length === 0 ? (                         // ← empty state
    <p className="no-data">No Data Found...</p>
  ): (
        // <div className="product-grid">

        //   {products.map((p) => (
        //     <div className="product-card_ifp" key={p.id ?? p.name}>

        //       <div className="abstract-art">

        //         <img
        //           className="img-default"
        //           src={p.thumbnail}
        //           alt={p.name}
        //           loading="lazy"
        //         />

        //         {p.images?.[1]?.image_url && (
        //           <img
        //             className="img-hover"
        //             src={p.images[1].image_url}
        //             alt={p.name}
        //             loading="lazy"
        //           />
        //         )}

        //       </div>

        //       <div className="product-info mt-4">

        //         <div className="product-name">
        //          {`${p.name} ${p.size}"`}
        //         </div>

        //         <div className="product-spec">
        //           {p?.subheading}
        //         </div>

        //         <div
        //           className="product-spec mt-4 mb-4"
        //           style={{ color: "#aaa" }}
        //         >
        //           {p?.size | p?.chipset | p?.storage | p?.resolution || "Default : 4K UHD | 400 nits | 200W * 2"}
        //         </div>

        //         <button
        //           className="btn-view"
        //           onClick={() => setSelectedProduct(p)}
        //         >
        //           View Details
        //         </button>

        //       </div>

        //     </div>
        //   ))}

        // </div>
        <ProductCard  products = {products}/>
      )}

    </div>

  </div>

</div>
      
    </div>
  );
};

export default ListingPage;
