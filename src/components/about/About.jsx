import './about.css'
import './review.css'
import Award from '../../img/award.png'
import Bg from '../../img/bg.png'
import { reviews } from '../../data'

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          {/* <img
            // src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            src={Bg}
            alt='Zia Arsalan'
            className='a-img'
          /> */}
          <iframe
            style={{ width: '100%', height: '100%' }}
            src={`https://www.youtube.com/embed/3gkmKYUAYMk`}
            frameBorder='0'
            allow={
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            }
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      </div>
      <div className='a-right'>
        <h3 className='a-title'>About Me</h3>
        <p className='a-sub'>
          👋 I'm a Full Stack Engineer (Front-end Focused) SaaS Expert with
          overall <b>6+ years </b> of vast and diversified experience working on
          enterprise and start-up projects.
        </p>
        <p className='a-desc'>
          Love to write documented and precise code that gives desired outputs,
          having an ELECTRONIC ENGINEERING background I also look at things with
          hardware aspects and communicate different devices through the
          program.
        </p>

        <h3 className='a-title'>Reviews </h3>
        {/* <div className="pic-ctn">
          {reviews.map((item, idx)=>(<div key={idx} className="a-award">
            <img src={item.avatar} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">
                <a href={item.link} target="_blank">{item.name}</a>
              </h4>
              {item.reviews.map((review, index)=><p key={index} className="a-award-desc">{review.review}<span className="a-review-date">{review.date}</span></p>)}
            </div>
          </div>))}
        </div> */}

        <div className='r-wrapper'>
          {reviews.map((item, idx) => (
            <div key={idx} className='r-item'>
              <img src={item.avatar} alt={item.name} className='a-award-img' />
              <div className='a-award-texts'>
                <h4 className='a-award-title'>
                  <a href={item.link} target='_blank'>
                    {item.name}
                  </a>
                </h4>
                {item.reviews.map((review, index) => (
                  <p key={index} className='a-award-desc'>
                    {review.review}
                    <span className='a-review-date'>{review.date}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About
