declare module '@google-cloud/vision' {
    export class ImageAnnotatorClient {
      constructor(options?: any);
      textDetection(image: string): Promise<any>;
    }
  }