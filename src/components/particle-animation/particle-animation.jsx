import "./particle-animation.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context";

const ParticleAnimation = ({Image}) => {
  const theme = useContext(ThemeContext)

  function onLoad() {
    if(!window.ParticleSlider) return
    var ps = new window.ParticleSlider({
        width      : 400,
        heigth     : 90,
        ptlGap     : 0,
        mouseForce : 600,
        monochrome : false,
        // color      : '#000',
        ptlSize    : 1,
    });
    var ptl     = new ps.Particle(ps);
        ptl.ttl = 10;
}

useEffect(onLoad, [])

  return (
    <div id="particle-slider" style={{marginLeft: theme.state.darkMode ? '-27px' : '-18px'}}>
      <div class="slides">
          {window.ParticleSlider ? <Image /> : <h3 className="i-name" style={{margin: '20px 25px'}}>Zia Arsalan</h3>}
      </div>
      {window.ParticleSlider && <canvas class="draw" width="400"></canvas>}
  </div>
  );
};

export default ParticleAnimation;
