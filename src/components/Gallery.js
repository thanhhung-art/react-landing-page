import React from 'react';
import image1 from "../images/01-small.jpg";
import image2 from "../images/02-small.jpg";
import image3 from "../images/03-small.jpg";
import image4 from "../images/04-small.jpg";
import image5 from "../images/05-small.jpg";
import image6 from "../images/06-small.jpg";
import image7 from "../images/07-small.jpg";
import image8 from "../images/08-small.jpg";
import image9 from "../images/09-small.jpg";

function Image (props){
    return (
        <div className="wrap-image">
            <div className="overlay">
                <p className="overlay__text">
                    lorem ipsum
                </p>
            </div>
            <img src={props.src} alt="image" width="100%" height="100%"/>
        </div>
        
        
    )
}

function Gallery() {
    return (
        <div className="container">
            <section className="gallery" id="gallery">
                <div className="gallery__row__1 title">
                    <h2 className="main-title">GALLERY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste dolorem vitae</p>
                </div>
                <div className="gallery__row__2 images">
                    <Image src={image1} />
                    <Image src={image2} />
                    <Image src={image3} />
                    <Image src={image4} />
                    <Image src={image5} />
                    <Image src={image6} />
                    <Image src={image7} />
                    <Image src={image8} />
                    <Image src={image9} />
                </div>
            </section>
        </div>
        
    )
}

export default Gallery
