import Youtube from '../youtube/Youtube'
import './product-video.css'

const FullScreen = () => {
  return (
    <div style={{ marginLeft: 'auto', marginRight: '7px' }}>
      <svg height='100%' version='1.1' viewBox='0 0 30 30' width='25px'>
        <g class='ytp-fullscreen-button-corner-0'>
          <use class='ytp-svg-shadow'></use>
          <path
            fill='white'
            d='m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z'
            id='ytp-id-7'
          ></path>
        </g>
        <g class='ytp-fullscreen-button-corner-1'>
          <use class='ytp-svg-shadow'></use>
          <path
            fill='white'
            d='m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z'
            id='ytp-id-8'
          ></path>
        </g>
        <g class='ytp-fullscreen-button-corner-2'>
          <use class='ytp-svg-shadow'></use>
          <path
            fill='white'
            d='m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z'
            id='ytp-id-9'
          ></path>
        </g>
        <g class='ytp-fullscreen-button-corner-3'>
          <use class='ytp-svg-shadow'></use>
          <path
            fill='white'
            d='M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z'
            id='ytp-id-10'
          ></path>
        </g>
      </svg>
    </div>
  )
}

const ProductVideo = ({ allow, link, embededId }) => {
  return (
    <div className='pv'>
      <a href={link} target='_blank' rel='noreferrer'>
        <div className='p-browser'>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
          <FullScreen />
        </div>
      </a>
      <Youtube embededId={embededId} allow={allow} />
    </div>
  )
}

export default ProductVideo
