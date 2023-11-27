import './Foot.css';


export const Foot = () => {


    return <div id="foot">

        <label>Ilość elementów</label>
        <select id='select-quantity'>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>

        10 z 90
        <button className="previous-next-button">⮜</button>
        <button className="previous-next-button">⮞</button>
    </div>
}
