import React from 'react';
import { Route } from 'react-router-dom';

import HousesTable from './HousesTable';
import HouseMembersTable from './HouseMembersTable';

export default function App() {
  return (
    <div id="app">
      <Route path="/houses" component={HousesTable} />
      <Route path="/house/:id/members" component={HouseMembersTable} />
    </div>
  );
}
