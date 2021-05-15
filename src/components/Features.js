import React from 'react'

function FeatureComponents (props){
    return (
        <div className="features__row__2__col">
            <div className="icon">
                {props.icon}
            </div>
            <h4>Lorem ipsum</h4>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, deserunt id. Asperiores?</p>
        </div>
    )
}

function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features__row__1 title">
                    <h2 className="main-title">FEATURES</h2>
                </div>
                <div className="features__row__2 content">
                    <FeatureComponents icon={<i class="fas fa-comments style-icons"></i>}/>
                    <FeatureComponents icon={<i class="fas fa-bullhorn style-icons"></i>}/>
                    <FeatureComponents icon={<i class="fas fa-users style-icons"></i>}/>
                    <FeatureComponents icon={<i class="fas fa-magic style-icons"></i>}/>
                </div>
            </div>
            
        </section>
    )
}

export default Features
