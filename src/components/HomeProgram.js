import React from 'react'
import decoration from '../../src/assets/icons/Decoration.svg'
export default function HomeProgram() {
  return (
    <div className="home-program-container">
        <div className="home-program-block">
            <div className="home-program-section">
                <h2 className="home-program-title">Komu pomagamy?</h2>
                <img className="home-program-decoration" src={decoration} alt="" />
                <nav className="home-program-nav-block">
                <ul className="home-program-nav">
                    <li className="home-program-nav-item"><a className="home-program-nav-link" href="">Fundacjom</a></li>
                    <li className="home-program-nav-item"><a className="home-program-nav-link" href="">Organizacjom pozarządowym</a></li>
                    <li className="home-program-nav-item"><a className="home-program-nav-link" href="">Lokalnym zbiórkom</a></li>             
                </ul>
                </nav>
                <p className="home-program-information-paragraph">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

            </div>
            <div className="home-program-descriptions">
                <div className="home-program-description-item">
                    <div className="home-program-description-left-part">
                        <h4 className="description-title">Fundacja “Dbam o Zdrowie”</h4>
                        <p className="description-paragraph">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <div className="home-program-description-right-part">
                        <p className="description-paragraph-right">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
                <hr />
                <div className="home-program-description-item">
                    <div className="home-program-description-left-part">
                        <h4 className="description-title">Fundacja “Dla dzieci”</h4>
                        <p className="description-paragraph">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="home-program-description-right-part">
                        <p className="description-paragraph-right">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
                <hr />
                <div className="home-program-description-item">
                    <div className="home-program-description-left-part">
                        <h4 className="description-title">Fundacja “Bez domu”</h4>
                        <p className="description-paragraph">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                    <div className="home-program-description-right-part">
                        <p className="description-paragraph-right">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
            </div>
            <div className="home-program-pages">
                <ul className="home-program-pages-nav">
                    <li className="home-program-pages-item"><a className="home-program-pages-link" href="">1</a></li>
                    <li className="home-program-pages-item"><a className="home-program-pages-link" href="">2</a></li>
                    <li className="home-program-pages-item"><a className="home-program-pages-link" href="">3</a></li>             
                </ul>
                </div>
        </div>
    </div>
  )
}
