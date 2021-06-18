/* eslint-disable import/order */
import React from 'react';

import AlertAndProgress from 'app/views/dialogs/AlertAndProgress';
import Dialog from 'app/views/dialogs/Dialog';
import { AlertProgressContextProvider } from 'app/contexts/AlertProgressContext';
import { DialogContextProvider } from 'app/contexts/DialogContext';

import BeamboxComponent from './components/Beambox';

const App = () => (
  <AlertProgressContextProvider>
    <DialogContextProvider>
      <BeamboxComponent />
      <Dialog />
      <AlertAndProgress />
    </DialogContextProvider>
  </AlertProgressContextProvider>
);

export default App;
