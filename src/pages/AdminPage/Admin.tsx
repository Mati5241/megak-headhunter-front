import React, { useState, ChangeEvent } from 'react';
import './Admin.css';

interface Student {
  name: string;
  email: string;
  // Add other fields as needed
}

const AdminPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.json')) {
        setFile(selectedFile);
      } else {
        alert('Only JSON files are allowed.');
      }
    }
  };

  const importStudents = async () => {
    if (!file) {
      alert('Select a JSON file to import.');
      return;
    }

    try {
      const students = await convertJSONtoStudents(file);

      const formData = new FormData();
      formData.append('studentsFile', file);
      // Add other data if needed
      formData.append('otherData', 'Value');

      const response = await fetch('URL_TO_API', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File imported successfully.');
      } else {
        alert('Error occurred during import.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
      <h1>Admin Panel</h1>
      <input type="file" name="studentsList" accept=".json" onChange={handleFileChange} />
      <button onClick={importStudents}>Import Students</button>
    </div>
  );
};

export default AdminPage;
