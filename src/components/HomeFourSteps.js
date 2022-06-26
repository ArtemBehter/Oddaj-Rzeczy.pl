import React from 'react'
import decorationSvg from '../../src/assets/icons/Decoration.svg';
import shirtImage from '../../src/assets/images/shirt-image.png';
import cartImage from '../../src/assets/images/cart-image.png';
import loupeImage from '../../src/assets/images/loupe-image.png';
import updatingImage from '../../src/assets/images/updating-image.png';  
export default function HomeFourSteps() {
  return (
    <div className="four-steps-container">
        <div className="four-steps-block">
            <div className="four-steps-navigation">
            <h3 className="four-steps-title">Wystarczą 4 proste kroki</h3>
            <img className="four-steps-icon" src={decorationSvg} alt=""/>
            </div>
            <div className="four-steps-items_block">
                <div className="four-steps-item">
                    <img className="four-steps-item_image" src={shirtImage} alt=""/>
                    <p className="four-steps-item_title">Wybierz rzeczy</p>
                    <div className="four-steps-item_line"></div>
                    <p className="four-steps-item_paragraph">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="four-steps-item">
                    <img className="four-steps-item_image" src={cartImage} alt=""/>
                    <p className="four-steps-item_title">Spakuj je</p>
                    <div className="four-steps-item_line"></div>
                    <p className="four-steps-item_paragraph">skorzystaj z worków na śmieci</p>
                </div>
                <div className="four-steps-item">
                    <img className="four-steps-item_image" src={loupeImage} alt=""/>
                    <p className="four-steps-item_title">Zdecyduj komu chcesz pomóc</p>
                    <div className="four-steps-item_line"></div>
                    <p className="four-steps-item_paragraph">wybierz zaufane miejsce</p>
                </div>
                <div className="four-steps-item">
                    <img className="four-steps-item_image" src={updatingImage} alt=""/>
                    <p className="four-steps-item_title">Zamów kuriera</p>
                    <div className="four-steps-item_line"></div>
                    <p className="four-steps-item_paragraph">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button className="four-steps-button">ODDAJ RZECZY</button>
        </div>
    </div>
  )
}
