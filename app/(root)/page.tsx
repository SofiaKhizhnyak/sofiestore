import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";

export const metadata = {
  //Dynamic Title
  title: "Home",
};

//test the loading spinner
/* const delay = (ms: number) => new Promise((res) => setTimeout(res, ms)); */

const HomePage = async () => {
  /*   await delay(2000); */

  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
