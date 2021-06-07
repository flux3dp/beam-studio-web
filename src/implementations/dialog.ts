import { DialogFilter, IDialog, OpenDialogProperties } from 'core-interfaces/IDialog';

export default {
  async showSaveDialog(
    title?: string,
    defaultPath?: string,
    filters?: DialogFilter[],
  ): Promise<string | null> {
    return Promise.resolve(null);
  },
  async showOpenDialog(options: {
    defaultPath?: string,
    filters?: DialogFilter[],
    properties?: OpenDialogProperties[],
  }): Promise<{
      canceled: boolean,
      filePaths: string[],
    }> {
    return Promise.resolve({
      canceled: false,
      filePaths: [],
    });
  },
} as IDialog;
