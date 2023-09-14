import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'
import ProductVideo from '../product-video/Product-video'
import Youtube from '../youtube/Youtube'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h3 className='pl-title'>Stunning & Inspiring Projects.</h3>
        <p className='pl-desc'>
          Here are some influencive, attractive and user friendly projects that
          has beautifull designs with complex business logic, beside this
          frontend & backend stuff all are deployed by me 👇.
        </p>
      </div>
      <div className='pl-list pl-center'>
        <ProductVideo
          allow={
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          }
          link={'https://app.walletcampaigns.com'}
          embededId={'0syOUeKI3bg'}
        />
        <ProductVideo
          allow={
            'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          }
          link={'https://lustrous-liger-58ca8d.netlify.app/'}
          embededId={'SyrcYI4wOmQ'}
        />
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
