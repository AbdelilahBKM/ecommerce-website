import { NextPage } from "next";
import CheckOut from "../components/checkout";
import { ProductContext } from "../context/productContext";
import SEO from "../components/common/SEO";

const ShoppingCard: NextPage = () => {
  return (
    <>
      <SEO title="checkout" />
      <ProductContext>
          <CheckOut />
      </ProductContext>
    </>
  );
};
export default ShoppingCard;
