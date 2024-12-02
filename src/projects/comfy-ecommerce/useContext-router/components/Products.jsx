import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMyCustomContextApi } from "../hooks/custom";
import PageHero from "./PageHero";
import SingleProduct from "./SingleProduct";

function Products() {
  const { pathname } = useLocation();
  const { products } = useMyCustomContextApi();

  const [priceInputVal, setPriceInputVal] = useState(500);
  const [searchVal, setSearchVal] = useState("");
  const [companyName, setCompanyName] = useState("all");

  const companies = ["all", ...new Set(products.map((p) => p.fields.company))];

  let filteredProducts = products.filter((p) => {
    return (p.fields.price / 10).toFixed(2) < Number(priceInputVal);
  });

  // Filter by company name click or keep "all"
  // if (companyName === "all") {
  //   filteredProducts = filteredProducts;
  // } else {
  //   filteredProducts = filteredProducts.filter(
  //     (fp) => fp.fields.company === companyName
  //   );
  // }

  filteredProducts =
    companyName === "all"
      ? filteredProducts
      : filteredProducts.filter((fp) => fp.fields.company === companyName);

  // Filter by company name search input
  if (searchVal.trim()) {
    filteredProducts = filteredProducts.filter((fp) => {
      let name = fp.fields.company;
      name = name.toLowerCase();
      return name.startsWith(searchVal);
    });
  }

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceInputVal(+value);
  };

  const changeCompanyProducts = (name) => {
    setCompanyName(name);
  };

  const handleProductSearch = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };

  return (
    <>
      <PageHero path={pathname} />
      <section className="products">
        {/* filters */}
        <div className="filters">
          <div className="filters-container">
            {/* search */}
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search company..."
                value={searchVal}
                onChange={handleProductSearch}
              />
              {searchVal && (
                <i
                  onClick={() => setSearchVal("")}
                  className="fa fa-times clear-search"
                ></i>
              )}
            </form>
            {/* companies list */}
            <h4>Company</h4>
            <article className="companies">
              {/* "company-btn active" : "company-btn" */}
              {companies.map((c, ind) => {
                const cBtnClass =
                  c === companyName ? "company-btn active" : "company-btn";
                return (
                  <button
                    key={ind}
                    onClick={() => changeCompanyProducts(c)}
                    className={cBtnClass}
                  >
                    {c}
                  </button>
                );
              })}
            </article>
            {/* price */}
            <h4>Price</h4>
            <form className="price-form">
              <input
                type="range"
                className="price-filter"
                min="0"
                value={priceInputVal}
                max="500"
                onChange={handlePriceChange}
              />
            </form>
            <p className="price-value">Value: ${priceInputVal}</p>
          </div>
        </div>
        {/* products */}
        <div className="products-container">
          {filteredProducts.length !== 0 ? (
            filteredProducts.map((fp) => (
              <SingleProduct product={fp} key={fp.id} />
            ))
          ) : (
            <h3 className="filter-error">
              sorry, no products matched your search
            </h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
