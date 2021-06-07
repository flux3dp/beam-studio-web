import { ICommunicator } from 'core-interfaces/ICommunicator';

export default {
  on(channel: string, listener: any): void {
  },
  once(channel: string, listener: any): void {
  },
  send(channel: string, ...args: any[]): void {
  },
  sendSync(channel: string, ...args: any[]) {
    return [];
  },
} as ICommunicator;
