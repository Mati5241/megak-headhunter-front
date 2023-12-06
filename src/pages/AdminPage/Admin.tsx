import React, { useState } from 'react';
import Papa from 'papaparse';

interface Student {
  name: string;
  email: string;
  // Dodaj inne pola według potrzeb
}

const AdminPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const importStudents = async () => {
    if (!file) {
      alert('Wybierz plik do importu.');
      return;
    }

    // Wczytaj plik CSV za pomocą papaparse
    Papa.parse(file, {
      header: true,
      complete: (result: Papa.ParseResult<Student>) => {
        const students: Student[] = result.data;
        if (students && students.length > 0) {
          // Przeprowadź walidację i importuj kursantów
          const validStudents = validateAndFilterStudents(students);
          importValidStudents(validStudents);
        }
      },
    });
  };

  const validateAndFilterStudents = (students: Student[]): Student[] => {
    // Przeprowadź walidację
    const validStudents = students.filter((student) => {
      return (
        student.email.includes('@') && // Prosta walidacja adresu e-mail
        // Dodaj inne warunki walidacji według potrzeb
        // Sprawdź, czy osoba nie jest już dodana
        !isStudentAlreadyAdded(student.email)
      );
    });

    return validStudents;
  };

  const isStudentAlreadyAdded = (email: string): boolean => {
    // Sprawdź, czy osoba jest już dodana (implementacja zależy od struktury twojej aplikacji)
    // Zwróć true, jeśli osoba jest już dodana, w przeciwnym razie false
    return false;
  };

  const importValidStudents = (students: Student[]) => {
    // Tutaj możesz zaimplementować logikę importu kursantów do twojej aplikacji
    // Po zaimportowaniu każdej osoby, wysyłasz link rejestracyjny
    students.forEach((student) => {
      // Implementuj logikę wysyłki linku rejestracyjnego
      console.log(`Wysłano link rejestracyjny do: ${student.email}`);
    });

    // Opcjonalnie możesz zaktualizować stan aplikacji po imporcie
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={importStudents}>Importuj Kursantów</button>
    </div>
  );
};

export default AdminPage;
