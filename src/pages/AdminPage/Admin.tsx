import React, { useState } from 'react';

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
      if (selectedFile.name.endsWith('.json')) {
        setFile(selectedFile);
      } else {
        alert('Dozwolone są tylko pliki w formacie JSON.');
      }
    }
  };

  const importStudents = async () => {
    if (!file) {
      alert('Wybierz plik JSON do importu.');
      return;
    }

    // Konwertuj plik JSON na tablicę obiektów
    const students = await convertJSONtoStudents(file);

    // Przygotuj obiekt FormData i dodaj plik JSON
    const formData = new FormData();
    formData.append('studentsFile', file);

    // Dodaj inne dane, jeśli potrzebujesz
    formData.append('otherData', 'Wartość');

    // Wyślij żądanie POST z wykorzystaniem fetch
    try {
      const response = await fetch('URL_DO_API', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Plik został zaimportowany pomyślnie.');
      } else {
        alert('Wystąpił błąd podczas importu.');
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  const convertJSONtoStudents = async (jsonFile: File): Promise<Student[]> => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const jsonData = event.target?.result as string;
        const students: Student[] = JSON.parse(jsonData);
        resolve(students);
      };

      reader.readAsText(jsonFile);
    });
  };

  return (
    <div>
      <h1>Panel Admina</h1>
      <input type="file" name="studentsList" accept=".json" onChange={handleFileChange} />
      <button onClick={importStudents}>Importuj Kursantów</button>
    </div>
  );
};

export default AdminPage;
