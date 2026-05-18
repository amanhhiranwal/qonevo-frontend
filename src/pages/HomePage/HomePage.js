import React from 'react'
import "./HomePage.css"
import ProductSlider from '../../component/ImageCarsoul/ProductSlider'
import ifp from '../../Assets/ProductSliderImage/ifp.png';
import adsdisplay from '../../Assets/ad-display.png';
import kiosk from '../../Assets/kiosk.png';
import activeled from '../../Assets/active-led.png';
import pcops from '../../Assets/pc-ops.png';
import adson from '../../Assets/ProductSliderImage/add-ons.png'
// import TabImageSlide from '../../component/ImageCarsoul/TabImageSlider';
import ContactPage from '../../component/contact/ContactPage';
import ClientCarousel from '../../component/ClientCarsoul/ClientCarsoul';



const HomePage = () => {
  return (
      <>
      <ProductSlider/>
      {/* {{-- Interactive Flat Panel --}} */}
<section className="info-section">
    <div className="container-fluid text-center p-2 mobile-product-card">
        <div className="section-headings py-5">
            {/* <h1  className='meta'>Qonevo Technologies</h1>
            <h2 className="section-title">Interactive Flat Panel</h2> */}
            <h1 className="meta">
            Interactive Flat Panel Solutions by Qonevo
            </h1>

            <h2 className="section-title">
            Interactive Flat Panels
            </h2>

            <p className="section-subtitle">
                Smarter. Sharper. Seamlessly connected.
            </p>
            <a href="/" className="btn-discover">Discover</a>
        </div>
        <img src={ifp} alt="Product Showcase" className="info-section-image"/>
    </div>
</section>

{/* Display & Signage section  */}
<section className="dual-product-section py-2">
    <div className="container-fluid">
        <div className="row g-4">
           
            <div className="col-md-6 p-3 mobile-product-card">
                <div className="product-card text-center">
                    <div className="section-headings  product-card-head">
                        <h2 className="section-title">Advertising Display & Signage</h2>
                        <p className="section-subtitle">
                           Stand tall. Stay visible.
                        </p>
                        <a href="/" className="btn-discover">Discover</a>
                    </div>
                    {/* <div className="section-headings py-5 product-card-head">
                        <h2 className="section-title">Advertising Display & Signage</h2>
                        <p className="section-subtitle">
                            Stand tall. Stay visible.
                        </p>
                        <a href="/" className="btn-discover">Discover</a>
                    </div> */}
                    <img src={adsdisplay} alt="Product Showcase"
                        className="info-section-image"/>
                   
                    {/* <div className="marker display-marker-left">
                        <span className="marker-line"></span>
                        <span className="marker-label">A-Type</span>
                    </div>

                    <div className="marker display-marker-top">
                        <span className="marker-line"></span>
                        <span className="marker-label">Wall Mounted</span>
                    </div>

                    <div className="marker display-marker-right">
                        <span className="marker-label">Floor Stand</span>
                        <span className="marker-line"></span>
                    </div> */}

                </div>
            </div>

           
            <div className="col-md-6 p-3 mobile-product-card">
                <div className="product-card text-center">
                    <div className="section-headings product-card-head">
                        <h2 className="section-title">Kiosk & Smart Display</h2>
                        <p className="section-subtitle">
                            Smarter self-service, reimagined.
                        </p>
                        <a href="/" className="btn-discover">Discover</a>
                    </div>
                    <img src={kiosk} alt="Product Showcase" className="info-section-image"/>
                </div>
               
                {/* <div className="dual-marker dual-marker-right vertical">
                    <div className="dual-marker-line"></div>
                    <div className="dual-marker-label">Mobile Stand</div>
                </div>
               
                <div className="dual-marker dual-marker-right horizontal">
                    <div className="dual-marker-line"></div>
                    <div className="dual-marker-label">Smart Pen</div>
                </div> */}
            </div>

        </div>
    </div>
</section>

{/* {{-- Active LED --}} */}
<section className="info-section">
    <div className="container-fluid text-center p-3 mobile-product-card">
        <div className="section-headings py-5">
            <h2 className="section-title">Active LED Display</h2>
            <p className="section-subtitle">
                Brilliance that breaks through daylight.
            </p>
            <a href="/" className="btn-discover">Discover</a>
        </div>
        <img src={activeled} alt="Product Showcase" className="info-section-image"/>
    </div>
</section>

{/* All-In-One PC & OPS and Accessories & Add-ons */}
  <section className="dual-product-section py-2 position-relative">
    <div className="container-fluid">
        <div className="row g-4">

            {/* <!-- Left Card --> */}
            <div className="col-md-6 p-3 position-relative mobile-product-card">
                <div className="product-card text-center">
                    <div className="section-headings product-card-head">
                        <h2 className="section-title">All-In-One PC & OPS</h2>
                        <p className="section-subtitle">Power that drives every display.</p>
                        <a href="/" className="btn-discover">Discover</a>
                    </div>
                    <img src={pcops} alt="Product Showcase"
                        className="info-section-image"/>
                </div>
                {/* <!-- LEFT Vertical Marker --> */}
                <div className="dual-marker dual-marker-left vertical">
                    <div className="dual-marker-line"></div>
                    <div className="dual-marker-label">OPS</div>
                </div>
                {/* <!-- LEFT Horizontal Marker --> */}
                <div className="dual-marker dual-marker-left horizontal">
                    <div className="dual-marker-line"></div>
                    <div className="dual-marker-label">All in-One PC</div>
                </div>
            </div>

            {/* <!-- Right Card --> */}
            <div className="col-md-6 p-3 position-relative mobile-product-card">
                <div className="product-card text-center">
                    <div className="section-headings product-card-head">
                        <h2 className="section-title">Accessories & Add-ons</h2>
                        <p className="section-subtitle">Smart pens, stands, cameras - made for perfection.</p>
                        <a href="/" className="btn-discover">Discover</a>
                    </div>
                    <img src={adson} alt="Product Showcase"
                        className="info-section-image"/>
                </div>
                {/* <!-- RIGHT Vertical Marker --> */}
                <div className="dual-marker dual-marker-right vertical">
                    <div className="dual-marker-line"></div>
                    <div className="dual-marker-label">Smart Pen</div>
                </div>
                {/* <!-- RIGHT Horizontal Marker --> */}
                <div className="dual-marker dual-marker-right horizontal">
                    <div className="dual-marker-line"></div>
                    <div className="dual-marker-label">Mobile Stand</div>
                </div>
            </div>

        </div>
    </div>
</section>
<section className='client-carousel mb-8'>
  <h2 className="montserrat text-center mt-8">Clients who believe in us</h2>
  <p className="montserrat text-center mb-4">We're proud to have worked with companies that share our passion for great products.</p>
  <ClientCarousel/>
</section>
{/* smarter portion */}
{/* 
<TabImageSlide/> */}

<contact id="contact">
<ContactPage/>
</contact>
{/* <ClientSlider/> */}
      </>
  )
}

export default HomePage
