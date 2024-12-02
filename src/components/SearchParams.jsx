import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const sParams = useSearchParams();

  console.log(sParams);
  return <div>SearchParams page</div>;
};

export default SearchParams;
