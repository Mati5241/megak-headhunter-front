import React, { useEffect, useState } from 'react';
import './AvailableStudentsPage.css';
import { StudentInfo } from '../StudentInfo/StudentInfo';

interface Student {
  lastName: string;
  courseCompletion: string;
  firstName: string;
  id: string;
  // inne właściwości studenta
}

const AvailableStudentsPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  // Pobieranie danych students 
  const fetchStudents = async () => {
    try {
      const response = await fetch('API_URL/students'); // Zastąp 'API_URL/students' odpowiednim adresem API
      const data = await response.json();
      setStudents(data.studentsList);
    } catch (error) {
      console.error('Błąd pobierania danych students', error);
    }
  };

  // Wywołanie funkcji pobierającej dane students
  useEffect(() => {
    fetchStudents();
  }, []); // [] oznacza, że useEffect zostanie wywołany tylko raz po zamontowaniu komponentu

  return (
    <div id="available-students-page">
      <h1>Dostępni Studenci</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span className="student-name">{`${student.firstName} ${student.lastName}`}</span>
            {/* Przekazanie właściwości student do komponentu StudentInfo */}
            <StudentInfo id={student.id} courseCompletion={student.courseCompletion} courseEngagement={student.courseEngagement} projectDegree={student.projectDegree} teamProjectDegree={student.teamProjectDegree} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableStudentsPage;
