import './Aboutus.css'

import heroAbt from '../../assets/heroAbt.jpeg'


const AboutUs = ()=>{

    return (
        <div className='abt-con'>
            <div className='abt-child'>
                <img src={heroAbt} />
                <div className='abt-right-con'>
                    <h3>ABOUT US</h3>
                    <h2>Lorem ipsum dolor sit amet consectetur elit.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in neque libero. Vestibulum tincidunt molestie elit, vitae bibendum justo mollis sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis justo eget lectus fermentum volutpat non et felis. Duis a velit et neque maximus.
                    </p>
                    <div className='abt-tabs-con'>
                        <div>
                            <button id='final-btn'>About</button>
                            <button>Mission</button>
                            <button>Vision</button>
                        </div>
                        <div>
                            <div className='display-con'>
                                <h3>Lorem ipsum 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in neque libero. Vestibulum tincidunt molestie elit, vitae bibendum justo mollis sed.Pellentesque habitant morbi tristique senectus et netus et</p>
                            </div>
                            <button id='final-btn'>Read More</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
