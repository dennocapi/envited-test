import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import CreateEvent from './pages/createEvent';
import Event from './pages/event';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
