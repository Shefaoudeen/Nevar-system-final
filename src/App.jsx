import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import { useState } from "react";
import { Loader } from "./assets/Videos";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  const [blur, setBlur] = useState(true);

  setTimeout(() => {
    setBlur(false);
  }, 7000);

  return (
    <BrowserRouter>
      {loading ? (
        <div>
          <video
            src={Loader}
            autoPlay
            muted
            className="object-fill h-screen w-screen duration-500 transition-all ease-linear"
          />
        </div>
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
