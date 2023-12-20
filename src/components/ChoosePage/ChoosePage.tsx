import React, { useState } from "react";

type PageType = 'availableStudents' | 'toTalk';
type ButtonClassType = 'hr-red-left' | 'hr-red-right';
type TextMenuClassType = 'choose-page-button-selected' | 'choose-page-button';

export const ChoosePage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<PageType>('availableStudents');
  const [classButton, setClassButton] = useState<ButtonClassType>('hr-red-left');
  const [classTextMenuFirst, setClassTextMenuFirst] = useState<TextMenuClassType>('choose-page-button-selected');
  const [classTextMenuSecond, setClassTextMenuSecond] = useState<TextMenuClassType>('choose-page-button');

  const selectMenuFirst = () => {
    setClassButton('hr-red-left');
    setSelectedPage('availableStudents');
    setClassTextMenuFirst('choose-page-button-selected');
    setClassTextMenuSecond('choose-page-button');
  }

  const selectMenuSecond = () => {
    setClassButton('hr-red-right');
    setSelectedPage('toTalk');
    setClassTextMenuFirst('choose-page-button');
    setClassTextMenuSecond('choose-page-button-selected');
  }

  return (
    <>
      <div className="menu-div">
        <span onClick={selectMenuFirst} className={classTextMenuFirst}>Dostępni kursanci</span>
        <span onClick={selectMenuSecond} className={classTextMenuSecond}>Do rozmowy</span>
        <br />
      </div>
      <hr className={classButton} />
      <hr className="hr-long" />

      <div className="menu-div">
        <input type="search" id="input-search" disabled value="🔎 Szukaj..." />
        <input type="button" id="filter-button" value="Filtrowanie" />
        <br />
      </div>
      <hr className="hr-short" />
    </>
  );
};
