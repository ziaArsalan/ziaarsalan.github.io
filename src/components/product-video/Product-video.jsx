import Youtube from "../youtube/Youtube";
import "./product-video.css";

const ProductVideo = ({allow, link, embededId}) => {
  return (
    <div className="pv">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <Youtube embededId={embededId} allow={allow}/>
      </a>

    </div>
  );
};

export default ProductVideo;
