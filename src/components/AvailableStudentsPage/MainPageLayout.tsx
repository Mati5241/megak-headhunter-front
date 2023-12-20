import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import "./MainPageLayout.css";
import AvailableStudentsPage from "../StudentsList/AvailableStudentsPage";
import ToTalk from "../ToTalk/ToTalk";
import { Foot } from "../Foot/Foot";
import { Header } from "../Header/Header";

interface MainPageLayoutProps {
  pullCvFunction: (data: any) => void;
}

interface Filter {
  courseGrade: string;
  activityGrade: string;
  codeGrade: string;
  workGrade: string;
}

const MainPageLayout: FC<MainPageLayoutProps> = (props) => {
  const [selectedPage, setSelectedPage] = useState<'availableStudents' | 'toTalk'>('availableStudents');
  const [classButton, setClassButton] = useState<'hr-red-left' | 'hr-red-right'>('hr-red-left');
  const [classTextMenuFirst, setClassTextMenuFirst] = useState<'choose-page-button-selected' | 'choose-page-button'>('choose-page-button-selected');
  const [classTextMenuSecond, setClassTextMenuSecond] = useState<'choose-page-button-selected' | 'choose-page-button'>('choose-page-button');

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>({
    courseGrade: '',
    activityGrade: '',
    codeGrade: '',
    workGrade: '',
  });

  const submitFormFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowFilter(!showFilter);
    const gradeInput = e.currentTarget.querySelector('[name="grade"]') as HTMLInputElement;
    setFilter((prevFilter) => ({
      ...prevFilter,
      courseGrade: gradeInput.value,
    }));
  };

  const filterButton = () => {
    setShowFilter(!showFilter);
  };

  const selectMenuFirst = () => {
    setClassButton('hr-red-left');
    setSelectedPage('availableStudents');
    setClassTextMenuFirst('choose-page-button-selected');
    setClassTextMenuSecond('choose-page-button');
  };

  const selectMenuSecond = () => {
    setClassButton('hr-red-right');
    setSelectedPage('toTalk');
    setClassTextMenuFirst('choose-page-button');
    setClassTextMenuSecond('choose-page-button-selected');
  };

  return (
    <>
      <Header />
      <div id="page">
        <div className="menu-div">
          <span onClick={selectMenuFirst} className={classTextMenuFirst}>
            Dostępni kursanci
          </span>
          <span onClick={selectMenuSecond} className={classTextMenuSecond}>
            Do rozmowy
          </span>
          <br />
        </div>
        <hr className={classButton} />
        <hr className="hr-long" />

        <div className="menu-div">
          <input type="search" id="input-search" disabled value="🔎 Szukaj..." />
          <input onClick={filterButton} type="button" id="filter-button" value="Filtrowanie" />
          <br />
        </div>
        <hr className="hr-short" />
      </div>
      {selectedPage === 'availableStudents' ? (
        <AvailableStudentsPage
          student={{
            courseCompletion: 0,
            courseEngagment: 0,
            projectDegree: 0,
            teamProjectDegree: 0,
            expectedTypeWork: "",
            targetWorkCity: "",
            expectedContractType: "",
            expectedSalary: "",
            canTakeApprenticeship: "",
            monthsOfCommercialExp: 0,
          }}
          pullCvFunction={props.pullCvFunction}
        />
      ) : (
        <ToTalk pullCvFunction={props.pullCvFunction} />
      )}

      {showFilter && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <form onSubmit={submitFormFilter}>
              <div id="header-filter">Filtrowanie</div>
              <button id="clean-button">Wyczyść wszystkie</button>
              <br /><br /><br /><br />

              {/* reszta kodu filtra */}

              <div className="buttons-filter">
                <button
                  onClick={filterButton}
                  id="close-filter-button"
                >
                  Anuluj
                </button>
                <input id="show-results-button" type="submit" value="Pokaż wyniki" />
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPageLayout;
