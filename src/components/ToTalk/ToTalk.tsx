import './ToTalk.css';
import {useState} from "react";


export const ToTalk = () => {


    const [arrow, setArrow] = useState('⮟')


    return <div id="to-talk-page">

        <ul>
            <li>
                <span className="reservation-span">
                    <span className="reservation-until">Rezerwacja do</span>
                <br/>
                    <span className="reservation-date">31.12.2023 r.</span>
                </span>

                <img className="avatar" src="photo.jpg" alt="Avatar"/>

                <span id="student-to-talk-page">Student 1</span>
                <span className="show-more-button">{arrow}</span>
                <button id="hired-button">Zatrudniony</button>
                <button id="not-intrested-button">Brak zainteresowania</button>
                <button id="show-cv-button">Pokaż CV</button>
            </li>
            <hr/>

            <li>
                <span className="reservation-span">
                    <span className="reservation-until">Rezerwacja do</span>
                <br/>
                    <span className="reservation-date">31.01.2024 r.</span>
                </span>

                <img className="avatar" src="photo.jpg" alt="Avatar"/>

                <span id="student-to-talk-page">Student 2</span>
                <span className="show-more-button">{arrow}</span>
                <button id="hired-button">Zatrudniony</button>
                <button id="not-intrested-button">Brak zainteresowania</button>
                <button id="show-cv-button">Pokaż CV</button>
            </li>
            <hr/>

            <li>
                <span className="reservation-span">
                    <span className="reservation-until">Rezerwacja do</span>
                <br/>
                    <span className="reservation-date">15.02.2024 r.</span>
                </span>

                <img className="avatar" src="photo.jpg" alt="Avatar"/>

                <span id="student-to-talk-page">Student 4</span>
                <span className="show-more-button">{arrow}</span>
                <button id="hired-button">Zatrudniony</button>
                <button id="not-intrested-button">Brak zainteresowania</button>
                <button id="show-cv-button">Pokaż CV</button>
            </li>
            <hr/>

        </ul>

    </div>
}
