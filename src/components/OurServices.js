import React from 'react'

function ColContent (props){
    return (
        <div className="our-services__row__2__col">
            <div className="icon">
                {props.icon}
            </div>
            <h3>Lorem ipsum dolor</h3>
            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt qui sed dolore dolores dolor perferendis ea molestiae voluptas cumque? Ullam libero sequi illum quaerat qui nihil neque corrupti sunt! Soluta.</p>
        </div>
    )
}

function OurServices() {
    return (
        <div className="our-services">
            <div className="container">
                <div className="our-services__row__1 title">
                    <h2 className="main-title">OUR SERVICES</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel adipisci</p>
                </div>
                <div className="our-services__row__2 content">
                    <ColContent icon={<i class="fas fa-comments"></i>} />
                </div>
            </div>
        </div>
    )
}

export default OurServices
