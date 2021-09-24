/* eslint-disable import/order */
import './assets/scss/main.scss';

import 'helpers/global-helper';

// need to import all required external modules before reading our own files
// otherwise, the major global variables will not become accessible
import './main';
import './hotkeys';

import storage from 'implementations/storage';
import router from 'app/router';
import { getInfo } from 'helpers/api/flux-id';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Looks like we are in development mode!');
  window.FLUX.dev = true;
}

const { hash } = window.location;
const onFinished = (data) => {
  const isReady = data;
  if (isReady === true && (hash === '' || hash.startsWith('#initialize'))) {
    window.location.hash = '#studio/beambox';
  } else if (isReady === false && !hash.startsWith('#initialize')) {
    window.location.hash = '#';
  }
  router(document.getElementById('root'));
};
onFinished(storage.get('printer-is-ready'));
