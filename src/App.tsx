import { AlertProgressContextProvider } from 'app/contexts/AlertProgressContext';
import { DialogContextProvider } from 'app/contexts/DialogContext';
import AlertsAndProgress from 'app/views/dialogs/AlertAndProgress';
import React from 'react';
import BeamboxComponent from './components/Beambox';
import DialogComponent from './components/Dialog';

const App = () => (
  <AlertProgressContextProvider>
    <DialogContextProvider>
      <BeamboxComponent />
      <DialogComponent />
      {/* <AlertsAndProgress /> */}
    </DialogContextProvider>
  </AlertProgressContextProvider>
);

export default App;
