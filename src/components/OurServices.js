import React from 'react'

function ColContent (props){
    return (
        <div className="our-services__row__2__col">
            <div className="icon">
                {props.icon}
            </div>
            <h4>Lorem ipsum dolor</h4>
            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt qui sed dolore dolores dolor perferendis ea molestiae voluptas cumque? Ullam libero sequi illum quaerat qui nihil neque corrupti sunt! Soluta.</p>
        </div>
    )
}

function OurServices() {
    return (
        <div className="our-services" id="services">
            <div className="container">
                <div className="our-services__row__1 title">
                    <h2 className="main-title">OUR SERVICES</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel adipisci</p>
                </div>
                <div className="our-services__row__2 content">
                    <ColContent icon={<i className="fab fa-wordpress style-icons"></i>} />
                    <ColContent icon={<i className="fas fa-cart-arrow-down style-icons"></i>} />
                    <ColContent icon={<i className="fas fa-cloud-download-alt style-icons"></i>} />
                    <ColContent icon={<i className="fas fa-language style-icons"></i>} />
                    <ColContent icon={<i className="fas fa-plane style-icons"></i>} />
                    <ColContent icon={<i className="fas fa-chart-pie style-icons"></i>} />
                </div>
            </div>
        </div>
    )
}

export default OurServices
