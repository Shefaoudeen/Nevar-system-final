import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import { useState } from "react";
import Loaderpage from "./Layout/Loaderpage";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 7000);

  return (
    <BrowserRouter>
      {loading ? (
        <Loaderpage />
      ) : (
        <div className={`w-screen `}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}
