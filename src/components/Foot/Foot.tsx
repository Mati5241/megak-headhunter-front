import './Foot.css';
import {useState} from "react";


export const Foot = (props: any) => {




    return <div id="foot">

        <label>Ilość elementów</label>
        <select defaultValue="10" id='select-quantity'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>

        10 z 90
        <button className="previous-next-button">⮜</button>
        <button className="previous-next-button">⮞</button>
    </div>
}
