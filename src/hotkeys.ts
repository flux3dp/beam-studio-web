/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */
import hotkeys from 'hotkeys-js';

import eventEmitterFactory from 'helpers/eventEmitterFactory';

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
shortcuts.set('command+s', 'SAVE_SCENE');
shortcuts.set('shift+command+s', 'SAVE_AS');
shortcuts.set('command+e', 'EXPORT_FLUX_TASK');
shortcuts.set('command+z', 'UNDO');
shortcuts.set('shift+command+z', 'REDO');
shortcuts.set('command+x', 'CUT');
shortcuts.set('command+c', 'COPY');
shortcuts.set('command+v', 'PASTE');
shortcuts.set('shift+command+v', 'PASTE_IN_PLACE');
shortcuts.set('command+d', 'DUPLICATE');
shortcuts.set('command+g', 'GROUP');
shortcuts.set('shift+command+g', 'UNGROUP');
shortcuts.set('shift+command+x', 'CLEAR_SCENE');
shortcuts.set('command+n', 'ADD_NEW_MACHINE');
shortcuts.set('command+k', 'PREFERENCE');

for (const [shortcut, action] of shortcuts) {
  hotkeys(shortcut, (event) => {
    event.preventDefault();
    eventEmitter.emit('MENU_CLICK', null, {
      id: action,
    });
    return false;
  });
}
