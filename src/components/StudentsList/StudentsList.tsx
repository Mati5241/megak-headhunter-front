import React, { useState } from 'react';
import './StudentsList.css';
//import { StudentInfo } from '../StudentInfo/StudentInfo';

interface StudentInfoProps {
    student: {
      courseCompletion: number;
      courseEngagement: number;
      projectDegree: number;
      teamProjectDegree: number;
      expectedTypeWork: string;
      targetWorkCity: string;
      expectedContractType: string;
      expectedSalary: string;
      canTakeApprenticeship: string;
      monthsOfCommercialExp: number;
      // Add other properties as needed
    };
  }
  
  const StudentInfo: React.FC<StudentInfoProps> = ({ student }) => {
    return (
      <div id="student-info">
        <table>
          <tr>
            <td className="td-info">Ocena przejścia kursu</td>
            {/* ... (Other table headers) ... */}
          </tr>
          <tr>
            <td className="td-grade">{student.courseCompletion}/5</td>
            {/* ... (Other table data) ... */}
          </tr>
        </table>
      </div>
    );
  };
  
  export default StudentInfo;