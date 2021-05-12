import React from 'react'
import '../styles/App.css';
import AppVod from './AppVod';
import PageContent from './PageContent';
import {ThemeProvider} from '../contexts/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <PageContent>
      <AppVod/>
      </PageContent>
      </ThemeProvider>
    </div>
  );
}

export default App;
