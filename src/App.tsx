import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { ShowCV } from './components/ShowCV/ShowCV';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPageLayout from './components/AvailableStudentsPage/MainPageLayout';
import AdminPage from './pages/AdminPage/Admin';

interface StudentInfo {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  bio: string;
}
interface ShowCVProps {
  studentInfo: StudentInfo | null;
}
interface MainPageLayoutProps {
  pullCvFunction: (data: StudentInfo) => void;
}

export function App() {
  const [cv, setCv] = useState<StudentInfo | null>(null);

  const pullCv = (data: StudentInfo) => {
    setCv(data);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cv" element={<ShowCV studentInfo={cv} />} />
          <Route
            path="/"
            element={<MainPageLayout pullCvFunction={pullCv} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
