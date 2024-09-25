import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Main from './pages/Main.jsx';
import RestoreImage from './pages/RestoreImage.jsx';
import RestoredImage from './pages/RestoredImage.jsx';

const App = () => (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/restore" element={<RestoreImage />} />
      <Route path="/restored" element={<RestoredImage />} />
    </Routes>

);

export default App;