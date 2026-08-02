import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const IFPPage = lazy(() => import("./pages/IFP/IFPPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const ActiveLed = lazy(() => import("./pages/ActiveLEDPage/ActiveLed"));
const SupportPage = lazy(() => import("./pages/SupportPage/SupportPage"));
const ListingPage = lazy(() => import("./pages/ListingPage/ListingPage"));
const SupportList = lazy(() => import("./pages/SupportPage/SupportList"));
const ListLed = lazy(() => import("./pages/ListLEDs/ListLed"));
const AdvDisplay = lazy(() =>
  import("./pages/AdvertisingDisplayPage/AdvDisplay")
);

const PageLoader = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/IFP" element={<IFPPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/active-led" element={<ActiveLed />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/ifp" element={<SupportList />} />
          <Route path="/listing-page" element={<ListingPage />} />
          <Route path="/listing-page-Led" element={<ListLed />} />
          <Route
            path="/advertising-display"
            element={<AdvDisplay />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;