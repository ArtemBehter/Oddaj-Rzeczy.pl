import React from 'react'
import peopleImage from '../../src/assets/images/people-image.png'
import decorationImage from '../../src/assets/icons/Decoration.svg'
import signatureImage from '../../src/assets/images/signature-image.png'
export default function HomeAboutUs() {
  return (
    
        <div className="about-us-block">
            <div className="about-us-container">
            <div className="about-us-section">
                <h2 className="about-us-title">O nas</h2>
                <img className="about-us-decoration"src={decorationImage} alt=""/>
                <p className="about-us-paragraph">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="signature">
                <img className="about-us-signature" src={signatureImage} alt=""/>
                </div>
            </div>
            </div>
            <div className="about-us-image">
                <img className="about-us-img" src={peopleImage} alt="" />
            </div>
        
    </div>
  )
}
