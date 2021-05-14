import React from 'react';
import about from "../images/about.jpg";

function ListsCause (props){
    return(
        <ul>
            <li><span>&#10003;</span><cite className="text">{props.text}</cite></li>
            <li><span>&#10003;</span><cite className="text">{props.text}</cite></li>
            <li><span>&#10003;</span><cite className="text">{props.text}</cite></li>
            <li><span>&#10003;</span><cite className="text">{props.text}</cite></li>
        </ul>
    )
}

function AboutUs() {
    return (
        <section className="about-us">
            <div className="container">
                <div className="about-us__row">
                    <div className="about-us__col__1 image">
                        <img src={about} alt="image" width="100%" height="auto"/>
                    </div>
                    <div className="about-us__col__2 content">
                        <h2 className="main-title">ABOUT US</h2>
                        <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, error laudantium perspiciatis rerum quidem esse itaque temporibus molestiae repellat corrupti voluptates. Delectus illo quas eligendi corporis aperiam adipisci modi magni!</p>
                        <h3>Why Choose Us?</h3>
                        <div className="list-causes">
                            <ListsCause text="lorem ipsum dolor"/>
                            <ListsCause text="lorem ipsum dolor" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
