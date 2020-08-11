import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Header />
        <Search />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
