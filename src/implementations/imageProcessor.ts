/// <reference lib="webworker" />
import { IImageProcessor } from 'interfaces/IImage';

// run this in global scope of window or worker. since window.self = window, we're ok
if (typeof WorkerGlobalScope !== 'undefined' && global instanceof WorkerGlobalScope) {
  importScripts('https://unpkg.com/jimp@0.16.1/browser/lib/jimp.js');
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const { Jimp } = global;

export default {
  MIME_PNG: Jimp.MIME_PNG,
  BLEND_OVERLAY: Jimp.BLEND_OVERLAY,
  AUTO: Jimp.AUTO,
  read(data: Buffer) {
    return Jimp.read(data);
  },
} as IImageProcessor;
