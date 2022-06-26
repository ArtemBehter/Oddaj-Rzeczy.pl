import React from 'react'
import formDecoration from '../../src/assets/icons/Decoration.svg'
export default function HomeFooter() {
  return (
    <div className="contact-form-container">
        <div className="contact-form">
            <div className="form-block">
                <h2 className="form-title">Skontaktuj się z nami</h2>
                <img className="form-decoration" src={formDecoration} alt="" />
                <form action="" className="form">
                    <div className="form-details">
                    <div className="form-name">
                    <label for="name">Wpisz swoje imię</label>
                    <input className="form-input-name" placeholder="Krzysztof" type="text" id="name" name="user_name" />
                    </div>

                    <div className="form-mail">
                    <label for="mail">Wpisz swój email</label>
                    <input placeholder="abc@xyz.pl" type="email" id="mail" name="user_email" />
                    </div>
                    </div>

                    <div className="form-message">
                    <label for="msg">Wpisz swoją wiadomość</label>
                    <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." id="msg" name="user_message"></textarea>
                    </div>

                    <div className="form-button">
                    <button type="submit">Wyślij</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
