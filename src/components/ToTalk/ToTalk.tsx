import React, { useState } from 'react';
import './ToTalk.css';
import { StudentInfo } from '../StudentInfo/StudentInfo';
import { useNavigate } from 'react-router-dom';

interface ToTalkProps {
  pullCvFunction: (data: any) => void;
}

const ToTalk: React.FC<ToTalkProps> = (props) => {
  const navigate = useNavigate();

  const [showStudentInfo, setShowStudentInfo] = useState('');
  const [arrow, setArrow] = useState('');
  const [cv, setCv] = useState('');
  const [studentInfo, setStudentInfo] = useState<typeof StudentInfo | null>(null);

  const showMore = (id: string): any => {
    if (showStudentInfo === '') {
      setShowStudentInfo(id);
      setArrow(id);
    } else if (showStudentInfo === id) {
      setShowStudentInfo('');
      setArrow('');
    } else {
      setShowStudentInfo(id);
      setArrow(id);
    }
  };

  const showCv = (item: typeof StudentInfo): any => {
    setCv(item.id);
    setStudentInfo(item);
    props.pullCvFunction(item);
    navigate('/cv');
  };

  return (
      <>
        <div className="page-div">
          <div id="to-talk-page">
            <ul>
              {students.map((item: any) => (
                <React.Fragment key={item.id}>
                  <li>
                    <span className="reservation-span">
                      <span className="reservation-until">Rezerwacja do</span>
                      <br />
                      <span className="reservation-date">31.12.2023 r.</span>
                    </span>
  
                    <img className="avatar" src={item.avatarUrl} alt="Avatar" />
  
                    <span id="student-to-talk-page">
                      {item.firstName} {item.lastName}
                    </span>
                    <span
                      onClick={() => showMore(item.id)}
                      className="show-more-button"
                    >
                      {arrow === item.id ? '⮝' : '⮟'}
                    </span>
                    <button id="hired-button-profile">Zatrudniony</button>
                    <button id="not-intrested-button">Brak zainteresowania</button>
                    <button onClick={() => showCv(item)} id="show-cv-button">
                      Pokaż CV
                    </button>
  
                    {showStudentInfo === item.id && <StudentInfo student={item} />}
                  </li>
  
                  <hr />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
  
        <div id="foot">
          <label>Ilość elementów</label>
          <select
            defaultValue="10"
            onChange={changeQuantity}
            id="select-quantity"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
  
          {Math.min(indexOfLastStudent, studentsAll.length)} z {studentsAll.length}
          <button
            onClick={studentsPreviousPage}
            className={
              currentPage === 1
                ? 'previous-next-button-disabled'
                : 'previous-next-button'
            }
          >
            ⮜
          </button>
          <button
            onClick={studentsNextPage}
            className={
              studentsAll.length < indexOfLastStudent
                ? 'previous-next-button-disabled'
                : 'previous-next-button'
            }
          >
            ⮞
          </button>
        </div>
      </>
    );
  };
  
  export default ToTalk;