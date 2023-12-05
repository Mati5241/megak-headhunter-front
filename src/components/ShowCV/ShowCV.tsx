import './ShowCV.css'
import {Header} from "../Header/Header";
import {useState} from "react";


export const ShowCV = (props: any) => {


    // @ts-ignore
    // const result = props.student.find(item => item.id === props.studentId);

    // console.log(result)

    return <>
    <div id="show-cv-div">

        <div id="profile-div">
            <img id="avatar" src="photo.jpg" alt="Avatar"/>
            <br/>
            <span id="student-name-span">{props.name} {props.surname}</span>
            <br/><br/>

            <div id="contact-div">
            <span className="grey-emojis">☎</span> +48 215 125 252
            <br/>
            <span className="grey-emojis">✉</span> mateuszb430@ssmegak.pl
            </div>
            <br/>
            <div className="grey-text-div">O mnie</div>
            <div id="profile-info-text-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

            <button id="no-interested-button">Brak zainteresowania</button>
            <button id="hired-button">Zatrudniony</button>

        </div>

        <div id="about-student-div">
            <div className="header">Oceny</div>
            <div className="info-table-div">
                <table id="grades-table">
                    <tr>
                        <td>Ocena przejścia kursu</td>
                        <td>Ocena aktywności i zaangażowania na kursie</td>
                        <td>Ocena kodu w projekcie własnym</td>
                        <td>Ocena pracy w zespole w Scrum</td>
                    </tr>
                    <tr id="grades-tr">
                        <td><span className='grade-span'>4</span><span className='max-grade-span'>/5</span><span className="red-stars">🟊🟊🟊🟊</span><span className="grey-stars">🟊</span></td>
                        <td><span className='grade-span'>3</span><span className='max-grade-span'>/5</span><span className="red-stars">🟊🟊🟊</span><span className="grey-stars">🟊🟊</span></td>
                        <td><span className='grade-span'>4</span><span className='max-grade-span'>/5</span><span className="red-stars">🟊🟊🟊🟊</span><span className="grey-stars">🟊</span></td>
                        <td><span className='grade-span'>2</span><span className='max-grade-span'>/5</span><span className="red-stars">🟊🟊</span><span className="grey-stars">🟊🟊🟊</span></td>
                </tr>
                </table>
            </div>
            <div className="header">Oczekiwania w stosunku do zatrudnienia</div>
            <div className="info-table-div">
                <table id="expectations-table">
                    <tr id="questions-tr">
                        <td>Preferowane miejsce pracy</td>
                        <td>Docelowe miasto, gdzie chce pracować kandydat</td>
                        <td>Oczekiwany typ kontraktu</td>
                        <td>Oczekiwane wynagrodzenie miesięczne netto</td>
                        <td>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</td>
                        <td>Komercyjne doświadczenie w programowaniu</td>

                    </tr>
                    <tr id="answers-tr">
                        <td>Biuro</td>
                        <td>Warszawa</td>
                        <td>Umowa o pracę</td>
                        <td>1zł</td>
                        <td>Tak</td>
                        <td>3 miesiące</td>
                    </tr>
                </table>
            </div>
            <div className="header">Edukacja</div>
            <div className="info-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="header">Kursy</div>
            <div className="info-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="header">Doświadczenie zawodowe</div>
            <div className="info-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="header">Portfolio</div>
            <div className="info-div"><span className="link">🔗 ️www.github.com</span></div>
            <div className="header">Projekt w zespole scrumowym</div>
            <div className="info-div"><span className="link">🔗 ️www.github.com</span></div>
            <div className="header">Projekt na zaliczenie</div>
            <div className="info-div"><span className="link">🔗 ️www.github.com</span></div>


        </div>

    </div>
    </>
}
