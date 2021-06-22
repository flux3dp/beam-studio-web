import AbstractMenu from 'helpers/menubar/AbstractMenu';

class Menu extends AbstractMenu {
  init(): void {
    this.initMenuEvents();
  }
}

export default new Menu();
