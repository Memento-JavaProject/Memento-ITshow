import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch -> Routes로 변경
import Start from './pages/start';
import Home from './pages/home';
import CreateDiary from './pages/createDiary'
import WriteDiary from './pages/writeDiary'
import PreviewDiary from './pages/previewDiary'
import DownloadDiary from './pages/downloadDiary'
import DiaryView from './pages/diaryView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createDiary" element={<CreateDiary />} />
        <Route path="/writeDiary" element={<WriteDiary />} />
        <Route path="/previewDiary" element={<PreviewDiary />} />
        <Route path="/downloadDiary" element={<DownloadDiary />} />
        <Route path='/diaryview' element={<DiaryView/>} />
      </Routes>
    </Router>
  );
};

export default App;
