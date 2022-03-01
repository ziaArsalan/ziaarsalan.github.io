import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import ProductVideo from "../product-video/Product-video";
import Youtube from "../youtube/Youtube";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        {/* <h1 className="pl-title">Create & inspire. It's Lama</h1> */}
        <h1 className="pl-title">Stunning & Inspiring Projects.</h1>
        <p className="pl-desc">
          Here are some influencive, attractive and user friendly projects that 
          has beautifull designs with complex business logic, beside this frontend 
          & backend stuff all are deployed by me 👇.
        </p>
      </div>
      <div className="pl-list pl-center">
        <ProductVideo allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"} link={'https://dev.walletcampaigns.ai'} embededId={'0syOUeKI3bg'} />
        <ProductVideo allow={"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"} link={'https://html-editor-react.herokuapp.com/'} embededId={'SyrcYI4wOmQ'} />
      </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
    </div>
  );
};

export default ProductList;
