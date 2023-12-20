import React from 'react';
import './StudentInfo.css';

interface StudentInfoProps {
  student: {
    id: string;
    courseCompletion: number;
    courseEngagment: number;
    projectDegree: number;
    teamProjectDegree: number;
    expectedTypeWork: string;
    targetWorkCity: string;
    expectedContractType: string;
    expectedSalary: string;
    canTakeApprenticeship: string;
    monthsOfCommercialExp: number;
  };
}

export const StudentInfo: React.FC<StudentInfoProps> = (props) => {
  return (
    <div id="student-info">
      <table>
        <thead>
          <tr>
            <td className="td-info">Ocena przejścia kursu</td>
            <td className="td-info">Ocena aktywności i zaangażowania na kursie</td>
            <td className="td-info">Ocena kodu w projekcie własnym</td>
            <td className="td-info">Ocena pracy w zespole w Scrum</td>
            <td className="td-info">Preferowane miejsce pracy</td>
            <td className="td-info">Docelowe miasto, gdzie chce pracować kandydat</td>
            <td className="td-info">Oczekiwany typ kontraktu</td>
            <td className="td-info">Oczekiwane miesięczne wynagrodzenie netto</td>
            <td className="td-info">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</td>
            <td className="td-info">Komercyjne doświadczenie w programowaniu</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-grade">{props.student.courseCompletion}/5</td>
            <td className="td-grade">{props.student.courseEngagment}/5</td>
            <td className="td-grade">{props.student.projectDegree}/5</td>
            <td className="td-grade">{props.student.teamProjectDegree}/5</td>
            <td className="td-grade">{props.student.expectedTypeWork}</td>
            <td className="td-grade">{props.student.targetWorkCity}</td>
            <td className="td-grade">{props.student.expectedContractType}</td>
            <td className="td-grade">{props.student.expectedSalary}</td>
            <td className="td-grade">{props.student.canTakeApprenticeship}</td>
            <td className="td-grade">
              {props.student.monthsOfCommercialExp}{' '}
              {props.student.monthsOfCommercialExp === 0
                ? 'miesięcy'
                : props.student.monthsOfCommercialExp > 4
                ? 'miesięcy'
                : 'miesiące'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
