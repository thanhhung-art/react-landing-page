import React from 'react';
import client1 from "../images/01.jpg";
import client2 from "../images/02.jpg";
import client3 from "../images/03.jpg";
import client4 from "../images/04.jpg";
import client5 from "../images/05.jpg";
import client6 from "../images/06.jpg";



function Client (props){
    return(
        <div className="client">
            <div className="client__image">
                <img src={props.image} alt="client" />
            </div>
            <div className="client__comment">
                <cite className="text">""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</cite>
                <h4>- {props.author}</h4>
            </div>
        </div>
    )
}

function OurClients() {
    return (
        <section className="our-clients" id="testimonials">
            <div className="container">
                <div className="our-clients__row__1 title">
                    <h2 className="main-title">WHAT OUR CLIENTS SAY</h2>
                </div>
                <div className="our-clients__row__2 comments">
                    <Client image={client1} author="John Doe"/>
                    <Client image={client2} author="Johnathan Doe"/>
                    <Client image={client3} author="John Doe"/>
                    <Client image={client4} author="Johnathan Doe"/>
                    <Client image={client5} author="John Doe"/>
                    <Client image={client6} author="Johnathan Doe"/>
                </div>
            </div>
        </section>
    )
}
export default OurClients;
