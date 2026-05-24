import { useState } from 'react';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {
  const [activeTab, setActiveTab] = useState('stopwatch');

  return (
    <div className="container">
      <h1>⏱ Time Master</h1>

      {/* Header Navigation */}
      <header className="header">
        <button
          className={activeTab === 'stopwatch' ? 'active' : ''}
          onClick={() => setActiveTab('stopwatch')}
        >
          Stopwatch
        </button>

        <button
          className={activeTab === 'timer' ? 'active' : ''}
          onClick={() => setActiveTab('timer')}
        >
          Timer
        </button>
      </header>

      {/* Conditional Rendering */}
      <div className="content">
        {activeTab === 'stopwatch' ? <Stopwatch /> : <Timer />}
      </div>
    </div>
  );
}

export default App;
