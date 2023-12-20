import React from 'react';
import { Header } from '../../components/Header/Header';
import { AvailableStudentsPage } from '../../components/AvailableStudentsPage/AvailableStudentsPage';
import { Foot } from '../../components/Foot/Foot';

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <div id="page">
        <AvailableStudentsPage />
      </div>
      <Foot />
    </>
  );
};
