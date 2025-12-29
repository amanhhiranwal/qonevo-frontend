import React from 'react'
import "./HomePage.css"
import ProductSlider from '../../component/ImageCarsoul/ProductSlider'
import ifp from '../../Assets/ProductSliderImage/ifp.png';
import adsdisplay from '../../Assets/ad-display.png';
import kiosk from '../../Assets/kiosk.png';
import activeled from '../../Assets/active-led.png';
import pcops from '../../Assets/pc-ops.png';
import adson from '../../Assets/ProductSliderImage/add-ons.png'
import TabImageSlide from '../../component/ImageCarsoul/TabImageSlider';
import ContactPage from '../../component/contact/ContactPage';
import ClientSlider from '../../component/ClientSlider/ClientSlider';


const HomePage = () => {
  return (
      <>
      <ProductSlider/>
      {/* {{-- Interactive Flat Panel --}} */}
<section class="info-section">
    <div class="container-fluid text-center p-2 mobile-product-card">
        <div class="section-headings py-5">
            <h2 class="section-title">Interactive Flat Panel</h2>
            <p class="section-subtitle">
                Smarter. Sharper. Seamlessly connected.
            </p>
            <a href="/" class="btn-discover">Discover</a>
        </div>
        <img src={ifp} alt="Product Showcase" class="info-section-image"/>
    </div>
</section>

{/* Display & Signage section  */}
<section class="dual-product-section py-2">
    <div class="container-fluid">
        <div class="row g-4">
           
            <div class="col-md-6 p-3 mobile-product-card">
                <div class="product-card text-center">
                    <div class="section-headings  product-card-head">
                        <h2 class="section-title">Advertising Display & Signage</h2>
                        <p class="section-subtitle">
                           Stand tall. Stay visible.
                        </p>
                        <a href="/" class="btn-discover">Discover</a>
                    </div>
                    {/* <div class="section-headings py-5 product-card-head">
                        <h2 class="section-title">Advertising Display & Signage</h2>
                        <p class="section-subtitle">
                            Stand tall. Stay visible.
                        </p>
                        <a href="/" class="btn-discover">Discover</a>
                    </div> */}
                    <img src={adsdisplay} alt="Product Showcase"
                        class="info-section-image"/>
                   
                    {/* <div class="marker display-marker-left">
                        <span class="marker-line"></span>
                        <span class="marker-label">A-Type</span>
                    </div>

                    <div class="marker display-marker-top">
                        <span class="marker-line"></span>
                        <span class="marker-label">Wall Mounted</span>
                    </div>

                    <div class="marker display-marker-right">
                        <span class="marker-label">Floor Stand</span>
                        <span class="marker-line"></span>
                    </div> */}

                </div>
            </div>

           
            <div class="col-md-6 p-3 mobile-product-card">
                <div class="product-card text-center">
                    <div class="section-headings product-card-head">
                        <h2 class="section-title">Kiosk & Smart Display</h2>
                        <p class="section-subtitle">
                            Smarter self-service, reimagined.
                        </p>
                        <a href="/" class="btn-discover">Discover</a>
                    </div>
                    <img src={kiosk} alt="Product Showcase" class="info-section-image"/>
                </div>
               
                {/* <div class="dual-marker dual-marker-right vertical">
                    <div class="dual-marker-line"></div>
                    <div class="dual-marker-label">Mobile Stand</div>
                </div>
               
                <div class="dual-marker dual-marker-right horizontal">
                    <div class="dual-marker-line"></div>
                    <div class="dual-marker-label">Smart Pen</div>
                </div> */}
            </div>

        </div>
    </div>
</section>

{/* {{-- Active LED --}} */}
<section class="info-section">
    <div class="container-fluid text-center p-3 mobile-product-card">
        <div class="section-headings py-5">
            <h2 class="section-title">Active LED Display</h2>
            <p class="section-subtitle">
                Brilliance that breaks through daylight.
            </p>
            <a href="/" class="btn-discover">Discover</a>
        </div>
        <img src={activeled} alt="Product Showcase" class="info-section-image"/>
    </div>
</section>

{/* All-In-One PC & OPS and Accessories & Add-ons */}
  <section class="dual-product-section py-2 position-relative">
    <div class="container-fluid">
        <div class="row g-4">

            {/* <!-- Left Card --> */}
            <div class="col-md-6 p-3 position-relative mobile-product-card">
                <div class="product-card text-center">
                    <div class="section-headings product-card-head">
                        <h2 class="section-title">All-In-One PC & OPS</h2>
                        <p class="section-subtitle">Power that drives every display.</p>
                        <a href="/" class="btn-discover">Discover</a>
                    </div>
                    <img src={pcops} alt="Product Showcase"
                        class="info-section-image"/>
                </div>
                {/* <!-- LEFT Vertical Marker --> */}
                <div class="dual-marker dual-marker-left vertical">
                    <div class="dual-marker-line"></div>
                    <div class="dual-marker-label">OPS</div>
                </div>
                {/* <!-- LEFT Horizontal Marker --> */}
                <div class="dual-marker dual-marker-left horizontal">
                    <div class="dual-marker-line"></div>
                    <div class="dual-marker-label">All in-One PC</div>
                </div>
            </div>

            {/* <!-- Right Card --> */}
            <div class="col-md-6 p-3 position-relative mobile-product-card">
                <div class="product-card text-center">
                    <div class="section-headings product-card-head">
                        <h2 class="section-title">Accessories & Add-ons</h2>
                        <p class="section-subtitle">Smart pens, stands, cameras - made for perfection.</p>
                        <a href="/" class="btn-discover">Discover</a>
                    </div>
                    <img src={adson} alt="Product Showcase"
                        class="info-section-image"/>
                </div>
                {/* <!-- RIGHT Vertical Marker --> */}
                <div class="dual-marker dual-marker-right vertical">
                    <div class="dual-marker-line"></div>
                    <div class="dual-marker-label">Mobile Stand</div>
                </div>
                {/* <!-- RIGHT Horizontal Marker --> */}
                <div class="dual-marker dual-marker-right horizontal">
                    <div class="dual-marker-line"></div>
                    <div class="dual-marker-label">Smart Pen</div>
                </div>
            </div>

        </div>
    </div>
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
