/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */
import hotkeys from 'hotkeys-js';

import eventEmitterFactory from 'helpers/eventEmitterFactory';
import BeamStudioHotKeys from 'app/constants/hotkeys';

const eventEmitter = eventEmitterFactory.createEventEmitter('top-bar-menu');

// to disable the default behavior and overwrite it
document.addEventListener('keydown', (event) => {
  if (event.metaKey && event.which === 187) {
    event.preventDefault();
    eventEmitter.emit('MENU_CLICK', null, {
      id: 'ZOOM_IN',
    });
  }

  if (event.metaKey && event.which === 189) {
    event.preventDefault();
    eventEmitter.emit('MENU_CLICK', null, {
      id: 'ZOOM_OUT',
    });
  }
});

const shortcuts = new Map();
for (const key of Object.keys(BeamStudioHotKeys)) {
  if (key in ['zoom_in', 'zoom_out']) continue;
  const { action, shortcut } = BeamStudioHotKeys[key];
  shortcuts.set(shortcut, action);
}

for (const [shortcut, action] of shortcuts) {
  hotkeys(shortcut, (event) => {
    event.preventDefault();
    eventEmitter.emit('MENU_CLICK', null, {
      id: action,
    });
    return false;
  });
}
