import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import CreateEvent from './pages/createEvent';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
