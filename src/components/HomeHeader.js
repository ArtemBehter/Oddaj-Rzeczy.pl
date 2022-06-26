import React from 'react'
import heroImage from '../../src/assets/images/hero-Image.png';
import decorationSvg from '../../src/assets/icons/Decoration.svg';
export default function HomeHeader() {
  return (
    <header>
        <div className="container">
        <div className="home-header">
        
            <img className="logo-image" src={heroImage} alt=""/>
        
        <div className="navigation-block">
            <div className="login">
            <ul className="login-menu">
                <li className="login-menu_item"><a className="login-menu_link" href="">Zaloguj</a></li>
                <li className="login-menu_item"><a className="login-menu_link" href="">Załóż konto</a></li>
            </ul>
            </div>
            <nav className="menu">
                <ul className="nav-menu">
                    <li className="nav-menu_item"><a className="nav-menu_link" href="">Start</a></li>
                    <li className="nav-menu_item"><a className="nav-menu_link" href="">O co chodzi?</a></li>
                    <li className="nav-menu_item"><a className="nav-menu_link"href="">O nas</a></li>
                    <li className="nav-menu_item"><a className="nav-menu_link"href="">Fundacja i organizacje</a></li>
                    <li className="nav-menu_item"><a className="nav-menu_link"href="">Kontakt</a></li>
                </ul>
            </nav>
            <div className="action-block">
                <h2 className="action-block_title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decorationSvg} className="action-block_icon" alt=""/>
                <div className="action-block_buttons">
                    <button className="action-block_button">ODDAJ RZECZY</button>
                    <button className="action-block_button">ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </div>
        
        </div>
        </div>
    </header>
  )
}
