import React, { useState, useEffect } from 'react';
import './AvailableStudentsPage.css';
//import  StudentInfo  from '../StudentsList/StudentsList';
import { Foot } from '../Foot/Foot';

interface StudentInfoProps {
    student: {
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
  
  const StudentInfo: React.FC<StudentInfoProps> = ({ student }) => {
    return (
      <div id="student-info">
        <table>
          <tbody>
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
            <tr>
              <td className="td-grade">{student.courseCompletion}/5</td>
              <td className="td-grade">{student.courseEngagment}/5</td>
              <td className="td-grade">{student.projectDegree}/5</td>
              <td className="td-grade">{student.teamProjectDegree}/5</td>
              <td className="td-grade">{student.expectedTypeWork}</td>
              <td className="td-grade">{student.targetWorkCity}</td>
              <td className="td-grade">{student.expectedContractType}</td>
              <td className="td-grade">{student.expectedSalary}</td>
              <td className="td-grade">{student.canTakeApprenticeship}</td>
              <td className="td-grade">
                {student.monthsOfCommercialExp}{' '}
                {student.monthsOfCommercialExp === 0
                  ? 'miesięcy'
                  : student.monthsOfCommercialExp > 4
                  ? 'miesięcy'
                  : 'miesiące'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StudentInfo;