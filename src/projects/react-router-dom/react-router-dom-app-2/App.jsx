import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "../../../components/About";
import Contact from "../../../components/Contact";
import Home from "../../../components/Home";
import Layout from "../../../components/Layout";
import LayoutHome from "../../../components/LayoutHome";
import Navbar from "../../../components/Navbar";
import News from "../../../components/News";
import NewsDetails from "../../../components/NewsDetails";
import NoMatch from "../../../components/NoMatch";
import ProductDetails from "../../../components/ProductDetails";
import Products from "../../../components/Products";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* -------------------------------------------- */}
        <Route path="api/v1" element={<Layout />}>
          <Route index element={<LayoutHome />} />
          <Route path="home" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="news/:news_id" element={<NewsDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id/new/:id2" element={<ProductDetails />} />
        </Route>
        {/* <Route path="user" element={<User />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route> */}
        {/* -------------------------------------------- */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
