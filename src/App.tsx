/* eslint-disable import/order */
import React from 'react';

import { AlertProgressContextProvider } from 'app/contexts/AlertProgressContext';
import { DialogContextProvider } from 'app/contexts/DialogContext';

import AlertsAndProgressComponent from './components/AlertsAndProgress';
import BeamboxComponent from './components/Beambox';
import DialogComponent from './components/Dialog';

const App = () => (
  <AlertProgressContextProvider>
    <DialogContextProvider>
      <BeamboxComponent />
      <DialogComponent />
      <AlertsAndProgressComponent />
    </DialogContextProvider>
  </AlertProgressContextProvider>
);

export default App;
