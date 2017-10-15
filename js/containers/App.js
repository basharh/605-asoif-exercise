import React from 'react';
import { Route } from 'react-router-dom';

import HousesTable from './HousesTable';

export default function App() {
  return (
    <div id="app">
      <Route path="/houses" component={HousesTable} />
    </div>
  );
}
