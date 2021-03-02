import React, { Fragment, useEffect } from "react";
import Layout from "../layout";
import SingleWishProduct from "./SingleWishProduct";

const WishList = () => {
  useEffect(()=>{
document.title = "WishList | Mlinjo.net"
  },[])
  return (
    <Fragment>
      <Layout children={<SingleWishProduct />} />
    </Fragment>
  );
};

export default WishList;
