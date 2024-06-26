import './product.css'

const Product = ({ title, img, link }) => {
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-title'>{title}</div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='demo' className='p-img' />
      </a>
    </div>
  )
}

export default Product
