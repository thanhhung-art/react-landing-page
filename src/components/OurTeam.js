import React from 'react';
import image1 from "../images/01 (1).jpg";
import image2 from "../images/02 (1).jpg";
import image3 from "../images/03 (1).jpg";
import image4 from "../images/04 (1).jpg";

function Member (props){
    return (
        <div className="member">
            <div className="member__image">
                <img src={props.image} alt="image" />
            </div>
            <h4 className="member__name">{props.name}</h4>
            <p className="text member__role">{props.role}</p>
        </div>
    )
}

function OurTeam() {
    return (
        <div className="container">
            <section className="our-team" id="team">
                <div className="our-team__row__1 title">
                    <h2 className="main-title">MEET THE TEAM</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste dolorem vitae</p>
                </div>
                <div className="our-team__row__2 member">
                    <Member image={image1} name="John Doe" role="Director" />
                    <Member image={image2} name="Mike Doe" role="Senior Designer" />
                    <Member image={image3} name="Jane Doe" role="Senior Designer" />
                    <Member image={image4} name="Karen Doe" role="Project Manager" />
                </div>
            </section>
        </div>
    )
}

export default OurTeam;
