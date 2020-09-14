import React from 'react';
import './Review.css';
import { reviews } from '../../Profile'

export default function Review() {
    return (
       <div id="reviews" className="main-wrap">
            <div className="title">Reviews</div>
        	<div className="pic-ctn">
                {reviews.images.map((image, index) => (
                    <img key={index} src={image} alt="" className="pic" />
                ))}
            </div>
       </div>
    )
}